import React from 'react';

class CartItem extends React.Component {


  // testing () {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then(() => {
  //     // setState acts like a synchronus call
  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log('state', this.state);
  //   });
  // }
  // increaseQuantity = () => {
  //   // this.state.qty += 1;
  //   // console.log('this', this.state);
  //   // setState form 1
  //   // this.setState({
  //   //   qty: this.state.qty + 1
  //   // }, () => {});

  //   // setState form 2 - if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty + 1
  //     }
  //   });
  // }

  // decreaseQuantity = () => {
  //   const { qty } = this.state;

  //   if (qty === 0) {
  //     return;
  //   }
  //   // setState form 2 - if prevState required use this
  //   this.setState((prevState) => {
  //     return {
  //       qty: prevState.qty - 1
  //     }
  //   });
  // }
  render () {
    console.log('render');
    const { price, title, qty } = this.props.products;
    const { products,onIncreaseQuantity,onDecreaseQuantity,onDeleteQuantity }= this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={()=>onIncreaseQuantity(products)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={()=>onDecreaseQuantity(products)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/2087/2087825.png"
              onClick={()=>onDeleteQuantity(products.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;