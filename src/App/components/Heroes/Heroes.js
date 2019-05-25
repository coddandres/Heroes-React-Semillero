import React, { Component } from 'react'
import heroeService from '../../services/heroeService'
import TarjetaHeroe from './components/TarjetaHeroe/TarjetaHeroe';

export class Heroes extends Component {

    state = {
        heroes: []
    }


    componentDidMount() {
        this.setState({
            heroes: heroeService.getHeroes()
        });
    }


    render() {
        const heroes = this.state.heroes;
        return (
            <React.Fragment>
                <h1>Héroes <small>Marvel y DC</small></h1>
                <hr /><hr />

                <div className="card-columns">

                    {/* INICIO TARJETA DE LOS HÉROES */}
                    {heroes.map((heroe, i) => (
                        <TarjetaHeroe
                            heroe={heroe}
                        />
                    )
                    )}
                    {/* FIN TARJETA DE LOS HÉROES */}
                </div>
            </React.Fragment>
        )
    }
}

export default Heroes
