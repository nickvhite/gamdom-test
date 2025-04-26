import { memo } from "react";
import type { Bet } from "@/services/betsService";
import { Paper, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TeamBet from "@/components/TeamBet";

interface BetCardProps {
  bet: Bet;
}

const useStyles = makeStyles({
  paper: {
    height: '100%',
  }
})

function BetCard({ bet }: BetCardProps) {
  const classes = useStyles();
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Paper className={classes.paper}>
        <Grid container direction="row" wrap="nowrap" padding={2} alignItems="center" justifyContent="space-between" spacing={1}>
          <Grid size={5} overflow="hidden">
            <TeamBet team={bet.teamOne} align="end" />
          </Grid>
          <Grid size={2}>
            <Typography variant="h5" align="center">VS</Typography>
          </Grid>
          <Grid size={5} overflow="hidden">
            <TeamBet team={bet.teamTwo} />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default memo(BetCard);