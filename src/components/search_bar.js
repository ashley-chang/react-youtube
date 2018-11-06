import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar_logo">
          <div className="top-bar_logo_button"></div>
          <div className="top-bar_logo_word">UTube</div>
        </div>
        <div className="top-bar_search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}/>
        </div>
      </div>

    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
