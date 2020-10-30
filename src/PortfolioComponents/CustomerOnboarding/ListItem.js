import React from 'react'
import "./style.css"

function ListItem(props) {
    return (
        <>
        <div className="divider"/>
              <div className="row" style={{marginTop:"10px",marginBottom:"10px",marginLeft:"5px",fontWeight:"normal", color:"#333"}}>

    <div className="col-6">{props.diagnosis}</div>
                  <div className="col-2"></div>
                  <div className="col-4">{props.year}
                  </div>
              </div>
              </>
    )
}

export default ListItem
