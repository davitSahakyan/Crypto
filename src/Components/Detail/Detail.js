import React from 'react'
import {API_URL} from '../../Config'
import handleResponse from '../../Helpers';
import Loading from '../Common/Loading';
import {handlePercentChange} from '../../Helpers' 
import './Detail.css'

class Detail extends React.Component{
  constructor(){
    super();
    this.state={
      loading : false,
      currency : {},
      error : null,
    }
  }

  componentDidMount(){
    this.setState({loading : true})

    fetch(`${API_URL}/cryptocurrencies/${this.props.match.params.id}`)
      .then( handleResponse )
      .then( data =>{
        this.setState({
          currency : data,
          loading: false,
        })
      })
  }

  render(){
    const {currency,loading} = this.state
    if(loading){
      return(
      <Loading />
    )
    }
     console.log(currency)
    return(
      <div className='Detail'>
          <h1 className='Detail-heading'> {currency.name}({currency.symbol}) </h1>
             <div className='Detail-container'>
                 <div className='Detail-item'>
                    Price <span className='Detail-value'> $ {currency.price} </span>
                 </div>
                 <div className='Detail-item'>
                    Rank <span className='Detail-value'>  {currency.rank} </span>
                 </div>
                 <div className='Detail-item'>
                    Change 24h <span className='Detail-value'>{handlePercentChange(currency.percentChange24h)}</span>
                 </div>
                 <div className='Detail-item'>
                     <span className='Detail-title'> MarketCap </span>{currency.marketCap} 
                     <span className='Detail-dollar'>$ </span> 
                 </div>
                 <div className='Detail-item'>
                      <span className='Detail-title'>TotalSupply </span>{currency.totalSupply}
                      <span className='Detail-dollar'>$ </span>
                 </div>
                 <div className='Detail-item'>
                     <span className='Detail-title'> Volume </span> {currency.volume24h} 
                 </div>
             </div>
      </div>
    )
    
  }
}

export default Detail