import React from "react";
import styles from "../styles/Home.module.css";
import data from "../json/data.json";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Projects() {
  const { project } = data;
  return (
    <section id="project" className={`${styles.section} p-5`}>
      <h2 className="text-center">
        <span className={styles.underlineTitle}>Proj</span>ects
      </h2>

      <div className="row pt-5 d-flex justify-content-center">
        {project.length > 0 &&
          project.map((dt, i) => {
            return (
              <div
                className={`${styles.flipCard} col-md-4 p-3 mb-5`}
                key={i}
                tabIndex={0}
              >
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img
                      alt={dt.name}
                      className=""
                      src={dt.img}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className={`${styles.flipCardBack} p-3 text-light`}>
                    <h5 className="text-warning mb-3">{dt.name}</h5>
                    <p>{dt.description}</p>
                    <p className="mt-2">Stack : {dt.stack}</p>
                    <Link
                      href={dt.url}
                      className="text-decoration-none"
                      target="_blank"
                    ><p className="mt-3 text-warning">See Project</p></Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="mt-5 text-center">
        <Button
          variant="outline-warning"
          className="text-light px-4"
          href="https://github.com/akmalsyrf?tab=repositories"
          target="blank"
        >
          See My Another Repo on Github <span className="pl-5">&rarr;</span>
        </Button>
      </div>
    </section>
  );
}
