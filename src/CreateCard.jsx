// @author: Amir Armion
// @version: V.01

import { useNavigate } from "react-location";
import { useStore } from "./store.js";

// CreateCard Component
export default function CreateCard() 
{
  const {setTextData, setCheckboxData} = useStore();

  const navigate = useNavigate();

  // Handling the Create Site Button
  const handleClick = (e) => {
    e.preventDefault();
    navigate({ to: "/showcase", replace: true });
  };

  return (
    <div className="split-screen">
      <div className="left">
        <section className="copy">
          <h1>DevCard</h1>
          <p>Your personal digital portfolio</p>
        </section>
      </div>

      <div className="right">
        <form>
          <section className="copy">
            <h2>Create your DevCard</h2>
          </section>

          <div className="input-container name">
            <input
              onChange={(e) => setTextData(e)}
              type="text"
              name="fname"
              placeholder="Your Full Name"
            />
          </div>

          <div className="input-container name">
            <input
              onChange={(e) => setTextData(e)}
              type="text"
              name="aboutMe"
              placeholder="About Me"
            />
          </div>

          <h3>Technologies You Know</h3>
          <div className="checkboxes">
            <label className="myLabel">
              <input
                onChange={(e) => setCheckboxData(e)}
                type="checkbox"
                value="HTML"
              />
              HTML
            </label>

            <label className="myLabel">
              <input
                onChange={(e) => setCheckboxData(e)}
                type="checkbox"
                value="CSS"
              />
              CSS
            </label>

            <label className="myLabel">
              <input
                onChange={(e) => setCheckboxData(e)}
                type="checkbox"
                value="JS"
              />
              JS
            </label>

            <label className="myLabel">
              <input
                onChange={(e) => setCheckboxData(e)}
                type="checkbox"
                value="Git"
              />
              Git
            </label>

            <label className="myLabel">
              <input
                onChange={(e) => setCheckboxData(e)}
                type="checkbox"
                value="React"
              />
              React
            </label>

            <label className="myLabel">
              <input
                onChange={(e) => setCheckboxData(e)}
                type="checkbox"
                value="NodeJS"
              />
              Node.JS
            </label>
          </div>

          <div className="input-container name">
            <input
              onChange={(e) => setTextData(e)}
              type="text"
              name="githubURL"
              placeholder="Github URL"
            />
          </div>

          <div className="input-container name">
            <input
              onChange={(e) => setTextData(e)}
              type="text"
              name="twitterURL"
              placeholder="Twitter URL"
            />
          </div>

          <div className="input-container name">
            <input
              onChange={(e) => setTextData(e)}
              type="text"
              name="favouriteBooks"
              placeholder="Favourite Books (comma delimited)"
            />
          </div>

          <button onClick={handleClick} className="signup-btn" type="submit">
            Create Site
          </button>
        </form>
      </div>
    </div>
  );
}
