import React from "react";
import styles from "../styles/Home.module.css";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact" className={`${styles.section} p-5 text-center`}>
      <h2>
        Contac<span className={styles.underlineTitle}>t Me</span>
      </h2>
      <div className="row py-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Name" />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Control placeholder="Email" />
              </Form.Group>
            </div>
          </div>
          <Form.Group className="mb-3">
            <Form.Control placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              placeholder="Message"
              style={{ height: "100px" }}
            />
          </Form.Group>
          <div className="mt-4">
            <Button
              variant="outline-warning"
              className="text-light px-4"
              href="#contact"
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
