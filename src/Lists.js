
import { useState, useEffect } from 'react';
import AWS from 'aws-sdk';


const s3 = new AWS.S3();

const params = {
  Bucket: 'myphotoaws',
  Delimiter: '',
};

const Lists = () => {
  const [listFiles, setListFiles] = useState([]);

  useEffect(() => {
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        setListFiles(data.Contents);
        console.log(data.Contents);
      }
    });
  }, []);

  return (
    <div className='card'>
        
      <div className='card-header'><h1>Photos in the Bucket</h1></div>
      <ul className='list-group'>
        {listFiles &&
          listFiles.map((name, index) => (
            <li className='list-group-item' key={index}>
              {name.Key} 
              <a href="https://myphotoaws.s3.amazonaws.com/">{name.key}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Lists;