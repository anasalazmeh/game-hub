import UseGenres from '../hooks/UseGenres'


const GanresList = () => {
   const{data}= UseGenres()
  return (
    <ul>
          {data?.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  )
}

export default GanresList