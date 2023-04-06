// import React ,{useState}from 'react';

// import './App.css'
// import { Login } from './Login';

// import { Register } from './Register';


// // ---------applicatinLogin-----------//

// function App(){
//  const [currentForm , setCurrentform] = useState('login')
// const toggleForm =(formName) =>{
//   setCurrentform(formName);
// }


//  return (
//  <div className ='App'> 
// {
//   currentForm ==='login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
// }

//  </div>
//  );
// }

// export default App























// const App = () => {

//   return  (
//   <div> 
//     <MyName/>
//     <h1 className = " myclassname">welcome to my work</h1> 
//     <p>Awesome</p>

//     <img src="" alt="" title=" "></img>

//   </div>
//   );
  
// };

// import React from "react";
// // import Resturant from "./component/Basics/Resturant";cd 
// // import UseState from "./component/Hooks/useState";
// // import UseEffect from "./component/Hooks/useEffect";
// import UseReducer from "./component/Hooks/useReducer";

// const App = () => {
//   return <UseReducer />;
// };

// export default App;


// const MyName =  ()=>{
//  return  <h1> Hi Shubhangi</h1>
// }
// // approach 1
// function App(){
//   return <div > hello world</div>
// }


// aproach2
// const App = ()=>{
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("hi",{},"Hello World")
//   );
// };
// export default App;

// ----fetch data 
import  React ,{ useEffect,useState } from 'react';
function App(){
  let [carName,setcarImage] =useState(null)

  useEffect(()=>{
    fetch("")
    .then(data=>setcarImage(data.massage))
  })

  return (
    <div className='App'>
      <ing src={carName} > Car </ing>

    </div>
  );
}
export default App;