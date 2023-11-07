import { create } from "zustand";
const StoreQuery = create((set) => ({
    gameQuery: {},
    add: (newGameQuery) => set((store) => ({ gameQuery: { ...newGameQuery } })),
}));
export default StoreQuery;
//# sourceMappingURL=store.js.map