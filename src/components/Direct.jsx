import React from "react";

class Direct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <p>je suis la page Direct</p>
        <iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="100%"
    height="400"
    src="https://www.google.com/maps/embed?pb=!4v1610804066529!6m8!1m7!1s5PZ74AWakBK5WrqrH3XQOA!2m2!1d43.60176670827181!2d1.443067648757617!3f23.145296180660935!4f-9.049002504498361!5f0.7820865974627469" >
        </iframe>
      </div>
    );
  }
}

export default Direct;
