import React from 'react';

import './Details.css';
import {Colors} from "./Colors";
class Details extends React.Component{

  state={
    products: [
      {
        "_id": "1",
        "title": "Women's Top",
        "src":[
          "https://picsum.photos/300/400"
        ],
        "description": "Womens Blouses and Tops for Work Fashion Casual Summer Short Sleeve Shirts",
        "price": 23,
        "colors":[],
        "count": 1
      }
    ],
  };

  render(){
    const{products}=this.state;
    
    return(
     <div className="app">
     {
      products.map(item=>(
        <div className="details" key={item._id}>
          <div className="big-img">
            <img src={item.src[0]} alt=""/>
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
                </div>
                  <Colors colors={item.colors}/>
                  <p>{item.description}</p>
                    <button className="cart">Add to cart</button>
              </div>
          </div>
      ))
     }
     </div>
    );
  };
}
export default Details;