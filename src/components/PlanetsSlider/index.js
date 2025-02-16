import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="main-page-bg-container">
      <h1 className="planet-heading">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings} className="slider">
          {planetsList.map(eachPlanet => (
            <PlanetItem planet={eachPlanet} key={eachPlanet.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
