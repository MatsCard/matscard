import React from 'react';
import Carousel from '@components/Carousel';
import Profile from '@components/Profile';
import ContactMe from '@components/ContactMe';
import BlackBackground from '@components/BlackBackground';
import Socials from '@components/Socials';
import SEO from 'react-seo-component';

const Home = () => (
  <div>
		<SEO
			title="Web developer"
			titleTemplate="Matias Cardone"
			titleSeparator={`-`}
			description={"Hire the bes web developer in Argentina" || 'nothin’'}
		/>
    <Socials />
    <Profile />
    <BlackBackground />
    <Carousel />
    <ContactMe />
  </div>
);

export default Home;
