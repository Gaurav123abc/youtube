import "./loginComponent.css";
function loginComponent() {
    function onSignupClick(e) {
        e.preventDefault();
        const emailInput = document.getElementById("Email");
        const passwordInput = document.getElementById("Password");
        const email = emailInput.value;
        const password = passwordInput.value;
        if(email == "gaurav@gmail.com" && password == "g1234"){
            localStorage.setItem("LoggedIn",true);
            window.location.href ="/";
        }else{
            alert("Email or password wrong")
        }
    }
    
    return (
        <div id="logincd">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="Password" placeholder="Password"></input>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={onSignupClick}  className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default loginComponent;