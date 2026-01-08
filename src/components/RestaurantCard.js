import { CDN_LINK } from "../public/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating, sla } = props.resData;
  return (
    <div className="restaurant-card">
      <img className="restaurant-img" alt="image" src={CDN_LINK + cloudinaryImageId}></img>
      <h5 className="restaurant-name">{name}</h5>
      <h6 className="restaturant-cuisines">{cuisines}</h6>
      <span className="restaurant-rating">{avgRating}</span>
      <h6 className="price">{costForTwo}</h6>
      <p className="delivery-time">{sla.deliveryTime} mins</p>
    </div>
  );
};

export default RestaurantCard;
