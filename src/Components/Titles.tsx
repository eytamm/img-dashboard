import { Card } from 'wix-style-react';
import { classes, st } from './Titles.st.css';

type title_props = {
  title : string
}

const Titles = function(props : title_props) {
  return (
    <Card className={st(classes['card'])}>
      <h1 className={st(classes['title'])}>
        {props.title}
      </h1>
    </Card>
  );
}

export default Titles;