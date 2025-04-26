import { useEffect, useCallback } from "react";
import { Button, Grid } from "@mui/material";
import useBetsRequest from "@/hooks/useBetsRequest";
import BetCard from "@/components/BetCard";

const containerSpacing = { xs: 2, md: 3 };

export default function App() {
  const [{ bets, max, fetching }, getBets] = useBetsRequest();

  useEffect(() => {
    getBets(6);
  }, [getBets]);

  const generateBet = useCallback(() => {
    getBets();
  }, [getBets]);

  return (
    <Grid container direction="column" spacing={2}>
      <Button
        disabled={bets.length >= max}
        onClick={generateBet}
        variant="contained"
        color="primary"
        loading={fetching}
      >
        GET MORE
      </Button>
      <Grid container spacing={containerSpacing}>
        {bets.map((bet) => <BetCard key={bet.id} bet={bet} />)}
      </Grid>
    </Grid>
  );
}