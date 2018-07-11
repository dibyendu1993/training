import React from 'react'
import { Component } from 'react'
import { Grid, Modal, Icon, Button, Segment, Step, Loader, Popup, Header } from 'semantic-ui-react'
import '../componentsCSS/test.css'

class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    
    return (
      <div style={{maxWidth:"80vw",margin:"auto"}}>
  <Grid  style={{marginTop: '1rem', border:'solid .1px #00000040'}}>
    
      <Grid.Column className='lefticon' style={{border:'solid .1px #00000040'}} computer="16">
      <Icon circular name='users'/>
      <Icon circular className='righticon' name='sign in' style={{marginRight: "45px"}}/>
      <Icon circular className='righticon' name='sign out'/>
      </Grid.Column>
      <Grid.Column computer="4" style={{border:'solid .1px #00000040'}}>
     
     <div style={{paddingLeft: '44px'}}> <Button.Group>
    <Button  icon='play' />
    <Button icon='pause' />
    <Button icon='shuffle' />
  </Button.Group>
  </div>
  <div>
  <Button.Group style={{paddingLeft: '23px'}}>
    <Button negative>Cancel</Button>
    <Button.Or />
    <Button positive>Save</Button>
  </Button.Group>
  </div>
      </Grid.Column>
      <Grid.Column computer="4" style={{border:'solid .1px #00000040'}}>
      <div>
      <Segment style={{padding:"2em 1em"}}>
      <Loader active/>  
  </Segment>
  </div>
      </Grid.Column>
      <Grid.Column computer="4" style={{border:'solid .1px #00000040'}}>
     <div>
     <Icon circular name='google play'/>
     </div>
     <div>
     <Icon circular name='google play'/>
     </div>
     <div>
     <Icon circular name='google play'/>
     </div>
      </Grid.Column>
      <Grid.Column computer="4" style={{border:'solid .1px #00000040'}}>
      <div>
      <Popup trigger={<Button style={{marginBottom: "12px"}}>choose your plan</Button>}  flowing hoverable>
    <Grid centered divided columns={3}>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Basic Plan</Header>
        <p>
        <b>50</b> for 1 month
        </p>
        <Button>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Business Plan</Header>
        <p>
          <b>250</b> for 6 month
        </p>
        <Button>Choose</Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header as='h4'>Premium Plan</Header>
        <p>
        <b>400</b> for 1 year
        </p>
        <Button>Choose</Button>
      </Grid.Column>
    </Grid>
  </Popup>
  </div>
  <div>
  <Button onClick={this.handleOpen.bind(this)} >choose your plan</Button>
     <Modal
        open={this.state.modalOpen}
       // onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='subscription you can choose' />
        <Modal.Content>
        <Grid centered divided columns={4}>

      <Grid.Column textAlign='center'>
       
        <p>
        <b>50</b> for 1 month
        </p>
        <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Choose
          </Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        
        <p>
          <b>250</b> for 6 month
        </p>
        <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Choose
          </Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
       
        <p>
        <b>400</b> for 1 year
        </p>
        <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Choose
          </Button>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Button color='red' onClick={this.handleClose} inverted>
            <Icon name='close' />
          </Button>
      </Grid.Column>
    </Grid>
        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
 

    </div>
      </Grid.Column>
      <Grid.Column computer="8" style={{border:'solid .1px #00000040'}}>
      <Step.Group>
    <Step completed style={{padding: "17px", paddingLeft:"22px"}}>
      <Step.Content>
        <Step.Description>Choose your subscription</Step.Description>
      </Step.Content>
    </Step>

    <Step completed style={{padding: "17px", paddingLeft:"22px"}}>
      <Step.Content>
        <Step.Description>Pay for subscription</Step.Description>
      </Step.Content>
    </Step>

    <Step active style={{padding: "17px", paddingLeft:"22px"}}>
      <Step.Content>
        <Step.Description>Enjoy you subscription</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
      </Grid.Column>
      <Grid.Column computer="8"style={{overflow: 'scroll',maxHeight: '223px', border:'solid .1px #00000040'}}>
      
      <Segment.Group>
    <Segment><h2>Albums</h2></Segment>
    <Segment.Group>
      <Segment>Album 1</Segment>
      <Segment>Album 2</Segment>
      <Segment>Album 3</Segment>
    </Segment.Group>
    </Segment.Group>
    <Segment.Group>
    <Segment><h2>Artists</h2></Segment>
    <Segment.Group>
      <Segment>Artist 1</Segment>
      <Segment>Artist 2</Segment>
      <Segment>Artist 3</Segment>
    </Segment.Group>
    </Segment.Group>

      </Grid.Column>
   
  </Grid>
  </div>   
    )
  }
}
export default ModalExampleControlled