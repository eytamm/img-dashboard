import { Card } from 'wix-style-react';
import {st ,classes} from './Header.st.css';

const Header = function() {

  return (
    <Card className={st(classes['card'])}>
      <h1 className={st(classes['header'])}>
        My Images Dashboard
      </h1>
    </Card>
  );
}

export default Header;