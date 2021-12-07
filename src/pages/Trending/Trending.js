import './Trending.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(10);

    const getTrendingForTheDay = async () => {
        const urlTrending = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
        const trendingData = await axios.get(urlTrending);
        setcontent(trendingData.data.results);
        setNumberOfPages(trendingData.data.total_pages);
    }

    useEffect(() => {
        getTrendingForTheDay();
    }, [page]);

    return (
        <div>
            <span className='pageTitle'>Trending</span>
            <div className='trending'>
                {
                    content && content.map((eachItem) => (
                        <SingleContent
                            key={eachItem.id}
                            id={eachItem.id}
                            poster={eachItem.poster_path}
                            title={eachItem.title || eachItem.name}
                            date={eachItem.first_air_date || eachItem.release_date}
                            media_type={eachItem.media_type}
                            vote_average={eachItem.vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
        </div>
    )
}

export default Trending;