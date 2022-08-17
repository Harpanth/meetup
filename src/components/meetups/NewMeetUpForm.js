import { useRef } from "react";
import Card from "../UI/Card";
import classes from "./NewMeetUpForm.module.css";
function NewMeetUpForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredImageURL = imageInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      address: enteredAddress,
      description: enteredDescription,
      image: enteredImageURL,
    };

    props.onAddMeetup(meetupData);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Title: </label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address"> Address: </label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Description: </label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="image"> Image URL: </label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetUpForm;
