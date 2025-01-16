"use client";

import { useEffect } from "react";

let AutoRefresh = ({ children }: { children: React.ReactNode }) => children;

if (process.env.NODE_ENV === "development") {
  AutoRefresh = ({ children }) => {
    useEffect(() => {
      const ws = new WebSocket("ws://localhost:3201");

      ws.onmessage = (event) => {
        console.log(event.data);
        if (event.data === "refresh") {
          window.location.reload();
        }
      };
      return () => {
        ws.close();
      };
    }, []);

    return children;
  };
}

export { AutoRefresh };
