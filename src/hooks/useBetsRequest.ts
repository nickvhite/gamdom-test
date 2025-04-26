import { useState, useCallback, useMemo } from "react";
import type { Bet } from "@/services/betsService";

interface BetsResult {
  bets: Bet[];
  max: number;
  fetching: boolean;
}

type GetBets = (count?: number) => void;

export default function useBetsRequest(): [BetsResult, GetBets] {
  const [fetching, setFetching] = useState<boolean>(false);
  const [bets, setBets] = useState<Bet[]>([]);
  const [max, setMax] = useState<number>(0);

  const pushBets = useCallback((newBets: Bet[] = []) => {
    setBets((oldBets) => [...oldBets, ...newBets]);
  }, []);

  const getBets = useCallback((count: number = 1) => {
    setFetching(true);
    fetch(`${window.location.origin}/api/activeBets?count=${count}`)
      .then(async (res) => {
        const data = await res.json();
        pushBets(data.bets);
        setMax(data.max);
      })
      .catch((err) => console.log(err))
      .finally(() => setFetching(false));
  }, [pushBets]);

  return useMemo(() => ([{ bets, max, fetching }, getBets]), [bets, max, getBets, fetching]);
}