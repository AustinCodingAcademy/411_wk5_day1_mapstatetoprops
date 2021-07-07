import {connect} from 'react-redux'; 
import Home from '../components/Home'; 

const mapStateToProps = (state, Home) => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(Home); 