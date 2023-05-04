import { API_KEY, API_URL } from "../../../../lib/tmdb";

export default async function movie(req: any, res: any) {
  const result = await fetch(
    `${API_URL}/movie/${req.query.id}?api_key=${API_KEY}&language=pt-BR`
  );
  const json = await result.json();

  return res.status(200).json({
    info: json,
  });
}
