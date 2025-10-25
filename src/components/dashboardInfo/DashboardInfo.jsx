import 'bootstrap-icons/font/bootstrap-icons.css';
import './dashboardInfo.css'

function DashboardInfo() {
    return (
        <>
            <div className="stat-card peach">
                <div className="stat-icon">
                    <i className="bi bi-play-circle"></i>
                </div>
                <div className="stat-number">867</div>
                <div className="stat-label">Enrolled Lectures</div>
            </div>
        </>
    )
}

export default DashboardInfo