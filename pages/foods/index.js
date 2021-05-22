import { contentfulClient } from '../../contentful/contentfulClient';
import FoodShopList from '../../components/foodShops/FoodShopList';
import styles from '../../styles/OnlineFoodCourt.module.css';

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

const OnlineFoodCourt = ({ shoplinks }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Online Food Court</h2>
      <p className={styles['sub-title']}>
        Satisfy your cravings with the house of trendy foods, JC!
      </p>

      <FoodShopList shoplinks={shoplinks} />
    </div>
  );
};

export default OnlineFoodCourt;
