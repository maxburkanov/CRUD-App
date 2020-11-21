import React, {useState, useEffect} from "react";
import Pagination from "./Pagination"

import "./movies.css";

export default () => {
  const [api, setApi] = useState({
    restApi: 'https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=',
    data: [],
    loading: false,
    image: 'http://image.tmdb.org/t/p/w185'
  })
  useEffect(()=>{
    fetchData()
    console.log('changes')
  },[])

  const fetchData = (val) => {
    // console.log("callback value", api)

    const {restApi} = api; 
    const url = restApi+val;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setApi(  {...api, data:data} )
      
    } )
    .catch(err => console.log(err))
  }

  const handlePageChange = (value) => {
    setApi( {...api, page: value} )
    fetchData(value)
    
  }
  console.log("value after setting hooks  ", api.page)
  
  const {results, total_results, total_pages, page} = api.data
  const {loading, image} = api;
  // console.log("results",  api.data )
  return (
    <>
     {results && <Pagination total_pages={total_pages} handlePageChange={handlePageChange} />}
    <div className="movie-wrapper">
      {
      results && results.map(i=>{
        return (
          <div key={i.id} className="poster-wrapper">
            <img src={image + i.profile_path} />
            <div>{i.name}  </div>
            <div>{i.known_for.map(i=>i.title).join(' ')}  </div>
          </div>
        )
      })
      }</div>
      </>
  )
}