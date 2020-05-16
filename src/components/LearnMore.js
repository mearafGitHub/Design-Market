import React, { Component } from 'react'
import Intro from './Intro'
import Navbar from './Navbar'

export default class LearnMore extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Intro/>
            </React.Fragment>
        )
    }
}
