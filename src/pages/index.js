import React, { PureComponent } from 'react'
import { Modal, Header, Button } from 'semantic-ui-react'
import { withReduxSaga } from '../redux'

class Index extends PureComponent {
  static async getInitialProps ({ store }) {
    console.log(store)
  }
  render () {
    return (
      <div>
        {<Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>}
        <Button className='ui primary button'>
          Save
        </Button>
      </div>
    )
  }
}

export default withReduxSaga(Index)
