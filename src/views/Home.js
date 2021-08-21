import React, { Component } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import { Table } from "react-bootstrap";

const pokeFormSchema = Yup.object().shape({
  name: Yup.string("You must specify a name").required("Required"),
});

const pokeFormInitialValues = {
  name: "",
};

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      poke: [],
      badPoke: false,
    };
  }

  handleSubmit = ({ name }) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
            poke: data,
            badPoke: false,
          },
          () => console.log(this.state.poke)
        );
      })
      .catch((error) => {
        this.setState({ badPoke: true });
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Poke Search Information Site</h1>
        {this.state.badPoke ? (
          <small style={{ color: "red" }}>Invalid name</small>
        ) : (
          ""
        )}
        <Formik
          initialValues={pokeFormInitialValues}
          validationSchema={pokeFormSchema}
          onSubmit={(values, { resetForm }) => {
            this.handleSubmit(values);
            resetForm(pokeFormInitialValues);
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "80%", margin: "auto" }}>
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <Field name="Name" className="form-control" />
              {errors.poke && touched.poke ? (
                <div style={{ color: "red" }}>{errors.poke}</div>
              ) : null}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginBottom: "20px" }}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {/* Poke table here */}

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ability</th>
              <th>Base Experience</th>
              <th>Sprite URL</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    );
  }
}
