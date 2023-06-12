import React from "react";
import styles from "../styles/Home.module.css";
import data from "../json/data.json";

export default function Resume() {
  const { experience, academic } = data;
  return (
    <section id="resume" className={`${styles.section} p-5`}>
      <h2 className="text-center">
        <span className={styles.underlineTitle}>Resu</span>me
      </h2>
      <div className="row pt-5">
        <div className="col-md-6 px-3">
          <h4 className="pb-3 text-center">Academic / Non Academic</h4>
          {academic.length > 0 &&
            academic.map((dt, i) => {
              return (
                <div className={styles.resumeWrap} key={i}>
                  <h5 className="fw-bold text-warning">{dt.date}</h5>
                  <h2>{dt.title}</h2>
                  <span
                    style={{
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      fontSize: "12px",
                    }}
                    className="text-warning"
                  >
                    {dt.place}
                  </span>
                  {/* <p className="mt-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p> */}
                </div>
              );
            })}
        </div>
        <div className="col-md-6 px-3">
          <h4 className="pb-3 text-center">Experience</h4>
          {experience.length > 0 &&
            experience.map((dt, i) => {
              return (
                <div className={styles.resumeWrap} key={i}>
                  <h5 className="fw-bold text-warning">{dt.date}</h5>
                  <h2>{dt.title}</h2>
                  <span
                    style={{
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      fontSize: "12px",
                    }}
                    className="text-warning"
                  >
                    {dt.company}
                  </span>
                  {/* <p className="mt-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p> */}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
