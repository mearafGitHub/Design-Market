import React, { Component } from 'react'
import Detail from './Details'
import Navbar from './Navbar'

export default class DetailPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Detail/>
            </React.Fragment>
        )
    }
}

