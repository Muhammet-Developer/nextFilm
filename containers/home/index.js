import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import FeatureMovie from "@/components/featured-movie"
import Categories from '@/components/categories'
import MoviesSection from '@/components/movie-section'
const HomePage = ({selectedCategory}) => {
  // console.log(Movies)
  return (
    <div>
  
      <FeatureMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0,5)}/>
{    
 selectedCategory.movies.length > 0 && 
 (<MoviesSection title={Genres.genres.find((genre)=>`${genre.id}`=== selectedCategory.id).name} movies={selectedCategory.movies}/>)
}      <MoviesSection title="Popular fİLMS" movies={Movies.results.slice(1,7)}/>
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7,12)}/>
    </div>
  )
}

export default HomePage