// ./src/App.js

import React from 'react';
import FunctionalComp from './Components/FunctionalComp';
import { ClassComp, ClassComp1 } from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter'
import ParentComp from './Components/ParentComp';
import Classprops from './Classprops';

//Importing Functional Prop Files
import FunctionProp from './Functionprops';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>Component Video Tutorials...</h1>

      <FunctionalComp />
      <ClassComp />

      <ClassComp1 />
      <Click />

      <Counter />

      <ParentComp />

      <Classprops name="Learner 1" place="loc 1">
        <p>Child Components</p>
      </Classprops>
      <Classprops name="Learner 2" place="loc 2">
        <button>Click</button>
      </Classprops>
      <Classprops name="Learner 3" place="loc 3"/>

      <FunctionProp name="New Learner" place="Loc x"></FunctionProp>
    </div>
  );
}

export default App;
