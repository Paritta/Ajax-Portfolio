import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes';

class List extends Component {

    render() {

        const { data } = this.props;
        const { items } = data.toJS().data;

        // const itemList = items.map(
        //     (item,key)=>(
        //         <Item
        //              item={item}
        //              key={key}
        //              />
        //     )
        // );

        const itemList = items.map((item, index)=>
            <div key={index}>
                <li>{item.name}</li>
                <li>{index}</li>
            </div>
        );

        return (
            <div>
                 { itemList } 
            </div>
        )
    }
}

List.propTypes = {
    data: ImmutablePropTypes.mapContains({
            items: PropTypes.object,
    })
}

export default List
