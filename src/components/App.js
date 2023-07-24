import React from 'react';
import { Row, Col } from 'antd';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div>
            <Header />
            <Row>
                <Col xs={{span: 22, offset: 1 }}
                    sm={{ span: 16, offset: 4 }}
                    md={{ span: 16, offset: 4 }}
                    lg={{ span: 8, offset: 8 }}
                    xl={{ span: 8, offset: 8 }}>
                    <Content />
                    <hr className='fancy-line' />
                    <Footer />
                </Col>
            </Row>
            </div>
        )
    }
}

export default App;
