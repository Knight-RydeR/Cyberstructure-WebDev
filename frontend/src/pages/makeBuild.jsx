// import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddConsultant = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [workingHours, setWorkingHours] = useState('');
    const history = useHistory();
 
    const makeBuild = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/consultant/create',{ //SPECIFY PATH
            name: name,
            email:email,
            speciality: speciality,
            workingHours: workingHours
        });
        history.push("/");
    }
 
    return (
        <div className="Main">
            <form onSubmit={ makeBuild }>
                <div>
                    <label className="label">Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div>
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Emaiil Address"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div>
                    <label className="label">Speciality</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Speciality"
                        value={speciality}
                        onChange={ (e) => setSpeciality(e.target.value) }
                    />
                </div>

                <div>
                    <label className="label">Working Hours</label>
                    <input 
                        className="input"
                        type=""
                        placeholder="Working Hours"
                        value={workingHours}
                        onChange={ (e) => setWorkingHours(e.target.value) }
                    />
                </div>
 
                <div>
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddConsultant