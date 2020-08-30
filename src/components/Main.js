import React from "react";

const Main = ({siteSettings, categories, products}) => {
  const [selectedCategory, setSelectedCategory] = React.useState("")
  const [selectedProducts, setSelectedproducts] = React.useState([])
  
  
  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName)
    };
   
    const filteredProducts = products.filter(
      (product) => product.category === selectedCategory);

  return(
    <div>
    <div id="menu-hero-text">
    {siteSettings.menuHeroText}
  </div>
    <main>
    <section id="categories" className={selectedCategory ? "hidden" : "categoriesclass"}  >
      {categories.map(category => {
        return(
          <button key={category._id} 
          data-trackingid={category.name} 
          className="category" 
          data-category={category.name}
          onClick={() =>  handleCategorySelect(category.name)}
          >
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
    <button 
      id="back-to-main-menu"
      style= {{opacity: selectedCategory ? 1 : 0}}
      onClick={()=>setSelectedCategory("")}>
        &#60; Main Menu 
      </button>
    <section id="products">{filteredProducts.map(product =>{
      return(
        <div 
        key = {product.price_id}
        className = {selectedCategory ? "" : "hidden"} 
        data-priceid={product.price_id}>
        <img src = {product.image} 
        data-trackingid={product.name} 
        alt={product.name}/>  
        <h2>{product.name}</h2>      
       <button data-trackingid={product.name} 
        className = "add-to-cart">
         Add <span className = "currency">{product.currency}</span> 
         ${(product.price_cents / 100).toFixed(2)}</button>
       <p>{product.nutrition} Cal</p>
     </div>
      )
    })}</section> 
  </main>
  </div>
  )} 

  export default Main