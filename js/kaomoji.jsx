/** @jsx React.DOM */

var Kaomoji = React.createClass({
  kaomoji_list: {
    happy: ["(・∀・)", "(´･ω･`)", "(✿◕‿◕)"],
    angry: ["(」ﾟヘﾟ)」", "(≖_≖✿)", "(¬д¬。)"],
    confusion: ["(; ʘ‿ʘ )", "(◕_◕✿)", "∑(゜Д゜;)"]
  },

  getInitialState: function() {
    return {
      name: this.kaomoji_list.happy[0]
    };
  },

  updateName: function () {
    this.setState({
      name: this.refs.name.getDOMNode().value
    });
  },

  render: function() {
    return (
      <div>
        <input ref="name" onChange={this.updateName} value={this.state.name} />
        <br />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
});

React.renderComponent(
  <Kaomoji />,
  document.getElementById('content')
);
