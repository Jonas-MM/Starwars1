import React, { Component } from 'react'
import axios from 'axios'
import Alderaan from "../Alderaan.png"

class Home extends Component {
    state = {
        planets: []
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/planets')
        .then(res => {
            console.log(res)
            console.log(this.state)
            this.setState({
                planets: res.data.results.slice(0,5)
                    // planets: res.data.slice(0,5)
            })
        })
    }
    render() {
        const { planets } = this.state;
        const planetList = planets.length ? (
            planets.map(planet =>{
                return (
                    <div className="planet card" key={planet.name}>
                        <img src="" alt=""/>
                        <div className="card-content">
                            <span className="card-title"> { planet.name } </span>
                            <p>Rotation period: {planet.rotation_period} hours </p>
                            <p>Orbital period: {planet.orbital_period} days </p>
                            <p>Diameter: {planet.diameter} m </p>
                        </div>
                    </div>
                )
            })
        ) : (
            // console.log(planets.length),
            <div className="center">No planets yet</div>

        )
        return (
            <div className="container">
                {planetList}
            </div>
        )
    }
}


export default Home
