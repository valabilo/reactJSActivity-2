import './App.css';
import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';

function App() {

  //const db = JSON.parse(localStorage.getItem('itemsList'));
  const db = [ {
    id: 1,
    checked:false,
    taskName: 'Study and review Javascript DOM',
    remarks: 'Very Easy'
    },
    {
    id: 2,
    checked:false,
    taskName: 'Study react router',
    remarks: 'A bit challenging but fun'
    },
    {
    id: 3,
    checked:false,
    taskName: 'Disect and Javascript Data Structure and Algorithm',
    remarks: 'It was challenging at first'
    } 
  
]

  const [items, setItems] = useState(db);

 
  const [newtaskName, setNewItem] = useState('');



  const handleCheck = (id) =>{
    console.log('id: ' + id);
    const listItems = items.map( (item) => item.id === id ? { ...item, checked: !item.checked } : item );
    setItems(listItems);
     }

  const handleDelete = (id) =>{
    console.log('delete: '+ id);
    const listItems = items.filter( (item)=> item.id !== id );
    setItems(listItems);
    localStorage.setItem('itemsList', JSON.stringify(listItems))
  }

  const addItem = (itemfromTextField)=>{
    const idx = (items.length)? items[items.length-1].id + 1 : 1;
    const myNewObj = { id:idx, checked:false, taskName:itemfromTextField};
    const listItems = [...items, myNewObj];
    setItems(listItems);

    localStorage.setItem('itemsList', JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Form Submitted');
    console.log(newtaskName);
    addItem(newtaskName)
    setNewItem('');
  }

 
  return (
    <div className="App container-fluid">
       <Header title="My TO DO List" /> 
       <AddItem
        handleSubmit = {handleSubmit}
        newItem = {newtaskName}
        setNewItem = {setNewItem}
       />

       <Content 
         items = {items}
         handleCheck = {handleCheck}
         handleDelete = {handleDelete}
       />

       <Footer
       numOfItems = {items.length}
       />

    </div>
  );
}

export default App;
