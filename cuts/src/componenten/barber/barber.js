import React, { Component } from 'react'
import Agenda from './Agenda/agenda'
import Blur from 'react-blur'


class Barber extends Component {
    render() {
        return (
            <div>
                <Blur img='cuts.JPG' blurRadius={5} enableStyles>
                    The content.
</Blur>
                <Agenda />
            </div>
        )
    }
}

export default Barber