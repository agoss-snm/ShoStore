import React from 'react'
//Style
import './Footer.css';
//Semantic UI
import { Flag, Segment } from 'semantic-ui-react';
import { Icon, Step } from 'semantic-ui-react'

const Footer=()=>{
    return (
      
    <div className='FooterContainer'>
    <Segment>
    <Flag name='ar' />
  </Segment>

  <Step.Group stackable className='tablet'>
    <Step className='footerC'>
      <Icon className='plane' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step active className='footerB'>
      <Icon className='dollar' />
      <Step.Content>
        <Step.Title className='billing' >Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
    <Step active  className='footerA'>
      <Icon className='info circle' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
        <Step.Description>Verify order details</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>

    <h3>All rights reserved <spam>@ShooStore</spam></h3>
    </div>
    )
  }

export default Footer;