import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './Title'
import Paragraf from './Paragraph'
import {CircleButton} from './Button'

export default class Intro extends Component {
    render() {
        return (
            <React.Fragment>
            <Explain>
                <Title className="title align-middle" name="getting" title="started" />
                <div className="row align-self-center d-flex mx-auto px-5">
                <div className="align-self-center mx-auto">
                        <CircleButton>About Us</CircleButton> 
                        <CircleButton>Purchaser Account</CircleButton> 
                        <CircleButton>Vendor Account</CircleButton>
                        <CircleButton>Latest Updates</CircleButton>
                        <CircleButton>Get Free Trial</CircleButton> 
                    </div> 
                </div>

                <div className="explain mx-5">
                <div className="row align-content-center">
                <div className="col mx-auto">
                <div className="col-10 mx-auto">
                
                    <div className="card my-3 mr-0">
                        <h2 className="text-bright"> Purchaser Account Demo</h2>
                        <Paragraf
                        content= "I rest not from my great task To open the Eternal Worlds, to open the immortal Eyes Of Man inwards  into the Worlds of Thought: into Eternity Ever expanding in the Bosom of God, the Human Imagination. - Blake, Jerusalem 5:18-20 "
                        />
                        <Paragraf
                        content= "I rest not from my great task To open the Eternal Worlds, to open the immortal Eyes Of Man inwards  into the Worlds of Thought: into Eternity Ever expanding in the Bosom of God, the Human Imagination. - Blake, Jerusalem 5:18-20 ."
                        />
                        <Paragraf  content= "CERTAIN WORDS in the course of long use gather so many strange connotations that they almost cease to. "
                        />
                        <video src="something" alt="demo-purchaser"/>
                    </div>

                    <div className="card my-3">
                    <h2 className="text-bright"> Designer account demo</h2>
                    <Paragraf
                    content= "I rest not from my great task To open the Eternal Worlds, to open the immortal Eyes Of Man inwards  into the Worlds of Thought: into Eternity Ever expanding in the Bosom of God, the Human Imagination. - Blake, Jerusalem 5:18-20 "
                    />
                    <Paragraf
                    content= "I rest not from my great task To open the Eternal Worlds, to open the immortal Eyes Of Man inwards  into the Worlds of Thought: into Eternity Ever expanding in the Bosom of God, the Human Imagination. - Blake, Jerusalem 5:18-20 ."
                    />
                    <video src="something"/>
                    </div>
                </div>
                </div>
        
                <div className="col-4  mx-3 ml-0 ">
                    <div className="card my-3 mx-5">
                        <h5 className="text-bright"> Purchaser Account Demo</h5>
                        <video src="something" alt="demo-purchaser"/>
                    </div>

                    <div className="card my-3 mx-5">
                        <h5 className="text-bright"> Designer account demo</h5>
                        <video src="something"/>
                    </div>
                </div>
                </div>
            </div> 
            
        </Explain>
        </React.Fragment>
        )
    }
}

const Explain = styled.section`
.explain{
    width:100%;
    margin: 0.9rem 0.9rem;
    align-items:center;
    background: var(--coolWhite);
}
.card{
    align-self:center;
    align-items:center;
    padding: 1.5rem 1.5rem;
    border: transparent;
    background: var(--mainWhite);
    box-shadow: 0.0rem 0.05rem 0.9rem var(--coolGrey);
}
.title{
    margin: 2.5rem 2.5rem;
    padding: 1.5rem 1.5rem;
}
`
