// @author: Amir Armion
// @version: V.01

import "./showcase.css";
import { useStore } from "./store.js";
import { v4 as uuidv4 } from "uuid";

// CardShowCase Component
export default function CardShowCase() 
{
  const {
    fullName,
    aboutMe,
    githubURL,
    twitterURL,
    technologies,
    favouriteBooks
  } = useStore();

  return (
    <div className="pageBody">
      <main className="has-dflex-center">
        <section>
          <div className="lx-container-85">
            <div className="lx-row align-stretch">
              <div className="lx-column is-3">
                <div className="lx-row">
                  <div className="lx-card">
                    <div className="lx-row">
                      <div className="has-dflex-center bs-md pic">
                        <img src={githubURL + ".png"} alt={fullName} />
                      </div>

                      <div className="infos">
                        <span>
                          <i className="fas fa-user-circle"></i>&nbsp;&nbsp;{" "}
                          {fullName}
                        </span>

                        <span>
                          <i className="fas fa-briefcase"></i>&nbsp;&nbsp; Full
                          Stack Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lx-card">
                    <div className="lx-row">
                      <h1 className="title">
                        Connect with {fullName.split(" ")[0]}
                      </h1>
                      <div className="mini-cards">
                        <a
                          className="has-dflex-center bs-md"
                          href={githubURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github-alt"></i>
                        </a>

                        <a
                          className="has-dflex-center bs-md"
                          href={twitterURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lx-column">
                <div className="lx-row">
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-info-circle"></i>&nbsp;Welcome to{" "}
                      {fullName.split(" ")[0]}'s corner of the Internet
                    </h1>
                  </div>

                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div className="text">
                      <p>{aboutMe}</p>
                    </div>
                  </div>

                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div className="mini-cards">
                      {technologies.map((tech) => {
                        if (tech === "HTML") 
                        {
                          return (
                            <span
                              className="has-dflex-center bs-md"
                              title="HTML"
                              key={uuidv4()}
                            >
                              <i className="fab fa-html5"></i>
                            </span>
                          );
                        } 
                        else if (tech === "CSS") 
                        {
                          return (
                            <span
                              className="has-dflex-center bs-md"
                              title="CSS"
                              key={uuidv4()}
                            >
                              <i className="fab fa-css3-alt"></i>
                            </span>
                          );
                        } 
                        else if (tech === "JS") 
                        {
                          return (
                            <span
                              className="has-dflex-center bs-md"
                              title="JS"
                              key={uuidv4()}
                            >
                              <i className="fab fa-js"></i>
                            </span>
                          );
                        } 
                        else if (tech === "Git") 
                        {
                          return (
                            <span
                              className="has-dflex-center bs-md"
                              title="Git"
                              key={uuidv4()}
                            >
                              <i className="fab fa-git-alt"></i>
                            </span>
                          );
                        } 
                        else if (tech === "React") 
                        {
                          return (
                            <span
                              className="has-dflex-center bs-md"
                              title="React"
                              key={uuidv4()}
                            >
                              <i className="fab fa-react"></i>
                            </span>
                          );
                        } 
                        else if (tech === "NodeJS") 
                        {
                          return (
                            <span
                              className="has-dflex-center bs-md"
                              title="Node JS"
                              key={uuidv4()}
                            >
                              <i className="fab fa-node-js"></i>
                            </span>
                          );
                        } 
                        else 
                        {
                          return <span key={uuidv4()}></span>;
                        }
                      })}
                    </div>
                  </div>

                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div className="text">
                      <ol>
                        {favouriteBooks.split(",").map((book) => {
                          if (favouriteBooks.length !== 0) 
                          {
                            return (
                              <li key={uuidv4()}>
                                <p>
                                  <b>{book}</b>
                                </p>
                              </li>
                            );
                          } 
                          else 
                          {
                            return <span></span>;
                          }
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
