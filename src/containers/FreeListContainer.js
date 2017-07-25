import FreeList from '../components/FreeList';
import { connect } from 'react-redux';

export default connect(
    (state) => ({
        data: state.request
    })
)(FreeList);