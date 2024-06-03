import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context';
import { getImages } from './api';

const Images = () => {
  const [images, setImages] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.accessToken) {
      getImages({ auth })
        .then((response) => {
          console.log('GET IMAGES RESPONSE: ', response);
        })
        .catch((error) => console.log('error: ', error));
    }
  }, [auth.accessToken]);

  return <div></div>;
};

export default Images;
