import React from 'react'
import './modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <React.Fragment>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem'
        }}>
          <button
            className='modal-button'
            onClick={
              () => this.setState({ isOpen: true })
            }>
            Open modal
          </button>
        </div>
        {this.state.isOpen &&
          <div className='modal'>
            <div className='modal-body'>
              <h1>Modal title</h1>
              <p>I am awesome modal!</p>
              <button className='modal-button' onClick={
                () => this.setState({ isOpen: false })
              }>Close modal</button>
            </div>
          </div>
        }

      </React.Fragment>
    )
  }
}