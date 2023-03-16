import type { Setter } from "../types/zustand";
import { create } from "zustand";

export type RequestMethod =
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE"
  | "OPTIONS"
  | "HEAD";

type RequestStore = {
  requestMethod: RequestMethod;
  setRequestMethod: Setter<RequestMethod>;
  requestUri: string;
  setRequestUri: Setter<string>;
};

export const useRequestStore = create<RequestStore>()((set) => ({
  requestMethod: "GET",
  setRequestMethod: (method: RequestMethod) => set({ requestMethod: method }),
  setRequestUri: (uri) => set({ requestUri: uri }),
  requestUri: "",
}));
