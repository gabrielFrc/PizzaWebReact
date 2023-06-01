import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import LadingPage from './screens/lading-page';

const RoutesComp = () => (
    <HashRouter>
        <Routes>
            {/* <Route path='*' element={<NotFoundSreen/>}></Route> */}
            <Route exact path='/' element={<LadingPage/>}></Route>
            <Route exact path='/home' element={<LadingPage/>}></Route>
        </Routes>
    </HashRouter>
)

export default RoutesComp;