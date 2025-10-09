// Edit the numbers here to update the table.
// After editing, upload these files to GitHub again (index.html, style.css, script.js, logo.png).
// Sorting: first by points (desc), then by nrr (desc).

const teams = [
  {name: 'Arabian Kings', matches:2, wins:2, losses:0, points:4, nrr:2.00},
  {name: 'Knight Riders', matches:2, wins:1, losses:1, points:1, nrr:0.50},
  {name: 'Flying Falcon', matches:2, wins:01, losses:1, points:3, nrr:0.79},
  {name: 'Power Heaters', matches:0, wins:0, losses:0, points:0, nrr:0.00},
  {name: 'All-round Royals', matches:0, wins:0, losses:0, points:0, nrr:0.00}
];

function renderTable(){
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  // sort by points desc then nrr desc
  teams.sort((a,b)=>{
    if(b.points !== a.points) return b.points - a.points;
    return b.nrr - a.nrr;
  });
  teams.forEach((t,i)=>{
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
