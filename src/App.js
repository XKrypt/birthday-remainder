import logo from './logo.svg';
import './App.css';
import { List } from './list';
import  data  from './data';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);
  return (
   <main>
     <section className='container'>
       <h3>
           {people.length} aniversários hoje
       </h3>

       <List people={people}/>

       <button onClick={() => setPeople([])}>
         Limpar
       </button>
     </section>
   </main>
  );
}

export default App;
