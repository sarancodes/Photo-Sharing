
import React, { useState } from 'react';
import AWS from 'aws-sdk';

function TagObjectAsHidden() {
  const [objectKey, setObjectKey] = useState('');
  const [tagged, setTagged] = useState(false);

  const handleTagObject = async () => {
    if (objectKey) {
      try {
        AWS.config.update({
            
    accessKeyId: 'AKIATTU73NOEPC34P4LO',
    secretAccessKey: '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',
    region: 'us-east-1',
        });

        const s3 = new AWS.S3();

        const params = {
          Bucket: 'myphotoaws',
          Key: objectKey,
          Tagging: {
            TagSet: [{ Key: 'hidden', Value: 'true' }],
          },
        };

        await s3.putObjectTagging(params).promise();
        setTagged(true);
        console.log('Object tagged as hidden:', objectKey);
      } catch (error) {
        console.error('Error tagging object as hidden:', error);
      }
    }
  };

  return (
    <div>
      <h1>Hide the Photo</h1>
      <input
        type="text"
        placeholder="Enter object key"
        value={objectKey}
        onChange={(e) => setObjectKey(e.target.value)}
      />
      <button onClick={handleTagObject}>Tag as Hidden</button>
      {tagged && <p>Object has been tagged as hidden.</p>}
    </div>
  );
}

export default TagObjectAsHidden;
