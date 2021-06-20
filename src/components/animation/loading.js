import React from "react";
import styled from "styled-components";
import { charade, bluebell } from "../UiColor/detail";

const Loading = styled.div`
    display: flex;
    justify-content: center center;
    font-size:4em;
    margin-top:100px;
    & > div{
        background: ${props => props.Color};
    }
`;

const Dot = styled.div`
    width: 1rem;
    height: 1rem;
    margin: 3.5rem 0.3rem;
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;

    &:nth-child(2) {
        animation-delay: 0.3s;
    }

    &:nth-child(3) {
        animation-delay: 0.6s;
    }
    @keyframes bounce {
    to {
            opacity: 0.3;
            transform: translate3d(0, -1rem, 0);
        }
    }
`;

export default ({ Color }) => {
    console.log(Color);
    return (
        <Loading Color={Color}>
            Loading
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
        </Loading>
    )
}
