import teams from "@/constants/teams";
import type { Team } from "@/constants/teams";
import { getRandom } from "@/utils/random";

export type Bet = {
  id: string;
  teamOne: TeamBet;
  teamTwo: TeamBet;
}

export type TeamBet = {
  team: Team;
  odds: number;
  bets: number;
}

class BetsService {
  private usedTeams = new Set<Team['id']>();

  public get maxPairsLength() {
    return teams.length / 2;
  }

  private getUnusedTeam = (): Team | null => {
    const unusedTeams = teams.filter(({ id }) => !this.usedTeams.has(id));
    if (!unusedTeams.length) {
      throw new Error("No unused teams allowed");
    }
    const randomIndex = getRandom(0, unusedTeams.length - 1);
    const team = unusedTeams[randomIndex];
    this.usedTeams.add(team.id);
    return team;
  }

  public generateBet = (): TeamBet | null => {
    try {
      const team = this.getUnusedTeam();
      return team ? ({
        team,
        odds: getRandom(0.1, 5, 2),
        bets: getRandom(1, 100)
      }) : null;
    } catch (err) {
      throw err;
    }
  }
}

export default new BetsService();