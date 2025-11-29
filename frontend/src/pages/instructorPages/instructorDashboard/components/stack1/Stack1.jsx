import DashboardInfo from "../../../../../components/dashboardInfo/DashboardInfo";
import '../../../index.css';

export default function Stack1() {
    return (


        <div className="instructorIconsGrid">
            <DashboardInfo color="peach" icon="bi bi-book" data={{ title: "Courses", number: "0" }} />
            <DashboardInfo color="purple" icon="bi bi-bookmark-heart" data={{ title: "Students", number: "0" }} />
            <DashboardInfo color="green" icon="bi bi-star" data={{ title: "Ratings", number: "0" }} />
            <DashboardInfo color="orange" icon="bi bi-person-vcard" data={{ title: "Balance", number: "0" }} />
        </div>
    )
}
