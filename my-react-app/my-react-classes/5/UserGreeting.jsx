import PropTypes from 'prop-types';

function UserGreeting(props){

    return(props.isLoggedIn ?  <h2 className="welcome-message">Welcome {props.username}</h2> : 
                               <h2 className="login-prompt">Please log in to continue</h2>);

}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting