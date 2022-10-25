
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "palindrome",
      output: "No, it is not a palindrome."
    };
    this.handleChange = this.handleChange.bind(this);
    this.palindrome = this.palindrome.bind(this);
  }


palindrome(str) {
  str = str.toLowerCase().replaceAll(/[^a-z0-9]/g,'');
  let strRev = str.split('').reverse().join('');
  console.log(strRev===str)
  if (strRev===str) return "Yes, it is a palindrome.";
  return "No, it is not a palindrome.";
}

  handleChange(e) {
    this.setState({
      input: e.target.value,
      output: this.palindrome(e.target.value)
    });
  }

  render() {
    return (
      <div id="app">
        <h1>Palindrome Checker</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        ></input>
        <div id="output">{this.state.output}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
