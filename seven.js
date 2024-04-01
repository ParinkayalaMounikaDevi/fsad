import React, {Component} from 'react';
class Loginpage extends Component {
state = {
name: "",
password: "",
gender:"",
Submitted: false,
};
f1 = (event) => {
this.setState({ name: event.target.value })
}
f2  = (event) => {
this.setState({password: event.target.value})
}
Submit = () => {
const { name, password }  = this.state;
if (name === password) {
this.setState({Submit: true });
}else {
    alert('Invalid credentials. Username and password must be the same and non-empty.');
 }
};
render() {
return (
<div>
    <form>
        <label htmlFor="name">Username</label>
        <input type="text" id="name" value={this.state.name} onChange={this.f1}/><br/><br/>
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" value={this.state.password} onChange={this.f2}minLength="10 " required /><br/><br/>
        <input type="submit" value="Submit" onClick={this.Submit} />
        </form>
        {this.state.Submit &&(
        <div>
            <h2>Welcome {this.state.name}</h2>
            </div>
            )}
        </div>
    );
        }
}
export default Loginpage;