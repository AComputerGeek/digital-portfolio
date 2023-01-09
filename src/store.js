// @author: Amir Armion
// @version: V.01

import create from "zustand";
import produce from "immer";

export const useStore = create((set) => ({
  fullName: "",
  aboutMe: "",
  HTML: false,
  CSS: false,
  JS: false,
  Git: false,
  React: false,
  NodeJS: false,
  githubURL: "",
  twitterURL: "",
  favouriteBooks: "",
  technologies: [],
  setTextData: (e) =>
    set(
      produce((state) => {
        const targetName = e.target.name;

        switch (targetName) {
          case "fname":
            state.fullName = e.target.value;
            break;

          case "aboutMe":
            state.aboutMe = e.target.value;
            break;

          case "githubURL":
            state.githubURL = e.target.value;
            break;

          case "twitterURL":
            state.twitterURL = e.target.value;
            break;

          case "favouriteBooks":
            state.favouriteBooks = e.target.value;
            break;

          default:
            break;
        }
      })
    ),
  setCheckboxData: (e) =>
    set(
      produce((state) => {
        const targetName = e.target.value;

        switch (targetName) {
          case "HTML":
            state.HTML = e.target.checked;
            state.technologies.push("HTML");
            break;

          case "CSS":
            state.CSS = e.target.checked;
            state.technologies.push("CSS");
            break;

          case "JS":
            state.JS = e.target.checked;
            state.technologies.push("JS");
            break;

          case "Git":
            state.Git = e.target.checked;
            state.technologies.push("Git");
            break;

          case "React":
            state.React = e.target.checked;
            state.technologies.push("React");
            break;

          case "NodeJS":
            state.NodeJS = e.target.checked;
            state.technologies.push("NodeJS");
            break;

          default:
            break;
        }
      })
    )
}));
