import React from 'react'
import CustomerProfile from "./CustomerProfile"
import ProgressComponent from "./ProgressComponent"
import DiagnosisComponent from "./DiagnosisComponent"
import ListItem from "./ListItem"
import {Card, CardBody} from 'reactstrap'
// putting components inside of a card body gives that slightly inset look, maybe make cardbody component
function CustomerOnboardingComponent() {
    return (
        
        <div>
           <div className='container'>
              <div className='row'>
                 <div className='col-12 mb-12'>
                      <CustomerProfile/>
                      <ProgressComponent/>
                      <Card>
                         <CardBody>
                        <DiagnosisComponent/>
                        </CardBody>
                      </Card>
                 
                      <Card>
                         <CardBody>
                         <ListItem diagnosis="Diagnosis entry that may need two lines" year="5/17/20"/>
                      <ListItem diagnosis="Post entry " year="2020"/>
                      <ListItem diagnosis="Post entry that may need two lines maybe even three" year="5/3/20"/>
                      <ListItem diagnosis="Post entry that may need two lines" year="4/17/20"/>
                      <ListItem diagnosis="Post entry" year="3/27/20"/>
                        </CardBody>
                      </Card>
                 </div>
              </div>
           </div>
        </div>
    )
}

export default CustomerOnboardingComponent
