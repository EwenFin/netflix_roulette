import React from 'react';

class MovieDetail extends React.Component {
  render(){

    if( !this.props.movie){
      return null;
    }
    return (
      <h3>
        {this.props.movie.name}
      </h3>
    );
  }
}

export default MovieDetail;
