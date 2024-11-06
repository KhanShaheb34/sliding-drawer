import { atom } from "jotai";

export type DrawerPage = "Start" | "Cart" | "Favorites" | "Orders";

export const isDrawerOpenAtom = atom(false);
export const selectedPageAtom = atom<DrawerPage>("Start");
