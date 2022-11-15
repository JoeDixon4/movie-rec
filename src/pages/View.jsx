import '../index.css';
import {useEffect} from 'react';
import {useState} from 'react';
import parse from "html-react-parser";

function View(){
    return(
    <div>
        <h1>View our catalogue!</h1>
        <div>
                {FetchAllFilms()};
            </div>
    </div>
    );
}
function FetchAllFilms(){
    const filmString = DrawFilms("http://localhost:8080/home/allFilms");
    return(
        <div>
            {parse(filmString)}
        </div>
    )
}

function DrawFilms(url){
    const films = GetAPI(url);
    let returnString = "";
    for(let i = 0; i < films.Data.length; i++ ){
        returnString += 
        `
        <div id="film">
            <div id = "title">
                Film: ${films.Data.at(i).filmTitle} 
            </div>
            <div id ="description">
                Description: ${films.Data.at(i).description}
            </div>
        </div>
        <br>`;
    }
    return(returnString);
}

function GetAPI(url){
    const[Data, setData] = useState("");
    let returnString = "";
    const getAPI = async () =>{
        const result = await fetch(url); 
        const response = await result.json();
        setData(response);
    } 
    useEffect(() => {
        getAPI();
    },[])
    return {Data};
}


export default View;