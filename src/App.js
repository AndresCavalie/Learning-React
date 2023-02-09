import "./App.css";
import { PropTypes } from "prop-types";
import { useState } from "react";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem"
import ItemsDisplay from "./ItemsDisplay";
// import styled from "styled-components";



// const Title = styled.h1`
//   color:${(props) => (props.color ? props.color : "black")};
// `;

// const Container = styled.div`

// `

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data)
  }

  const filterData = () => {
    filteredData = [];


    return filteredData;
  }
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="row mt-3"><ItemsDisplay items={data["items"]} /></div>
        <SearchBar updateSearchParams={updateFilters} /></div>
      <div className="row mt-3"> <AddItem addItem={addItemToData} /></div>




    </div>
  );
}

export default App;
