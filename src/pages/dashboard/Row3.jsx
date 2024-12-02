import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/pieChart/Pie";
import Bar from "../../pages/barChart/Bar";
import Geo from "../../pages/geogaraphy/geoo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack gap={1.5} direction={"row"} flexWrap={"wrap"} mt={1.4}>
      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "28%",  }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight="600"
        >
          Total Audit Completed
        </Typography>

        <Pie isDashbord={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          #582 Audit Completed
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Audit completed by the auditor in each quater
        </Typography>
      </Paper>

      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "33%",  }}>
      <Typography
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Defect Rate
        </Typography>


<Bar isDashbord={true} />


      </Paper>

      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "33%",  }}>
        

      <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
