import "../CSS/Signup.css";
function Signup() {
  return (
    <div className="sign-container">
      <div class="sign-up">
        <h3>Sign-up</h3>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Enter your e-mail" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <button
          onClick={() => {
            return window.alert("This service not available right now");
          }}
        >
          sign-up
        </button>
      </div>
    </div>
  );
}
export default Signup;
