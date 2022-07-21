import { useEffect, useState } from "react";
import Title from "../components/Title";

const API_KEY = "711ff0b4ef9e9ee1377ed51511bd5560";

export default function Home(){
    const [moives, setMovies] = useState();
    
    useEffect(() => {
        (async() => {
            const {results} = await (
                await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )).json();
            setMovies(results);
            console.log(results);
        })();
    }, []);
    return (
        <div>
            <Title title="Home"/>
            {!moives && <h4>Loading...</h4>}
            {moives?.map((movie) => 
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div>)}
        </div>
    )
}