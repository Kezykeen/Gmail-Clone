import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import React from "react";
import "./SendMail.css";
import { useDispatch } from "react-redux";
import { closeMessageModal } from "../../features/mailSlice";
import { db } from "../../firestore";
import firebase from "firebase";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeMessageModal());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close
          className="sendMail_close"
          onClick={() => dispatch(closeMessageModal())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name=""
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail_error">Field is required</p>}
        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <p className="sendMail_error">Field is required</p>}
        <input
          placeholder="Message..."
          className="sendMail_message"
          {...register("message", { required: true })}
        />
        {errors.message && <p className="sendMail_error">Field is required</p>}

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
