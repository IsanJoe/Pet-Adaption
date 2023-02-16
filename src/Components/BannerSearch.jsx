// import { useState, useEffect } from 'react';
// import Pet from '../Components/Pet';
import { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useBreedList from './useBreedList';
import Result from './Result';
import fetchSearch from "./Fetch/fetchSearch";
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const BannerSearch = () => {

    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });

    // const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    // const [breed, setBreed] = useState("");
    // const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    // useEffect(() => {
    //     requestPets();
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps
      
    // async function requestPets() {
    //     const res = await fetch(
    //       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    //     );
    //     const json = await res.json();
      
    //     setPets(json.pets);
    // }

    return (
        <div>
            <div className="banner">
                <div className="container bannerCon">
                    <div>
                        <p className="parentText">Adopt a true friend</p>
                        <p className="childText">Search adoptable pets from shelters, rescues & private owners.</p>
                        <form onSubmit={(e) => {
                             e.preventDefault();
                             // requestPets();
                             const formData = new FormData(e.target);
                             const obj = {
                             animal: formData.get("animal") ?? "",
                             breed: formData.get("breed") ?? "",
                             location: formData.get("location") ?? "",
                             };
                             setRequestParams(obj);
                        }}>
                            <div className="row d-flex justify-content-lg-evenly justify-content-center">
                                {/* Location */}
                                <div className="col-xl-4 col-lg-5 col-md-6 col-7 me-lg-0 me-md-1 me-sm-0">
                                    <label htmlFor="location">
                                        Location
                                        <br/>
                                        <input 
                                        name='location'
                                         id="location" 
                                        // value={location} 
                                        // onChange={(e) => setLocation(e.target.value)} 
                                        placeholder="Enter a location (i.e Los Angeles)"  />
                                    </label>
                                </div>

                                {/* Animal */}
                                <div className="col-xl-4 col-lg-5 col-md-6 col-7 me-lg-0 me-md-1 me-sm-0 mt-lg-0 mt-3">
                                    <label htmlFor="animal">
                                        Pet Category
                                        <br/>
                                        <select id="animal" name="animal" 
                                        // value={animal} 
                                        onChange={(e) => {
                                            setAnimal(e.target.value);
                                            // setBreed("");
                                        }}
                                        // onBlur={(e) => {
                                        //     setAnimal(e.target.value);
                                        //     setBreed("");
                                        // }}
                                        >
                                            <option/>
                                            {ANIMALS.map((animal) => (
                                                <option key={animal} value={animal}>
                                                    {animal}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>

                                {/* Breed */}
                                <div className="col-xl-4 col-lg-5 col-md-6 col-7 mt-xl-0 mt-3">
                                    <label htmlFor="breed">
                                        Breed
                                        <br/>
                                        <select id="breed" name="breed" 
                                        // value={breed} 
                                        disabled={!breeds.length}
                                        // onChange={(e) => setBreed(e.target.value)}
                                        // onBlur={(e) => setBreed(e.target.value)}
                                        >
                                            <option/>
                                            {breeds.map((breed) => (
                                                <option key={breed} value={breed}>
                                                    {breed}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="d-flex justify-content-center align-items-center gap-2">
                                    <span>
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </span>
                                    <span>
                                        Search
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           <Result pets={pets}/>
        </div>
    )
}

export default BannerSearch;