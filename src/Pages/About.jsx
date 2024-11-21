import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function About() {
const [horror_movies, setHorror_Movie] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/horror_movies')
    .then((response) => response.json())
    .then((data) => setHorror_Movie(data))
  }, []) 
  return (
    <div>

      <div className="row">
                {horror_movies.map((horror_movie) => (
                    <Link to={`/horror_movie/${horror_movie.id}`} key={horror_movie.id} className="col-md-3 ">
                        <div className="card-body">
                            
                            <img src={horror_movie.image} className="card-img-top" alt={horror_movie.title}/>
                            <div className="card-header">
                            </div>
                        </div>
                    </Link>

))}
                
            </div>
    </div>
  )
}

export default About
