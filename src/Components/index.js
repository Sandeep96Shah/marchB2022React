import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Friends from './Friends';

class MainComponent extends React.Component{
    render (){
        return(
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/friends' element={<Friends />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default MainComponent;