import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div`
    height: 400px;
    border-radius: 7px;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: transparent;
`;
const Poster = styled.div`
    background-image: url(${props => props.bg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    border-radius: 7px;
`;

export default ({ id, medium_cover_image, isLiked }) => {
    return (
        <Container>
            <Link to={`/${id}`}>
                <Poster key={id} id={id} bg={medium_cover_image}></Poster>
            </Link>
            <button>{isLiked ? "UnLike" : "Like"}</button>
        </Container>
    )
}