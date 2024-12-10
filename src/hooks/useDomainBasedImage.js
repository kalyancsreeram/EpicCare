import { useState, useEffect } from "react";

const useDomainBasedImage = (imageMap, defaultImage) => {
  const [image, setImage] = useState(defaultImage);

  useEffect(() => {
    const hostname = window.location.hostname;

    setImage(imageMap[hostname] || defaultImage);
  }, [imageMap, defaultImage]);

  return image;
};

export default useDomainBasedImage;
