export default function HeroBox() {
  return (
    <>
      <div className="hero-bg"></div>
      <div className="hero-container">
        <div className="hero-text">
          <img src="herotext.svg" />
        </div>
        <a href="#cta" className="chevron">
          <img src="chevron.svg" />
        </a>
      </div>
    </>
  );
}
