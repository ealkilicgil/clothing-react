import React, { Component} from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: ShopData
        }
    }

    render() {
        const { collections } = this.state;
        return (<div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
            }
            </div>)
    }
}

export default ShopPage;