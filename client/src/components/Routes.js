import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Routes extends Component {
    state= {
        routes: [],
        isNewFormDisplayed: false,
        newRoute: {
            name: '',
            description: '',
            distance: '',
            rating: ''
        }
    }

    componentDidMount() {
        this.getAllRoutes()
    }

    getAllRoutes = () => {
        axios.get('/api/routes').then((res) => {
            this.setState({routes: res.data})
        })
    }

    handleToggleNewForm = () => {
        this.setState(state => {
            return { isNewFormDisplayed: !state.isNewFormDisplayed }
        })
    }

    handleInputChange = (event) => {
        const copiedRoute = {...this.state.newRoute}
        copiedRoute[event.target.name] = event.target.value

        this.setState({ newRoute: copiedRoute })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/routes', this.state.newRoute).then(() => {
            this.setState({ isNewFormDisplayed: false })
            this.getAllRoutes()
        })
    }
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
