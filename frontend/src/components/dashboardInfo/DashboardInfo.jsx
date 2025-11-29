import 'bootstrap-icons/font/bootstrap-icons.css';
import './dashboardInfo.css'

function DashboardInfo({ icon, color, data }) {
    return (
        <>
            <div className={`stat-card ${color}`}>
                <div className="stat-icon">
                    <i className={icon}></i>
                </div>
                <div className="stat-number">{data.number}</div>
                <div className="stat-label">{data.title}</div>
            </div>
        </>
    )
}

export default DashboardInfo;