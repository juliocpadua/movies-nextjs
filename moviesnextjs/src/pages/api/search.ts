import { API_KEY, API_URL } from "../../../lib/tmdb";

export default async function search(req: any, res: any) {
  const result = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${req.query.q}`
  );
  const json = await result.json();

  return res.status(200).json({
    list: json.results,
  });
}
