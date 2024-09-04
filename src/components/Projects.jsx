  import React from 'react'

  const Projects = () => {
    return (
  <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={`https://academiccollegeprojects.com/wp-content/uploads/2015/07/Cyber-Security-Projects.jpg`}
                  className="card-img-top"
                  alt="Thumbnail 1"
                  width="100%"
                  height="225"
                />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>                  </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={`https://enterprisersproject.com/sites/default/files/styles/large/public/images/cio_security.png?itok=uAK825Iu`}
                  className="card-img-top"
                  alt="Thumbnail 2"
                  width="100%"
                  height="225"
                />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img
                  src={`https://cdn.prod.website-files.com/603683479df97964638e6e87/6687adfa2a4598977d19ae0e_Cyber%20Security%20Projects.webp`}
                  className="card-img-top"
                  alt="Thumbnail 2"
                  width="100%"
                  height="225"
                />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Projects
