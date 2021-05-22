import FoodShopItem from './FoodShopItem';

const FoodShopList = (props) => {
  const { shoplinks } = props;
  const { items } = shoplinks;

  const listItems = items.map((item) => {
    return (
      <div className="col col-lg-4 d-flex justify-content-center">
        <FoodShopItem foodShop={item} />
      </div>
    );
  });

  return <ul className="row list-unstyled">{listItems}</ul>;
};

export default FoodShopList;
