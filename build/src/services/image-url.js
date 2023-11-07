import on_image from '../assets/no-image-placeholder.webp';
const IamgeSize = (url) => {
    if (!url)
        return on_image;
    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default IamgeSize;
//# sourceMappingURL=image-url.js.map