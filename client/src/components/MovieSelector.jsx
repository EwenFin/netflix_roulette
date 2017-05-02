import React from 'react';

class MovieSelector extends React.Component {
    
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event){
    this.setState({selectedIndex: event.target.value});
    const selectedMovie = this.props.movies[event.target.value]
    this.props.setSelectedMovie(selectedMovie)
  }


  render() {

      const options = this.props.movies.map((movie, index) => {
      return <option value={index} key={index}>{movie.show_title}</option>
    })

    return (
      <select id="movies" value = {this.state.selectedIndex} onChange = {this.handleChange}>
        {options}
      </select>
    );
  }
}

export default MovieSelector;