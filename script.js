// International-style team ranking system

const teams = [
  {name:'Arabian Kings', matches:4, wins:3, losses:1, points:6, nrr:+1.239},
  {name:'Knight Riders', matches:2, wins:2, losses:0, points:4, nrr:+1.941},
  {name:'Flying Falcon', matches:3, wins:1, losses:2, points:2, nrr:-0.425},
  {name:'Power Heaters', matches:2, wins:1, losses:1, points:2, nrr:-0.09},
  {name:'All-round Royals', matches:3, wins:0, losses:3, points:0, nrr:-2.665}
];

function renderTable(){
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  // ✅ Sorting Rules (International Standard):
  teams.sort((a, b) => {
    // 1️⃣ Points (Highest First)
    if (b.points !== a.points) return b.points - a.points;
    // 2️⃣ NRR (Highest First)
    if (b.nrr !== a.nrr) return b.nrr - a.nrr;
    // 3️⃣ Wins (More Wins First)
    if (b.wins !== a.wins) return b.wins - a.wins;
    // 4️⃣ Matches (Fewer Matches First)
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
