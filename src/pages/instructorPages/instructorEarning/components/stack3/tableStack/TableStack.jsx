import {
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material'

import InstructorStackCard from '../../../../../../components/InstructorStackCard';
import TitlePaper from '../../../../../../components/TitlePaper';

import '../../../../index.css';
import './tableStack.css';

export default function TableStack() {

    const isMedium = useMediaQuery("(max-width:1189px)");
    const isSmall = useMediaQuery("(max-width:600px)");

    const tableData = [
        {
            id: 1,
            date: "10 May 2022",
            method: "VISA",
            Amount: "13",
            Status: "Completed",
        },
        {
            id: 2,
            date: "10 May 2022",
            method: "VISA",
            Amount: "13",
            Status: "Completed",
        },
        {
            id: 3,
            date: "10 May 2022",
            method: "VISA",
            Amount: "13",
            Status: "Completed",
        },
        {
            id: 4,
            date: "10 May 2022",
            method: "VISA",
            Amount: "13",
            Status: "Completed",
        },
        {
            id: 5,
            date: "10 May 2022",
            method: "VISA",
            Amount: "13",
            Status: "Completed",
        },
        {
            id: 6,
            date: "10 May 2022",
            method: "VISA",
            Amount: "13",
            Status: "Completed",
        },
        {
            id: 7,
            date: "10 May 2022",
            method: "VISA",
            Amount: "13",
            Status: "Completed",
        },
    ]

    return (
        <div style={{
            overflow: "hidden",
        }}>
            <InstructorStackCard>
                <TitlePaper title="Withdraw History" />
                <Stack className="instructorCardContainer" sx={{
                    height: isMedium ? "430px" : "330px",
                }}>
                    <div className="responsive-table">
                        <table>
                            <thead>
                                <tr>
                                    <td>Date</td>
                                    <td>Method</td>
                                    <td>Amount</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData.map((obj) => {
                                        return (
                                            <tr key={obj.id}>
                                                <td>{obj.date}</td>
                                                <td>{obj.method}</td>
                                                <td>${obj.Amount}</td>
                                                <td><span className="btn-shape-2 c-white bg-orange">{obj.Status}</span></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </Stack>
            </InstructorStackCard >
        </div>
    )
}
