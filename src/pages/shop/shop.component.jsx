import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionPreview from '../../components/collection-preview/collection-preview';

import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (<div className='shop-page'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>);
    }
}

export default ShopPage;