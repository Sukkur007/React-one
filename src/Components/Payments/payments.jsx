import React, { useEffect, useState } from "react";
import Card from "../reusableComponents/Card";
import Button from "../reusableComponents/Button";


const Payments = () => {

  const [productList,setProductList] = useState([]);


  
  const getItemList = () => {
    fetch("https://api.thedogapi.com/v1/images/search?limit=50")
    .then(Response => {
        return Response.json()
    })
    .then(data => {
        // console.log(data);
        setProductList(data);
    })
    .catch(err => {
        console.log(err);
    })
  }
  useEffect(() => {
  getItemList();
  },[])

  return (
    <>
      <div className="imgFlex">
        {
            productList.map((e)=>(<Card imgSrc={e.url} imgAlt={e.id} imgPrice={e.width} imgQuantity={e.height}/>))
        }
        
      </div>
      <div>
      <Button content="click" />
      </div>
    </>
  );
};

export default Payments;
