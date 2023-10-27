import AWS from 'aws-sdk';
import config from './awsconfig';

AWS.config.update({
  accessKeyId: config.accessKeyId,
  secretAccessKey: config.secretAccessKey,
  region: config.region,
});

const s3 = new AWS.S3();

export const uploadImageToS3 = (file) => {
  const params = {
    Bucket: config.bucketName,
    Key: file.name,
    Body: file,
    ACL: 'public-read', 
  };
  
  return s3.upload(params).promise();
};
