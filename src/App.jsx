import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'
import SignInSignUp from './pages/signin-signup/signin-signup'

import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  )
}

export default App
