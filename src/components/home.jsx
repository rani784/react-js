function Login({ toggleLogin }) {
  return (
    <div className="login-box">
      <h2>Please Login</h2>
 
      <button onClick={toggleLogin}>
        Login
      </button>
    </div>
  );
}
 
export default Login;