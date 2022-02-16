import './App.css';
import './App';
import React, { useState , useEffect } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/Searchbox';

function App() {
  const [cats, setCats] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0) // for demo purposes

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setCats(users)});
    // console.log(count)
  },[]) // if you add count, only run if count changes.

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredcats = cats.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return !cats.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>cats</h1>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList cats={filteredcats} />
        </Scroll>
      </div>
    );
}

export default App;
