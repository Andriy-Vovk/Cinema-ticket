import * as React from 'react';

import './OrderItem.scss';

import Button from "../../Ui/Button/Button";
import {useHomeActions} from "../../context/HomeContext";

export default function OrderItem({ productInfo }) {
    const { removeProduct } = useHomeActions();
    const {  title, price, id ,img} = productInfo;

    return (
      <div className="order">
          <img src={img} className="order__image"  alt="product"/>
          <div className="order__information">
              <div className="order__name">{title}</div>
              <div className="order__price">{price}$</div>

          </div>
          <div className="order__close">
              <Button
                  variation="secondary"
                  style={{width: '25px', height: '25px'}}
                  onClick={() => removeProduct(id)}
              >
                  X
              </Button>
          </div>
      </div>
  );


}
