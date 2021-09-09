import MovieCard from "./comp/MovieCard";
import dummy from "./data";
import { useState } from "react";


function App() {
  const [title, setTitle] = useState(0)
  return (
    <div>
    <label>
    Name:
    <input onChange={event => setTitle(event.target.value)}/>
    </label>
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 p-4 gap-4'>

{ 
  dummy.filter(d => d.rating > title  ).map((datas) => (
          <MovieCard
            key={datas._id}
            title={datas.title}
            description={datas.description}
            posterURL={datas.posterURL}
            rating={datas.rating}
          />))}
        
            </div>
  </div>
  );
}

export default App;
