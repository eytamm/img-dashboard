import ImgCard from './imgCard';
import './imgList.st.css';
import type { ImageObj } from '../Data/fetchApi';

type ImgListProps = {
  images: ImageObj[];
  setChecked(imageId: string, isChecked: boolean): void;
  flag: boolean;
}

const ImgList = function(props: ImgListProps) {

  const filteredImages = props.images.filter((image) => image.checked === props.flag);

  return (
    <ul>
      {filteredImages.map((image) => {
        return (
          <li key={image.thumbnail}>
            <ImgCard
              id={image.thumbnail}
              setChecked={props.setChecked}
              thumbnail={image.thumbnail}
              author={image.author}
              date={image.date}
              checked={image.checked}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImgList;