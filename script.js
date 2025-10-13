// Edit the numbers here to update the table.
// After editing, upload these files to GitHub again (index.html, style.css, script.js, logo.png).
// Sorting: only by points (desc).

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
  
  // ✅ sort only by points (descending)
  teams.sort((a, b) => b.points - a.points);
  
  teams.forEach((t, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${i+1}</td>
      <td>${t.name}</td>
      <td>${t.matches}</td>
      <td>${t.wins}</td>
      <td>${t.losses}</td>
      <td>${t.points}</td>
      <td>${t.nrr >= 0 ? '+' + t.nrr.toFixed(2) : t.nrr.toFixed(2)}</td>`;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', renderTable);
