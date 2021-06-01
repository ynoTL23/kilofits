import React from 'react'
import { connect } from 'react-redux'
import Button from '../button/button'
import CartItem from '../cart-item/cart-item'
import './cart-dropdown.scss'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems })

export default connect(mapStateToProps)(CartDropdown)