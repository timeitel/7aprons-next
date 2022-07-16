import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { PrimaryButton } from "@components/Button/PrimaryButton";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { postData } from "@utils/postData";
import { FC, useState } from "react";
import { BeatLoader } from "react-spinners";

export interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Props {
  title?: string;
  subtitle?: string;
}

export const ContactSection: FC<Props> = ({ title, subtitle }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: IContactForm) => {
    try {
      setLoading(true);
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
      toast("An error ocurred while sending, please try again.", {
        position: "bottom-center",
        autoClose: 7500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: "submit-feedback",
        toastId: "notifyToast",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 bg-blueGray-100">
      <div className="container mx-auto px-6">
        <h2 className="font-bold text-4xl text-center mb-2">
          {title?.toUpperCase() || "WE'D LOVE TO HEAR FROM YOU"}
        </h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          {subtitle || "Fill out the form below and we'll be in touch!"}
        </p>
      </div>

      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "2rem",
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

        <StyledLabel htmlFor="name">Date required</StyledLabel>
        {errors.dateRequired && (
          <p style={{ color: "firebrick" }}>{errors.dateRequired.message}</p>
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

        <StyledLabel htmlFor="name">Number of guests</StyledLabel>
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

        <StyledLabel htmlFor="name">
          Inclusions (choice of protein, sauce, veg and sides)
        </StyledLabel>
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

        <StyledLabel htmlFor="message">Additional comments</StyledLabel>
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
        <PrimaryButton
          onClick={() => handleSubmit(onSubmit)}
          fullWidth
          disabled={loading}
        >
          {loading ? <BeatLoader color="white" /> : "Submit"}
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

const StyledSelect = styled.select`
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  border-radius: 0.25rem;
`;
