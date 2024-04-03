export const Home = () => {
  const cards = [
    {
      title: "Card one",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
      magni quas ex numquam, maxime minus quam molestias corporis
      quod, ea minima accusamus.`,
      buttonLabel: "More info",
    },
    {
      title: "Card two",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
      magni quas ex numquam, maxime minus quam molestias corporis
      quod, ea minima accusamus.`,
      buttonLabel: "More info",
    },
    {
      title: "Card three",
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
      magni quas ex numquam, maxime minus quam molestias corporis
      quod, ea minima accusamus.`,
      buttonLabel: "More info",
    },
  ];

  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 align-items-center my-5">
        <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
            alt="..."
          />
        </div>
        <div className="col-lg-5">
          <h1 className="font-weight-light">Business Name or Tagline</h1>
          <p>
            This is a template that is great for small businesses. It doesn't
            have too much fancy flare to it, but it makes a great use of the
            standard Bootstrap core components. Feel free to use this template
            for any project you want!
          </p>
          <a className="btn btn-primary custom-button-color">Call to Action!</a>
        </div>
      </div>

      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <p className="text-white m-0">
            This call to action card is a great place to showcase some important
            information or display a clever tagline!
          </p>
        </div>
      </div>

      <div className="row gx-4 gx-lg-5">
        {cards.map((card, idx) => (
          <div className="col-md-4 mb-5" key={idx}>
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-text">{card.text}</p>
              </div>
              <div className="card-footer">
                {card.buttonLabel && (
                  <a className="btn btn-primary btn-sm custom-button-color">
                    {card.buttonLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
