import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/images/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum neque
        unde officiis inventore minus corrupti, sapiente voluptas, fugiat
        delectus, quod adipisci quasi dolor ex.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
