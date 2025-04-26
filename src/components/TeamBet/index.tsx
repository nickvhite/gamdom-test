import Image from "next/image";
import type { TeamBet } from "@/services/betsService";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface TeamBetProps {
  team: TeamBet;
  align?: 'start' | 'end';
}

const useStyles = makeStyles({
  text: {
    maxWidth: "100%",
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
})

export default function TeamBet({ team, align = "start" }: TeamBetProps) {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={1} wrap="nowrap" alignItems={align}>
      <Image src={team.team.icon} alt={team.team.name} width={80} height={80} />
      <Typography className={classes.text}>{team.team.name}</Typography>
      <Typography className={classes.text}>Odds: ${team.odds}</Typography>
      <Typography className={classes.text}>Bets: ${team.bets}</Typography>
    </Grid>
  )
}