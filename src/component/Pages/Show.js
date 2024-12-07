import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function Show() {
    const [stu, setStudent] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getData() {
        try {
            const response = await axios.get('http://localhost:8000/');
            setStudent(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="table-responsive">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>SR.NO</th>
                        <th>FIRST_NAME</th>
                        <th>LAST_NAME</th>
                        <th>EMAIL</th>
                        <th>CONTACT</th>
                        <th>ADDRESS</th>
                        <th>CITY</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {stu.map((s, index) => (
                        <tr key={s.id}>
                            <td>{index + 1}</td>
                            <td>{s.fname}</td>
                            <td>{s.lname}</td>
                            <td>{s.email}</td>
                            <td>{s.contact}</td>
                            <td>{s.address}</td>
                            <td>{s.city}</td>
                            <td>
                                <NavLink to={`/update/${s.id}`}>
                                    <button className="btn btn-warning me-2">EDIT</button>
                                </NavLink>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        if (window.confirm('Are you sure you want to delete this student?')) {
                                            // Add delete logic here
                                        }
                                    }}
                                >
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Show;
