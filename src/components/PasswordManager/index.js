import {Component} from 'react'

import AddPassword from '../AddPassword'
import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {search: '', showPassword: false, passwordCount: 0, passwordList: []}

  addPassword = password => {
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, password],
      passwordCount: prevState.passwordCount + 1,
      showPassword: false,
    }))
  }

  deletePassword = password => {
    const {passwordList} = this.state

    console.log(password)

    const updatedPasswords = passwordList.filter(
      eachPassword => eachPassword !== password,
    )

    this.setState(prevState => ({
      passwordList: updatedPasswords,
      passwordCount: prevState.passwordCount - 1,
    }))
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeSearch = event => {
    const search = event.target.value
    const {passwordList} = this.state

    const filteredData = passwordList.filter(eachWebsite =>
      eachWebsite.website.toLowerCase().includes(search.toLowerCase()),
    )

    this.setState({search, passwordCount: filteredData.length})
  }

  toggleShowPassword = () =>
    this.setState(prevState => ({showPassword: !prevState.showPassword}))

  renderPasswordItems = () => {
    const {passwordList, showPassword, search} = this.state

    const filteredList = passwordList.filter(eachWebsite =>
      eachWebsite.website.toLowerCase().includes(search.toLowerCase()),
    )

    return filteredList.map(passwordDetails => (
      <PasswordItem
        passwordDetails={passwordDetails}
        showPassword={showPassword}
        deletePassword={this.deletePassword}
        key={passwordDetails.id}
      />
    ))
  }

  renderAddPasswordContainer = () => (
    <div className="add-password-container">
      <AddPassword addPassword={this.addPassword} />
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password manager"
        className="password-manager-logo"
      />
    </div>
  )

  renderSavedPasswordsHeader = () => {
    const {search, passwordCount} = this.state

    return (
      <div className="saved-passwords-header">
        <div className="password-count-container">
          <h1 className="password-header-heading">Your Passwords</h1>
          <p className="password-count">{passwordCount}</p>
        </div>

        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="input-images"
          />
          <input
            type="search"
            placeholder="search"
            value={search}
            onChange={this.onChangeSearch}
            className="input-element"
          />
        </div>
      </div>
    )
  }

  renderShowPassword = () => {
    const {showPassword} = this.state
    return (
      <div className="show-password-container">
        <label className="show-password">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={this.toggleShowPassword}
          />
          Show Passwords
        </label>
      </div>
    )
  }

  renderNoPasswordsView = () => (
    <div className="no-passwords-view">
      <img
        className="password-manager-logo"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
      />
      <p className="no-passwords">No Passwords</p>
    </div>
  )

  render() {
    const {passwordCount} = this.state
    return (
      <div className="password-manager-container">
        <div className="password-manager-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        {this.renderAddPasswordContainer()}
        <div className="saved-passwords-container">
          {this.renderSavedPasswordsHeader()}
          <hr className="line" />
          {this.renderShowPassword()}
          {passwordCount > 0 ? (
            <ul className="saved-passwords-section">
              {this.renderPasswordItems()}
            </ul>
          ) : (
            this.renderNoPasswordsView()
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
