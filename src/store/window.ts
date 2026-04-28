import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useWindowStore = create(
  immer((set) => ({
    window: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowkey, data = null) =>set((state)=>{
        const win = state.window[windowkey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex ++;
    }),
    closeWindow: (windowkey) =>set((state)=>{
        const win = state.window[windowkey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
    }),
    focusWindow: (windowkey) =>set((state)=>{
        const win = state.window[windowkey];
        win.zIndex = state.nextZIndex++;
    })
  })),
);

export default useWindowStore;
