import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import {sanityUrl, sanityQuery} from "./data/Sanity"

const App = () => {
  const[siteSettings, setSiteSettings] = React.useState({
    bagIcon:{asset:{url:""}},
    logo:{asset:{url:""}},
    menuHero:"",
  });
  const[categories,setCategories] = React.useState([]);

  const fetchSanityData = async () =>{
    const response = await fetch(sanityUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query: sanityQuery }),
    });
    const { data } = await response.json();
    setSiteSettings(data.allSiteSettings[0])
    setCategories(data.allCategory)
  };

  console.log(siteSettings, categories)
  React.useEffect(()=>fetchSanityData(),[]);

  return(
  <>
    <Header siteSettings={siteSettings}/>
    <Main siteSettings={siteSettings} categories={categories}/>
  </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
