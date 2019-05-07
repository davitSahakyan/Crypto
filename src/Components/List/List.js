import React from 'react'
import handleResponse from '../../Helpers';
import { API_URL } from '../../Config';
import Loading from '../Common/Loading';
import Table from './Table';
import Pagination from './Pagination';

class List extends React.Component{
  constructor(){
    super();
    this.state={
       loading : false,
       currencies : [],
       error : '',
       page : 1,
       totalPages: 0,
    }
  }

  componentDidMount(){
    this.fetchCurrencies();
  }

  handlePaginationClick = (direction) =>{
      let nextPage = this.state.page

      nextPage= direction === 'next' ? nextPage + 1  : nextPage - 1;

      this.setState({
        page : nextPage
      },()=>this.fetchCurrencies())
  }



  fetchCurrencies(){
    const {page} = this.state
    this.setState({ loading : true})

    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
      .then( handleResponse )
      .then(data =>{
        this.setState({
          currencies : data.currencies,
          totalPages : data.totalPages,
          loading : false,
          
        })
      })
      .catch(error =>{
        this.setState({
          error : error.errorMessage,
          loading : false,
        })
      })
  }

  render(){
    const {loading,error,currencies,page,totalPages} = this.state
    console.log(currencies)
    if(loading){
      return(
        <div className='loading-container'>
           <Loading />
        </div>
      )
    }
    if(error){
      return(
        <div>
          {error}
        </div>
      )
    }
    return(
      <div>
            <Table 
            currencies ={currencies}
            />

            <Pagination 
            page ={page}
            totalPages={totalPages}
            handlePaginationClick={this.handlePaginationClick}
            />
      </div>
    )
  }
}

export default List