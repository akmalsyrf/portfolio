import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Button } from "react-bootstrap";
import NavBar from "../components/NavBar";

export default function About() {
  useEffect(() => {
    document.title = "About - Akmal Syarifuddin";
  }, []);
  const handleDownload = () => {
    fetch("CV-Akmal.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV-Akmal-Syarifuddin.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <section id="about" className={`${styles.section} px-5 pb-5`}>
        <div className="container row p-md-2 p-lg-5">
          <div className="col-md-4 d-sm-flex justify-content-center align-items-end p-5">
            <div className={styles.box}>
              <img
                src="/image/1671364505922.jpg"
                alt="profile"
                style={{
                  width: "12rem",
                  position: "absolute",
                  left: "-20px",
                  top: "-20px",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center text-center px-md-2">
            <div className="">
              <h2 className="text-center mb-3">
                Abou<span className={styles.underlineTitle}>t Me</span>
              </h2>
              <div className="pb-md-5">
                <p>
                  Hello! My name is Akmal Syarifuddin. I'm a Junior Fullstack
                  Developer, and Informatic System Student. I live in Jakarta,
                  Indonesia. I was born in Bekasi on December 29, 2001 (21 years
                  old).
                </p>
                <p>
                  I have experience as a Junior Fullstack Developer. I have an
                  interest in a career as a Back-end Developer (TypeScript and
                  Golang). I&apos;m a fast learner and self-taught. I have
                  learned a lot of new technologies in the past few years by
                  myself on the Internet.
                </p>
              </div>
              <Button variant="warning" onClick={handleDownload}>
                <div className="px-md-3">
                  <span className="pe-md-2">Download Resume</span>
                  <img
                    src="/image/Download.png"
                    alt="donwload"
                    width={30}
                    height={30}
                  />
                </div>
              </Button>
              <div className=""></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
