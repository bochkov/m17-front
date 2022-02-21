import React from 'react';

class Tech extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            assets: [
                {
                    'url': '/static/assets/tech_rider.pdf',
                    'name': 'Технический райдер группы'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.assets.map(
                    (asset, key) =>
                        <a href={process.env.PUBLIC_URL + asset.url}
                            key={key}
                            target='_blank' rel='noreferrer'>
                            {asset.name}
                        </a>
                )}
            </div>
        )
    }
}

export default Tech;
