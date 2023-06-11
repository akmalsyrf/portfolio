import React from "react";
import styles from "../styles/Home.module.css";
import { Button } from "react-bootstrap";

export default function About() {
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
    <section id="about" className={`${styles.section} p-5`}>
      <h2 className="text-center">
        Abou<span className={styles.underlineTitle}>t Me</span>
      </h2>
      <div className="row p-md-2">
        <div className="col-md-6 d-flex align-items-end p-md-5">
          <div className={styles.box}>
            <img
              src="/image/1671364505922.jpg"
              alt=""
              style={{
                width: "20rem",
                position :'absolute',
                left : '20px',
                top :'-20px',
                borderRadius :'10px'
              }}
            />
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center text-center px-md-2">
          <div className="">
            <div className="pb-md-5">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias et reiciendis illum repellendus eos ex soluta
                voluptatibus odio! Nulla perferendis sint deleniti laudantium
                quas temporibus numquam, itaque dolorem accusantium eos.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias et reiciendis illum repellendus eos ex soluta
                voluptatibus odio! Nulla perferendis sint deleniti laudantium
                quas temporibus numquam, itaque dolorem accusantium eos.
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
  );
}
