import { Pagination } from '@mui/material'
import React from 'react'
import './CustomPagination.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    primary: {
        main: '#fff'
    }
});

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {

    const handlePageChange = (page) => {
        console.log("pg", page);
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div className='main'>
            <ThemeProvider theme={theme}>
                <Pagination
                    className='pagination'
                    count={numberOfPages}
                    onClick={(page) => handlePageChange(page.target.textContent)}
                    color='primary'
                />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
