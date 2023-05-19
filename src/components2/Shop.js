import React, { useState } from 'react'
import Api from './Api'
import By from './By'





function Shop() {

  const [data, setData] = useState(Api)
  return (
    <div >
      <section className="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>
      <div className="gallery">
        {
          
          data.map((item) => {
            return (
              <div className = 'content'>
              
              <By item={item}/> 
              
              
            </div>
              )
            })
        }
      </div>
             
    </div>
  )
}

export default Shop
