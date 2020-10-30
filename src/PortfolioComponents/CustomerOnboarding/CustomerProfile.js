import React from 'react'
import './style.css';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import ProfilePhoto from "./SmilingGrandmaSmall.jpg"
function CustomerProfile() {
    return (
        
        <div>
            
       
          <Card body className="profile-background">
            {/* fix below for desktop LOL */}
          <div class="circular--landscape" style={{alignSelf:"center"}}>
  <img src={ProfilePhoto} />
</div>
          {/* <CardImg top width="100%" src={ProfilePhoto} alt="Card image cap" /> */}
<div style={{textAlign:"Center", fontSize:"28px", fontWeight:"bold", color:"#333"}}>
        <CardTitle>Xernona Johnson
        </CardTitle>
        </div>
<div style={{textAlign:"Center", fontWeight:"bold",marginTop:"-12px"}}>

        <CardText>
        Member since October 20'
        </CardText>
       
        </div>
        <div className="row" style={{textAlign:"center"}}>
          <div className='col-4'/>
          <div className='col-4'>

        <Button outline color="info" size="sm" style={{borderRadius:"5rem"}}>Edit Profile</Button>
        </div>
        <div className='col-4'/>
        </div>
      </Card>

                </div>
             
    )
}

export default CustomerProfile
