import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {useEffect} from 'react';
import {useState} from 'react';
import parse from "html-react-parser";

function Home() {
    return (
        <div>
            <h1>
                Welcome to the Movie Recommender!
            </h1>
            <h2>
                Do you love movies? Are you indecisive? This is the place for you!
            </h2>
            <br></br>
            <div id="parent">
                <div id="child">
                    Let us recommend a movie!
                        
                </div>

                <div id="child">
                    View our catalogue!

                </div>
            </div>
          
        </div>
    );
}




export default Home;