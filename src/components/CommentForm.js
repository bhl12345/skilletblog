import React from "react"

export default class IndexPage extends React.Component {
  state = {
    author: "",
    text: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.author} ${this.state.text}!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Comment
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}