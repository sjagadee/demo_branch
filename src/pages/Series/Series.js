import './Series.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/CustomPagination/CustomPagination';

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(10);

    const getTvSeries = async () => {
        const urlForTvSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
        const tvSeriesData = await axios.get(urlForTvSeries);
        setcontent(tvSeriesData.data.results);
        setNumberOfPages(tvSeriesData.data.total_pages);
    }

    useEffect(() => {
        getTvSeries();
    }, [page]);

    return (
        <div>
            <span className='pageTitle'>TV Series</span>
            <div className='series'>
                {
                    content && content.map((eachItem) => (
                        <SingleContent
                            key={eachItem.id}
                            id={eachItem.id}
                            poster={eachItem.poster_path}
                            title={eachItem.title || eachItem.name}
                            date={eachItem.first_air_date || eachItem.release_date}
                            media_type='tv'
                            vote_average={eachItem.vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
        </div>
    )
}

export default Series;