import * as React from 'react';
import './ProductItem.scss';
import {useHomeActions} from "../../context/HomeContext";
import Button from "../../Ui/Button/Button";



export default function ProductItem({ id, title, description, price ,backImage}) {
    const { selectProduct } = useHomeActions();
  return (
      <div className="product" style={{backgroundImage:`url(${backImage})`}}>

        <div className="product__title">{ title }</div>
        <div className="product__description">{ description }</div>
        <div className="product__buy">
          <div className="product__price">{ price }$</div>
          <Button style={{fontSize:'16px'}} onClick={() => selectProduct(id)} >Book now</Button>
        </div>
      </div>
  );
}
