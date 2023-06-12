import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-5">
      <div className="text-center my-2">
        <Link href="https://github.com/akmalsyrf" className="text-light" target="_blank">
        <i className="devicon-github-original fs-2 m-2"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/akmal-syarifuddin/" className="text-light" target="_blank">
        <i className="devicon-linkedin-plain fs-2 m-2"></i>
        </Link>
        <i className="devicon-twitter-original fs-2 m-2"></i>
      </div>
      <h6 className="text-center">
        Created By <span className="text-warning">Akmal</span> | &#169; 2023 All
        Right Reserved.
      </h6>
    </footer>
  );
}
