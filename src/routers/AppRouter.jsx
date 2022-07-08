import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer, Header } from '../components';
import { Home, Favorites, Stickers, Trending } from '../pages';

const AppRouter = () => {
    return (
        <>
            <Header />

            <Routes>

                <Route path='/' element={<Home />} />

                <Route path='/trending-gifs' element={<Trending />} />

                <Route path='/stickers' element={<Stickers />} />

                <Route path='/fav-gifs' element={<Favorites />} />

                <Route path='*' element={<Navigate to="/" />} />

            </Routes>

            <Footer />
        </>
    )
};

export default AppRouter;