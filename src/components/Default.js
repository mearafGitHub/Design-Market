import React, { Component } from 'react'
import Title from './Title'

export default class Default extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className="row">
                <div className="col-10 mx-auto pt-5 text-capitalize">
                    <Title name = "404 error" title = "Page Not Found" />
                </div>
                
                <div className="col-10 mx-auto pt-5 text-capitalize d-inline align-items-center">
                    <Title name = "Sorry the requested url" title = {this.props.location.pathname} />
                    <Title name = "is not found"/>
                </div>
            </div>
            
        )
    }
}
