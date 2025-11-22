import React, { useEffect } from "react";

function StatsBar() {

  useEffect(() => {
    const counters = document.querySelectorAll('.stat-num');

    counters.forEach(counter => {
      const txt = counter.innerText;
      const val = parseFloat(txt);
      let current = 0;
      const steps = 30;
      const inc = val / steps;

      const interval = setInterval(() => {
        current += inc;
        if (current >= val) {
          counter.innerText = txt;
          clearInterval(interval);
        } else {
          counter.innerText = txt.includes('k')
            ? (current / 1000).toFixed(1) + 'k'
            : txt.includes('%')
            ? current.toFixed(1) + '%'
            : Math.floor(current);
        }
      }, 30);
    });
  }, []);

  return (
    <div className="stats-bar d-flex flex-nowrap justify-content-between align-items-center text-center mb-5">

      <div className="stat-box d-flex align-items-center justify-content-center gap-2">
        <img src="/Users.png" width="35" alt="" />
        <div>
          <h3 className="stat-num m-0">67.1k</h3>
          <p className="stat-label mb-0">Students</p>
        </div>
      </div>

      <div className="stat-box d-flex align-items-center justify-content-center gap-2">
        <img src="../../../public/imgs/Notebook.png" width="35" alt="" />
        <div>
          <h3 className="stat-num m-0">26k</h3>
          <p className="stat-label mb-0">Certified Instructors</p>
        </div>
      </div>

      <div className="stat-box d-flex align-items-center justify-content-center gap-2">
        <img src="/GlobeHemisphereWest.png" width="35" alt="" />
        <div>
          <h3 className="stat-num m-0">72</h3>
          <p className="stat-label mb-0">Country Language</p>
        </div>
      </div>

      <div className="stat-box d-flex align-items-center justify-content-center gap-2">
        <img src="../../../public/imgs/CircleWavyCheck.png" width="35" alt="" />
        <div>
          <h3 className="stat-num m-0">99.9%</h3>
          <p className="stat-label mb-0">Success Rate</p>
        </div>
      </div>

      <div className="stat-box d-flex align-items-center justify-content-center gap-2">
        <img src="../../../public/imgs/Stack.png" width="35" alt="" />
        <div>
          <h3 className="stat-num m-0">57</h3>
          <p className="stat-label mb-0">Trusted Companies</p>
        </div>
      </div>

    </div>
  );
}
export default StatsBar;