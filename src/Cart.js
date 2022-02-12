import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor () 
    {
        super();
        this.state = {
            products:[
                    {
                        price: 99,
                        title: 'Watch',
                        qty: 1,
                        img: '',
                        id:1
                    },
                    {
                        price: 999,
                        title: 'Mobile Phone',
                        qty: 10,
                        img: '',
                        id:2
                    },
                    {
                        price: 9,
                        title: 'Card',
                        qty: 105,
                        img: '',
                        id:3
                    },
                    {
                        price: 9999,
                        title: 'Laptop',
                        qty: 105,
                        img: '',
                        id:4
                    }
                        ]
                    }
    }
    handleIncreaseFunction= (product) => {
        console.log("products details",product);
        const { products }=this.state;
        const index = products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }
handleDecreaseFunction=(product)=>{
    console.log("decrease",product);
    const { products }=this.state;
    const index = products.indexOf(product);
    if(products[index].qty===0)
    return;
    products[index].qty-=1;
    this.setState({
        products:products
    })
}
  render () {
      const { products }=this.state;
    return (
      <div className="cart">
          {products.map((product)=>{
              return <CartItem 
              products={product} 
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseFunction}
              onDecreaseQuantity={this.handleDecreaseFunction}
              />
          })}
        
      </div>
    );
  }
}

export default Cart;