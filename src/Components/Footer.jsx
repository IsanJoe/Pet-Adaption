import Logo from '../img/2Logo.svg';
import kneesunLogo from '../img/NesLogo.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='row d-flex justify-content-center'>
                <div className='column col-md-6 col-10'>
                    <img src={Logo} alt="" />
                    <p className='pt-3 pb-0 mb-0'>Created by me <span><i class="fa fa-copyright" aria-hidden="true"></i></span> twentytwentythree</p>
                    <p style={{fontSize:"2vmin", fontWeight:"100" , marginBottom:"3vmin"}} className='mt-0 pt-0'>Adopt a best friend. Extend your love and care to them.</p>
                    <div className='footerIcon'>
                        <span><i class="fa fa-facebook-square" aria-hidden="true"></i></span>
                        <span><i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                        <span><i class="fa fa-instagram" aria-hidden="true"></i></span>
                    </div>
                </div>

                <div className='column col-md-6 col-10 mt-md-0 mt-4'>
                    <img src={kneesunLogo} alt="" />
                    <p className='pt-3 mb-0 pb-0'>In Partnership of Kneesun-Ju | IDEAS</p>
                    <p style={{fontSize:"2vmin", fontWeight:"100" , marginBottom:"3vmin"}} className='mt-0 pt-0'>We create and develop for your convenience!</p>
                    <div className='kneesunIcon'>
                        <span><i class="fa fa-globe" aria-hidden="true"></i></span>
                        <span>Visit my page now!</span>
                    </div>
                </div>
            </div>
            <div className='text-center mt-3' style={{background:"#00cba9"}}>
                <p style={{padding:"2vmin", fontSize:"2.5vmin", color:"black"}}>Love your pets. | <span>For inquiries, please contact me thru: +(63) 949-086-1004 | nessanjoeipulan@gmail.com</span></p>
            </div>
        </div>
    )
}

export default Footer;