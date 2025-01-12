import { useEffect, useRef, useState } from "react";
import GUI from "lil-gui";
import { useDebugParam } from "./useDebugParam";

type GuiControl = {
  min?: number;
  max?: number;
  step?: number;
};

type GuiControls<T extends Record<string, number>> = {
  [K in keyof T]?: GuiControl;
};

type GuiConstructorOptions = ConstructorParameters<typeof GUI>[0];

export const useGui = <T extends Record<string, number>>(
  initialState: T,
  controls: GuiControls<T> = {} as GuiControls<T>,
  options?: GuiConstructorOptions
) => {
  const guiRef = useRef<GUI | null>(null);
  const isDebugOn = useDebugParam();

  const initialStateRef = useRef(initialState);
  const controlsRef = useRef(controls);
  const [guiState, setGuiState] = useState(initialState);

  useEffect(() => {
    if (!isDebugOn) {
      return;
    }

    guiRef.current = new GUI({
      title: options?.title,
      width: options?.width,
    });

    const gui = guiRef.current;

    Object.entries(initialStateRef.current).forEach(([key]) => {
      const controller = gui.add(initialStateRef.current, key);

      if (controlsRef.current[key]) {
        const { min, max, step } = controlsRef.current[key];
        if (typeof min === "number") controller.min(min);
        if (typeof max === "number") controller.max(max);
        if (typeof step === "number") controller.step(step);
      }

      controller.onChange((value: number) => {
        setGuiState((prev: T) => ({ ...prev, [key]: value }));
      });
    });

    return () => {
      if (guiRef.current) {
        guiRef.current.destroy();
        guiRef.current = null;
      }
    };
  }, [isDebugOn, options?.title, options?.width]);

  return guiState;
};
