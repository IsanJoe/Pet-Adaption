import { Link } from 'react-router-dom';
import Logo from '../img/2Logo.svg';


const Pet = (props) => {
    const { name, animal, breed, images, location, id } = props;


    // If walang image yung pet ito yung mag gegenerate!
    let hero = Logo;
    if (images.length) {
        hero = images[0];
    }

    return(
            <Link to={`/details/${id}`}>
                <div className='petResult'>
                    <div className='d-flex flex-column align-items-center'>
                        <img src={hero} alt={name}/>
                        <div>
                            <p className='text-center title mb-0 pb-0 pt-3'>{name}</p>
                            <p className='mt-0 pt-0 text-center fw-bold' style={{color:"black", fontSize:"2vmin"}}>{breed} | <span className='fw-bold' style={{color:"#56a9ec"}}>{animal.toUpperCase()}</span></p>
                            <p className='text-center' style={{color:"black", fontSize:"2.2vmin"}}> <span className='fw-bold'>Location : </span>{location}</p>
                        </div>
                    </div>
                </div>
            </Link>
    )
}

export default Pet;