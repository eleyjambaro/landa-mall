import Image from 'next/image';

const FoodShopItem = (props) => {
  const { foodShop } = props;
  const { title, featuredImage, link } = foodShop.fields;

  return (
    <li className="m-2">
      <div
        className="food-shoplink-item card bg-light"
        style={{ width: '18rem' }}
      >
        <div className="card-body">
          <a href={link}>
            <Image
              className="img-fluid"
              src={`https:${featuredImage.fields.file.url}`}
              alt={title}
              width={350}
              height={100}
            />
          </a>
        </div>
        <div className="card-footer">
          <a className="card-link" href={link}>
            Show Menu →
          </a>
        </div>
      </div>
    </li>
  );
};

export default FoodShopItem;
