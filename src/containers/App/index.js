import App 								                           from './AppComponent'
import { connect }  					                       from 'react-redux'
import { logout, 
         checkUserAuthentication, 
         newUserAdded, 
         updateLoginErrors, 
         updateSignupErrors }                        from '../../reducers/auth'

const mapStateToProps = (state, ownProps) => {
  const { sessionInfo } = state.auth || {}
  const isAuthenticated = Object.keys(sessionInfo).length > 0
  
  return {
    isAuthenticated
  }
}

const mapDispatchToProps = dispatch => ({
  logout(routerHistory){
  	return dispatch(logout(routerHistory))
  },
  checkUserAuthentication(){
  	return dispatch(checkUserAuthentication())
  },
  newUserAdded(str){
    return dispatch(newUserAdded(str))
  },
  updateSignupErrors(err){
    return dispatch(updateSignupErrors(err))
  }, 
  updateLoginErrors(err){
    return dispatch(updateLoginErrors(err))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)