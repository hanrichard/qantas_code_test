import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

const withMediaquery = WrappedComponent => props => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 920px)',
    });

    return <WrappedComponent {...props} isDesktop={isDesktop} />;
};

export default withMediaquery;
