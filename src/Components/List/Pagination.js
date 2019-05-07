import React from 'react'
import './Pagination.css'
import PropTypes from 'prop-types'

const Pagination = (props) =>{
   return(
     <div className='Pagination'>
       <button className='Pagination-button'
       onClick={()=>props.handlePaginationClick('prev')}
       disabled={props.page === 1}
       > &larr; </button>
 
            <span className='Pagination-info'>     
              page <b>{props.page}</b> of <b>{props.totalPages}</b>
             </span>


       <button className='Pagination-button'
       onClick={()=>props.handlePaginationClick('next')}
       disabled={props.page === props.totalPages}
       > &rarr; </button>
     </div>
   )
}

Pagination.propTypes={
  page : PropTypes.number.isRequired,
  totalPages : PropTypes.number.isRequired,
  handlePaginationClick : PropTypes.func.isRequired,
}

export default Pagination