import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "Defects",
    color: "hsl(4, 70%, 50%)",
    data: [
      { x: "Oct '23", y: 13 },
      { x: "Nov '23", y: 10 },
      { x: "Dec '23", y: 8 },
      { x: "Jan '24", y: 14 },
      { x: "Feb '24", y: 12 },
      { x: "Mar '24", y: 16 },
      { x: "Apr '24", y: 17 },
      { x: "May '24", y: 11 },
      { x: "Jun '24", y: 14 },
      { x: "Jul '24", y: 13 },
      { x: "Aug '24", y: 23 },
      { x: "Sep '24", y: 10 },
    ],
    xAxisTitle: "Month",
    yAxisTitle: "Number of Defects",
  },
  {
    id: "Fatal Errors",
    color: "hsl(205, 70%, 50%)",
    data: [
      { x: "Oct '23", y: 5 },
      { x: "Nov '23", y: 3 },
      { x: "Dec '23", y: 6 },
      { x: "Jan '24", y: 4 },
      { x: "Feb '24", y: 8 },
      { x: "Mar '24", y: 5 },
      { x: "Apr '24", y: 10 },
      { x: "May '24", y: 4 },
      { x: "Jun '24", y: 6 },
      { x: "Jul '24", y: 3 },
      { x: "Aug '24", y: 3 },
      { x: "Sep '24", y: 1 },
    ],
    xAxisTitle: "Month",
    yAxisTitle: "Number of Fatal Errors",
  },
];

  
const Line = (isDashboard = false)=>{
  const theme = useTheme();
  return (
    <Box sx={{height : isDashboard ? "280px" : "75vh"}}>
      <ResponsiveLine
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
              strokeWidth: 0,
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
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
 
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend:isDashboard ? null :"transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
       
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? null :"count",
          legendOffset: -45,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  )
}
export default Line
