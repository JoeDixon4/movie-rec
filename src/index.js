import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom';

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Recommend from "./pages/Recommend";
import View from "./pages/View";
import NoPage from "./pages/NoPage";
import Navbar from './Navbar';

function SayHello(){
    alert('You clicked me!')
}
function Button() {
    return(
        <button onClick={SayHello}>Don't Click Me!</button>
    );
}


export default function Nav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Recommend" element={<Recommend/>} />
                    <Route path="View" element={<View/>} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
  }









ReactDOM.render(<div> <Nav/></div>, document.getElementById("root"))