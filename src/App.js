import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

class App extends React.Component {
  constructor () 
    {
        super();
        this.state = {
            products:[],
            loading:true
                    }
        this.db=firebase.firestore();
    }
    componentDidMount(){
      this.db
          .collection('products')
          .onSnapshot((snapshot)=>{
            console.log(snapshot);
            // snapshot.docs.map((doc)=>{
            //   console.log(doc.data());
            // })

            const products=snapshot.docs.map((doc)=>{
              const data=doc.data();
              data['id']=doc.id;
              return data;
            })
            this.setState({
              products:products,
              loading:false
            })
          })
    }
    handleIncreaseFunction= (product) => {
        console.log("products details",product);
        const { products }=this.state;
        const index = products.indexOf(product);

        const docRef=this.db.collection('products').doc(products[index].id);
        docRef.update({
          qty:products[index].qty+1
        }).then(()=>{
          console.log("Successfully Updated");
        }).catch((error)=>{
          console.log("Someting went wrong while update : ",error);
        })
        // products[index].qty+=1;
        // this.setState({
        //     products:products
        // })
    }
handleDecreaseFunction=(product)=>{
    console.log("decrease",product);
    const { products }=this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection('products').doc(products[index].id);
    if(products[index].qty===0)
    return ;
    docRef.update({
      qty:products[index].qty-1
    }).then(()=>{
      console.log("Successfully Updated");
    }).catch((error)=>{
      console.log("Someting went wrong while update : ",error);
    })
    // if(products[index].qty===0)
    // return;
    // products[index].qty-=1;
    // this.setState({
    //     products:products
    // })
}
handleDeleteFunction=(id)=>{
console.log("Delete Details");
const docRef=this.db.collection('products').doc(id);
docRef.delete()
.then(()=>{
  console.log("Deleted Successfully");
}).catch((error)=>{
  console.log("Someting went wrong while update : ",error);
})
// const { products }=this.state;
// const items=products.filter((item)=>item.id!==id);
// this.setState({
//     products:items
// })
}
getCount=()=>{
  const { products }=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}
getTotalPrice=()=>{
  const { products }=this.state;
  let total=0;
  products.forEach((product)=>{
    total+=product.qty*product.price;
  })
  return total;
}
addProduct=()=>{
this.db
.collection('products')
.add({
  img:'',
  qty:2,
  price:5488,
  title:'Hat'
})
.then((docRef)=>{
  console.log('Added to list',docRef);
})
.catch((error)=>{
  console.log('erroe :',error);
})
}
  render(){
    const { products,loading }=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCount()}/>
      <button onClick={this.addProduct}>Add Dummy Product</button>
      <Cart 
              products={products}
              onIncreaseQuantity={this.handleIncreaseFunction}
              onDecreaseQuantity={this.handleDecreaseFunction}
              onDeleteQuantity={this.handleDeleteFunction}/>
              {loading && <h1>Fetching Items...</h1>}
              <div style={{padding:10,fontSize:20}}>
                Total: Rs {this.getTotalPrice()}
              </div>
    </div>
  );
}
}

export default App;
