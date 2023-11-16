import { NextResponse } from "next/server";
import gamesList from "../../../../../../games.json";

export async function GET(
  request: Request,
  { params }: { params: { game: string } }
) {
  const game = params.game;
  const gameSelected = gamesList.find(
    (gameTitle) =>
      encodeURIComponent(gameTitle.title) === encodeURIComponent(game)
  );
  if (!gameSelected) {
    return NextResponse.json({ message: "Game not found" }, { status: 404 });
  }
  return NextResponse.json(gameSelected, { status: 200 });
}
