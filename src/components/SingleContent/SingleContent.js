import React from 'react'
import './SingleContent.css'
import { img_300, posterNotFound } from '../../config/config'
import Badge from '@mui/material/Badge';

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
    return (
        <div className='card'>
            <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
            <img className='subTitle' src={poster ? `${img_300}/${poster}` : posterNotFound} alt={title} />
            <b className='title'> {title}</b>
            <span className='subTitle'>{media_type === 'tv' ? 'TV Series' : 'Movie'}
                <span className='subTitle'>{date}</span>
            </span>
        </div>
    )
}

export default SingleContent
