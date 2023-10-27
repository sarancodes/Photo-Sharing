import React, { useState } from 'react';
import AWS from 'aws-sdk';

const Displays = () => {
  const [image, setImage] = useState('');

  const handleDelete = () => {
    const s3 = new AWS.S3();
    const params = {
      Bucket: 'myphotoaws',
      Key: image,
    };

    s3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Image deleted successfully!');
        setImage('');
      }
    });
  };

  return (
    <div>
      <h1>Delete an Photo from an Amazon S3 Bucket</h1>
      <input
        type="text"
        placeholder="Image name"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      
      <button onClick={handleDelete}>Delete Image</button>
    </div>
  );
};

export default Displays;