import React from 'react'
import {API_URL} from '../../Config'
import handleResponse from '../../Helpers'
import './Search.css'
import {withRouter} from 'react-router-dom'

class Search extends React.Component{
  constructor(){
    super();
    this.state={
        loading : false,
        searchQuery : '',
        searchResults : [],
    }
  }


  handleChange = (event) =>{
      const searchQuery = event.target.value

      this.setState({ searchQuery : searchQuery})


      if (!searchQuery) {
        return '';
      }

      this.setState({ loading: true });

      fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
      .then(handleResponse)
      .then((result) => {
        this.setState({searchResults : result})

        this.setState({ loading: false });
      });

  }

 
  handleRedirect = (currencyId) =>{
    this.setState({
      searchQuery : '',
      searchResults : [],
    })

    this.props.history.push(`/currency/${currencyId}`)
  }

  renderSearchResults = () =>{
     const {searchResults,searchQuery,loading} = this.state

     if(!searchQuery){
       return ''
     }

     if(searchResults.length > 0){
      
        return( 
          <div className="Search-result-container"> 
            {searchResults.map( results =>(
              <div
              key={results.id}
              onClick={()=>this.handleRedirect(results.id)}
              className="Search-result"
              value={searchQuery}
              >
                {results.name}({results.symbol})
              </div>
            ))}
           
         </div>
        )
     }

     if (!loading) {
      return (
        <div className="Search-result-container">
          <div className="Search-no-result">
            No results found.
          </div>
        </div>
      );
    }

    

  }

  render(){

    return(
      <div className='Search'>
        <span className='Search-icon' />

        <input
        type='text'
        placeholder='currency name'
        className='Search-input'
        onChange={this.handleChange}
        />


          {this.renderSearchResults()}

      </div>
    )
  }
}

export default withRouter(Search)