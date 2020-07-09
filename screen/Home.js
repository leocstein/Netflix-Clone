/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';

import { StatusBar, Dimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import styled from 'styled-components/native';

import { useSpring, animated } from 'react-spring';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';

import { getLocation, filterByCountry } from '../Services/MovieFilter';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;
const AnimatedPoster = animated(Poster);

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [nationalMovies, setNationalMovies] = useState([]);
  const [name, setName] = useState();
  const moviesJson = require('../assets/Movies.json');

  useEffect(() => {
    const loadingMovies = async () => {
      const moviesJson = require('../assets/Movies.json');
      const position = await getLocation();
      const nationalCountries = await filterByCountry(moviesJson, position);
      setNationalMovies(nationalCountries);
      const nationalCountriesTitles = nationalCountries.map(
        (item, index) => item.Title
      );
      const moviesWithoutNationals = moviesJson.filter((item, index) => {
        return !nationalCountriesTitles.includes(item.Title);
      });
      setMovies(moviesWithoutNationals);
    };

    loadingMovies();
  }, []);

  const posterProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 3000 },
  });
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <AnimatedPoster
          style={posterProps}
          source={require('../assets/poster.jpg')}
        >
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)',
            ]}
          >
            <Header />
            <Hero
              onAssistirPressed={() => {
                props.navigation.navigate('More');
              }}
            />
          </Gradient>
        </AnimatedPoster>
        <Movies label="Recomendados" data={movies} />
        <Movies label="Nacionais" data={nationalMovies} />
        <Movies label="" data={moviesJson} />
      </Container>
    </>
  );
};

export default Home;
