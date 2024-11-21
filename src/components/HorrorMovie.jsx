import React, { useState, useEffect } from 'react';  // Import hooks
import { useParams } from 'react-router-dom';

function HorrorMovie() {
    const [horror_movie, setHorror_Movie] = useState({});
    const { id } = useParams();  // Extract id from URL params

    // Fetch movie data when the component mounts or when `id` changes
    useEffect(() => {
        fetch(`http://localhost:3000/horror_movies/${id}`)
            .then((res) => res.json())
            .then((data) => setHorror_Movie(data))
            .catch((error) => console.error('Error fetching data:', error));  // Handle any fetch errors
    }, [id]);  // Re-run effect if `id` changes

    // If the data is not loaded yet, show a loading message
    // if (!horror_movie.title) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <img src={horror_movie.image} alt={horror_movie.title} />
            <div className="card-body">
                <h3 className="p-2 g-col-6">{horror_movie.title}</h3>
                <h6 className="card-title">{horror_movie.description}</h6>
                <h5 className="card-title">{horror_movie.director}</h5>
                <h6 className="card-subtitle mb-2">Rating: {horror_movie.rating}</h6>
                
            </div>
            <button>
                    <a href={horror_movie.videoUrl} className="btn btn-primary" >
                        Watch Now
                    </a>
                </button>
        </div>
    );
}

export default HorrorMovie;
