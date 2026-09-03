const API_KEY = process.env.API_KEY;

async function getFootball() {
  const response = await fetch(
    "https://v3.football.api-sports.io/fixtures?league=39&season=2025&last=10",
    {
      headers: {
        "x-apisports-key": API_KEY
      }
    }
  );

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();

  console.log("عدد النتائج:", data.results);

  if (data.response && data.response.length > 0) {
    console.log("أول مباراة:");
    console.log(JSON.stringify(data.response[0], null, 2));
  } else {
    console.log("لا توجد مباريات.");
  }
}

getFootball().catch(error => {
  console.error(error);
  process.exit(1);
});
