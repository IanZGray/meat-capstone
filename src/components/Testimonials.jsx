import React from 'react'
import first from '../images/first.jpg'
import second from '../images/second.jpg'
import third from '../images/third.jpg'
import fourth from '../images/fourth.jpg'

function Testimonials() {
    const tests = [
        {
            img: first,
            name:'Laura',
            par: `Oh boy was this goooo-ooo-ooood :P YUM!`
        },
        {
            img: second,
            name:'Gauc',
            par: `"Dang I did not expect this to be so good. I'm definitely coming back here."`
        },
        {
            img: third,
            name:'Hans',
            par: `"This food was fire! It came packing huge portions too. I don't know how to describe the salad but all I can say is that thing hit different in the best way."`
        },
        {
            img: fourth,
            name:'Peter',
            par: `"I had the fish and was blown away."`
        },
    ]
  return (
    <section
    style={{
        'display':'flex',
        'justifyContent':'space-evenly',
        'backgroundColor': '#495e57',
        'paddingTop':'2%',
        'paddingBottom':'2%',
    }}
    >
        {tests.map((moni) => {
            return <article
                style={{
                    'backgroundColor':'rgba(150,150,150,.5)',
                }}
            >
                    <img src={moni.img} alt={moni.name} style={{
                        'borderTopRightRadius':'5px',
                        'borderTopLeftRadius':'5px',
                        'height':'200px',
                        'width':'300px',
                        'objectFit':'cover'
                    }}/>
                    <p
                        style={{
                            'height': '150px',
                            'width': '300px',
                            'margin':'auto',
                            'marginTop': '25px',
                            'paddingLeft': '10px',
                            'paddingRight': '10px',
                            'textAlign': 'center',
                        }}
                    >{moni.par}</p>
                    <p
                        style={{
                            'height': '15px',
                            'width': '300px',
                            'margin':'auto',
                            'paddingBottom': '25px',
                            'paddingLeft': '10px',
                            'paddingRight': '10px',
                            'textAlign':'right'
                        }}
                    >-{moni.name}</p>
                </article>
        })}
    </section>
  )
}

export default Testimonials