import { Link } from 'react-router-dom';
import Logo from '../img/2Logo.svg';

const Header = () => {
    return(
        <div className="header">
            <div className='container'>
                <div className='row d-flex align-items-center pt-3'>
                    <div className='col-4'>
                        <Link to="/">
                            <img src={Logo} alt="CareMe Logo" />
                        </Link>
                    </div>
                    <div className="col-8 d-flex justify-content-end gap-3">
                        <p style={{fontSize:"2.7vmin", fontWeight:"600"}}>Contact Me : (+63) 949-086-1004 | nessanjoeipulan@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
