import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Common/Header'
import List from './Components/List/List'
import './index.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NotFound from './Components/NotFound/NotFound';
import Detail from './Components/Detail/Detail'


const App = () =>{
  return(
    <BrowserRouter>
       <Header />
          <Switch>
             
             <Route  path='/' component={List} exact /> 
             <Route  path='/Crypto' component={List} exact /> 
             <Route path='/currency/:id' component={Detail} exact />
             <Route component={NotFound} exact/>
          </Switch>
    </BrowserRouter>
  )
}


ReactDOM.render( <App /> , document.getElementById('root') )