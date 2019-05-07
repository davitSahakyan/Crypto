import React from 'react'
import './Table.css'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {handlePercentChange} from '../../Helpers'

const Table = (props) =>{
  return(
    <div className='Table-container'>
       <table className='Table'>
          <thead className='Table-head'>
              <tr>
                <th> Criptocurrency </th>
                <th> Price </th>
                <th> MarketCap </th>
                <th> 24h / change </th>
              </tr>
          </thead>


          <tbody className='Table-body'>
              {props.currencies.map( currency =>{
                return(
                  <tr key={currency.id} onClick={()=> props.history.push(`/currency/${currency.id}`)}>
                    <td> <span className='Table-rank'> {currency.rank} </span> {currency.name} </td>
                    <td> <span className='Table-dollar'> $ </span> {currency.price} </td>
                    <td> <span className='Table-dollar'> $  </span> {currency.marketCap} </td>
                    <td> { handlePercentChange( currency.percentChange24h ) } </td>
                  </tr>
                )
              } )}
          </tbody>
       </table>
    </div>
  )
}

Table.propTypes={
  currencies : PropTypes.array.isRequired,
}

export default  withRouter(Table)