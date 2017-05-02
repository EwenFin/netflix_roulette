import React from 'react';

class MovieDetail extends React.Component {
  render(){

    if( !this.props.movie){
      return null;
    }
    return (
      <div>
        <h3>
          {this.props.movie.show_title}
        </h3>
        <p>
          {this.props.movie.summary}
        </p>
        <img src={this.props.movie.poster}/>
      </div>
    );
  }
}

export default MovieDetail;
