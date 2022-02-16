import './App.css';
import './App';
import React, { useState , useEffect } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/Searchbox';

function App() {
  const [cats, setCats] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setCats(users)});
  },[]) 

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
        
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList cats={filteredcats} />
        </Scroll>
      </div>
    );
}

export default App;
