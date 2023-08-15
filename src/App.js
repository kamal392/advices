import { useEffect, useState } from "react";
import Message from "./Message";

function App() {
  // Whenever we need to change something in UI we change the state . 
  // To display anything in UI
  const [advice,setAdvice] = useState("");
   const[count,setCount]=useState(0)

   async function getAdvice(){
      const resp = await fetch("https://api.adviceslip.com/advice");
      const data = await resp.json();
      // console.log(data)
      // using setAdvice method to update the advice
      setAdvice(data.slip.advice);
      // using setCount to update the time
      setCount((c)=>c+1)

  }

  // we are using useEffect() to show one piece of advice every time we load the page.
  useEffect(function(){
    getAdvice();
  },[])
  
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  )
}

export default App;
