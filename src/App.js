import React from "react";
import ParticleBG from "./ParticleBG";
import './App.css';
import { useState } from "react";
import song from './static/The-Mirror.mp3'

function App() {

  var interval; 
  const[h,seth] = useState(250);
  const[fs,setFS] = useState(35);
  const [thought, setThought] = useState("");
  const [tip,setTip] = useState("");
  const [time,settime] = useState(120);
  const [show,setshow] = useState(true);
  const [i,seti] = useState(0);
  
  function play1(){
    var audio = new Audio(song);
    audio.play();
  }

  const messages = ["",
                "Take a deep breath in....",
                "....and breathe out ",
                "Everything is okay",
                "Your life is okay",
                "Life is much grander than this thought",
                "The universe is over 93 billion light-years in distance",
                "Our galaxy is small",
                "Our sun is tiny",
                "The earth is minuscule",
                "Our cities are insignificant....",
                "....and you are microscopic",
                "This thought.... does not matter",
                "It can easily disappear",
                "and life will go on....",
                "See, it does"]


  const circleProps = {
    height: h,
    width: h,
    marginLeft: -h/2,
    marginRight: -h/2,
    fontSize: fs,
    opacity: h<=0.2?0:1
  }

  const handleClick = () =>{
    setThought(tip);
    hide_elements();
    play1();
    interval = setInterval(() => {
      run();
    }, 500);
  }

  var sec = time,ff = fs,he = h,show_val = show,p = i;
  const run = () => {
    sec--;
    p+=0.125;
    ff-=0.35;
    he-=2.2;
    if(sec<0){
      clearInterval(interval);
    }
    seth(he);
    settime(sec);
    setFS(ff);
    var o = Math.floor(p);
    seti(o);
    console.log(i);
  }

  const handleChange = (event)=>{
    setTip(event.target.value);
  }

  const hide_elements = () =>{
    show_val = !show_val;
    setshow(show_val);
  }

  return (
    <div>
    <h1 className="heading" style={{ opacity: show ? 1 : 0, transition: "all 0.75s ease-in" }} >Put a stressful thought in the Star ...</h1>
    <h1 className="heading" style={{ left:"50%" , opacity: show ? 0 : 1, transition: "all 0.75s ease-in" }} >{messages[i]}</h1>
    <div className="circle" style={circleProps } >{thought}</div>
    <input onChange={handleChange} style={{ opacity: show ? 1 : 0, transition: "all 1.5s ease-in" }}  placeholder="What's Bothering you?" size="35" className="input-text"></input>
      <ParticleBG />
      <button className="btn" style={{  opacity: show ? 1 : 0, transition: "all 0.5s ease-in" }}  onClick={handleClick} >Let's Go</button>
      <p className="ftr" style={{  opacity: show ? 1 : 0, transition: "all 0.5s ease-in" }} >Made with ❤️ by Atharva Kharabe</p>
    </div>
  );
}

export default App;
