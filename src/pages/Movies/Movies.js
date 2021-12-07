import './Movies.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(10);

    const getMovies = async () => {
        const urlForMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
        const moviesData = await axios.get(urlForMovies);
        setcontent(moviesData.data.results);
        setNumberOfPages(moviesData.data.total_pages);
    }

    useEffect(() => {
        getMovies();
    }, [page]);

    return (
        <div>
            <span className='pageTitle'>Movies</span>
            <div className='movie'>
                {
                    content && content.map((eachItem) => (
                        <SingleContent
                            key={eachItem.id}
                            id={eachItem.id}
                            poster={eachItem.poster_path}
                            title={eachItem.title}
                            date={eachItem.first_air_date || eachItem.release_date}
                            media_type='movie'
                            vote_average={eachItem.vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
        </div>
    )
}

export default Movies;