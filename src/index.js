import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'moment/locale/ru';

import App from './components/App';
import Promo from './components/Promo';

import 'antd/dist/antd.variable.min.css';
import './index.css';

ConfigProvider.config({
    theme: {
        primaryColor: 'darkred',
        bodyBackground: '#020304',
        textColor: 'white'
    },
});

const app = (
    <BrowserRouter>
        <Routes>
            <Route index path='/promo' element={<Promo />} />
            <Route path='*' element={<App />} />
        </Routes>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
