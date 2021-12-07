import './DetailedModal.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { img_500, posterNotFound, posterNotFoundLandscape } from '../../config/config';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    bgcolor: '#39445a',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const DetailedModal = ({ children, media_type, id }) => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchDetailedData = async () => {
        const urlToFetch = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
        const dataRecieved = await axios.get(urlToFetch);
        setContent(dataRecieved.data);
    }

    useEffect(() => {
        fetchDetailedData();
    }, [])

    return (
        <div>
            <div className='card' onClick={handleOpen}>{children}</div>
            <Modal
                aria-labelledby='transition-modal-title'
                aria-describedby='transition-modal-description'
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {
                            content && <div className='modal'>
                                <img
                                    className='modal__portrait'
                                    src={content.poster_path ? `${img_500}/${content.poster_path}` : posterNotFound}
                                    alt={content.name || content.title}
                                />
                                <img
                                    className='modal__landscape'
                                    src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : posterNotFoundLandscape}
                                    alt={content.name || content.title}
                                />
                                <div className='modal__about'>
                                    <span className='modal__title'>
                                        {content.name || content.title} (
                                        {(
                                            content.first_air_date ||
                                            content.release_date ||
                                            '-----'
                                        ).substring(0, 4)}
                                        )
                                    </span>
                                    {content.tagline && (<i className='tagline'>{content.tagline}</i>)}
                                    <span className='modal__description'>
                                        {content.overview}
                                    </span>
                                </div>
                            </div>
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default DetailedModal;