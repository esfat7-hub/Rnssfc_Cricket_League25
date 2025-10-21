// Team data & ranking logic (no logos)
const teams = [
  {name:'Arabian Kings', color:'#ff3d00', matches:6, wins:4, losses:2, points:8, nrr:+1.223},
  {name:'Knight Riders', color:'#6a11cb', matches:4, wins:3, losses:1, points:6, nrr:+3.708},
  {name:'Flying Falcon', color:'#0072ff', matches:5, wins:2, losses:3, points:4, nrr:-1.88},
  {name:'Power Heaters', color:'#f7971e', matches:4, wins:2, losses:2, points:4, nrr:-0.309},
  {name:'All-round Royals', color:'#dd2476', matches:3, wins:0, losses:3, points:0, nrr:-2.665}
];

function renderTable(){
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  // Sort logic
  teams.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.nrr !== a.nrr) return b.nrr - a.nrr;
    if (b.wins !== a.wins) return b.wins - a.wins;
    return a.matches - b.matches;
  });

  // Render rows
  teams.forEach((t, i) => {
    const tr = document.createElement('tr');
    tr.style.background = t.color;
    tr.style.color = 'white';
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><b>${t.name}</b></td>
      <td>${t.matches}</td>
      <td>${t.wins}</td>
      <td>${t.losses}</td>
      <td>${t.points}</td>
      <td>${t.nrr >= 0 ? '+' + t.nrr.toFixed(2) : t.nrr.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', renderTable);
