import Grid from '../src/app/components/Grid';
import SearchBar from '../src/app/components/SearchBar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold my-4">Spreadsheet App</h1>
      <SearchBar />
      <Grid />
    </div>
  );
}
