import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data'

function SingleHome() {
    const { id } = useParams()
    const myProduct = Data.find((item)=> item.id === Number(id))
    console.log(myProduct);
  return (
    <div>
      <h1>{myProduct.id}</h1>
      <img src= {myProduct.thumbnailUrl}/>
    </div>
  )
}

export default SingleHome
