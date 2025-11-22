function Hero() {
  return (
    <section className="hero py-5">
      <div className="container">
        <div className="row align-items-center gx-5">

          <div className="col-lg-6 order-2 order-lg-1">
            <div className="years">2007 — 2025</div>
            <h3 className="title mt-2">
              We share knowledge <br /> with the world
            </h3>
            <p className="lead text-muted mt-3">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Praesent fermentum quam mauris. Fusce tempor et augue a aliquet.
              Donec non ipsum non risus egestas tincidunt at vitae nulla.
            </p>
          </div>

          <div className="col-lg-6 text-center order-1 order-lg-2 mb-4 mb-lg-0">
            <div className="img-frame shadow-sm">
              <img src="../../../public/imgs/hoe.png" alt="team people" className="img-fluid rounded"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Hero;