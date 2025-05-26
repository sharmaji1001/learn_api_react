import { useState } from 'react'
import './App.css'


function App() {
  const [setup,setSetup]=useState('');
  const [punchline,setpunchline]=useState('');

  const [count,setCount]=useState(0);

  const getJoke = async ()=>{
    try{
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const joke = await res.json();
      setCount(prev=>prev+1);
      setSetup(joke.setup);
      setpunchline('');
      setTimeout(()=>setpunchline(joke.punchline),3000);
    }catch (err){
      CONSOLE.LOG('COULD NOT FETCH THE JOKE', err);
      setSetup('OPPS,SOMETHING WENT WRONG.');
      setpunchline('');
    }
  }

  return (
    <>

      {/* <h1>First react api working</h1> */}
      <div className="card">
        
        <button onClick={getJoke}>{count===0 ? "Get a Joke right now, I mean right now,":"Next"}</button>
        {setup && <h1 style={{marginTop:'1rem', color:"#646cff"}}>{setup}</h1>}
        {punchline && (<h2 style={{marginTop:'.5rem',fontWeight:600}}>{punchline}</h2>)}  
        
      </div>
    </>
  )
}

export default App
