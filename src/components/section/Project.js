import React from "react";
import "../assets/style/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="project">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://scholar-knot.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/HgjtN2L/zzcc.png"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://scholar-knot.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Scholar Knot</h2>
            <h5>
              Note: May take some time to load first time as hosted on render as
              free tier.
            </h5>
          </a>
          <p>
            Scholar Knot is a comprehensive online platform that enables
            researchers and scholars to showcase their work, connect with
            like-minded individuals, and engage in thought-provoking
            discussions. It serves as a central hub where users can create
            detailed profiles, share their research projects, publications, and
            ongoing work.
          </p>
          <p>
            Used: JavaScript, Node.js, MongoDB, React, Tailwind CSS, Cloudinary,
            JWT
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/utmishr/DocTrac"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/5Fb2WB4/doc.png"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://github.com/utmishr/DocTrac"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Doctrac</h2>
          </a>
          <p>
            Doctrac is a document tracking system that allows users to create
            and track the current status of documents. Users can create
            documents and track their progress as they move through various
            stages and are handled by designated dispatchers and responsible
            authorities.
          </p>
          <p>
            Used: JavaScript, Node.js/Express.js, MongoDB, Redis, HTML/CSS,
            Cloudinary
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/utmishr/TurboTalk"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/9h7BhMW/chat.jpg"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://github.com/utmishr/TurboTalk"
            target="_blank"
            rel="noreferrer"
          >
            <h2>TurboTalk</h2>
          </a>
          <p>
            TurboTalk is a chatbot application built using modern web
            technologies. It leverages the OpenAI API to power the
            conversational AI model with GPT-3.5 Turbo.
          </p>
          <p>Used: React, Node.js, Express.js, OpenAI APIs, CSS</p>
        </div>
        <div className="project">
          <a
            href="https://utmishr.github.io/Luna/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/2Y136xX/dfgsfsfd.png"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://utmishr.github.io/Luna/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Luna</h2>
          </a>
          <p>
            Luna is a spacecraft action game made using the Kaboom.js library.
            This was my initial JavaScript learning project. Happy gaming!
          </p>
          <p>Used: Javascript, Kaboom.js</p>
        </div>
        <div className="project">
          <a
            href="https://github.com/utmishr/Carhire"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://i.ibb.co/z5FXDf8/dsfghsfgsfg.png"
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://github.com/utmishr/Carhire"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Carhire</h2>
          </a>
          <p>
            CarHire is a terminal-based C++ project that provides a simplified
            interface for people to sell and rent cars. It incorporates various
            Object-Oriented Programming (OOP) concepts such as composition,
            aggregation, generalization, inheritance, polymorphism,
            encapsulation, and file handling.
          </p>
          <p>Used: C++, Object Oriented Programming</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
