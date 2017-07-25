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
    position: relative; /* 자식 컴포넌트의 크기를 이 컴포넌트의 50% 로 설정하기 위함 */
    display: flex;
    flex-wrap: wrap; /* 공간이 부족하면 다음 줄에 보여줌 */
`;

export default FreeList;