import { useQueryState } from "nuqs";
import { useEffect } from "react";

export const useDebugParam = () => {
  const [debug, setDebug] = useQueryState("debug", {
    parse: (value) => value === "true",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "d" && e.metaKey) {
        setDebug(debug ? null : true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [debug, setDebug]);

  return { debug, setDebug };
};
