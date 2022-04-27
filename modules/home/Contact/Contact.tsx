import { useForm } from "react-hook-form";
import styled from "styled-components";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Subject: ", subject);
    console.log("Message: ", message);
  };
  return (
    <section id="insta" className="py-12 bg-blueGray-100">
      <div className="container mx-auto">
        <h2 className="font-semibold text-4xl text-center mb-2">
          WE'D LOVE TO HEAR FROM YOU
        </h2>
        <p style={{ textAlign: "center", marginBottom: "1rem" }}>
          Fill out the form below and we'll be in touch!
        </p>
      </div>

      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          backgroundColor: "grey",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
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

        <StyledLabel htmlFor="subject">Subject</StyledLabel>
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

        <button type="submit">Submit</button>
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
