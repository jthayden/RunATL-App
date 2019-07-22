import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export default class SingleRoute extends Component {
    state = {
        route: {},
        isEditFormDisplayed: false,
        redirectToHome: false
    }

    componentDidMount() {
        axios.get(`/api/routes/${this.props.match.params.routeId}`)
        .then(res => {
            this.setState({ route: res.data })
        })
    }

    handleInputChange = event => {
        const copiedRoute = {...this.state.route}
        copiedRoute[event.target.name] = event.target.useDebugValue(
            
        this.setState({ route: copiedRoute })
        )
    }

    handleSubmit = event => {
        event.preventDefault()

        axios.put(`/api/routes/${this.state.route._id}`)
        .then(res => {
            this.setState({
                route: res.data,
                isEditFormDisplayed: false
            })
        })
    }

    handleToggleEditForm = () => {
        this.setState(state => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleDeleteRoute = () => {
        axios.delete(`/api/routes/${this.state.route._id}`).then(() => {
            this.setState({ redirectToHome: true })
        })
    }
    
    render() {
        if(this.state.redirectToHome) {
            return <Redirect to='/' />
        }
        return this.state.isEditFormDisplayed ? (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='route-name'>Route Name</label>
                <input
                    type='text'
                    id='route-name'
                    name='name'
                    onChange={this.handleInputChange}
                    value={this.state.route.name}
                />
                <label htmlFor='route-description'>Route Description</label>
                <input
                    type='text'
                    id='route-description'
                    name='name'
                    onChange={this.handleInputChange}
                    value={this.state.route.description}
                />
                <label htmlFor='route-distance'>Route Distance</label>
                <input
                    type='number'
                    name='distance'
                    id='route-distance'
                    onChange={this.handleInputChange}
                    value={this.state.route.distance}
                />
               <label htmlFor='route-rating'>Route Rating</label> 
               <input
                    type='number'
                    name='rating'
                    id='route-rating'
                    onChange={this.handleInputChange}
                    value={this.state.route.rating}
                />
                <input type='submit' value='Update Route'/>
            </form>
        ) : (
            <div>
                <button onClick={this.handleToggleEditForm}>Edit Route</button>
                <button onClick={this.handleDeleteRoute}>Delete Route</button>
                <h2>{this.state.route.name}</h2>
                <p>{this.state.route.description}</p>
                <p>{this.state.route.distance}</p>
                <p>{this.state.route.rating}</p>
            </div>
        )
    }
}
