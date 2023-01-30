import React from 'react'
import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"
import FeatureMovie from "@/components/featured-movie"
import Categories from '@/components/categories'
const HomePage = () => {
  console.log(Movies)
  return (
    <div>
      <FeatureMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0,5)}/>
    </div>
  )
}

export default HomePage