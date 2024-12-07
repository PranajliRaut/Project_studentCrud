import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const { register, handleSubmit, setValue, reset } = useForm();
  const { studentID } = useParams();
  const navigate = useNavigate();

  // Fetch data and populate the form
  async function getData() {
    try {
      const result = await axios.get(`http://localhost:8000/${studentID}`);
      const { fname, lname, email, contact, city } = result.data;
      setValue('fname', fname);
      setValue('lname', lname);
      setValue('email', email);
      setValue('contact', contact);
      setValue('city', city);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    if (studentID) getData();
  }, [studentID]); // Added dependency array to avoid unnecessary re-renders

  // Update form data
  const updateData = async (data) => {
    try {
      await axios.put(`http://localhost:8000/${studentID}`, data);
      alert('Data updated successfully');
      navigate('/show'); // Navigate to the show page
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <form onSubmit={handleSubmit(updateData)}>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5 text-uppercase">Information Form</h3>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                {...register('fname')}
                              />
                              <label className="form-label">First name</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                {...register('lname')}
                              />
                              <label className="form-label">Last name</label>
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            {...register('contact')}
                          />
                          <label className="form-label">Contact</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            {...register('address')}
                          />
                          <label className="form-label">Address</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            {...register('city')}
                          />
                          <label className="form-label">City</label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            {...register('email')}
                          />
                          <label className="form-label">Email ID</label>
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="button"
                            className="btn btn-light btn-lg"
                            onClick={() => reset()}
                          >
                            Reset all
                          </button>
                          <button
                            type="submit"
                            className="btn btn-warning btn-lg ms-2"
                          >
                            Submit form
                          </button>
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
    </div>
  );
}

export default Update;
