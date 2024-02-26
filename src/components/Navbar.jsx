import { stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import { SearchBar } from './SearchBar';

const Navbar = () => (
  
    <stack 
      direction="row" 
      alignitems="center" 
      p={2} 
      sx={{position: 'sticky', background: '#000', top: 0, justifycontent: 'space-between'}}
    >
      <Link to="/" style={{ display: 'flex', alignContent: 'center', }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
    </stack>
  )


export default Navbar