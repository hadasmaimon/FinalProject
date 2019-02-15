import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'react' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              list='browsers' name='browser'
            />
            <datalist id='browsers'>
              <option value='React' />
              <option value='Java' />
              <option value='PHP' />
              <option value='C#' />
              <option value='Android' />
            </datalist>
            <br />
            <br />
            <input type='submit' class='ui basic green button' />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
