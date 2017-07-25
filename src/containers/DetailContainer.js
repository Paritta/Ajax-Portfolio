import Detail from '../components/Detail';
import { connect } from 'react-redux';

export default connect(
    (state) => ({
        data: state.request
    })
)(Detail);