import React, { useState } from 'react';
import { uploadImageToS3 } from './s3service';

function ImageUpload() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const fileInputRef = React.createRef();

  const handleFileUpload = async () => {
    const file = fileInputRef.current.files[0];

    if (file) {
      try {
        const response = await uploadImageToS3(file);
        setUploadedImageUrl(response.Location);
        console.log('Image uploaded:', response.Location);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div>
      <h1>Photo Upload to S3 Bucket</h1>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <button onClick={() => fileInputRef.current.click()}>Upload Image</button>
      {uploadedImageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={uploadedImageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
