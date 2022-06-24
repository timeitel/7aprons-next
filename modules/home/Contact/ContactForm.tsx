import { PrimaryButton } from "@components/Button/PrimaryButton";
import { postData } from "@utils/postData";
import {
  StyledInput,
  StyledLabel,
  IContactForm,
} from "modules/home/Contact/ContactSection";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

interface Props {}

export const ContactForm: FC<Props> = ({}) => {
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
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
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
        <p style={{ color: "firebrick" }}>Please enter a valid email address</p>
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
  );
};
