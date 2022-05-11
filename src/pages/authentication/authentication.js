import { Link } from "react-router-dom";
import { useState } from "react";

const AuthenticationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sendData = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-xs-center">Login</h1>
            <p className={"text-xs-center"}>
              <Link to={"/register"}>Need an Account?</Link>
            </p>
            <form onSubmit={sendData}>
              <fieldset>
                <fieldset className={"form-group"}>
                  <input
                    type="email"
                    className={"form-control form-control-lg"}
                    placeholder={"Email"}
                    value={email}
                    onChange={(input) => setEmail(input.target.value)}
                  />
                </fieldset>
                <fieldset className={"form-group"}>
                  <input
                    type="password"
                    className={"form-control form-control-lg"}
                    placeholder={"Password"}
                    value={password}
                    onChange={(input) => setPassword(input.target.value)}
                  />
                </fieldset>
              </fieldset>
              <button
                className={"btn btn-lg btn-success pull-xs-right"}
                type={"submit"}
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthenticationPage;
