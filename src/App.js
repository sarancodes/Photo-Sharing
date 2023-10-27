import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload';
import Displays from './Displays';
import Lists from './Lists';
import S3ImageList from './Displayurl';
import TagObjectAsHidden from './Tagging';

function App() {
  return (
    <div className="App">
      <ImageUpload />
      <Lists />
      <S3ImageList/>
      <Displays/>
      <TagObjectAsHidden/>
    </div>
  );
}

export default App;
