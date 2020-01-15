import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import componentStyle from './Loader.style';

const Wrapper = styled.div`
    ${componentStyle}
`;
const Loader = () => {
    return (
        <Wrapper>
            <CircularProgress size={100} />
        </Wrapper>
    );
};

export default Loader;
