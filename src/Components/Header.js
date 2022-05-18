import React from 'react';
import '../Styles/Header.scss';

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import { dark , light} from '../Theme';
function Header(props) {
    
    const {toggle , toggleChange} = props
    return (
        <div className='header' style={toggle ? dark : light}>
           <h1 className='header__title'>TodoApp</h1> 
           <button>Mevlüt Can</button>
            <button className='header__button' onClick={toggleChange}>
                {toggle ? <Brightness7Icon style={{ fontSize: '30px'}}/> : <Brightness4Icon style={{ fontSize: '30px' , color:'white'}}/>}
            </button>
        </div>
    )
}

export default Header;
