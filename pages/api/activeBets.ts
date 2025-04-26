import type { NextApiRequest, NextApiResponse } from "next";
import betsService from "@/services/betsService";
import type { Bet } from "@/services/betsService";
import { generateArray } from "@/utils/arrays";
import { v4 } from "uuid";

type Data = {
  bets?: Bet[];
  max?: number;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { count = '1' } = req.query;

  try {
    const data: Data = {
      bets: generateArray(Number(count)).map(() => ({
        id: v4(),
        teamOne: betsService.generateBet(),
        teamTwo: betsService.generateBet(),
      } as Bet)),
      max: betsService.maxPairsLength
    }

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err?.toString() });
  }
}
