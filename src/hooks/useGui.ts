import { useEffect, useRef, useState } from "react";
import GUI from "lil-gui";
import { useDebugParam } from "./useDebugParam";

type GuiControl = {
  min?: number;
  max?: number;
  step?: number;
};

type GuiControls = Record<string, GuiControl>;

type GuiState = Record<string, number>;

type GuiConstructorOptions = ConstructorParameters<typeof GUI>[0];

export const useGui = (
  initialState: GuiState,
  controls: GuiControls = {},
  options?: GuiConstructorOptions
) => {
  const guiRef = useRef<GUI | null>(null);
  const isDebugOn = useDebugParam();

  const initialStateRef = useRef(initialState);
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

      if (controls[key]) {
        const { min, max, step } = controls[key];
        if (typeof min === "number") controller.min(min);
        if (typeof max === "number") controller.max(max);
        if (typeof step === "number") controller.step(step);
      }

      controller.onChange((value: number) => {
        setGuiState((prev: GuiState) => ({ ...prev, [key]: value }));
      });
    });

    return () => {
      if (guiRef.current) {
        guiRef.current.destroy();
        guiRef.current = null;
      }
    };
  }, [isDebugOn, controls, options?.title, options?.width]);

  return guiState;
};
