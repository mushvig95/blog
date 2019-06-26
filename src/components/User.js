import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';


class User extends React.Component {
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    render() {
        return this.props.user ? <div>{this.props.user.name}</div> : null  
    }
};

const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(e => e.id === ownProps.userId)};
}

export default connect(mapStateToProps,{fetchUser:fetchUser})(User);