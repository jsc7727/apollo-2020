import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Loading from "../components/animation/loading";

const GET_MOVIE = gql`
    query getMovies($id: Int!){
        movie(id: $id){
            title
            medium_cover_image
            description_full
        }
    }
`;

const Container = styled.div`
    background-image:linear-gradient(-45deg, #d754ab,#fd723a);
    height:100vh;
    color:white;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    width:100%;
    line-height:3em
`;

const MovieIntro = styled.div`
    width:50%;
    height:50%;
    margin:10vh;
`;
const Title = styled.h1`
    font-size:2.5em;
    margin:10px;
`;


const Description = styled.div`
    font-size:2em;
`;
const Poster = styled.div`
    background-image: url(${props => props.bg});
    height: 50%;
    width: 20%;
    background-size: cover; 
    background-position: center center;
    border-radius: 7px;

`;

export default () => {
    let { id } = useParams();
    id = parseInt(id);
    const { loading, error, data } = useQuery(GET_MOVIE, {
        variables: { id }
    });
    console.log(data)
    return (
        <Container>
            <MovieIntro>
                {loading ? <Loading Color={"white"} /> : (<Title> {data.movie.title} </Title>)}
                <Description> {data?.movie?.description_full} </Description>
            </MovieIntro>
            <Poster bg={data?.movie?.medium_cover_image}></Poster>
        </Container>

    )
}