import React, { Component } from 'react';
import Name from './name';
/* eslint-disable jsx-a11y/anchor-is-valid, no-alert */
import Link from '@material-ui/core/Link';
import Message from '../../../common/meesage';

class Content extends Component { //הוא מקבל מהאבא מקומפוננטת מאין

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  handleClickOpen = () => {
    this.setState({ isVisible: true });
  };

  handleClose = () => {
    this.setState({ isVisible: false });
  };

  handleYesClose = () => {
    this.setState({ isVisible: false });
    const value = document.getElementById('myText').value;
    this.sendMail(value);
  };

  sendMail = (value = 'kjhjhjhjkhk') => {
    var link = `mailto:${this.props.email}`//אימייילל
      + "?" // +"?cc=myCCaddress@example.com"
      + "&subject=" + escape("This is my subject")
      + "&body=" + escape(value)
      ;

    window.location.href = link;
  }

  render() {
    const { userName, id, phoneNumber, notes } = this.props;

    return (
      <tr style={{ width: '100%', background: '#aeaeae' }} id='content'>
        <td style={{ width: '25%' }}><Name name={userName} /></td>
        <td style={{ width: '25%' }}><Name name={id} /></td>
        <td style={{ width: '25%' }}> <Name name={phoneNumber} /></td>
        <td style={{ width: '25%' }}> <Name name={notes} /></td>

        <Link
          component="button"
          variant="body2"
          onClick={() => {
            //לעשות input
            this.setState({ isVisible: true })
          }}
        >
          write a message
    </Link>
        <Message handleClose={this.handleClose} handleYesClose={this.handleYesClose} open={this.state.isVisible} />
      </tr>

    );
  }
};

export default Content;
