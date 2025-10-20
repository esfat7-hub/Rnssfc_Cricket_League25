// Team data & ranking logic
const teams = [
  {name:'Arabian Kings', matches:6, wins:4, losses:2, points:8, nrr:+1.223},
  {name:'Knight Riders', matches:3, wins:2, losses:1, points:4, nrr:+1.378},
  {name:'Flying Falcon', matches:4, wins:2, losses:2, points:4, nrr:+0.450},
  {name:'Power Heaters', matches:4, wins:2, losses:2, points:4, nrr:-0.309},
  {name:'All-round Royals', matches:3, wins:0, losses:3, points:0, nrr:-2.665}
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
