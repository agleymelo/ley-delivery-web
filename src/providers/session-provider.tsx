"use client";

import { createContext, type ReactNode } from "react";

export const SessionContext = createContext({});

type SessionProviderProps = {
  children: ReactNode;
};

export function SessionProvider({ children }: SessionProviderProps) {
  return (
    <SessionContext.Provider value={{}}>{children}</SessionContext.Provider>
  );
}
