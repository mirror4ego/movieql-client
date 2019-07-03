import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
    <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
            if (loading) return <span>loading</span>;
            if (error) return <span>something happened</span>;
            if (data) {
                console.log(data);
                return data.movies.map(movie =>
                    <h2 key={movie.id}>
                        {movie.title} / {movie.rating}
                    </h2>
                )
            }
        }}
    </Query>
);

export default Home;