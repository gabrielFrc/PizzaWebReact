import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import LadingPage from './screens/lading-page';
import Menu from './screens/menu-page';

const RoutesComp = () => (
    <HashRouter>
        <Routes>
            <Route exact path='/' element={<LadingPage/>}></Route>
            <Route path='/home' element={<LadingPage/>}></Route>
            <Route path='/cart' element={null}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
        </Routes>
    </HashRouter>
)

export default RoutesComp;