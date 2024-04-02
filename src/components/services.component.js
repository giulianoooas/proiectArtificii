export const Services = () => {
  const cards = [
    {
      title: "Service 1",
      description: `This is a template that is great for small businesses. It
    doesn't have too much fancy flare to it, but it makes a great
    use of the standard Bootstrap core components. Feel free to use
    this template for any project you want!This is a template that
    is great for small businesses. It doesn't have too much fancy
    flare to it, but it makes a great use of the standard Bootstrap
    core components. Feel free to use this template for any project
    you want`,
      imageSrc: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg",
    },
    {
      title: "Service 2",
      description: `This is a template that is great for small businesses. It
    doesn't have too much fancy flare to it, but it makes a great
    use of the standard Bootstrap core components. Feel free to use
    this template for any project you want!This is a template that
    is great for small businesses. It doesn't have too much fancy
    flare to it, but it makes a great use of the standard Bootstrap
    core components. Feel free to use this template for any project
    you want`,
      imageSrc: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg",
    },
    {
      title: "Service 3",
      description: `This is a template that is great for small businesses. It
    doesn't have too much fancy flare to it, but it makes a great
    use of the standard Bootstrap core components. Feel free to use
    this template for any project you want!This is a template that
    is great for small businesses. It doesn't have too much fancy
    flare to it, but it makes a great use of the standard Bootstrap
    core components. Feel free to use this template for any project
    you want`,
      imageSrc: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg",
    },
    {
      title: "Service 4",
      description: `This is a template that is great for small businesses. It
    doesn't have too much fancy flare to it, but it makes a great
    use of the standard Bootstrap core components. Feel free to use
    this template for any project you want!This is a template that
    is great for small businesses. It doesn't have too much fancy
    flare to it, but it makes a great use of the standard Bootstrap
    core components. Feel free to use this template for any project
    you want`,
      imageSrc: "https://dummyimage.com/900x400/dee2e6/6c757d.jpg",
    },
  ];

  return (
    <div className="container px-4 px-lg-5 lead">
      <div className="gx-4 gx-lg-5 align-items-center my-5 text-center">
        <div>
          <h1 className="mb-5">Services</h1>
          <p>
            This is a template that is great for small businesses. It doesn't
            have too much fancy flare to it, but it makes a great use of the
            standard Bootstrap core components. Feel free to use this template
            for any project you want!
          </p>
        </div>
      </div>
      {cards.map((card, idx) => (
        <div
          className="card text-white bg-secondary my-5 text-center"
          key={idx}
        >
          <div className="card-body">
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
              <h1 className="mb-5">{card.title}</h1>
              <div className="col-lg-7">
                <img
                  className="img-fluid rounded mb-4 mb-lg-0"
                  src={card.imageSrc}
                  alt="..."
                />
              </div>
              <div className="col-lg-5 lead">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
