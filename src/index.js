import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'moment/locale/ru';

import App from './components/App';
import Promo from './components/Promo';

import 'antd/dist/reset.css';
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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(app);
