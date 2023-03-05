import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        image: require('../assets/civic-black.jpg'),
        color: 'Crystal Black',
    }
    information = {
        price: 19550,
        engineType: "In-Line",
        displacement: "1996 cc",
        horsePower: '158 @ 6500 rpm',
        torque: '138 lb-ft @ 4200 rpm',
        redline: '6700 rpm'
    }

    renderCar = (imageCar, color) => {
        let newState = {
            image: imageCar, 
            color: color
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className='row m-3'>
                <div className='col-7'>
                    <img style={{ width: '100%' }} alt="" src={this.state.image} />
                    <div className="card text-start">
                        <div className='card-header'>
                            See More LX Featurees
                        </div>
                        <div className='card-body'>
                            <div className='font-weight-bold'></div>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Color</td>
                                        <td>{this.state.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>{this.information.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Engine Type</td>
                                        <td>{this.information.engineType}</td>
                                    </tr>
                                    <tr>
                                        <td>Displacement</td>
                                        <td>{this.information.displacement}</td>
                                    </tr>
                                    <tr>
                                        <td>Horsepower (SAE net)</td>
                                        <td>{this.information.horsePower}</td>
                                    </tr>
                                    <tr>
                                        <td>Torque (SAE net)</td>
                                        <td>{this.information.torque}</td>
                                    </tr>
                                    <tr>
                                        <td>Redline</td>
                                        <td>{this.information.redline}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='card text-start'>
                        <div className='card-header'>
                            Exterior color
                        </div>
                        <div className='card-body'>
                            <div className="row border border-link pt-2 pb-2 mt-2" onClick={() => { this.renderCar(require('../assets/civic-black.jpg'), 'Crystal Black')}} style={{ cursor: 'pointer' }}>
                                <img className="col-2" src={require('../assets/icons/icon-black.jpg')} alt="black_icon" />
                                <div className="col-10">
                                    <h3>Crystal Black</h3>
                                    <p>Pearl</p>
                                </div>
                            </div>
                            <div className="row border border-link pt-2 pb-2 mt-2" onClick={() => { this.renderCar(require('../assets/civic-steel.jpg'), 'Modern Steel') }} style={{ cursor: 'pointer' }}>
                                <img className="col-2" src={require('../assets/icons/icon-steel.jpg')} alt="black_icon" />
                                <div className="col-10">
                                    <h3>Modern Steel</h3>
                                    <p>Metallic</p>
                                </div>
                            </div>
                            <div className="row border border-link pt-2 pb-2 mt-2" onClick={() => { this.renderCar(require('../assets/civic-silver.jpg'), 'Lunar Silver') }} style={{ cursor: 'pointer' }}>
                                <img className="col-2" src={require('../assets/icons/icon-silver.jpg')} alt="black_icon" />
                                <div className="col-10">
                                    <h3>Lunar Silver</h3>
                                    <p>Metallic</p>
                                </div>
                            </div>
                            <div className="row border border-link pt-2 pb-2 mt-2" onClick={() => { this.renderCar(require('../assets/civic-red.jpg'), 'Rallye Red') }} style={{ cursor: 'pointer' }}>
                                <img className="col-2" src={require('../assets/icons/icon-red.jpg')} alt="black_icon" />
                                <div className="col-10">
                                    <h3>Rallye Red</h3>
                                    <p>Metallic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
