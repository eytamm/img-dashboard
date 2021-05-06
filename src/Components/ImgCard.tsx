import { useState } from 'react';
import { st, classes } from './imgCard.st.css';
import { Card } from 'wix-style-react';
import { IconButton } from 'wix-style-react';
import X from 'wix-ui-icons-common/X';
import Check from 'wix-ui-icons-common/Check';

type img_props =  {
  id: string;
  date: Date;
  checked: boolean;
  setChecked(imageId: string, isChecked: boolean): void;
  thumbnail: string;
  title?: string;
  author: string;
};

const ImgCard = function(props : img_props)
  {

  const [checked, setChecked] = useState(props.checked);
  const signColor: string = checked ? 'green' : 'red';

  function checkHandler() {
    setChecked(!checked)
    props.setChecked(props.id, !checked)
  }

  return (
      <Card className={st(classes['image-card'])}>
        <img
          src={props.thumbnail}
          className={st(classes['image-card-image'])} />
        <a href={props.author}>{props.author}</a>
        <span className={st(classes['image-date'])}>{new Date().toLocaleDateString('en-US')}</span>
        <span className={st(classes[signColor])} onClick={checkHandler}>
        {
          checked ?
            <IconButton priority='secondary' size='large'>
              <Check className={st(classes[signColor])} />
            </IconButton>
            :
            <IconButton priority='secondary' size='large'>
              <X className={st(classes[signColor])} />
            </IconButton>
        }
      </span>
      </Card>
  );
};

export default ImgCard;


// <Card className={st(classes['image-card'])}>
//   <img
//     src='https://images.unsplash.com/photo-1619911087942-74c21c86dedf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
//     className={st(classes['image-card-image'])} />
//   <span> www.wix.com </span>
//   <span>{new Date().toLocaleDateString('en-US')}</span>
//   <span className={st(classes[signColor])} onClick={checkHandler}>
//         {
//           checked ?
//             <IconButton priority='secondary' size='large'>
//               <Check className={st(classes[signColor])} />
//             </IconButton>
//             :
//             <IconButton priority='secondary' size='large'>
//               <X className={st(classes[signColor])} />
//             </IconButton>
//         }
//       </span>
// </Card>
