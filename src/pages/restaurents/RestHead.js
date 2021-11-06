import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useGlobalLoginContext } from "../../context/LoginContext";
import './RestHead.css';

const RestHead = () => {
  const { rest } = useGlobalLoginContext();

  const router = useRouteMatch();
  const dataFrom = router.params.url;

  const data = rest.map((item) => {
    if (dataFrom === item.url) {
      return item;
    }
    return undefined;
  });
  Object.keys(data).forEach(
    (key) => data[key] === undefined && delete data[key]
  );

  let d;
  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      d = data[i];
    }
  }

  return (
    <div className='rest-head-container'>
      <div className="rest-head-img">
        <img src={d.data.img_url} alt="restaurent name" className='head-image' />
      </div>
      <div className="rest-head-info">
        <div className="rest-head-name">{d.data.restaurent}</div>
        <div className='head-part-2' >
          {d.data.title.map((item, index) => {
            return <span key={index} className='rest-head-items' >{item},</span>;
          })}
        </div>
        <div className='head-part-3'>
            <div className="rest-head-rating">
                <div className='part-3-head'>{d.data.rating}</div>
                <div className='part-3-text'>500+ Ratings</div>
            </div>
            <div className='rest-head-d_time'>
                <div className='part-3-head' >{d.data.d_time} mins</div>
                <div className='part-3-text' >Delivery Time</div>
            </div>
            <div className='rest-head-pricee'>
                <div className='part-3-head' >{d.data.tag}</div>
                <div className='part-3-text' >Cost for Two</div>
            </div>
        </div>
      </div>
      <div className="rest-head-offers">
          <div className='head-offers'>OFFER</div>
          <div>
              <div className='off'>25% off | Use code PARTY</div>
              <div className='off'>25% off up to ₹125 on orders above ₹400 | Use code JUMBO</div>
          </div>
      </div>
    </div>
  );
};

export default RestHead;
