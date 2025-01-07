import { useEffect, useRef } from "react";
import GUI from "lil-gui";

type GUIValue = number | string | boolean | object;

interface GUIControllerProps {
  settings: Record<string, GUIValue>;
  onChange?: (property: string, value: GUIValue) => void;
  title?: string;
  width?: number;
  controls?: Record<string, { min?: number; max?: number; step?: number }>;
}

export const GUIController: React.FC<GUIControllerProps> = ({
  settings,
  onChange,
  title = "Controls",
  width = 300,
  controls = {},
}) => {
  const guiRef = useRef<GUI | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (guiRef.current) {
      guiRef.current.destroy();
      guiRef.current = null;
    }

    // Create new GUI instance
    if (containerRef.current) {
      guiRef.current = new GUI({
        container: containerRef.current,
        title,
        width,
      });

      Object.entries(settings).forEach(([key]) => {
        const controller = guiRef.current!.add(settings, key);

        if (controls[key]) {
          const { min, max, step } = controls[key];
          if (typeof min === "number") controller.min(min);
          if (typeof max === "number") controller.max(max);
          if (typeof step === "number") controller.step(step);
        }

        if (onChange) {
          controller.onChange((newValue: GUIValue) => onChange(key, newValue));
        }
      });
    }

    return () => {
      if (guiRef.current) {
        guiRef.current.destroy();
        guiRef.current = null;
      }
    };
  }, [settings, onChange, title, width, controls]);

  return (
    <div
      ref={containerRef}
      style={{ position: "fixed", top: "0", right: "0", zIndex: 1000 }}
    />
  );
};
