import React from "react";
import '../App.css';

const Forgot = () => {
    return(
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form>
            <h3>Forgot Password</h3>
            <h4>Forgot your password?</h4><br/>
            <p>Change your password in three easy steps. This will help you to secure your password!</p>
            <ol class="list-unstyled">
                <li>&nbsp;&nbsp;<span>1. </span>&nbsp;Enter your email address below.</li>
                <li>&nbsp;&nbsp;<span>2. </span>&nbsp;Our system will send you a temporary link</li>
                <li>&nbsp;&nbsp;<span>3. </span>&nbsp;Use the link to reset your password</li>
            </ol><br/>
            <div className="mb-3">
                <label>Email address</label>
                <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                required
                />
                <small class="form-text text-muted">Enter the email address you used during the registration on BhookhLagi.com. Then we'll email a link to this address.</small>
            </div>

            <div>
                <a href="https://play.google.com/store/apps" class="main-btn-2">Get New Password</a>
                {/*<button type="submit" className="main-btn-2 "> 
                Get New Password 
                </button>*/}&nbsp;&nbsp;
                <a href="/sign-in" class="main-btn-2">Back to Login</a>
                {/*<button type="submit" className="main-btn-2 "> 
                Back to Login 
                </button>*/}
            </div><br/>

        </form>
        </div>
        </div>
    );
}

export default Forgot;
