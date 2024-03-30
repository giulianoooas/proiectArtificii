import "./../styles/about.component.css";

export const About = () => {
    return (
      <div className="container px-4 px-lg-5">
        <div className="gx-4 gx-lg-5 align-items-center my-5 text-center">
          <div>
            <h1 className="mb-5">
              This is a template that is great for small businesses. It doesn't
              have too much fancy flare to it, but it makes a great use of the
              standard Bootstrap core components. Feel free to use this template
              for any project you want!
            </h1>
            <p>This is a template that is great for small businesses. It doesn't
              have too much fancy flare to it, but it makes a great use of the
              standard Bootstrap core components. Feel free to use this template
              for any project you want!</p>
          </div>
        </div>
  
        <div className="">
          <img
            className="img-fluid rounded mb-4 mb-lg-5"
            src="https://dummyimage.com/1200x600/dee2e6/6c757d.jpg"
            alt="..."
          />
        </div>
  
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Card One</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  magni quas ex numquam, maxime minus quam molestias corporis
                  quod, ea minima accusamus.
                </p>
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Card Two</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem
                  sunt quam eaque, vel, non in id dolore voluptates quos eligendi
                  labore.
                </p>
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">Card Three</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  magni quas ex numquam, maxime minus quam molestias corporis
                  quod, ea minima accusamus.
                </p>
              </div>
              <div className="card-footer">
                <a className="btn btn-primary btn-sm" href="#!">
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  