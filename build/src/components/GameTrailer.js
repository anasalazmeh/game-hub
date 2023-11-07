import UseTrailer from '../hooks/UseTrailer';
const GameTrailer = ({ id }) => {
    const { data, isLoading, error } = UseTrailer(id);
    if (isLoading)
        return null;
    if (error)
        throw error;
    const first = data?.results[0];
    if (!first)
        return null;
    return (first ?
        <video src={first.data[480]} controls poster={first.preview}/>
        : null);
};
export default GameTrailer;
//# sourceMappingURL=GameTrailer.js.map