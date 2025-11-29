function StatsLogos() {
  return (
    <section className="stats py-5">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center logos-section">

          {/* LEFT */}
          <div className="text-part">
            <h4 className="fw-bold mb-2">
              We just keep growing<br />with 6.3k Companies
            </h4>

            <p className="lead text-muted mt-3">
              Nullam egestas tellus at enim ornare tristique.<br />
              Class aptent taciti sociosqu ad litora torquent.
            </p>
          </div>

          {/* LOGOS */}
          <div className="logos d-flex align-items-center flex-wrap justify-content-center gap-4">
            <img src="../../../public/imgs/netflix.png" alt="Netflix" />
            <img src="../../../public/imgs/youtube.png" alt="YouTube" />
            <img src="../../../public/imgs/google.png" alt="Google" />
            <img src="../../../public/imgs/Company Logo.png" alt="Lenovo" />
          </div>

        </div>
      </div>
    </section>
  );
}
export default StatsLogos;