import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPassword, deletePassword} = props
  const {website, username, password} = passwordDetails
  const profile = website[0].toUpperCase()

  const onClickDelete = () => {
    deletePassword(passwordDetails)
  }

  return (
    <li className="password-item">
      <div className="first-container">
        <h1 className="profile-image">{profile}</h1>
        <div className="password-details">
          <p className="password-para">{website}</p>
          <p className="password-para">{username}</p>
          {showPassword ? (
            <p className="password-para">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-image"
            />
          )}
        </div>
      </div>
      <button type="button" className="del-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="input-images"
          onClick={onClickDelete}
        />
      </button>
    </li>
  )
}

export default PasswordItem
