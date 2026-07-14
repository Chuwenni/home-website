import React from 'react'

const Skeleton = () => {

  const containerStyle = {
    backgroundColor: "black",
    width: 50,
    height: 50
  }

  return (
    <>
      <div className="productContainer" style={containerStyle}>
        <div className="products">
          <div className="label1"></div>
          <div className="label2"></div>
        </div>
        <div className="products">
          <div className="label1"></div>
          <div className="label2"></div>
        </div>
        <div className="products">
          <div className="label1"></div>
          <div className="label2"></div>
        </div>
        <div className="products">
          <div className="label1"></div>
          <div className="label2"></div>
        </div>
        <div className="products">
          <div className="label1"></div>
          <div className="label2"></div>
        </div>
        <div className="products">
          <div className="label1"></div>
          <div className="label2"></div>
        </div>
        <div className="products">
          <div className="label1"></div>
          <div className="label2"></div>
        </div>
        <div className="products">
          <div className="label1"></div>
          <div className="label2"></div>
        </div>
      </div>
    </>
  )
}

export default Skeleton