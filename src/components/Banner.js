import React, { Component } from 'react'
import styled from 'styled-components'
import BannerNav from './BannerNav'

export default class Banner extends Component {
    render() {
        return (
           <React.Fragment>
            <HeadeWrapper>
                <h1 className="AppNameText">
                    <strong> code 4 job</strong>
                </h1>
                <h5 className="AppNameText">
                    <strong> Design Market Place of Your Wish List</strong>
                </h5>
                <BannerNav/>
            </HeadeWrapper>
           </React.Fragment> 
        )
    }
}

const HeadeWrapper = styled.header`
    background: var(--lightBlue);
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-transform: capitalize;
    box-shadow: 0.0rem 0.05rem 0.9rem var(--lightBlue);
    
`