import React from 'react'
import Navbar from '../navbar';

const EntryDetails = (props) => (
	<div>
    <Navbar />
	  <div className="createpage">
	  <h2>Create Event</h2>
        <form>
          <label>Title</label>
          <input onChange={props.handleTitle} className="form-control" type="text" placeholder="Title" />
          <br></br>
          <label>Location</label>
          <input onChange={props.handleLocation} className="form-control" type="text" placeholder="Location"/>
          <br></br>
          <label>Date</label>
          <input onChange={props.handleDate} className="form-control" type="date" id="example"/>
          <br></br>
          <label>Time</label>
          <input onChange={props.handleTime} className="form-control" type="time"/>
          <br></br>
          <label>Description</label>
          <input onChange={props.handleDescription} className="form-control" type="text" placeholder="Description" />
          <br></br>
          <button onClick={props.addFilmsSubmit} className="btn btn-secondary btn-lg textarea">Add Films</button>
        </form>
		</div>
	</div>
)

export default EntryDetails;


// {this.renderStuff()}