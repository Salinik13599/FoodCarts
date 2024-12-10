import React from 'react'

export const Product = ({product}) => {
  return (
    <div className="product">
    <h3>{product.name}</h3>
    <p>Price Rs:{product.amt}</p>
    </div>
  )
}
