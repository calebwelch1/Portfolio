import React from 'react'
import { Progress } from 'reactstrap';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import "./style.css"
function ProgressComponent() {
    return (
        
        <div>
           <Card body>
              <div style={{textAlign:"left"}}>
              <CardTitle>
                 Profile Progress
              </CardTitle>
              </div>
            <div className="text-center">50%</div>
         <Progress barClassName="progress-bar" value={50} />
         <div style={{fontSize:"12px", textAlign:"left",marginTop:"10px"}}>
         <CardText>
            You're almost there! It seems like there are a few items missing to complete your profile.
            <a>See what's missing.</a>
         </CardText>
         </div>
         <div className='row'>
     
        <Button outline color="info" size="sm" style={{borderRadius:"5rem", marginLeft:"10px", marginTop:"10px"}}>Edit Profile</Button>
        
        </div>
         </Card>

        </div>
    )
}

export default ProgressComponent;
