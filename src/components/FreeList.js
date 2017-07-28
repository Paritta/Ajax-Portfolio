import React from 'react';
import styled from 'styled-components';
import FreeItem from './FreeItem';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const FreeList = ({data}) => {
    const { items } = data.toJS().data;
    const freeList = items
                        .filter( // 즐겨찾기 필터링
                            item => item.fee === '무료'
                        ).map(
                            (item, index) => (
                                <FreeItem 
                                    item={item}
                                    key={index}
                                />
                            )
                        );

    return (
        <Wrapper>
            {freeList}
        </Wrapper>
    );
};

FreeList.propTypes = {
    data: ImmutablePropTypes.mapContains({
            items: PropTypes.object,
    })
}

const Wrapper = styled.div`
    /* 레이아웃 */
`;

export default FreeList;