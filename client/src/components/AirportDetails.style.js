import { css } from 'styled-components';

const componentStyle = css`
    .airportDetail__button-wrap {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        padding-bottom: 20px;
    }
    .airportDetail__button {
        background-color: #e40000;
        &:hover {
            background-color: #870000;
            underline: none;
        }
    }
`;

export default componentStyle;
