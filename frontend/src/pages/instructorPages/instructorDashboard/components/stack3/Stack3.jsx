import { Stack } from '@mui/material';
import './stack3.css';

// Reusable Components
import InstructorStackCard from '../../../../../components/InstructorStackCard';
import TitlePaper from '../../../../../components/TitlePaper';
import RatingPaper from '../../../../../components/RatingPaper';

import { ResponsiveLine } from '@nivo/line';

import lineData1 from './lineData1';
import lineData2 from './lineData2';

export default function Stack3() {

    const MyLine1 = ({ data /* see data tab */ }) => (
        <ResponsiveLine /* or Line for fixed dimensions */
            data={data}
            margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            enableGridX={false}
            enableGridY={false}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enablePoints={false}
            colors={{ scheme: 'pastel1' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'seriesColor' }}
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.2}
            curve="cardinal"
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[]}
        />
    )

    const MyLine2 = ({ data /* see data tab */ }) => (
        <ResponsiveLine /* or Line for fixed dimensions */
            data={data}
            margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            enableGridX={false}
            enableGridY={false}
            axisTop={null}
            axisRight={null}
            enablePoints={false}
            axisBottom={{ tickRotation: -90 }}
            pointSize={10}
            colors={{ scheme: 'purple_red' }}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'seriesColor' }}
            pointLabelYOffset={-12}
            enableArea={true}
            areaOpacity={0.2}
            curve="cardinal"
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    translateX: 100,
                    itemWidth: 75,
                    itemHeight: 22,
                    symbolShape: 'circle'
                }
            ]}
        />
    )

    return (
        <div className="instructorDashGrid3">
            <InstructorStackCard>
                <TitlePaper title="Overall Course Rating" />
                <Stack className="instructorCardContainer">
                    <div className="course-rating-card">
                        <div className="course-rating-top">
                            <div className="rating">
                                <RatingPaper background="#FFF2E5" />
                            </div>
                            <div className="bar" style={{ height: "115px", width: "100%" }}>
                                <MyLine1 data={lineData1} />
                            </div>
                        </div>

                        <div className="course-rating-bottom">
                            {[
                                { stars: 5, percent: 56 },
                                { stars: 4, percent: 37 },
                                { stars: 3, percent: 8 },
                                { stars: 2, percent: 1 },
                                { stars: 1, percent: 0.5 },
                            ].map((item) => (
                                <div key={item.stars} className="rating-row">
                                    <div className="stars">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} className={i < item.stars ? "star filled" : "star"}>★</span>
                                        ))}
                                        <span className="star-label">{item.stars} Star</span>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: `${item.percent}%` }}></div>
                                    </div>

                                    <span className="percent">{item.percent < 1 ? '<1%' : `${item.percent}%`}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </Stack>
            </InstructorStackCard>

            <InstructorStackCard>
                <TitlePaper title="Course Overview" />
                <Stack className="instructorCardContainer">
                    <MyLine2 data={lineData2} />
                </Stack>
            </InstructorStackCard>
        </div>
    )
}