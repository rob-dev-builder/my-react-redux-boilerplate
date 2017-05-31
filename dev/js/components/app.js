// This compenent is used to layout all the other components
// Remember: A component is just function that returns some HTML

import React from 'react'
import UserList from '../containers/user-list'
require('../../scss/style.scss') // requiring in the css styling


const App = () => (
  <div>
    <h2>Username List:</h2>
    <UserList />
    <hr/>
    <h2>User Details:</h2>
  </div>
)

export default App
