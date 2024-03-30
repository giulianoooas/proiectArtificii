import "./../styles/contact.component.css";

export const Contact = () => {
  return (
    <div className="container px-4 px-lg-5 contact-container">
      <div className="row gx-4 gx-lg-5">
        <div className="col-md-6 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Card One</h2>
              <p className="card-text">
                <a href="to:email">email</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">Card Two</h2>
              <p className="card-text">telefon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
