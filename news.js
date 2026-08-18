const API_KEY = process.env.API_KEY;

async function getFootball() {
  const response = await fetch(
    "https://v3.football.api-sports.io/fixtures?league=39&season=2026",
    {
      headers: {
        "x-apisports-key": API_KEY
      }
    }
  );

  const data = await response.json();

  console.log(JSON.stringify(data, null, 2));
}

getFootball();
