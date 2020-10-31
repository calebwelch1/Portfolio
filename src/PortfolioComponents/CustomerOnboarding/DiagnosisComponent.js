import React from 'react'
import { Progress } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import "./style.css"
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function DiagnosisComponent() {
    return (
        
        <div>
           
<Card body className="diagnosis-background">
               <CardTitle className="blue-font" style={{fontSize:"18px", fontWeight:"normal", marginTop:"5px"}}>
               <FontAwesomeIcon icon={faFileAlt} />  Diagnosis       
              </CardTitle>
         

         </Card>
         {/* outside card */}
         <div style={{textAlign:"Center", fontSize:"17px", fontWeight:"bolder", color:"#333", marginTop:"10px"}}>
            <CardText>
               You currently have 4 Notifications
            </CardText>
         <div className="divider"/>
         </div>
         <div style={{marginTop:"30px"}}>
         <div className="row" style={{marginTop:"10px",marginLeft:"5px",fontWeight:"bold", color:"#333"}}>
                  <div className="col-5">Add Post</div>
                  <div className="col-3"></div>
                  <div className="col-4">
    <Button outline color="info" size="sm" style={{borderRadius:"5rem"}}>Add</Button>
                  </div>
              </div>
              <div className="row" style={{marginTop:"10px",marginLeft:"5px",fontWeight:"bold", color:"#333"}}>
                  <div className="col-5">Edit Posts</div>
                  <div className="col-3"></div>
                  <div className="col-4">
    <Button outline color="info" size="sm" style={{borderRadius:"5rem"}}>Edit</Button>

                  </div>
              </div>      
              <div className="row" style={{marginTop:"10px",marginLeft:"5px",fontWeight:"bold", color:"#333"}}>
                  <div className="col-5">View Messages</div>
                  <div className="col-3"></div>
                  <div className="col-4">
    <Button outline color="info" size="sm" style={{borderRadius:"5rem"}}>View</Button>

                  </div>
              </div>
              </div>
        </div>
    )
}

export default DiagnosisComponent;
