import React from "react"

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    comment: "",
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
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Comment
          <input
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}