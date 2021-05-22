import React from 'react';
import { contentfulClient } from '../contentful/contentfulClient';
import OnlineFoodCourt from './foods';

export async function getStaticProps() {
  const shoplinks = await contentfulClient.getEntries({
    content_type: 'shoplinks',
  });

  return {
    props: {
      shoplinks,
    },
  };
}

const Home = ({ shoplinks }) => {
  return <OnlineFoodCourt shoplinks={shoplinks} />;
};

export default Home;
