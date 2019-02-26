import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };//serachBoxText

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
              list='browsers' name='browser'
            />
            <datalist id='browsers'>
              <option value='Checkmarx' />
              <option value='Analytics' />
              <option value='Policies' />
              <option value='Vulnerabilties' />
              <option value='Code' />
            </datalist>
            <br />
            <br />
            <input type='submit' className ='ui basic green button' />
          </div>
        </form>
      </div >
    );
  }
}

export default SearchBar;
