import React from 'react';

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://cdn.dribbble.com/users/1081898/screenshots/6061328/04.gif"
            className="d-block mx-lg-auto img-fluid"
            alt="Cybersecurity Animation"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-primary lh-1 mb-3">
            Hi, I'm Okpara Angel
          </h1>
          <p className="lead text-muted">
            A cybersecurity professional dedicated to protecting individuals, businesses, and society from cyber threats.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            {/* Add any buttons or additional content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
