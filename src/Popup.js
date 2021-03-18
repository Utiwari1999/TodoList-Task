import React, { useState } from 'react';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import './Popup.css';

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      showingAlert: false
    };
  }
  
  handleClickShowAlert() {
    this.setState({
      showingAlert: true
    });
    
    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 2000);
  }
  
  render() {
    return (
      <div>
        <div id='popup_btn' className={`alert alert-success ${this.state.showingAlert ? 'alert-shown' : 'alert-hidden'}`}>
        <span className="modal">
        <span class="close">&times;</span>
        <p className='modal-content'>Uncompleted task cannot be deleted</p>
        </span>
          
        </div>
        <div className="todo_style">
          <ClearRoundedIcon className="closeIcon" onClick={this.handleClickShowAlert.bind(this)} />
        </div>
        
      </div>
    );
  }
}
  
export default Popup;

