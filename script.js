// International-style team ranking system

const teams = [
  {name:'Arabian Kings', matches:3, wins:2, losses:1, points:4, nrr:+0.839},
  {name:'Knight Riders', matches:1, wins:1, losses:0, points:2, nrr:+1.525},
  {name:'Flying Falcon', matches:2, wins:0, losses:2, points:0, nrr:-0.777},
  {name:'Power Heaters', matches:1, wins:1, losses:0, points:2, nrr:+0.31},
  {name:'All-round Royals', matches:1, wins:0, losses:1, points:0, nrr:-1.897}
];

function renderTable(){
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  teams.sort((a, b) => {
    // 1️⃣ Points
    if (b.points !== a.points) return b.points - a.points;
    // 2️⃣ NRR
    if (b.nrr !== a.nrr) return b.nrr - a.nrr;
    // 3️⃣ Wins
    if (b.wins !== a.wins) return b.wins - a.wins;
    // 4️⃣ Matches (কম ম্যাচ খেলে ভালো করলে আগে)
    return a.matches - b.matches;
  });

  teams.forEach((t, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i+1}</td>
      <td>${t.name}</td>
      <td>${t.matches}</td>
      <td>${t.wins}</td>
      <td>${t.losses}</td>
      <td>${t.points}</td>
      <td>${t.nrr>=0? '+'+t.nrr.toFixed(2): t.nrr.toFixed(2)}</td>`;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', renderTable);
