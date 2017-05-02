import React from 'react';

class DirectorSelector extends React.Component {

constructor(props){
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.setIndex = this.setIndex.bind(this)
    this.state = {
      selectedIndex: 0
    }
  }

  handleChange(event){
    const directorIndex = event.target.value
    console.log(directorIndex)
  }

  render() {
    return (
      <select id="director" onChange = {this.handleChange.bind(this)}>
        <option value={0} key= {0}> Steven Spielberg </option>
        <option value={1} key= {1}> Quentin Tarantino </option>
      </select>
    );
  }
}




export default DirectorSelector;