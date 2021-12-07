import './SingleContent.css'
import { img_300, posterNotFound } from '../../config/config'
import Badge from '@mui/material/Badge';
import DetailedModal from '../DetailedModal/DetailedModal';

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average
}) => {
    return (
        <DetailedModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'} />
            <img className='subTitle' src={poster ? `${img_300}/${poster}` : posterNotFound} alt={title} />
            <b className='title'> {title}</b>
            <span className='subTitle'>{media_type === 'tv' ? 'TV Series' : 'Movie'}
                <span className='subTitle'>{date}</span>
            </span>
        </DetailedModal>
    )
}

export default SingleContent;