import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'




function App() {

  let [counter, chaiCounter] = useState(0)

  // let counter = 15

  const addValue = () =>{
  // console.log("value added", Math.random());
  if(counter < 20){
    //counter++
  chaiCounter(counter + 1)
 }
 else{
  console.log("Counter cannot go above 20")
 }
  //  console.log("Clicked", counter);
  }
  const removeValue = () =>{
  // console.log("value added", Math.random());
 if(counter>0){
  counter--
  chaiCounter(counter)
 }
 else{
  console.log("Counter cannot go below 0")
 }
  //  console.log("Clicked", counter);
}

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button  onClick = {addValue}>Add value: {counter}</button>
   
    <br />

    <button onClick = {removeValue} >Remove value: {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
