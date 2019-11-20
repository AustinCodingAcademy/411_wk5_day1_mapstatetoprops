import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)