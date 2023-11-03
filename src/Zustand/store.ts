import { create } from "zustand"

interface GameQuery {
  genres?:number,
  parent_platforms?:number,
  ordering?:string,
  search?:string
}
interface GameGquerStore {
  gameQuery: GameQuery;
  add: (newGameQuery:GameQuery) => void;
} 
const StoreQuery = create<GameGquerStore>((set) => ({
  gameQuery: {},
  add: (newGameQuery) => set((store) => ({ gameQuery: { ...newGameQuery } })),
}));
export default StoreQuery;