import React, { Component } from "react";
import Field from "../common/Fields";
import { withFormik } from "formik";
import * as Yup from 'yup';


const fields = {
  section: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        placeholder: "Your name"
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        placeholder: "Your email"
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        placeholder: "Your phone number"
      }
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        placeholder: "Type your message"
      }
    ]
  ]
};

class Contact extends Component {
  render() {
    return (
      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Me</h2>
              <h3 className="section-subheading text-muted">
              Leave me a message and I promise to reach back to you ASAP
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form
                id="contactForm"
                onSubmit={e=>{
                  return this.props.handleSubmit;
                }}
                name="sentMessage"
                novalidate="novalidate"
              >
                <div className="row">
                  {fields.section.map((section, sectionIndex) => {
                    return (
                      <div className="col-md-6" key={sectionIndex}>
                        {section.map((field, i) => {
                          return (
                            <Field
                              {...field}
                              key={i}
                              value={this.props.values[field.name]}
                              name={field.name}
                              onChange={this.props.handleChange}
                              onBlur={this.props.handleBlur}
                              touched={this.props.touched[field.name]}
                              errors={this.props.errors[field.name]}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button
                      id="sendMessageButton"
                      className="btn btn-primary btn-xl text-uppercase"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phone: "",
    message: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().min(3, "Your name should be atleast 3 characters long").required("Please provide your name"),
    email: Yup.string().email('You need to provide valid email e.g example@something.com').required("Please provide your email."),
    phone: Yup.string().min(10, "Please provide your 10 digit phone number").max(15, "Your phone number is too long").required("Please provide your phone number"),
    message: Yup.string().min(500, "You message should be atleast 500 characters").required("Messsage is required")


  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log("values",values);
    alert("You have submitted the form", JSON.stringify(values));
  }
})(Contact);
