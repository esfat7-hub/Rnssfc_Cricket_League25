// Team data
const teams = [
  {name:'Arabian Kings', color:'#ff3d00', matches:7, wins:4, losses:3, points:8, nrr:-1.223},
  {name:'Knight Riders', color:'#6a11cb', matches:5, wins:4, losses:1, points:8, nrr:+6.18},
  {name:'Flying Falcon', color:'#0072ff', matches:5, wins:2, losses:3, points:4, nrr:-1.88},
  {name:'Power Heaters', color:'#f7971e', matches:5, wins:3, losses:2, points:6, nrr:-0.309},
  {name:'All-round Royals', color:'#dd2476', matches:4, wins:0, losses:4, points:0, nrr:-2.665}
];

function renderTable() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  // Sort teams by points, NRR, wins, and matches
  teams.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.nrr !== a.nrr) return b.nrr - a.nrr;
    if (b.wins !== a.wins) return b.wins - a.wins;
    return a.matches - b.matches;
  });

  // Render rows with Q badge for top 4 teams
  teams.forEach((t, i) => {
    const tr = document.createElement('tr');
    tr.style.background = `linear-gradient(90deg, ${t.color}, rgba(0,0,0,0.4))`;
    tr.style.color = 'white';

    const qBadge = i < 4 ? ' <span class="q-badge">Q</span>' : '';

    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><b>${t.name}</b>${qBadge}</td>
      <td>${t.matches}</td>
      <td>${t.wins}</td>
      <td>${t.losses}</td>
      <td>${t.points}</td>
      <td>${t.nrr >= 0 ? '+' + t.nrr.toFixed(2) : t.nrr.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', renderTable);
