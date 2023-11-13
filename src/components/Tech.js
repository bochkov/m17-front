import React from 'react';

export default function Tech() {
    const assets = [
        {
            'url': '/static/assets/tech_rider.pdf',
            'name': 'Технический райдер группы'
        }
    ]

    return (
        <div>
            {assets.map(
                (asset, key) =>
                    <a href={asset.url}
                        key={key}
                        target='_blank' rel='noreferrer'>
                        {asset.name}
                    </a>
            )}
        </div>
    )
}
