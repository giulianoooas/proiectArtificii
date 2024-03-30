import "./../styles/contact.component.css";

export const Contact = () => {
  return (
    <div class="container px-4 px-lg-5 contact-container">
      <div class="row gx-4 gx-lg-5">
        <div class="col-md-6 mb-5">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Card One</h2>
              <p class="card-text">
                <a href="to:email">email</a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-5">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Card Two</h2>
              <p class="card-text">telefon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
