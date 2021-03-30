import React, { Component } from 'react'

export default class Child extends Component {
    
    
    render() {
        console.log(this.props)
        return (
            <div>
                <p>msg: {this.props.msg}</p>
            </div>
        )
    }
}
