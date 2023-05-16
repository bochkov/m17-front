import React from 'react';
import API from './Api';
import Divide from './Divide';
import './Gigs.css';
import moment from 'moment';

class Gig extends React.Component {
    logoOf(place) {
        return '/static/img/place/' + place.slug + '.png';
    }
    needInvert(place) {
        return place["inverted-logo"] ? 'invert' : '';
    }
    render() {
        return (
            <div className='gig'>
                <span className='gig__dt'>
                    {moment(this.props.gig.date * 1000).format("DD MMMM YYYY, dddd")}<br />
                    {moment(this.props.gig.date * 1000).format("HH:mm")}
                </span>
                <p />
                {this.props.gig.desc !== "" &&
                    <span>
                        {this.props.gig.desc}
                    </span>
                }
                {this.props.gig.url !== "" &&
                    <span>
                        <br />
                        <a target='_blank' rel='noreferrer' href={this.props.gig.url}>
                            {this.props.gig.url}
                        </a>
                    </span>
                }
                <div className='gig_place'>
                    {this.props.gig.place.slug !== 'empty' && this.props.gig.place.link !== '' &&
                        <a href={this.props.gig.place.link} target="_blank" rel='noreferrer'>
                            <img className={"gig__place__logo " + this.needInvert(this.props.gig.place)}
                                src={process.env.PUBLIC_URL + this.logoOf(this.props.gig.place)}
                                alt='' />
                        </a>
                    }
                    <span className='gig__place__address'>
                        <br />
                        {this.props.gig.place.name}
                        <br />
                        {this.props.gig.place.address}
                    </span>
                </div>
            </div>
        )
    }
}

class Gigs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gigs: []
        }
    }
    componentDidMount() {
        API.get('/api/v1/gigs')
            .then(res => {
                const gigs = res.data;
                this.setState({ gigs })
            });
    }
    render() {
        return (
            <div>
                {this.state.gigs.length === 0 ?
                    <div>
                        <h3>Ближайших концертов пока не предвидится</h3>
                    </div> :
                    <div>
                        {this.state.gigs.map(
                            (gig, key) =>
                                <div key={gig.id}>
                                    <Gig gig={gig} />
                                    <Divide cur={key + 1} total={this.state.gigs.length} />
                                </div>
                        )}
                    </div>
                }
            </div>
        )
    }
}

export default Gigs;
