import React, { Component } from 'react';

class Login extends Component {
    state = {
        registrationNumber: "",
        name: "",
        college: "",
        gender: "",
        hobbies: "",
        Submitted:false,
    };
    f1 = (event) => {
        this.setState({ registrationNumber: event.target.value });
    };
    f2 = (event) => {
        this.setState({ name: event.target.value });
    };
    f3 = (event) => {
        this.setState({ college: event.target.value });
    }
    f4 = (event) => {
        this.setState({ gender: event.target.value });
    };
    f5 = (event) => {
        this.setState({ hobbies: event.target.value });
    };
    Submit = () => {
        this.setState({ Submitted: true });
    };


    render() {
        return (
            <div>
                <form>
                    <label>Regitration Number:</label>
                    <input type="text" id="reg" value={this.state.registrationNumber} onChange={this.f1} />
                    <br></br>
                    <br></br>
                    <label>Name:</label>
                    <input type="text" id="name"  value={this.state.name} onChange={this.f2} />
                    <br></br>
                    <br></br>
                    <lable>College:</lable>
                    <input type="text" id="college" value={this.state.college} onChange={this.f3} />
                    <br></br>
                    <br></br>
                    <label>Gender:</label>
                    <input type="radio" name="gender" id="female" value="female" checked={this.state.gender === "female"}
                        onChange={this.f4}
                    />
                        
                    Female
                    <input type="radio" name="gender" id="male" value="male" checked={this.state.gender === "male"}
                        onChange={this.f4}
                    />Male
                    <br></br>
                    <br></br>
                    <label>Hobbies:</label>
                    <select defaultValue="select" option = "Select" id="hobbies" value={this.state.hobbies} onChange={this.f5}>
                        <option defaultValue="select">select</option>
                        <option value = "Reading">Reading</option>
                        <option value = "Writting">Writting</option>
                        <option value = "Watching TV">Watching TV</option>
                        <option value = "Painting">Painting</option>
                    </select>
                    <br></br>
                    <br></br>
                    <input className="btn btn-primary"type="button" id="sub" value="submit" onClick={this.Submit}/>
                </form>
                {this.state.Submitted &&(
                    <div>
                        <h2 style={{color:'blue'}}>Details Of Student:</h2>
                        <p>Registration Number:{this.state.registrationNumber}</p>
                        <p>Name:{this.state.name}</p>
                        <p>College:{this.state.college}</p>
                        <p>Gender:{this.state.gender}</p>
                        <p>Hobbies:{this.state.hobbies}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Login;