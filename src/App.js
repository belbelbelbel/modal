import { useState } from 'react';
import './App.css';
import Modal from './Components/Modal';

function App() {
  const[isopen,setisopen] = useState(false)
  return (
    <div className="App">
      <h1>click,on the moda to open the button</h1>
      <button className='openModalBtn' onClick={()=>setisopen(true)}> Open button</button>
    {isopen && <Modal open={setisopen}/>}
    </div>
  );
}

export default App;
