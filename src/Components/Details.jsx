import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import fetchPet from './Fetch/fetchPet';
import Carousel from './Carousel';

const Details = () => {
    const { id } = useParams();
    const results = useQuery(["details", id], fetchPet);

    if (results.isLoading) {
        return (
            <div className="text-center" style={{marginTop:"25vmin"}}>
                <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
                    <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
                    <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
                    <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                    <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                </svg>
                {/* <h2>🌀</h2> */}
            </div>
        )
    };

    const pet = results.data.pets[0];

    return (
        <div className="container">
            <Carousel images={pet.images} name={pet.name} animal={pet.animal} breed={pet.breed} location={`${pet.city}, ${pet.state}`} description={pet.description}/>
            <div className="detailButton text-center mt-5">
                <button>Adopt {pet.name}</button>
            </div>
            <div className="text-center">
                <p style={{fontSize:"5vmin", fontWeight:"bold", marginTop:"10vmin"}}>Adoption process</p>
                <p style={{fontSize:"2.7vmin"}}>1. Submit application | 2. Interview | 3. Meet the pet | 4. Pay fee | 5. Sign adoption contract</p>
            </div>
        </div>
    )
}

export default Details;