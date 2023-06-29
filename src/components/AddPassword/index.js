import '@fortawesome/fontawesome-free/css/all.min.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'

import './index.css'

class AddPassword extends Component {
  state = {website: '', username: '', password: '', showPassword: false}

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitPassword = event => {
    event.preventDefault()

    const {addPassword} = this.props
    const {website, username, password} = this.state
    if (website !== '' && username !== '' && password !== '') {
      const passwordItem = {
        website,
        username,
        password,
        id: uuidv4(),
      }
      addPassword(passwordItem)
      this.setState({website: '', username: '', password: ''})
    }
  }

  render() {
    const {website, username, password, showPassword} = this.state

    return (
      <form className="add-pswd-card" onSubmit={this.onSubmitPassword}>
        <h1 className="add-pswd-heading">Add New Password</h1>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="input-images"
          />
          <input
            type="search"
            placeholder="Enter Website"
            className="input-element"
            value={website}
            onChange={this.onChangeWebsite}
          />
        </div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            className="input-images"
          />
          <input
            type="search"
            placeholder="Enter Username"
            className="input-element"
            value={username}
            onChange={this.onChangeUsername}
          />
        </div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="input-images"
          />
          <div className="password-input-element">
            <input
              placeholder="Enter Password"
              className="password-element"
              value={password}
              onChange={this.onChangePassword}
              type={showPassword ? 'text' : 'password'}
            />
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onToggleShowPassword}
            >
              {showPassword ? (
                <i className="fas fa-eye-slash" />
              ) : (
                <i className="fas fa-eye" />
              )}
            </button>
          </div>
        </div>
        <div className="add-password-button-div">
          <button type="submit" className="add-btn">
            Add
          </button>
        </div>
      </form>
    )
  }
}

export default AddPassword
