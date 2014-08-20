/** @jsx React.DOM */

var kaomoji_list = {
  happy: ["(・∀・)", "(´･ω･`)", "(✿◕‿◕)"],
  angry: ["(」ﾟヘﾟ)」", "(≖_≖✿)", "(¬д¬。)"],
  confusion: ["(; ʘ‿ʘ )", "(◕_◕✿)", "∑(゜Д゜;)"]
};

var Kaomoji_Happy = React.createClass({
  getInitialState: function() {
    return {
      name: kaomoji_list.happy[Math.floor (Math.random() * 
        kaomoji_list.happy.length)]
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
        <h3>Happy</h3>
        <input ref="name" onChange={this.updateName} value={this.state.name} />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
});

var Kaomoji_Angry = React.createClass({
  getInitialState: function() {
    return {
      name: kaomoji_list.angry[Math.floor (Math.random() * 
        kaomoji_list.angry.length)]
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
        <h3>Angry</h3>
        <input ref="name" onChange={this.updateName} value={this.state.name} />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
});

var Kaomoji_Confusion = React.createClass({
  getInitialState: function() {
    return {
      name: kaomoji_list.confusion[Math.floor (Math.random() * 
        kaomoji_list.angry.length)]
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
        <h3>Confusion</h3>
        <input ref="name" onChange={this.updateName} value={this.state.name} />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
});

React.renderComponent(
  <Kaomoji_Happy />,
  document.getElementById('happy')
);

React.renderComponent(
  <Kaomoji_Angry />,
  document.getElementById('angry')
);

React.renderComponent(
  <Kaomoji_Confusion />,
  document.getElementById('confusion')
);