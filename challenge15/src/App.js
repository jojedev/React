import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import  MenuHead  from './menu';
import Table from './Table';


function App() {
  const url = 'https://jsonplaceholder.typicode.com';
  const [API_URL, setChangeUrl] = useState(url + '/users');
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchItems = async() => {
      try{
        const response = await fetch(API_URL)
        const listItems = await response.json()
        setItems(listItems)
      } catch (err) {
        console.log('error')
      }
    }
    (async () => fetchItems())()
  },[API_URL])

  const setUrl = (urlEndpoint) => {
    setChangeUrl(url + urlEndpoint)
  }

  return (
    <div className="App">
      <MenuHead
        setUrl={setUrl}
      />
      <Table
        items={items}
      />
    </div>
  );
}

export default App;
