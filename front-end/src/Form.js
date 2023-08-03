import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        sdh_id: '',  sdh_type: '', sdh_super: '', bi_address: '',  lbi: '',  email: '',name: '',ad_type:'',
        ad_l1: '', ad_l2: '', ad_l3:'',ad_l4: '', ad_l5: '', st_name: '', build_no:'',post_box: '',post_code:'',
        town_name:'', csb:'',country:''

    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEmailValid) {
            try {
                const response = await fetch('http://localhost:5000/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const data = await response.json();
                console.log(data);
                setIsSubmitted(true); // Set the state to show the success message
            } catch (error) {
                console.error(error);
                // Handle error here
            }
        }
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        setIsEmailValid(isValid);
        handleChange(e);
    };

    return (
        <div>

            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <h4 className="'headline">SDH Participant Details</h4>
                    <div className='container'>
                        <div className='row'>
                            <div className="input-group">
                                <label htmlFor="sdh_id">SDH Participant ID*</label>
                                <input type="text"
                                    id="sdh_id"
                                    name="sdh_id" value={formData.sdh_id} onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="sdh_type">SDH Participant Type*</label>
                                <select name="sdh_type"
                                    type="text"
                                    id="sdh_type" value={formData.sdh_type} onChange={handleChange} required>
                                    <option value="" disabled selected hidden>
                                    </option>
                                    <option value="SDH1">SDH 1</option>
                                    <option value="SDH2">SDH 2</option>
                                </select>
                            </div>
                            <div className="input-group">
                                <label htmlFor="sdh_super">Super Participant ID</label>
                                <input type="text"
                                    id="sdh_super"
                                    name="sdh_super" value={formData.sdh_super} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="bi_address">BIC Address:</label>
                                <input
                                    type="text"
                                    id="bi_address"
                                    name="bi_address"
                                    value={formData.bi_address} onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="lbi">LEI*</label>
                                <input
                                    type="text"
                                    id="lbi"
                                    name="lbi"
                                    value={formData.lbi} onChange={handleChange} required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email Address*</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {!isEmailValid && <div className="error">Please enter a valid email address</div>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="client_id">BR Client ID*</label>
                                <input
                                    type="text"
                                    id="client_id"
                                    name="client_id"
                                    value={formData.client_id} onChange={handleChange} required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="participation_status">Participation Status</label>
                                <select
                                    type="text"
                                    id="participation_status"
                                    name="participation_status"
                                    value={formData.participation_status} onChange={handleChange} required
                                >
                                    {<option value="" disabled selected hidden></option>}
                                    <option value="a">Active</option>
                                    <option value="b">In-Active</option>
                                </select>
                            </div>
                        </div>


                    </div>
                    <h4 className="'headline">Name and Address</h4>
                    <div className="container">
                        
                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="name">Name*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name} onChange={handleChange} required

                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="ad_type">Address Type*</label>
                                <select
                                    name="ad_type"
                                    type="text"
                                    id="ad_type"
                                    value={formData.ad_type} onChange={handleChange} required
                                >
                                    <option value="" disabled selected hidden>
                                        {" "}
                                    </option>
                                    <option value="India">India</option>
                                    <option value="Outside India">Outside India</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="ad_l1">Address Line1</label>
                                <input
                                    type="text"
                                    id="ad_l1"
                                    name="ad_l1"
                                    value={formData.ad_l1} onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="ad_l2">Address Line2</label>
                                <input
                                    type="text"
                                    id="ad_l2"
                                    name="ad_l2"
                                    value={formData.ad_l2} onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="ad_l3">Address Line3</label>
                                <input
                                    type="text"
                                    id="ad_l3"
                                    name="ad_l3"
                                    value={formData.ad_l3} onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="ad_l4">Address Line4</label>
                                <input
                                    type="text"
                                    id="ad_l4"
                                    name="ad_l4"
                                    value={formData.ad_l4} onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="ad_l5">Address Line5</label>
                                <input
                                    type="text"
                                    id="ad_l5"
                                    name="ad_l5"
                                    value={formData.ad_l5} onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="st_name">Street Name*</label>
                                <input
                                    type="text"
                                    id="st_name"
                                    name="st_name"
                                    value={formData.st_name} onChange={handleChange} required
                                />
                                
                            </div>
                            <div className="input-group">
                                <label htmlFor="build_no">Building Number*</label>
                                <input
                                    type="text"
                                    id="build_no"
                                    name="build_no"
                                    value={formData.build_no} onChange={handleChange} required
                                />
                                
                            </div>
                            <div className="input-group">
                                <label htmlFor="post_box">Post Box</label>
                                <input
                                    type="text"
                                    id="post_box"
                                    name="post_box"
                                    value={formData.post_box} onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="post_code">Post Code*</label>
                                <input
                                    type="text"
                                    id="post_code"
                                    name="post_code"
                                    value={formData.post_code} onChange={handleChange} required
                                />
                                
                            </div>
                            <div className="input-group">
                                <label htmlFor="town_name">Town Name*</label>
                                <input
                                    type="text"
                                    id="town_name"
                                    name="town_name"
                                    value={formData.town_name} onChange={handleChange} required
                                />
                                
                            </div>
                            <div className="input-group">
                                <label htmlFor="csb">Country Sub Division*</label>
                                <input
                                    type="text"
                                    id="csb"
                                    name="csb"
                                    value={formData.csb} onChange={handleChange} required
                                />

                            </div>
                        </div>

                        <div className="row">
                            <div className="input-group">
                                <label htmlFor="country">Country*</label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country} onChange={handleChange}
                                />
                                
                            </div>
                        </div>



                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className="success-message">

                    <h3>Hi {formData.name}</h3>
                    <h3>Thank you for your submission!</h3>
                    <p>Your information has been received successfully.</p>
                    <p>We'll get back to you shortly.</p>
                    <p>Have a great day!</p>
                </div>
            )}
        </div>
    );
};

export default Form;
