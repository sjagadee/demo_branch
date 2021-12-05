import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleContent from '../../components/SingleContent/SingleContent';
import './Trending.css';

const Trending = () => {

    const [content, setcontent] = useState([]);

    const getTrendingForTheDay = async () => {

        const urlTrending = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`;
        const trendingData = await axios.get(urlTrending);

        setcontent(trendingData.data.results);
    }

    useEffect(() => {
        getTrendingForTheDay();
    }, [])

    return (
        <div>
            <span className="pageTitle">Trending</span>
            <div className="trending">
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

        </div>
    )
}

export default Trending
