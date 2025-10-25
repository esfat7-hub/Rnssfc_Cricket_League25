// Team Data
const teams = [
  {name:'Arabian Kings', matches:8, wins:5, losses:3, points:10, nrr:-0.359},
  {name:'Knight Riders', matches:5, wins:4, losses:1, points:8, nrr:+6.18},
  {name:'Flying Falcon', matches:6, wins:2, losses:4, points:4, nrr:-1.8863},
  {name:'Power Heaters', matches:6, wins:4, losses:2, points:8, nrr:-0.3027},
  {name:'All-round Royals', matches:5, wins:0, losses:5, points:0, nrr:-3.529}
];

function renderTable(){
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  teams.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.nrr !== a.nrr) return b.nrr - a.nrr;
    if (b.wins !== a.wins) return b.wins - a.wins;
    return a.matches - b.matches;
  });

  teams.forEach((t, i) => {
    const isQualified = i < 4; // ✅ Top 4 qualify

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i+1}</td>
      <td><strong>${t.name}</strong></td>
      <td>${t.matches}</td>
      <td>${t.wins}</td>
      <td>${t.losses}</td>
      <td>${t.points}</td>
      <td>${t.nrr >= 0 ? '+' + t.nrr.toFixed(2) : t.nrr.toFixed(2)}</td>
      <td>${isQualified ? '✅' : ''}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', renderTable);
