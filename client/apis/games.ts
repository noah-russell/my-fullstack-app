import request from "superagent"
import type { GameData } from "../../models/games"

const rooturl = "api/v1/games"
export async function getAllGames() {
    const res = await request.get('api/v1/games')
    return res.body as GameData[]
}

export async function deleteGame(id : number) {
    const gameData = await request.delete(`/api/v1/games/${id}`)
    return gameData.body
  }
  