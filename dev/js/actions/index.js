// the selectUser funtion below is the action creator

export const selectUser = (user) => {
  console.log("You clicked on user: ", user.first)
  return {
    type: "USER_SELECTED",  // the type and payload is the actual action
    payload: user
  }
}
