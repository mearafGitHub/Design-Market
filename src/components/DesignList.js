import React, { Component } from 'react'
import Title from './Title';
import { ShowCaseContextConsumer } from '../ShowCaseContext'
import Design from './Design'
import Navbar from './Navbar'
import Footer from './Footer'

export default class DesignList extends Component {
  render() {
        return ( 
           <React.Fragment>
            <Navbar/>
            <div className = "py-5 px-5">
            <div className="container">
                <Title name="Designs" title="Market"/>
                <div className="row">
                    <ShowCaseContextConsumer> 
                        { value => 
                            {return(value.designs.map( design =>{
                                return <Design key={design.id} design={design} />
                            }));
                            }
                            // console.log(value)
                        }
                    </ShowCaseContextConsumer>
                </div>
            </div>   
            </div>
            <Footer/>
           </React.Fragment>
        );
    }
}
