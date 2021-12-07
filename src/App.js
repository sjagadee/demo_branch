import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav/MainNav';
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Trending from './pages/Trending/Trending';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className='app'>
                <Container>
                    <Routes>
                        <Route path='/' element={<Trending />} exact />
                        <Route path='/movies' element={<Movies />} />
                        <Route path='/series' element={<Series />} />
                    </Routes>
                </Container>
            </div>
            <SimpleBottomNavigation />
        </BrowserRouter>
    );
}

export default App;