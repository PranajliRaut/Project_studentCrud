import React from 'react'
import './Register.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function Register() {
    const {register,handleSubmit,reset} = useForm()
    const navigate =useNavigate()

    const addData =(data) =>{
        axios.post('http://localhost:8000/',data)
        reset()
        alert('data added Successfully')
        navigate('/show')
    }

  return (
   
       <section class="h-100 bg-dark ">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card card-registration my-4">
          <div class="row g-0">
            <div class="col-xl-6 d-none d-xl-block">
          
            </div>
            <form onSubmit={handleSubmit(addData)}>
            <div class="col-xl-6">
              <div class="card-body p-md-5 text-black">
                <h3 class="mb-5 text-uppercase">INFORMATION FORM </h3>

                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text" id="form3Example1m" class="form-control form-control-lg"{...register('fname')} />
                      <label class="form-label" for="form3Example1m">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div data-mdb-input-init class="form-outline">
                      <input type="text" id="form3Example1n" class="form-control form-control-lg"{...register('lname')} />
                      <label class="form-label" for="form3Example1n">Last name</label>
                    </div>
                  </div>
                </div>

                
                

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example9" class="form-control form-control-lg" {...register('contact')}/>
                  <label class="form-label" for="form3Example9">Contact</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example90" class="form-control form-control-lg" {...register('address')}/>
                  <label class="form-label" for="form3Example90">address</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example99" class="form-control form-control-lg"{...register('city')} />
                  <label class="form-label" for="form3Example99">City</label>
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                  <input type="text" id="form3Example97" class="form-control form-control-lg"{...register('email')} />
                  <label class="form-label" for="form3Example97">Email ID</label>
                </div>

                <div class="d-flex justify-content-end pt-3">
                  <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-light btn-lg">Reset all</button>
                  <button  type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>
               
              </div>
               
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
  )
}

export default Register