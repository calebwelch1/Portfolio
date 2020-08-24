import React from "react";
import projectPreview from "../../assets/GRScreenshot.png";

export default function OneProject() {
  return (
    <div class="row align-items-center no-gutters mb-4 mb-lg-5">
      <div class="col-xl-8 col-lg-7">
        <a
          href="https://fatidique-moliere-24500.herokuapp.com/index.html"
          target="_blank"
        >
          <img
            class="img-fluid mb-3 mb-lg-0"
            id="project-image-ge"
            src={projectPreview}
            alt="gamerevolution"
          />
        </a>
      </div>
      <div class="col-xl-4 col-lg-5">
        <div class="featured-text text-center text-lg-left">
          <h4 class="text-white">GamerEvolution</h4>
          <p class="text-white-50 mb-0">
            This is a full-stack application that allows users to create a
            unique profile and build a social environment for all things video
            games. This is a great all-in-one tool that features user
            authentication, a game search/library, chart data based on game
            preferences, profile finder, and much more.
          </p>
          <h6 class="mt-1">
            <a
              class="text-light"
              id="repo-link"
              href="https://github.com/MariaKhantech/gamerevolution"
              target="_blank"
            >
              REPO LINK
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}
