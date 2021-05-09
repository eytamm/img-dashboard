import React, { useEffect, useState } from 'react';
import { st, classes } from './app.st.css';
import Header from './Components/header';
import ImgList from './Components/imgList';
import Titles from './Components/titles';
import { getImages, ImageObj } from './Data/fetchApi';

export interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
  const [images, setImages] = useState<ImageObj[]>([]);
  useEffect(() => {
    getImages().then((fetchedImages: ImageObj[]) => {
      setImages(fetchedImages);
    })
  }, [])

  const setUnckecedItem = (imageId: string) => {
    setImages(images.map(image => {
      if (image.thumbnail === imageId) {
        image.checked = !image.checked
      }
      return image;
    }))
  }

  return (
    <main className={st(classes.root, className)}>
      <Header></Header>
      <Titles title="Un-Checked"/>
      <ImgList flag={false} setChecked={setUnckecedItem} images={images}></ImgList>
      <Titles title="Checked"/>
      <ImgList flag={true} setChecked={setUnckecedItem} images={images}></ImgList>
    </main>
  );
};
