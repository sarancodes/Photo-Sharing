import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import awsConfig from './awsconfig';

function S3ImageList() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Configure AWS with your access key, secret key, and region
    AWS.config.update({
      accessKeyId: awsConfig.accessKeyId,
      secretAccessKey: awsConfig.secretAccessKey,
      region: awsConfig.region,
    });

    const s3 = new AWS.S3();

    // Define parameters for listing objects in the S3 bucket
    const params = {
      Bucket: awsConfig.bucketName,
    };

    // Fetch and display existing images in the S3 bucket
    const fetchExistingImages = async () => {
      try {
        const response = await s3.listObjectsV2(params).promise();
        const imageKeys = response.Contents.map((obj) => obj.Key);

        // Generate URLs for each image
        const urls = imageKeys.map((imageName) => {
          return `https://${awsConfig.bucketName}.s3.${awsConfig.region}.amazonaws.com/${imageName}`;
        });

        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching existing images:', error);
      }
    };

    fetchExistingImages();
  }, []);

  return (
    <div>
      <h1>Images URL in S3 Bucket</h1>
      <ul>
        {imageUrls.map((imageUrl,index) => (
          <li key={index}>
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              {imageUrl}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default S3ImageList;
