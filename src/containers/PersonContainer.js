import { connect } from 'react-redux'
import Person from '../components/Person'


const mapStateToProps = state => ({
    person: state.person
})

export default connect(mapStateToProps)(Person)