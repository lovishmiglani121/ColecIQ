import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import ErrorIcon from '@mui/icons-material/Error'; // Import the error icon
import BugReportIcon from '@mui/icons-material/BugReport';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { ResponsivePie } from "@nivo/pie";
import { data1, data2, data3, data4 } from "./data";

const Row1 = () => {
    const theme = useTheme();
    return (
        <Stack direction={"row"} flexWrap={"wrap"} gap={1} justifyContent={{ xs: "center", sm: "space-between" }}>
            <Paper sx={{ minWidth: "333px", p: 1.5, display: "flex", justifyContent: "space-between", flexGrow:1 }}>
                <Stack direction={"column"} gap={1}>
                    <AssignmentIcon
                        sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
                    <Typography variant='body2' sx={{ fontSize: "13px" }}>582</Typography>
                    <Typography variant='body2' sx={{ fontSize: "13px" }}>Audits Completed</Typography>
                </Stack>
                <Stack direction={"column"} alignItems={"center"}>
                    <Box height={"70px"} width={"87px"}>
                        <ResponsivePie
                            data={data1}
                            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                            innerRadius={0.7}
                            theme={{
                                textColor: theme.palette.text.primary,
                                fontSize: 11,
                                axis: {
                                    domain: {
                                        line: {
                                            stroke: theme.palette.divider,
                                            strokeWidth: 1,
                                        },
                                    },
                                    legend: {
                                        text: {
                                            fontSize: 12,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                    ticks: {
                                        line: {
                                            stroke: theme.palette.divider,
                                            strokeWidth: 1,
                                        },
                                        text: {
                                            fontSize: 11,
                                            fill: theme.palette.text.secondary,
                                        },
                                    },
                                },
                                grid: {
                                    line: {
                                        stroke: theme.palette.divider,
                                        strokeWidth: 1,
                                    },
                                },
                                legends: {
                                    title: {
                                        text: {
                                            fontSize: 11,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                    text: {
                                        fontSize: 11,
                                        fill: theme.palette.text.primary,
                                    },
                                    ticks: {
                                        line: {},
                                        text: {
                                            fontSize: 10,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                },
                                annotations: {
                                    text: {
                                        fontSize: 13,
                                        fill: theme.palette.text.primary,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    link: {
                                        stroke: "#000000",
                                        strokeWidth: 1,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    outline: {
                                        stroke: "#000000",
                                        strokeWidth: 2,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    symbol: {
                                        fill: "#000000",
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                },
                                tooltip: {
                                    container: {
                                        background: theme.palette.background.default,
                                        color: theme.palette.text.primary,
                                        fontSize: 12,
                                    },
                                    basic: {},
                                    chip: {},
                                    table: {},
                                    tableCell: {},
                                    tableCellValue: {},
                                },
                            }}
                            // colors={{ scheme: scheme }}
                            enableArcLabels={false}
                            enableArcLinkLabels={false}
                            padAngle={0.7}
                            cornerRadius={3}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            borderColor={{
                                from: "color",
                                modifiers: [["darker", 0.2]],
                            }}
                            defs={[
                                {
                                    id: "dots",
                                    type: "patternDots",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    size: 4,
                                    padding: 1,
                                    stagger: true,
                                },
                                {
                                    id: "lines",
                                    type: "patternLines",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10,
                                },
                            ]}
                        />
                    </Box>
                    <Typography variant='body2'>+1%</Typography>
                </Stack>
            </Paper>
            <Paper sx={{ minWidth: "333px", p: 1.5, display: "flex", justifyContent: "space-between", flexGrow:1 }}>
                <Stack direction={"column"} gap={1}>
                    <BugReportIcon
                        sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
                    />
                    <Typography variant='body2' sx={{ fontSize: "13px" }}>153</Typography>
                    <Typography variant='body2' sx={{ fontSize: "13px" }}>Defects</Typography>
                </Stack>
                <Stack direction={"column"} alignItems={"center"}>
                    <Box height={"70px"} width={"87px"}>
                        <ResponsivePie
                            data={data2}
                            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                            innerRadius={0.7}
                            theme={{
                                textColor: theme.palette.text.primary,
                                fontSize: 11,
                                axis: {
                                    domain: {
                                        line: {
                                            stroke: theme.palette.divider,
                                            strokeWidth: 1,
                                        },
                                    },
                                    legend: {
                                        text: {
                                            fontSize: 12,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                    ticks: {
                                        line: {
                                            stroke: theme.palette.divider,
                                            strokeWidth: 1,
                                        },
                                        text: {
                                            fontSize: 11,
                                            fill: theme.palette.text.secondary,
                                        },
                                    },
                                },
                                grid: {
                                    line: {
                                        stroke: theme.palette.divider,
                                        strokeWidth: 1,
                                    },
                                },
                                legends: {
                                    title: {
                                        text: {
                                            fontSize: 11,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                    text: {
                                        fontSize: 11,
                                        fill: theme.palette.text.primary,
                                    },
                                    ticks: {
                                        line: {},
                                        text: {
                                            fontSize: 10,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                },
                                annotations: {
                                    text: {
                                        fontSize: 13,
                                        fill: theme.palette.text.primary,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    link: {
                                        stroke: "#000000",
                                        strokeWidth: 1,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    outline: {
                                        stroke: "#000000",
                                        strokeWidth: 2,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    symbol: {
                                        fill: "#000000",
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                },
                                tooltip: {
                                    container: {
                                        background: theme.palette.background.default,
                                        color: theme.palette.text.primary,
                                        fontSize: 12,
                                    },
                                    basic: {},
                                    chip: {},
                                    table: {},
                                    tableCell: {},
                                    tableCellValue: {},
                                },
                            }}
                            // colors={{ scheme: scheme }}
                            enableArcLabels={false}
                            enableArcLinkLabels={false}
                            padAngle={0.7}
                            cornerRadius={3}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            borderColor={{
                                from: "color",
                                modifiers: [["darker", 0.2]],
                            }}
                            defs={[
                                {
                                    id: "dots",
                                    type: "patternDots",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    size: 4,
                                    padding: 1,
                                    stagger: true,
                                },
                                {
                                    id: "lines",
                                    type: "patternLines",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10,
                                },
                            ]}
                        />
                    </Box>
                    <Typography variant='body2'>+21%</Typography>
                </Stack>
            </Paper>
            <Paper sx={{ minWidth: "333px", p: 1.5, display: "flex", justifyContent: "space-between", flexGrow:1 }}>
                <Stack direction={"column"} gap={1}>
                    <ErrorIcon
                        sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
                    />
                    <Typography variant='body2' sx={{ fontSize: "13px" }}>57</Typography>
                    <Typography variant='body2' sx={{ fontSize: "13px" }}>Fatal Errors</Typography>
                </Stack>
                <Stack direction={"column"} alignItems={"center"}>
                    <Box height={"70px"} width={"87px"}>
                        <ResponsivePie
                            data={data3}
                            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                            innerRadius={0.7}
                            theme={{
                                textColor: theme.palette.text.primary,
                                fontSize: 11,
                                axis: {
                                    domain: {
                                        line: {
                                            stroke: theme.palette.divider,
                                            strokeWidth: 1,
                                        },
                                    },
                                    legend: {
                                        text: {
                                            fontSize: 12,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                    ticks: {
                                        line: {
                                            stroke: theme.palette.divider,
                                            strokeWidth: 1,
                                        },
                                        text: {
                                            fontSize: 11,
                                            fill: theme.palette.text.secondary,
                                        },
                                    },
                                },
                                grid: {
                                    line: {
                                        stroke: theme.palette.divider,
                                        strokeWidth: 1,
                                    },
                                },
                                legends: {
                                    title: {
                                        text: {
                                            fontSize: 11,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                    text: {
                                        fontSize: 11,
                                        fill: theme.palette.text.primary,
                                    },
                                    ticks: {
                                        line: {},
                                        text: {
                                            fontSize: 10,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                },
                                annotations: {
                                    text: {
                                        fontSize: 13,
                                        fill: theme.palette.text.primary,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    link: {
                                        stroke: "#000000",
                                        strokeWidth: 1,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    outline: {
                                        stroke: "#000000",
                                        strokeWidth: 2,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    symbol: {
                                        fill: "#000000",
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                },
                                tooltip: {
                                    container: {
                                        background: theme.palette.background.default,
                                        color: theme.palette.text.primary,
                                        fontSize: 12,
                                    },
                                    basic: {},
                                    chip: {},
                                    table: {},
                                    tableCell: {},
                                    tableCellValue: {},
                                },
                            }}
                            // colors={{ scheme: scheme }}
                            enableArcLabels={false}
                            enableArcLinkLabels={false}
                            padAngle={0.7}
                            cornerRadius={3}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            borderColor={{
                                from: "color",
                                modifiers: [["darker", 0.2]],
                            }}
                            defs={[
                                {
                                    id: "dots",
                                    type: "patternDots",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    size: 4,
                                    padding: 1,
                                    stagger: true,
                                },
                                {
                                    id: "lines",
                                    type: "patternLines",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10,
                                },
                            ]}
                        />
                    </Box>
                    <Typography variant='body2'>+5%</Typography>
                </Stack>
            </Paper>
            <Paper sx={{ minWidth: "333px", p: 1.5, display: "flex", justifyContent: "space-between", flexGrow:1 }}>
                <Stack direction={"column"} gap={1}>
                    <DangerousIcon
                        sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
                    />
                    <Typography variant='body2' sx={{ fontSize: "13px" }}>17</Typography>
                    <Typography variant='body2' sx={{ fontSize: "13px" }}>Defect Fatal Overlap</Typography>
                </Stack>
                <Stack direction={"column"} alignItems={"center"}>
                    <Box height={"70px"} width={"87px"}>
                        <ResponsivePie
                            data={data4}
                            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                            innerRadius={0.7}
                            theme={{
                                textColor: theme.palette.text.primary,
                                fontSize: 11,
                                axis: {
                                    domain: {
                                        line: {
                                            stroke: theme.palette.divider,
                                            strokeWidth: 1,
                                        },
                                    },
                                    legend: {
                                        text: {
                                            fontSize: 12,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                    ticks: {
                                        line: {
                                            stroke: theme.palette.divider,
                                            strokeWidth: 1,
                                        },
                                        text: {
                                            fontSize: 11,
                                            fill: theme.palette.text.secondary,
                                        },
                                    },
                                },
                                grid: {
                                    line: {
                                        stroke: theme.palette.divider,
                                        strokeWidth: 1,
                                    },
                                },
                                legends: {
                                    title: {
                                        text: {
                                            fontSize: 11,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                    text: {
                                        fontSize: 11,
                                        fill: theme.palette.text.primary,
                                    },
                                    ticks: {
                                        line: {},
                                        text: {
                                            fontSize: 10,
                                            fill: theme.palette.text.primary,
                                        },
                                    },
                                },
                                annotations: {
                                    text: {
                                        fontSize: 13,
                                        fill: theme.palette.text.primary,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    link: {
                                        stroke: "#000000",
                                        strokeWidth: 1,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    outline: {
                                        stroke: "#000000",
                                        strokeWidth: 2,
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                    symbol: {
                                        fill: "#000000",
                                        outlineWidth: 2,
                                        outlineColor: "#ffffff",
                                        outlineOpacity: 1,
                                    },
                                },
                                tooltip: {
                                    container: {
                                        background: theme.palette.background.default,
                                        color: theme.palette.text.primary,
                                        fontSize: 12,
                                    },
                                    basic: {},
                                    chip: {},
                                    table: {},
                                    tableCell: {},
                                    tableCellValue: {},
                                },
                            }}
                            // colors={{ scheme: scheme }}
                            enableArcLabels={false}
                            enableArcLinkLabels={false}
                            padAngle={0.7}
                            cornerRadius={3}
                            activeOuterRadiusOffset={8}
                            borderWidth={1}
                            borderColor={{
                                from: "color",
                                modifiers: [["darker", 0.2]],
                            }}
                            defs={[
                                {
                                    id: "dots",
                                    type: "patternDots",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    size: 4,
                                    padding: 1,
                                    stagger: true,
                                },
                                {
                                    id: "lines",
                                    type: "patternLines",
                                    background: "inherit",
                                    color: "rgba(255, 255, 255, 0.3)",
                                    rotation: -45,
                                    lineWidth: 6,
                                    spacing: 10,
                                },
                            ]}
                        />
                    </Box>
                    <Typography variant='body2'>+3%</Typography>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default Row1