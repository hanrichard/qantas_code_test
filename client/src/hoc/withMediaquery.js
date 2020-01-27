import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

const withMediaquery = WrappedComponent => props => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 920px)',
    });

    return <WrappedComponent {...props} isDesktopOrLaptop={isDesktopOrLaptop} />;
};

export default withMediaquery;
