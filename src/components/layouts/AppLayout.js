'use client'

import { Row, Col } from 'antd'

import Header from '@/components/Header'
import MenuBar from '@/components/MenuBar'
import Footer from '@/components/Footer'

export default function AppLayout({ children }) {
    return (
        <>
            <Header />
            <Row>
                <Col xs={{span: 22, offset: 1 }}
                     sm={{ span: 16, offset: 4 }}
                     md={{ span: 16, offset: 4 }}
                     lg={{ span: 8, offset: 8 }}
                     xl={{ span: 8, offset: 8 }}>
                    <MenuBar />
                    {children}
                    <hr className='fancy-line' />
                    <Footer />
                </Col>
            </Row>
        </>
    )
}