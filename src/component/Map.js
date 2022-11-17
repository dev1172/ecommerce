import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default class Map extends Component {
  render() {
    return (
        <center>
          <h1> <Button variant="dark" disabled className='MAP'>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        MAP ....
      </Button></h1>
        <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width="1080" title="Map" height="1080" id="gmap_canvas" src="https://maps.google.com/maps?q=Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        </div>
      </div>
      </center>
    )
  }
}
