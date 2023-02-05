import React from 'react'
import {notFound} from "next/navigation"
import MovieContainer from '@/containers/movies'
import Movies from "@/mocks/movies.json"
async function delay(ms){
    return new Promise((resolve)=> setTimeout(resolve,ms))
}
async function MoviePage ({params,searchParams}) {
    // await delay(2000);
    const movieDetail = Movies.results.find((movie)=> movie.id.toString() === params.id);
    if(!movieDetail){
        notFound();
    }
    if(searchParams.error === "true"){
        throw new Error("error Message")
    }
    return (
    <MovieContainer movie={movieDetail}/>
  )
}

export default MoviePage