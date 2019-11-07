import React, { Component } from 'react'

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(' ') : []
    const devices = ['xs', 'sm', 'md', 'lg']
    let classes = ''

    cols ? cols.forEach((item, index) => {
      cols[index] ? classes + `col-${devices[index]}-${cols[index]}` : ''
    }) : null

    return classes
  }

  render() {
    const gridClasses = this.toCssClasses(this.props.cols || 12)

    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}
