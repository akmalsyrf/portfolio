import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import data from "../json/data.json";
import NavBar from "../components/NavBar";

export default function Skills() {
  const { tools } = data;
  const [divider, setDivider] = useState(2);
  useEffect(() => {
    document.title = "Tools - Akmal Syarifuddin";
    const width = window.innerWidth;

    if (width >= 900) {
      setDivider(8);
    } else if (width >= 900) {
      setDivider(6);
    } else if (width >= 700) {
      setDivider(4);
    } else if (width >= 600) {
      setDivider(5);
    } else if (width >= 768) {
      setDivider(3);
    }
  }, []);
  // }
  return (
    <div className={styles.container}>
      <NavBar />
      <section id="tools" className={`${styles.section} p-5`}>
        <h2 className="text-center">
          Development T<span className={styles.underlineTitle}>ools</span>
        </h2>
        <div className="py-5 text-center">
          {tools.length > 0 &&
            tools.map((dt, i) => {
              return (
                <span key={i}>
                  <i className={dt.iconClass} style={{ fontSize: "100px" }}></i>
                  {dt.id % divider === 0 && <br />}
                </span>
              );
            })}
        </div>
      </section>
    </div>
  );
}
