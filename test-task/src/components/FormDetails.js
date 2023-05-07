import React, { useEffect, useState } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "./FormDetails.css";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { bloodGroup, gender, religion } from "./Contents";

function FormDetails() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [country, setCountry] = useState([]);

  const schema = yup.object().shape({
    name: yup.string().required("Name is required to proceed"),
    dob: yup
      .number()
      .positive()
      .integer()
      .required("dob is required to proceed"),
    sex: yup.string().required("gender specification is required to proceed"),
    mobile: yup
      .string()
      .matches(
        /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,
        {
          message: "Invalid Indian Number",
          excludeEmptyString: false,
        }
      ),
    govId: yup.string(),
    idNumber: yup.number().integer(),
    gcontact: yup
      .string()
      .matches(
        /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,
        {
          message: "Invalid Indian Number",
          excludeEmptyString: false,
        }
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    const res = await axios
      .post("http://localhost:5000/post", data)
      .then((res) => {
        setMsg(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    if (msg) {
      setMsg(res.data);
      setTimeout(() => {
        console.log("success");
        navigate("/show");
      }, 2000);
    } else {
      setMsg("error");
    }
  };

  var headers = new Headers();
  headers.append(
    "X-CSCAPI-KEY",
    "aUZoaUp6REFMdmgxVGdMc3YwM3ZtTGFLUWI1aktNclZCNldWdU1waQ=="
  );

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      .then((response) => response.json())
      .then((result) => setCountry(result));
  }, []);

  console.log(country, "from country");

  return (
    <div className="card">
      <div className="card-header">Form Details</div>
      <div className="card-body">
        <div className="formBody">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Container>
              <Row className="mt-1">
                <Form.Label className="label">Personal Details</Form.Label>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">
                      Name<span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control placeholder="Name" {...register("name")} />
                  </Form.Group>
                  <span>
                    <p className="msg">{errors.name?.message}</p>
                  </span>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">
                      Age<span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      placeholder="Date of birth/Age"
                      {...register("dob")}
                    />
                  </Form.Group>
                  <span>
                    <p className="msg">{errors.dob?.message}</p>
                  </span>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">
                      Gender<span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("sex")}
                    >
                      <option>Select your gender</option>

                      {gender.map((item) => (
                        <option value={item.value}>{item.sex}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <span>
                    <p className="msg">{errors.sex?.message}</p>
                  </span>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">Mobile</Form.Label>
                    <Form.Control
                      placeholder="Mobile"
                      {...register("mobile")}
                    />
                  </Form.Group>
                  <span>
                    <p className="msg">{errors.mobile?.message}</p>
                  </span>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">
                      Government Id
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("govId")}
                    >
                      <option>Government Issued Id</option>
                      <option value="adhar">Aadhar</option>
                      <option value="pan">Pan</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">Id Number</Form.Label>
                    <Form.Control
                      placeholder="Issued Id No."
                      {...register("idNumber")}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <hr />
              <Row className="mt-2">
                <Form.Label className="label">Contact Details</Form.Label>
                <Col sm="2">
                  <Form.Group>
                    <Form.Label className="field-label">
                      Guard. Label
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("glabel")}
                    >
                      <option value="Mr">Mr.</option>
                      <option value="Mrs">Mrs.</option>
                      <option value="Ms">Ms</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">
                      Guradian Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Guardian Name"
                      {...register("gaurdian")}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      {...register("gemail")}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">
                      Emergency Contact No.
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder=" Emergency Contact No."
                      {...register("gcontact")}
                    />
                  </Form.Group>
                  <span>
                    <p className="msg">{errors.gcontact?.message}</p>
                  </span>
                </Col>
              </Row>
              <br />
              <hr />
              <Row>
                <Form.Label className="label">Address</Form.Label>
                <Col sm="5">
                  <Form.Group>
                    <Form.Label className="field-label">Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      {...register("address")}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">State</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("state")}
                    >
                      <option>State</option>
                      <option value="MH">MH</option>
                      <option value="UP">UP</option>
                      <option value="MP">MP</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      {...register("city")}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">Country</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("country")}
                    >
                      <option>Country</option>
                      {country.map((item, index) => (
                        <option value={item.id}>{item.name}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">Pin Code</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Pin Code"
                      {...register("pin")}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <hr />
              <Row>
                <Form.Label className="label">Other Details</Form.Label>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">Occupation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Occupation"
                      {...register("occ")}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">Religion</Form.Label>
                    <Form.Select {...register("religion")}>
                      <option>Religion</option>
                      {religion.map((item) => (
                        <option value={item.value}>{item.name}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">
                      Marital Status
                    </Form.Label>
                    <Form.Select {...register("marital")}>
                      <option>Marital Status</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">Blood Group</Form.Label>
                    <Form.Select {...register("blood")}>
                      <option>Blood Group</option>
                      {bloodGroup.map((item) => (
                        <option value={item.value}>{item.group}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label className="field-label">Nationality</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nationality"
                      {...register("nation")}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br />
              <div className="card-footer">
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Button size="lg" variant="outline-success" type="submit">
                      Submit
                    </Button>
                    <Button size="lg" variant="outline-danger" type="submit">
                      Cancel
                    </Button>
                  </Col>
                </Form.Group>
              </div>
            </Container>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FormDetails;
