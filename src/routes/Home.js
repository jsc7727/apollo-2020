import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { subscribe } from "graphql";
import styled from 'styled-components'
import Movie from "../components/Movie";
import Loading from "../components/animation/loading";


const GET_MOVIES = gql`
    query{
        movies{
            id
            medium_cover_image
            isLiked @ client
        }
    }
`;
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
`;
const Header = styled.header`
    background-image:linear-gradient(-45deg, #d754ab,#fd723a);
    height:45vh;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
`;
const Title = styled.h1`
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 20px;
`;
const Subscribe = styled.h3`
    font-size:35px;
`;
const Loading_animate = styled(Loading)`
    font-size:18px;
    opacity:0.5;
    font-weight:500;
    margin-top:10px;
`;
const Movies = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:25px;
    width: 60%;
    position :relative;
    top: -50px;
`;



export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(data)
    return (
        <Container>
            <Header>
                <Title>Apollo 2020</Title>
                <Subscribe>I Love GraphQL</Subscribe>
            </Header>
            {loading && <Loading_animate Color={"black"}>Loading...</Loading_animate>}
            {
                !loading && data.movies &&
                <Movies>
                    {
                        data.movies.map((m, index) =>
                            <Movie
                                key={index}
                                id={m.id}
                                medium_cover_image={m.medium_cover_image}
                                isLiked={m.isLiked}
                            />
                        )
                    };
                </Movies>
            }
        </Container>
    )
}