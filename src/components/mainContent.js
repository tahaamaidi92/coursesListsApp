import React from 'react';
import product_card from "../data/products_data";


const MainContent = () =>{
    console.log(product_card);
    const listItem = product_card.map((item)=>
    <div className="card" key={item.id}>

        <div className="card_img">
         <img className="img_card" src={item.thumb} alt=""/>
        </div>

        <div className="card_header">
           <h2>{item.product_name}</h2>
           <p>{item.description}</p>
           <p className="price">{item.price}<span>{item.currency}</span></p>
           <div className="btn">Add to Cart</div>
        </div>

    </div>
    );
    return(
         <div className="main_content">
              {listItem}
         </div>
    )
}


export default MainContent;