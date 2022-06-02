import React from 'react'
import CardItem from '../CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these epic destinations!</h1>
            <div className="cards__container">
                <div className="cards__Wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore My History"
                            label="About Me"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Explore some of the github projects I've created this year"
                            label="GitHub Projects"
                            path="/services"
                        />
                    </ul>
                    <ul>
                        <CardItem
                            src="images/img-2.jpg"
                            text="Explore some of the github projects I've created this year"
                            label="GitHub Projects"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards