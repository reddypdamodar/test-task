import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Schema";
import "./Form.css";
import React from "react";
import { Link } from "react-router-dom";

export const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    props.loaddata(data);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <p className="sectionname">Personal data</p>
        <div className="row">
          <label htmlFor="name" className=" form-label-sm col-1 ">
            Name<span className="required">*</span>
          </label>
          <div className="col-4">
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter name"
              {...register("fullName")}
            />
            <p>{errors.fullName?.message}</p>
          </div>
          <label htmlFor="age" className=" form-label-sm col-1 ">
            Date of Birth or Age<span className="required">*</span>
          </label>
          <div className="col-3">
            <input
              type="text"
              placeholder="DD/MM/YYYY or Age in years"
              {...register("age")}
              id="age"
              className="form-control"
            />
            <p>{errors.age?.message}</p>
          </div>{" "}
          <label htmlFor="sex" className=" form-label-sm col-1 select-label ">
            Sex<span className="required">*</span>
          </label>
          <div className="col-2 dropdown">
            <select id="sex" className="form-control " {...register("sex")}>
              <option value="">Enter Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="Transgender">Transgender</option>
              <option value="notdisclosed">Prefer not to respond</option>
            </select>
            <p>{errors.sex?.message}</p>
          </div>
        </div>

        <div className="row">
          <label htmlFor="Mobile" className=" form-label-sm col-1 ">
            Mobile
          </label>
          <div className="col-3 ">
            <input
              type="text"
              id="Mobile"
              className="form-control"
              placeholder="Enter Mobile"
              {...register("mobile")}
            />
            <p>{errors.mobile?.message}</p>
          </div>
          <label htmlFor="Govtid" className=" form-label-sm col-1 offset-1 ">
            Govt Issued ID
          </label>
          <div className="col-2 ">
            <select
              id="Govtid"
              className="form-control"
              type="number"
              {...register("Idtype")}
            >
              <option value="">ID Type</option>
              <option value="aadhar">Aadhar</option>
              <option value="pan">PAN</option>
            </select>
            <p>{errors.Idtype?.message}</p>
          </div>{" "}
          <div className="col-4 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter govt ID"
              {...register("govtID")}
            />
            <p>{errors.govtID?.message}</p>
          </div>
        </div>
        <p className="sectionname">Contact Details</p>
        <div className="row">
          <label htmlFor="guardian" className=" form-label-sm col-1  ">
            Guardian Details
          </label>
          <div className="col-1 ">
            <select
              id="guardian"
              className="form-control"
              {...register("Guardiantype")}
            >
              <option value="">Enter Label</option>
              <option value="Mr">Mr.</option>
              <option value="Ms">Ms.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Dr">Dr.</option>
              <option value="Prof">Prof.</option>
            </select>
            <p>{errors.Guardiantype?.message}</p>
          </div>{" "}
          <div className="col-3 ">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Guardian name"
              {...register("Guardianname")}
            />
            <p>{errors.Guardianname?.message}</p>
          </div>
          <label htmlFor="email" className=" form-label-sm col-1 ">
            Email
          </label>
          <div className="col-2">
            <input
              type="text"
              placeholder="Enter Email"
              {...register("email")}
              id="email"
              className="form-control"
            />
            <p>{errors.email?.message}</p>
          </div>{" "}
          <label htmlFor="contact" className=" form-label-sm col-2 ">
            Emergency contact number
          </label>
          <div className="col-2 ">
            <input
              type="text"
              id="contact"
              className="form-control"
              placeholder="Enter Mobile"
              {...register("contact")}
            />
            <p>{errors.contact?.message}</p>
          </div>
        </div>

        <p className="sectionname">Address details</p>
        <div className="row">
          <label htmlFor="Address" className=" form-label-sm col-1 ">
            Address
          </label>
          <div className="col-4">
            <input
              type="text"
              id="Address"
              className="form-control"
              placeholder="Enter Address"
              {...register("Address")}
            />
            <p>{errors.Address?.message}</p>
          </div>
          <label htmlFor="State" className=" form-label-sm col-1 ">
            State
          </label>
          <div className="col-3">
            <input
              type="text"
              placeholder="Enter State"
              {...register("State")}
              id="State"
              className="form-control"
            />
            <p>{errors.State?.message}</p>
          </div>{" "}
          <label htmlFor="City" className=" form-label-sm col-1 ">
            City
          </label>
          <div className="col-2">
            <input
              type="text"
              placeholder="Enter city"
              {...register("State")}
              id="City"
              className="form-control"
            />
            <p>{errors.City?.message}</p>
          </div>{" "}
        </div>

        <div className="row">
          <label htmlFor="Country" className=" form-label-sm col-1 ">
            Country
          </label>
          <div className="col-3">
            <input
              {...register("Country")}
              id="Country"
              className="form-control"
              value={"India"}
            />
            <p>{errors.Country?.message}</p>
          </div>{" "}
          <label htmlFor="Pincode" className=" form-label-sm col-1 offset-1">
            Pincode
          </label>
          <div className="col-2">
            <input
              type="text"
              placeholder="Enter Pincode"
              {...register("State")}
              id="Pincode"
              className="form-control"
            />
            <p>{errors.Pincode?.message}</p>
          </div>{" "}
        </div>

        <p className="sectionname">Other details</p>
        <div className="row">
          <label htmlFor="Occupation" className=" form-label-sm col-1 ">
            Occupation
          </label>
          <div className="col-2">
            <input
              type="text"
              id="Occupation"
              className="form-control"
              placeholder="Enter Occupation"
              {...register("Occupation")}
            />
            <p>{errors.Occupation?.message}</p>
          </div>
          <label htmlFor="Religion" className=" form-label-sm col-1  ">
            Religion
          </label>
          <div className="col-2 ">
            <select
              id="Religion"
              className="form-control"
              {...register("Religion")}
            >
              <option value="">Enter Religion</option>
              <option value="Hindu">Hinduism</option>
              <option value="Muslim">Islam</option>
              <option value="Christian">Christianity</option>
              <option value="Sikhism">Sikhism</option>
              <option value="jainism">jainism</option>
              <option value="other">other</option>
            </select>
            <p>{errors.Religion?.message}</p>
          </div>{" "}
          <label htmlFor="Marital" className=" form-label-sm col-1  ">
            Marital status
          </label>
          <div className="col-2 ">
            <select
              id="Marital"
              className="form-control"
              {...register("Marital")}
            >
              <option value="">Enter Marital status</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
            </select>
            <p>{errors.Marital?.message}</p>
          </div>{" "}
          <label htmlFor="Blood" className=" form-label-sm col-1  ">
            Blood Group
          </label>
          <div className="col-2 ">
            <select id="Blood" className="form-control" {...register("Blood")}>
              <option value="">Group</option>

              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <p>{errors.Blood?.message}</p>
          </div>{" "}
        </div>
        <div className="row">
          <label htmlFor="Nationality" className=" form-label-sm col-1 ">
            Nationality
          </label>
          <div className="col-3">
            <input
              {...register("Nationality")}
              id="Nationality"
              className="form-control"
              value={"India"}
            />
            <p>{errors.Nationality?.message}</p>
          </div>{" "}
        </div>
        <div className="flexmo">
          <button type="reset" className="btn btn-outline-danger gap">
            {" "}
            Cancel
          </button>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
        {/* <input type="submit" /> */}
      </form>
      <Link className="btn btn-primary" to={"/fetchdata"}>
        Fetch data
      </Link>
    </React.Fragment>
  );
};
