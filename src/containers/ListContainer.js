import List from '../components/List';
import { connect } from 'react-redux';

export default connect(
    (state) => ({
        data: state.request
    })
)(List);