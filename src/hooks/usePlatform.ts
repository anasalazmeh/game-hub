import { Platform } from "./UseGame";
import UseData from "./uesData";

const usePlatform = () => UseData<Platform>("/platforms/lists/parents");
export default usePlatform;
