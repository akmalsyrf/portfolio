import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Akmal Syarifuddin | Junior Fullstack Developer";
  }, []);
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main} id="home">
        <div
          className="row d-flex align-items-center p-lg-5 p-md-3"
          style={{ minHeight: "100vh" }}
        >
          <div className="">
            <h4>Hello, i&apos;m</h4>
            <h1
              className="fw-bold"
              style={{ fontSize: "3rem", textTransform: "uppercase" }}
            >
              Akmal Syarifuddin
            </h1>
            <Typewriter
              options={{
                strings: [
                  "<span style='font-size : 2rem;'>Junior <span class='text-warning'>Fullstack</span> Developer</span>",
                  "<span style='font-size : 2rem;'><span class='text-warning'>Backend</span> Developer</span>",
                  "<span style='font-size : 2rem;'><span class='text-warning'>Frontend</span> Developer</span>",
                  "<span style='font-size : 2rem;'><span class='text-warning'>Mobile</span> Developer</span>",
                  "<span style='font-size : 2rem;'>Infinite <span class='text-warning'>Learner</span></span>",
                  "<span style='font-size : 2rem;'>Professional <span class='text-warning'>Google</span> Searcher</span>",
                  "<span style='font-size : 2rem;'><span class='text-warning'>ChatGPT</span> Prompter</span>",
                ],
                autoStart: true,
                loop: true,
                cursor: "<span style='font-size : 2rem;'>|</span>",
              }}
            />
            <p className="text-secondary pt-3">
              React.js &#8226; Next.js &#8226; React Native &#8226; Node.js
            </p>
            <div className="mt-4">
              <Button variant="outline-warning" className="text-light px-4">
                <Link
                  href="/contact"
                  className="text-decoration-none text-light"
                >
                  Contact Me <span className="pl-5">&rarr;</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className=""></div>
        </div>
      </main>
    </div>
  );
}
