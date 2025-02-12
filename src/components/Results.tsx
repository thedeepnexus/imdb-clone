import Card from "./Card";

export default function Results({
  results,
}: Readonly<{
  results: {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    overview: string;
    name: string;
    release_date: string;
    first_air_date: string;
    vote_count: number;
  }[];
}>) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
