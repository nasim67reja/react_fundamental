import useMyInput from "../hooks/use-myInput";

const BasicForm = (props) => {
  const inputName = useMyInput((value) => value.trim() !== "");
  const inputLastName = useMyInput((value) => value.trim() !== "");
  const inputEmail = useMyInput((value) => value.includes("@"));

  let formIsValid = false;
  if (inputName.isValid && inputLastName.isValid && inputEmail.isValid)
    formIsValid = true;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!inputName.isValid || !inputLastName.isValid || !inputEmail.isValid)
      return;

    inputName.reset();
    inputLastName.reset();
    inputEmail.reset();
  };
  const nameInputClasses = inputName.hasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = inputLastName.hasError
    ? "form-control invalid"
    : "form-control";

  const inputEmailClasses = inputEmail.hasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={inputName.valueChangeHandler}
            onBlur={inputName.inputBlurHandler}
            value={inputName.value}
          />
          {inputName.hasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={inputLastName.valueChangeHandler}
            onBlur={inputLastName.inputBlurHandler}
            value={inputLastName.value}
          />
          {inputLastName.hasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={inputEmail.valueChangeHandler}
          onBlur={inputEmail.inputBlurHandler}
          value={inputEmail.value}
        />
        {inputEmail.hasError && (
          <p className="error-text">Email must be contain @ ..</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
