import React from 'react'

import greek from '../images/greekSalad.png'
import Bruchetta from '../images/Bruchetta.png'
import LemonDessert from '../images/lemonDessert.png'

function Special() {
    const specials = [
        {
            image: greek,
            title: 'Greek Salad',
            info: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta ChannelSplitterNode, gernished withi crunchy garlic and rosemary croutons.',
            price: '$12.99',
        },
        {
            image: Bruchetta,
            title: 'Bruchetta',
            info: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
            price: '$5.99',
        },
        {
            image: LemonDessert,
            title: 'Lemon Dessert',
            info: `This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.`,
            price: '$5.00',
        },
    ]
  return (
    <div className='specialMap'>
        {specials.map((special) => (
            <div 
                className='special'
            >
                <img 
                    src={special.image} 
                    alt={special.title} 
                    className='specialImage'
                />
                <div 
                    style={{
                        'display': 'flex',
                        'flex-direction': 'column',
                        'justifyContent': 'flex-around',
                        'margin':'5%',
                        'margin-bottom': '10%',
                    }}
                >
                    <div 
                        style={{
                            'display': 'flex',
                            'justifyContent': 'space-between',
                        }}
                    >
                        <h3
                            style={{
                                'color': '#f4ce14',
                                'fontWeight': 'bold',
                            }}
                        >{special.title}</h3>
                        <p>{special.price}</p>
                    </div>
                    <p
                        style={{
                            'margin-top': '15%',
                            'margin-bottom':'15%',
                            'height': '110px',
                        }}
                    >{special.info}</p>
                    <h5
                        style={{
                            'flexGrow':'2'
                        }}
                    >Order a delivery</h5>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Special