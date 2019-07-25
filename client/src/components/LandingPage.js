import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>RunATL</h1>
                <Link to='/neighborhoods'>Find your run...</Link>
                <video autoPlay='true' loop='true'>
                    <source src='images/Runningvideo2.mp4' type='video/mp4'/>
                </video>
            </div>
        )
    }
}
