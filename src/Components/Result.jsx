import Pet from './Pet'

const Result = ({pets}) => {
    return(
        <div className='mt-5'>
            <div className='featuredPets'>
                <p className='d-flex gap-2 justify-content-center'>
                    <span className='featured'>Featured</span>
                    <span className='pets'>pets</span>
                </p>
                <p className='d-flex gap-2 justify-content-center mt-0 pt-0'>
                    <span className='extend'>Extend your heart to them</span>
                    <span className='heart'><i class="fa fa-heart" aria-hidden="true"></i></span>
                </p>
            </div>

            {!pets.length ? 

            (<div className='container noPetsFound'>
                <div>
                    <p>No Pets Found</p>
                </div>
            </div>) : 

            (<div className='text-center'>
                <div className='container'>
                    {pets.map((pet) => {
                        return (
                            <Pet  
                            animal={pet.animal}
                            key={pet.id}
                            name={pet.name}
                            breed={pet.breed}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                            id={pet.id}
                            />
                        )
                    })}
                </div>
            </div>)
            // (pets.map((pet) => {
            //     return (
                        
            //                 <Pet  
            //                     animal={pet.animal}
            //                     key={pet.id}
            //                     name={pet.name}
            //                     breed={pet.breed}
            //                     images={pet.images}
            //                     location={`${pet.city}, ${pet.state}`}
            //                     id={pet.id}
            //                 />
                        
            //     )
            // }))
            }
        </div>
    )
}

export default Result;