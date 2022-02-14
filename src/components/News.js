import React from 'react';
import moment from 'moment';

import API from './Api';
import Divide from './Divide';
import './News.css';

class Post extends React.Component {
    render() {
        return (
            <div className='post'>
                <h2 className='post__title'>{this.props.post.title}</h2>
                <p className='post__dt'>{moment(this.props.post.dt * 1000).from()}</p>
                <p className='post__text' dangerouslySetInnerHTML={{ __html: this.props.post.text }}></p>
            </div>
        )
    }
}

class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }
    componentDidMount() {
        API.get('/api/v1/news').then(resp => {
            const news = resp.data;
            this.setState({ news })
        });
    }
    render() {
        return (
            <div>
                {this.state.news.map(
                    (n, key) =>
                        <div key={n.id}>
                            <Post post={n} />
                            <Divide cur={key + 1} total={this.state.news.length} />
                        </div>
                )}
            </div>
        )
    }
}

export default News;
