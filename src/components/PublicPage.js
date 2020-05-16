import React, { Component } from 'react'
import Banner from './Banner'
import Intro from './Intro'
import Footer from './Footer'


export default class PublicPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner/>
                <Intro/>
                <Footer/>
            </React.Fragment>
        )
    }
}
