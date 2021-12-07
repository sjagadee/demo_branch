import './CustomPagination.css';
import { Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "white"
        }
    }
}));

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
    const handlePageChange = (page) => {
        console.log("pg", page);
        setPage(page);
        window.scroll(0, 0);
    }
    const classes = useStyles();
    return (
        <div className='main'>
            <Pagination
                classes={{ ul: classes.ul }}
                className='pagination'
                count={numberOfPages}
                variant='outlined'
                onClick={(page) => handlePageChange(page.target.textContent)}
            />
        </div>
    )
}

export default CustomPagination;