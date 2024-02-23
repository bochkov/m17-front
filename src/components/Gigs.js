'use client'

import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import 'moment/locale/ru';

import Divide from './Divide';

import './Gigs.css';

function Gig({ gig }) {

    const logoOf = (place) => {
        return `/static/img/place/${place.slug}.png`;
    }

    const needInvert = (place) => {
        return place["inverted-logo"] ? 'invert' : '';
    }

    return (
        <div className='gig'>
            <span className='gig__dt'>
                {moment(gig.date).format("DD MMMM YYYY, dddd")}<br />
                {moment(gig.date).format("HH:mm")}
            </span>
            <p />
            {gig.desc !== "" &&
                <span>
                    {gig.desc}
                </span>
            }
            {gig.url !== "" &&
                <span>
                    <br />
                    <a target='_blank' rel='noreferrer' href={gig.url}>
                        {gig.url}
                    </a>
                </span>
            }
            <div className='gig_place'>
                {gig.place.slug !== 'empty' && gig.place.link !== '' &&
                    <a href={gig.place.link} target="_blank" rel='noreferrer'>
                        <Image className={"gig__place__logo " + needInvert(gig.place)}
                            src={logoOf(gig.place)} width={0} height={0} sizes="100vw"
                            alt='' />
                    </a>
                }
                <span className='gig__place__address'>
                    <br />
                    {gig.place.name}
                    <br />
                    {gig.place.address}
                </span>
            </div>
        </div>
    )
}

export default function Gigs() {
    const [gigs, setGigs] = React.useState([])

    React.useEffect(() => {
        fetch('/api/v1/gigs')
            .then(resp => resp.json())
            .then(resp => setGigs(resp))
    }, [])

    return (
        <div>
            {gigs.length === 0 ?
                <h3>Ближайших концертов пока не предвидится</h3> :
                <div>
                    {gigs.map(
                        (gig, key) =>
                            <div key={gig.id}>
                                <Gig gig={gig} />
                                <Divide cur={key + 1} total={gigs.length} />
                            </div>
                    )}
                </div>
            }
        </div>
    )
}
