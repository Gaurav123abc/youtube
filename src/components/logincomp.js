import { Link } from "react-router-dom";
import "../CSS/login.css";

function Logincard() {
  return (
    <div className="body">
      <div className="parent1">
        <form action="">
          <div className="card">
            <div className="section-1">
              <div>
                <Link to="/">
                <img className="logo1" src="https://cdn.discordapp.com/attachments/829976806776897556/1170612671180197959/youtube.png?ex=6559ad01&is=65473801&hm=938d757c6cdca4ecb56fc803f2fa2f9079b011075f0e948a97b6f5937e8c9e11&" alt="" />
                </Link>
              </div>
            </div>
            <div className="section-2">
              <div className="login-1">Email</div>
              <div>
                <label for="Enter Email">
                  <input
                    className="login-box"
                    type="email"
                    placeholder="name@explorin.io"
                    pattern=".+@explorin.io"
                    required
                    title="Enter a valid email of format [name]@explorin.io "
                  />
                </label>
              </div>
            </div>
            <div className="section3">
              <div className="pwd">Password</div>
              <div>
                <input
                  className="pwd-box"
                  type="password"
                  minlength="8"
                  required
                  name="pwd"
                  placeholder="min 8 chars*"
                  id="pwd"
                />
              </div>
            </div>
            <div className="section4">
              <input className="btn" id="sub" type="submit" value="Submit" />
              <input
                onclick="Onreset()"
                className="btn"
                type="reset"
                value="Reset"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Logincard;
