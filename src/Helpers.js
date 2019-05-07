import React from 'react'

const handleResponse = (response) =>{
  return response.json().then( json =>{
    console.log(response)
    return response.ok ? json : Promise.reject(json)
  })
}

export default handleResponse

export const handlePercentChange = (percent) =>{
  if(percent > 0){
    return (<span className='percent-raised'> {percent} % &uarr; </span>)
  }else if(percent < 0){
    return (<span className='percent-fallen'> {percent} % &darr; </span>)
  }else{
    return(<span> {percent} % </span>)
  }
}