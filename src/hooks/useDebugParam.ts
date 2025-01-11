import { useQueryState } from "nuqs";

export const useDebugParam = () => {
  const [debug] = useQueryState("debug", {
    parse: (value) => value === "true",
  });
  return debug === true;
};
