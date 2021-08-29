import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import {generatePalette} from './helpers/colorHelpers';
import PaletteList from "./components/PaletteList";

function App() {

  function findPalette(id) {
    return seedColors.find(palette => palette.id === id)
  }

  return (
    <Switch>
      <Route 
        exact 
        path='/' 
        render={() => <PaletteList palettes={seedColors}/>} 
      />
      <Route 
        exact 
        path='/palette/:id' 
        render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />} />
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
