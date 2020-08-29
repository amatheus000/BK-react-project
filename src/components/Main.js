import React from "react";

const Main = ({siteSettings, categories}) => {
  return(
    <main>
    <section id="categories">
      {siteSettings.menuHeroText}
      {categories.map(category => {
        return(
          <button key={category._id} data-trackingid="${category.name}" className="category" data-category="${category.name}">
          <img 
            src={category.primaryImage.asset.url}
            alt={category.name}
            data-primaryimage={category.primaryImage.asset.url}
            data-carouselimage={category.carouselImage.asset.url}
          />
          <h2>{category.name}</h2>
        </button>
        )
      })}

    
    </section>
    <button id="back-to-main-menu">&#60; Main Menu</button>
    <section id="products"></section> 
  </main>
  )} 

  export default Main