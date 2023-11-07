import UseGenres from './UseGenres';
const UseGenre = (id) => {
    const genre = UseGenres();
    if (id != null)
        return genre.data?.results.find(data => data.id == id);
};
export default UseGenre;
//# sourceMappingURL=Genre.js.map