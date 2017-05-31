import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectUser} from '../actions/index'

class UserList extends component{

  createListItems(){
     return this.props.users.map((user) => {
       return (
         <li key={user.id}
             onClick={() => this.props.selectUser(user)}
           >
           {user.first} {user.last}
         </li>
       )
     })
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}

// Below is how we connect the component to our data store.


// The mapStateToProps function takes a piece of state which is part of the store and sends into the component as props
function mapStateToProps(state){
  return {
    users: state.users  // this is just taking the users from our store. that is all we want for this componet
  }
}


function matchDispatchToProps (dispatch) {
 return bindActionCreators({selectUser: selectUser}, dispatch)
}

// The connect function below exports the users list and connects to mapStateToProps. Now we are taking the component and making it aware of the applications store (user data). This is what we are exporting. This is now a smart component.
export default connect(mapStateToProps)(UserList)
