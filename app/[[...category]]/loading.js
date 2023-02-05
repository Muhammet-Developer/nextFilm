import React from 'react'
import CategoriesLoading from "@/components/categories/loading"
import FeatureMovieLoading from "@/components/featured-movie/loading"
import MoviesSectionLoading from "@/components/movie-section/loading"
const Loading = () => {
  return (
    <div>
    <CategoriesLoading/>
    <FeatureMovieLoading/>
    <MoviesSectionLoading/>
    </div>
  )
}

export default Loading