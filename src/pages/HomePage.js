import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { useHistory } from "react-router";
import Card from "../components/home-comp/Card";
import FilterHead from "../components/home-comp/FilterHead";
import { useGlobalLoginContext } from "../context/LoginContext";
import "./HomePage.css";

const HomePage = () => {
  const { userId, rest } = useGlobalLoginContext();
  const history = useHistory();

  return (
    <div>
      <FilterHead />
      <div className="home-main">
        {rest.map((item, index) => {
          const { img_url, restaurent, title, rating, d_time, tag, urll, food } =
            item.data;

          return (
            <Card key={index}>
              <div onClick={() => history.push(`home${urll}`, food)} className="link-tag">
                <div>
                  <img src={img_url} alt="restaurent" className="res-img" />
                </div>
                <div className="res-text-container">
                  <div className="res-title">{restaurent}</div>
                  <div className="res-category">
                    {title.map((it, index) => {
                      return (
                        <p key={index}>
                          <span className="category-item">{it}</span>
                        </p>
                      );
                    })}
                  </div>
                  <div className="res-bar">
                    <div className="res-rating">
                      <span className="star-icon">
                        <AiFillStar />
                      </span>
                      {rating}
                    </div>
                    <div>{d_time} min</div>
                    <div className="res-price">
                      <span className="rupee-icon">
                        <BiRupee />
                      </span>
                      {tag} FOR TWO
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
