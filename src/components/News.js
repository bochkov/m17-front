'use client'

import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import Divide from './Divide';

import './News.css';

function Post({post}) {
    return (
        <div className='post'>
            <h2 className='post__title'>{post.title}</h2>
            <p className='post__dt'>{moment(post.dt).from()}</p>
            <p className='post__text' dangerouslySetInnerHTML={{ __html: post.text }}></p>
        </div>
    )
}

export default function News() {
    const [news, setNews] = React.useState([])

    React.useEffect(() => {
        fetch('/api/v1/news')
            .then(resp => resp.json())
            .then(resp => setNews(resp))
    }, [])

    return (
        <div>
            {news.map(
                (n, key) =>
                    <div key={n.id}>
                        <Post post={n} />
                        <Divide cur={key + 1} total={news.length} />
                    </div>
            )}
        </div>
    )
}
