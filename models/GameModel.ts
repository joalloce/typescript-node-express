import Game from "../types/Game";

class GameDTO {
  static games: Array<Game> = [];

  static createGame(game: Game): Game {
    GameDTO.games.push(game);

    return game;
  }

  static deleteGame(id: string): Game | null {
    const g = GameDTO.games.find((d) => d.id === id); // check if game exists

    if (!g) {
      return null;
    }

    GameDTO.games = GameDTO.games.filter((d) => d.id !== id);

    return g;
  }

  static getGame(id: string): Game | undefined {
    const g = GameDTO.games.find((d) => d.id === id);

    return g;
  }

  static getGames(): Game[] {
    return this.games;
  }

  static updateGame(game: Game): Game | null {
    const result = GameDTO.deleteGame(game.id);

    if (!result) {
      return null;
    }

    GameDTO.createGame(game);

    return game;
  }
}

export default GameDTO;
