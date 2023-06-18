import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { Form, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = () => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Success send message!");
          toast.success("Success send message!");
        } else {
          console.error(res);
          toast.error("Failed send message!");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed send message!");
      });
  };

  return (
    <section id="contact" className={`${styles.section} p-5 text-center`}>
      <Toaster />
      <h2>
        Contac<span className={styles.underlineTitle}>t Me</span>
      </h2>
      <div className="row py-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Message"
              style={{ height: "100px" }}
              name="message"
              onChange={handleChange}
            />
          </Form.Group>
          <div className="mt-4">
            <Button
              variant="outline-warning"
              className="text-light px-4"
              onClick={handleSubmit}
            >
              Send Message <span className="pl-5">&rarr;</span>
            </Button>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </section>
  );
}
