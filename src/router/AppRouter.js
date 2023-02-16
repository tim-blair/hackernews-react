import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} exact={true} />
                    <Route element={<PageNotFound />} />
                    <Route path="/:type" element={<ShowStories />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
