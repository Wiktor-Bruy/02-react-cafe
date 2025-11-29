import { useState } from 'react';
import css from './App.module.css';

import Cafeinfo from '../CafeInfo/CafeInfo.tsx';

function App() {
  return (
    <div className={css.app}>
      <Cafeinfo />
    </div>
  );
}

export default App;
