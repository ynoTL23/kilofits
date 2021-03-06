import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import Button from '../button/button'
import CartItem from '../cart-item/cart-item'
import { toggleCartHidden } from '../../redux/cart/cart-actions'

import './cart-dropdown.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className='empty-message'>No items in cart</span>
      )}
    </div>
    <Button
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCartHidden())
      }}>
      GO TO CHECKOUT
    </Button>
  </div>
)

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default withRouter(connect(mapStateToProps)(CartDropdown))
