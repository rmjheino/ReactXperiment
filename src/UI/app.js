import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
  render(){
    return(
      <div>
        <h1>HEllo, React!</h1>
        <InputForm addThinky={this._addThinky(this)} />
      </div>
    )
  }

  _addThinky(thinky){

  }
}

class InputForm extends React.Component {
  render(){
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <label>Input form</label>
        <div className="form-fields">
          <input placeholder="Thingy" ref={(input) => this._thing = input}></input>
        </div>
        <div className="form-actions">
          <button type="submit">
            Post
          </button>
        </div>
      </form>
    )
  }

  _handleSubmit(e){
    e.preventDefault();
    this.props.addThinky(this._thing);
  }
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('root')
);
