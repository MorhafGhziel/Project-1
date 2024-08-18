import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required().email(),
  age: yup.number().positive().integer().min(18).required(),
  password: yup.string().min(4).max(10).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      {errors.fullName?.message}
      <input type="text" placeholder="Email..." {...register("email")} />
      <input type="number" placeholder="Age..." {...register("age")} />
      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <input type="submit" />
      <hr></hr>
      <p>
        <Link to="/Home">Go to Home</Link>
        Nice job
      </p>
    </form>
  );
};
