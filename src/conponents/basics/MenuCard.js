import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        
        {menuData.map((curElement) => {
          const {id, name, image, description, category}=curElement
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <span className="card-author subtle">
                      {category}
                    </span>
                    <h4 className="card-title">{name}</h4>
                    <span className="card-description subtle" >
                    {`${description.substring(0, 150)}........`}
                      
                    </span>
                    <img
                      src={image}
                      alt="image"
                      className="card-media"
                    />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default MenuCard;
