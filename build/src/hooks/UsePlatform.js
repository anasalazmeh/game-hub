import UsePlatforms from './UsePlatforms';
const usePlatform = (id) => {
    const Platform = UsePlatforms();
    return Platform.data?.results.find(data => data.id == id);
};
export default usePlatform;
//# sourceMappingURL=UsePlatform.js.map