import React, { Component } from 'react'
import UpperLeft from './UpperLeft'

export default class Left extends Component {
  render() {
    return (
        <>
            <div className='left'><h4>Left</h4>
            <UpperLeft/>
            <UpperLeft/>
            </div>
        </>
    )
  }
}
