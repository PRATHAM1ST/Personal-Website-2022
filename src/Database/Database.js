import { useEffect, useState } from "react";
import { getHomeMedia, getAboutMedia } from "../Database/Firebase";

export function useHomeMedia(){
  const [videos, setVideos] = useState(null);
  const [images, setImages] = useState(null);

  useEffect(() => {
    (async () => {
      const received = await getHomeMedia();
      await setImages(received.Images);
      await setVideos(received.Videos);
    })();
  });

  return [videos, images];
}

export function useAboutMedia(){
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      setImage(await getAboutMedia());
    })();
  }, []);

  return image;
}
