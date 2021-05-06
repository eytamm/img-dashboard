import React, { useEffect, useState } from 'react';
import { st, classes } from './app.st.css';
import Header from './Components/Header';
import ImgList from './Components/ImgList';
import initialImages from './Data/Data';
import Titles from './Components/Titles';
import { getImagesUrls } from './Data/FetchApi';
import images from './Data/Data';

export interface AppState {
  imagesUrls?: any[];
  images?: any[];
  checked: boolean;
}

export interface AppProps {
  className?: string;
}

export const App: React.VFC<AppProps> = ({ className }) => {
  const [imagesUrls, setImagesUrls] = useState([]);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    getImagesUrls().then((fetchedImagesUrls: any[]) => {
      let i;
      for(i=0; i<fetchedImagesUrls.length ; i++){
        fetchedImagesUrls[i].checked = false;
      }
      // @ts-ignore
      setImagesUrls(fetchedImagesUrls);
    })
  }, [])


  // const [unckeckedImages, setUnckeckedImages] = useState(initialImages.filter((image) => !image.checked))
  // const [checkedImages, setCheckedImages] = useState(initialImages.filter((image) => image.checked))
  // const checked_images = images.filter((image) => image.checked);
  // const unchecked_images = images.filter((image) => !image.checked);


  // const setUnckecedItem = (imageId: string, isChecked: boolean) => {
  //   if (isChecked) {
  //     const image = unckeckedImages.find(image => image.id === imageId);
  //     const newUncheckedImages = unckeckedImages.filter(image => image.id !== imageId);
  //     const newCheckedImages = [...checkedImages, image]
  //     setCheckedImages(newCheckedImages);
  //     setUnckeckedImages(newUncheckedImages);
  //   }
  // }

  const setUnckecedItem = (imageId: string, isChecked: boolean) => {
    const x = imagesUrls.find(image => image.thumbnail === imageId);
    // @ts-ignore
    x.checked = !x.checked;
    setChecked(!checked);
  }

  return (
    <main className={st(classes.root, className)}>
      <Header></Header>
      <Titles title="Un-Checked"/>
      <ImgList flag={false} setChecked={setUnckecedItem} array={imagesUrls}></ImgList>
      <Titles title="Checked"/>
      <ImgList flag={true} setChecked={setUnckecedItem} array={imagesUrls}></ImgList>
    </main>
  );
};
