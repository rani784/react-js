function Login({ onLogin }) {
    return (
        <div className="login-container">

            <h1>Welcome Back!</h1>

            <p>Please login to continue</p>

            <input
                type="text"
                placeholder="Enter Username"
            />

            <input
                type="password"
                placeholder="Enter Password"
            />

            <button onClick={onLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;