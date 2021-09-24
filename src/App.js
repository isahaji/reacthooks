import MovieCard from "./comp/MovieCard";
import dummy from "./data";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Moviepage from "./comp/Moviepage";

function App() {

  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

                 


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/:title/:description/:posterURL/:rating"><Moviepage /></Route>
        </Switch>
      </div>
    </Router>




  );
}

function Home() {
  const [title, setTitle] = useState(0)
  return(
    <div className='bg-gray-300 '> 
      <header className='bg-yellow-400 text-white p-2 text-center flex justify-between'  >
     <div className="p-2 ">
    
     <TextField className='text-white' id="filled-basic" label="Rating" variant="outlined" onChange={event => setTitle(event.target.value)} />

 </div>
     <div className="p-2">
     <TextField className='text-white' id="filled-basic" label="Name" variant="outlined" onChange={event => setTitle(event.target.value)} />
     </div>
     </header>


     <div className='grid lg:grid-cols-3 sm:grid-cols-1 p-4 gap-4'>

 { 
   dummy.filter(d => d.rating >= title || d.title === title ).map((datas) => (
  

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

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
