import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits,  Highlight } from "react-instantsearch-hooks-web";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";




const searchClient = algoliasearch(
  "PL5HEFXPXA",
  "4d57086f4fb7e76772ccde229ee7ffdd"
);

function Hit({ hit }) {
  return (
    <article>
      {/* <img src={hit.image} alt={hit.name} /> */}
      <h3>{hit.title}</h3>
      <p>{hit.categories[0]}</p>
      <h1>
        <Highlight attribute="name" hit={hit} />
      </h1>
      {/* <p>${hit.price}</p> */}
    </article>
  );
}



function App() {

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
   }
   
   useEffect(() => {
     var addScript = document.createElement('script');
     addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
     document.body.appendChild(addScript);
     window.googleTranslateElementInit = googleTranslateElementInit;
   }, [])
  return (
    <InstantSearch searchClient={searchClient} indexName="sanity_PORT">
      <NavBar />
      <SearchBox />
      <Hits hitComponent={Hit} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/post" element={<Post />} />
        <Route path="/project" element={<Project />} />
  
     
      </Routes>
    </InstantSearch>
  );
}

export default App;
