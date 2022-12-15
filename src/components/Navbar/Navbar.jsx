import * as React from 'react';

import './Navbar.scss';

import logo from '../../assets/Logo.png';
import binImg from '../../assets/bin.png';
import {isEmpty} from "lodash/lang";
import {useHomeActions, useHomeState} from "../../context/HomeContext";

export default function Navbar() {
    const { selectedProductsIds } = useHomeState();
    const { toggleModalBox } = useHomeActions();

    return (
    <div className="navbar">
      <div className="navbar__logotype">
        <img src={logo} alt="logotype" />
      </div>
      <div className="navbar-list">
        <div className="navbar-list__item">Bought Tickets</div>
        <div className="navbar-list__item">Contacts</div>

      </div>
      <div className="navbar-cart">
        <img src={binImg} alt="cart" onClick={() => toggleModalBox(true)} />
          { !isEmpty(selectedProductsIds) && <div className="navbar-list__mark">{selectedProductsIds.length}</div> }
      </div>
    </div>
  );
}
