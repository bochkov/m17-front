import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import React from 'react';
import 'moment/locale/ru';

import App from './components/App';
import Promo from './components/Promo';

import 'antd/dist/reset.css';
import './index.css';

const RApp = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgBase: 'white',
                    colorPrimary: 'darkred',
                    colorText: '#020304',
                    fontFamily: 'Oswald'
                }
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route index path='/promo' element={<Promo />} />
                    <Route path='*' element={<App />} />
                </Routes>
            </BrowserRouter>
        </ConfigProvider>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<RApp />);