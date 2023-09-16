import React,{useState} from 'react';
import Header from './Header';
import Notes from './Notes';
import Footer from './Footer';
import InputArea from './input';


function App() {
    const[notes,handleNotes]=useState([]);

    function handleAdd(newNote) {
        handleNotes((prevValue)=>{
            return[...prevValue, newNote];
        });
    }

    function handleDelete(id) {
        handleNotes((prevItem) => {
            return prevItem.filter((notes, index) => {
            return index !== id;
            });
            });
    }

    return (
        <div className="container">
            <Header />
            <InputArea
                onAdd={handleAdd}
            />
            
            {notes.map((newNotes,index)=>{
                return(  
                <Notes 
                key={index}
                id={index}
                title={newNotes.title}
                content={newNotes.detail}
                onDelete={handleDelete}
            />
               );
      })}
            <Footer />
        </div>
    );
}

export default App;