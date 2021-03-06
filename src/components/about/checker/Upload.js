import React from 'react';

class Upload extends React.Component {
  state = { files: null, hovering: false };

  onDragEnter = event => {
    event.preventDefault();
    this.setState({ hovering: true });
  };

  onDragLeave = () => {
    this.setState({ hovering: false });
  };

  onDrop = event => {
    event.preventDefault();

    // event.dataTransfer.items[0]
    //   .webkitGetAsEntry()
    //   .createReader()
    //   .readEntries(b => console.log(b));
    this.props.onReceivedFiles(event.dataTransfer.items);
  };

  render() {
    const backgroundColor = this.state.hovering ? 'aliceblue' : '#DFF3F9';
    return (
      <div
        style={{
          height: '85vh', width: '100%', backgroundColor,
          textAlign: 'center', verticalAlign: 'middle',
          lineHeight: '85vh', fontFamily: 'gothamBook'
        }}
        onDragOver={e => e.preventDefault()}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
      >
        Drop files on me <span role='img'>👀</span>
      </div>
    );
  }
}

export default Upload;
