import React from 'react';

class CartDetail extends React.Component {

    render() {
        const style = {
            float: 'right',
            fontSize: '17px',
            fontWeight: 700,
            color: 'black',
            marginRight: '18px'
        };
        return (
            <div style={style} className="search App">
                <p>{`Total Items in a cart ${this.props.cartItems}`}</p>
            </div>
        );
    }
}

export default CartDetail;
