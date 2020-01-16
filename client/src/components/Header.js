import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import componentStyle from './Header.style';

const Wrapper = styled.div`
    ${componentStyle}
`;

const Header = () => {
    return (
        <Wrapper>
            <AppBar className="Header__appbar">
                <Toolbar>
                    <Container maxWidth="sm">
                        <Typography variant="h6">
                            <Link className="Header__link" to="/">
                                Qantas airport datas
                            </Link>
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </Wrapper>
    );
};

export default Header;
