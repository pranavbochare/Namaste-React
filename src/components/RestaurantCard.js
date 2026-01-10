import { CDN_LINK } from "../public/constants";

const RestaurantCard = (props) => {
  console.log("props -----------------> ", props);
  const { brand_name, store_front_brand_image_url, main_offering, sequence } = props.resData;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        alt="image"
        src={
          store_front_brand_image_url ||
          "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2026/1/6/2fc0dc4f-f7f5-4cb6-9d20-0f8b1a377ff1_image74fc4beec07ec448c9c369d30a5eab205.JPG"
        }></img>
      <h5 className="restaurant-name">{brand_name}</h5>
      <h5 className="restaturant-cuisines">{main_offering}</h5>
      <h6 className="price">{sequence * 50 || 150} Rs</h6>
    </div>
  );
};

export default RestaurantCard;
