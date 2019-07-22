//Step 1 import React, { Component } and axios

import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//Step 2

export default class Neighborhoods extends Component {

    //Step 3
    //Create a state for the component to store view data
    state = {
        neighborhoods: [],
        isNewFormDisplayed: false,
        newNeighborhood: {
            name: '',
            description:''
        }
    }

    /* Step 4
    * Use componentDidMount to retrieve any data to display
    *   Here you can make calls to your local express server
    *   or to an external API
    *   setState can be run here as well
    *   -REMINDER remember `setState` it is an async function
    */
    componentDidMount() {
        this.getAllNeighborhoods()
    }

    getAllNeighborhoods = () => {
        axios.get('/api/neighborhoods')
        .then((res) => {
            this.setState({neighborhoods: res.data})
        })
    }

    handleToggleNewForm = () => {
        this.setState(state => {
            return { isNewFormDisplayed: !state.isNewFormDisplayed }
        })
    }

    handleInputChange = (event) => {
        const copiedNeighborhood = {...this.state.newNeighborhood}
        copiedNeighborhood[event.target.name] = event.target.value

        this.setState({ newNeighborhood: copiedNeighborhood })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        axios.post('/api/neighborhoods', this.state.newNeighborhood).then(() => {
            this.setState({ isNewFormDisplayed: false })
            this.getAllNeighborhoods()
        })
    }


    /* Step 5
    *  The render function manages what is shown in the browser
    *  TODO: delete the jsx returned
    *   and replace it with your own custom jsx template
    *
    */
    render() {
        let neighborhoodsList = this.state.neighborhoods.map(neighborhood => {
            return (
                <Link key={neighborhood._id} to={`/neighborhoods/${neighborhood._id}`}>
                    {neighborhood.name}
                </Link>
            )
        })
        return this.state.isNewFormDisplayed ? (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='new-neighborhood-name'>Neighborhood Name</label>
                <input
                    type='text'
                    name='name'
                    id='new-neighborhood-name'
                    onChange={this.handleInputChange}
                    value={this.state.newNeighborhood.name}
                />
                <label htmlFor='new-neighborhood-description'>Neighborhood Description</label>
                <input
                    type='text'
                    name='description'
                    id='new-neighborhood-description'
                    onChange={this.handleInputChange}
                    value={this.state.newNeighborhood.description}
                />
                <input className='button' type='submit' value='Add New Neighborhood'/>
            </form>
        ) : (
            <div>
                <button onClick={this.handleToggleNewForm}>Create New Neighborhood</button>
                <h1>Neighborhoods</h1>
                <div>{neighborhoodsList}</div>
            </div>
        )
    }
}
