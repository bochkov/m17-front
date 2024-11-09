import React from 'react';

export default function Tech() {
    const assets = [
        {
            'id': 1,
            'url': '/static/assets/tech_rider.pdf',
            'name': 'Технический райдер группы'
        }
    ]

    return (
        <div>
            {assets.map(
                (asset) =>
                    <a href={asset.url}
                        key={asset.id}
                        target='_blank' rel='noreferrer'>
                        {asset.name}
                    </a>
            )}
        </div>
    )
}
