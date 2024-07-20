import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState , createContext} from 'react';


// style
import './Reset.css';


// components
// import Nav from './Nav';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import Contest from './Contest';


export const AppContext = createContext();

function App() {

  const [state, setState] = useState(false); 
  const [data, setData] = useState(1);

  const isLogin = () => {
    setState(false);
    // setState(true);
  };

  const updateData = (newData) => {
    setData(newData);
  };

  window.onload = () => {
    isLogin();
  };

  // console.log(state);

  return (
    <AppContext.Provider value={{ state, data, updateData}}>
      <BrowserRouter>
        <Nav state={state}/>
        <Routes>
          <Route path="/" element={<h1>home</h1>} /> {/* home => welcome page */}
          <Route path="/login" element={<Login/>} /> {/* login */}
          <Route path="/register" element={<Register/>} /> {/* register */}
          {/* <Route path="/contests" element={<Login/>} /> */} {/* contests in future */}
          <Route path="/contest/:id" element={<Contest/>} /> {/* counter or problems according to the time */}
          <Route path="/contest/:id/problems" element={<h1>hi1</h1>} /> {/* problems */}
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>  
  );
}

export default App;
