import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <div id="landing-page-about">
        <div id="landing-page-paragraph">
          <h3 id="landing-page-h3">
            Wine-O with a retro pixel theme, offers a fun and engaging way to
            explore new wines, keep track of your tasting experiences, and see
            what your friends are enjoying!
          </h3>
        </div>
        <div id="landing-page-image">
          <img
            id="landing-page-wine-image"
            src="../public/wineo.png"
            alt="pixel-wine-photo"
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
