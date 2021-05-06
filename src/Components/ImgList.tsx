import ImgCard from './ImgCard';
import './ImgList.st.css';

type lst_props = {
  array: any[];
  setChecked(imageId: string, isChecked: boolean): void;
  flag: boolean;
}

const ImgList = function(props: lst_props) {

  const this_arr = props.array.filter((image) => image.checked === props.flag);

  return (
    <ul>
      {this_arr.map((image) => {
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