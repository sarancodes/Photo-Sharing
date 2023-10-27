import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload';
import Displays from './Displays';
import Lists from './Lists';
import S3ImageList from './Displayurl';

function App() {
  return (
    <div className="App">
      <ImageUpload />
      <Lists />
      <S3ImageList/>
      <Displays/>
    </div>
  );
}

export default App;
