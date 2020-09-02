import {connect} from 'react-redux'; 
import Dashboard from '../components/Dashboard'; 

const mapStateToProps = (state, Dashboard) => {
  return {
    cars: state.cars,
    users: state.users
  }
}

export default connect(mapStateToProps)(Dashboard); 