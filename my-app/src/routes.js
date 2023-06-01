import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LadingPage from './screens/lading-page';

const RoutesComp = () => (
    <BrowserRouter>
        <Routes>
            {/* <Route path='*' element={<NotFoundSreen/>}></Route> */}
            <Route exact path='/' element={<LadingPage/>}></Route>
            <Route exact path='/home' element={<LadingPage/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default RoutesComp;