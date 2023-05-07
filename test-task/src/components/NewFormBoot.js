import React from 'react'
import './FormDetails.css'

function NewFormBoot() {
  return (
    <div className='card'>
        <div className='card-header'>
            Details
        </div>
        <div className='card-body'>
 <form className="form-inline">
  <div className="form-group mb-2">
    <label htmlFor="Name">Name</label>
    <input type="text" className="form-control" placeholder="Name" />
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label htmlFor="inputPassword2">Date of Birth : </label>
    <input type="text" className="form-control" placeholder="Date of Birth" />
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label htmlFor="inputPassword2">Sex : </label>
    <input type="text" className="form-control" placeholder="Sex" />
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label htmlFor="inputPassword2">Mobile : </label>
    <input type="text" className="form-control" placeholder="Mobile" />
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label htmlFor="inputPassword2">Government Issued Id</label>
    <input type="text" className="form-control" placeholder="Date of Birth" />
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label htmlFor="inputPassword2">Id Number</label>
    <input type="text" className="form-control" placeholder="Id Number" />
  </div>
  <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
  </form>
</div>
    </div>
   

  )
}

export default NewFormBoot
