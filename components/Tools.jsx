import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import data from "../json/data.json";

export default function Skills() {
  const { tools } = data;
  const [divider, setDivider] = useState(2);
  if (typeof window !== "undefined") {
    useEffect(() => {
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
    }, [window]);
  }
  return (
    <section id="tools" className={`${styles.section} p-5`}>
      <h2 className="text-center">
        Development T<span className={styles.underlineTitle}>ools</span>
      </h2>
      <div className="py-5 text-center">
        {tools.length > 0 &&
          tools.map((dt) => {
            return (
              <>
                <i className={dt.iconClass} style={{ fontSize: "100px" }}></i>
                {dt.id % divider === 0 && <br />}
              </>
            );
          })}
      </div>
    </section>
  );
}
