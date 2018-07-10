import React from 'react'
import { Grid, Image, Icon, Button, Segment, Dimmer, Loader, Popup, Header } from 'semantic-ui-react'
import '../componentsCSS/test.css'

const Practice = () => (
  <div style={{maxWidth:"80vw",margin:"auto"}}>
  <Grid divided>
    
      <Grid.Column className='lefticon' computer="16">
      <Icon circular name='users'/>
      <Icon circular className='righticon' name='sign in' style={{marginRight: "186px"}}/>
      <Icon circular className='righticon' name='sign out'/>
      </Grid.Column>
      <Grid.Column computer="4">
     
     <div> <Button.Group>
    <Button  icon='play' />
    <Button icon='pause' />
    <Button icon='shuffle' />
  </Button.Group>
  </div>
  <div>
  <Button.Group>
    <Button negative>Cancel</Button>
    <Button.Or />
    <Button positive>Save</Button>
  </Button.Group>
  </div>
      </Grid.Column>
      <Grid.Column computer="4">
      <div>
      <Segment style={{padding:"2em 1em"}}>
      <Loader active/>  
  </Segment>
  </div>
      </Grid.Column>
      <Grid.Column computer="4">
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
      <Grid.Column computer="4">
      <Popup trigger={<Button>plans</Button>} flowing hoverable>
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
      </Grid.Column>
      <Grid.Column computer="6">
       hi
      </Grid.Column>
      <Grid.Column computer="10">
       hi
      </Grid.Column>
   
  </Grid>
  </div>
)


export default Practice