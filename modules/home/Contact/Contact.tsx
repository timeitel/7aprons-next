import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { PrimaryButton } from "@components/Button/PrimaryButton";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { postData } from "@utils/postData";

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: ContactForm) => {
    try {
      await postData("api/contact", data);
      reset();
      toast("Thanks for contacting us! We'll be in touch.", {
        position: "bottom-center",
        autoClose: 7500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: "submit-feedback success",
        toastId: "notifyToast",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section id="insta" className="py-12 bg-blueGray-100">
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "grey",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <div className="container mx-auto">
          <h2 className="font-semibold text-4xl text-center mb-2">
            WE'D LOVE TO HEAR FROM YOU
          </h2>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            Fill out the form below and we'll be in touch!
          </p>
        </div>

        <StyledLabel htmlFor="name">Name</StyledLabel>
        {errors.name && (
          <p style={{ color: "firebrick" }}>{errors.name.message}</p>
        )}
        <StyledInput
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
          type="text"
          name="name"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Please enter your name",
            },
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less",
            },
          })}
          className="form-control formInput"
        />

        <StyledLabel htmlFor="email">Email</StyledLabel>
        {errors.email && (
          <p style={{ color: "firebrick" }}>
            Please enter a valid email address
          </p>
        )}
        <StyledInput
          type="email"
          name="email"
          id="email"
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
        />

        <StyledLabel htmlFor="subject">I'm enquiring about</StyledLabel>
        {errors.subject && (
          <p style={{ color: "firebrick" }}>{errors.subject.message}</p>
        )}
        <StyledInput
          type="text"
          name="subject"
          id="subject"
          style={{ display: "block", marginBottom: "1rem", width: "100%" }}
          {...register("subject", {
            required: {
              value: true,
              message: "Please enter a subject",
            },
            maxLength: {
              value: 75,
              message: "Subject cannot exceed 75 characters",
            },
          })}
        />

        <StyledLabel htmlFor="message">Message</StyledLabel>
        {errors.message && (
          <p style={{ color: "firebrick" }}>Please enter a message</p>
        )}
        <textarea
          rows={3}
          name="message"
          id="message"
          style={{
            display: "block",
            marginBottom: "1rem",
            width: "100%",
            borderRadius: "0.25rem",
          }}
          {...register("message", {
            required: true,
          })}
        />

        <PrimaryButton onClick={() => handleSubmit(onSubmit)} fullWidth>
          Submit
        </PrimaryButton>
        <ToastContainer />
      </form>
    </section>
  );
};

export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 0.25rem;
`;
