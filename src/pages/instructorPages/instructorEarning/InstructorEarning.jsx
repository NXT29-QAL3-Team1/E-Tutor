import Stack1 from "./components/stack1/Stack1";
import Stack2 from "./components/stack2/Stack2";
import Stack3 from "./components/stack3/Stack3";

import "../index.css";

export default function InstructorEarning() {
    return (
        <section className="instructorDashboardRoot">
            <Stack1 />
            <Stack2 />
            <Stack3 />
        </section>
    )
}