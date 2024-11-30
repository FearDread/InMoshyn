import React from 'react'
import loader from "../assets/loader.gif";
const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width:"100%" }}>
      <img style={{width: "100"}} src={loader} alt="" />
    </div>
  )
}

export default Loader