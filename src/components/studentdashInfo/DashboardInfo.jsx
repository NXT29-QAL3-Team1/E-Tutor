import 'bootstrap-icons/font/bootstrap-icons.css';
import './dashboardInfo.css'

function DashboardInfo(){
    return(
        <>
            <section className="dashboard-section">
                <h1 className="section-title">Dashboard</h1>
                
                <div className="stats-grid">
                    <div className="stat-card peach">
                        <div className="stat-icon">
                            <i className="bi bi-play-circle"></i>
                        </div>
                        <div className="stat-number">867</div>
                        <div className="stat-label">Enrolled Lectures</div>
                    </div>
                    
                    <div className="stat-card purple">
                        <div className="stat-icon">
                            <i className="bi bi-check-square"></i>
                        </div>
                        <div className="stat-number">6</div>
                        <div className="stat-label">Active Courses</div>
                    </div>
                    
                    <div className="stat-card green">
                        <div className="stat-icon">
                            <i className="bi bi-trophy"></i>
                        </div>
                        <div className="stat-number">951</div>
                        <div className="stat-label">Completed Courses</div>
                    </div>
                    
                    <div className="stat-card orange">
                        <div className="stat-icon">
                            <i className="bi bi-people"></i>
                        </div>
                        <div className="stat-number">241</div>
                        <div className="stat-label">Course Discussions</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardInfo