import React from 'react'
import "../styles/services.css";

function Services() {
  return (
    <>
      <div className="Font">
        Monica AI Translator – 10X Precision and Personality!
      </div>
      <div className="Small">
        Monica Translator delivers effortless, tailor-made, and authentic translations.
      </div>

      <div className='container'>

        <div className="Header1">
          <img src="https://assets.monica.im/tools-web/_next/static/media/enhanceProductivity.a7de6998.png" alt="Accurate" width="100" height="100" />
          <h3>Accurate</h3>
          <p>Data-driven excellence – Monica AI Translator taps into vast linguistic databases to deliver pinpoint accuracy in every translation.</p>

        </div>

        <div className="Header2">
          <img src="https://assets.monica.im/tools-web/_next/static/media/saveTime.f153f1af.png" alt="Native" width="100" height="100" />
          <h3>Native</h3>
          <p>Cultural chameleon – Monica ensures your message lands with the impact of a native speaker's touch.</p>
        </div>

        <div className="Header3">
          <img src="https://assets.monica.im/tools-web/_next/static/media/retainKnowledge.01343e26.png" alt="Human-like" width="100" height="100" />
          <h3>Human-like</h3>
          <p>Tech that fades away – Monica delivers fluid speech, with no digital footprint in sight.</p>
        </div>

      </div>
    </>
  );
}

export default Services;

