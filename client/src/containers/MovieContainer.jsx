import React from 'react';
import MovieSelector from '../components/MovieSelector';
import MovieDetail from '../components/MovieDetail';

class MovieContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null
    };
  }

  setSelectedMovie(movie){
    this.setState({ selectedMovie: movie })
  }

  componentDidMount(){
    const url = "http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino"
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = () => {
      if( request.status === 200){
        
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        console.log(data)
        this.setState({ movies:data, selectedMovie: data[0]})
      }
    }

    request.send();
  }

  render(){
    return (
      <div>
        <h2>Tarantino Movie Container</h2>
        <MovieSelector movies = {this.state.movies} setSelectedMovie = {this.setSelectedMovie.bind(this)}/>
        <MovieDetail movie = {this.state.selectedMovie} />
      </div>
    );
  }
}

export default MovieContainer;