import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type WindowConfig = typeof WINDOW_CONFIG;
type WindowKey = keyof WindowConfig;
type WindowData = WindowConfig[WindowKey]["data"];

type WindowStore = {
  window: WindowConfig;
  nextZIndex: number;
  openWindow: (windowKey: WindowKey, data?: WindowData | null) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
};

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    window: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.window[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.window[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.window[windowKey];
        win.zIndex = state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;
