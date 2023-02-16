import { Component } from 'react';
import Logo from '../img/2Logo.svg'

class Carousel extends Component {
    state = {
        active: 0,
    };

    static defaultProps = {
        images: [{Logo}],
    };

    handleIndexClick = event => {
        this.setState({
          active: +event.target.dataset.index
        });
      };

    render() {
        const { active } = this.state;
        const { images, name, animal, breed, location, description } = this.props;
        return (
            <div className='container mt-3'>
                <p className='text-center mb-4' style={{fontSize:"5vmin", fontWeight:"bold"}}>Pet Information</p>
              <div className='carouselSmall d-flex justify-content-center gap-4 mb-5'>
                {images.map((photo, index) => (
                  // eslint-disable-next-line
                  <img
                    onClick={this.handleIndexClick}
                    data-index={index}
                    key={photo}
                    src={photo}
                    className={index === active ? "active" : ""}
                    alt="animal thumbnail"
                  />
                ))}
              </div>

              <div className='carouselDetail row d-flex justify-content-center align-items-center'>
                <div className='col-lg-5 col-10 text-center'>
                    <img src={images[active]} alt="animal" />
                </div>
                <div className='carouselInfo col-lg-5 col-10 mt-lg-0 mt-4'>
                    <p className='name mb-0 pb-0'>Hi! My name is {name}</p>
                    <p className='breed mt-0 pt-0 pb-0 mb-0'>{breed} | {animal}</p>
                    <p className='location mt-0 pt-0'>{location}</p>
                    <p className='description'>{description}</p>
                </div>
              </div>
              
            </div>
          );
        }
}

export default Carousel;