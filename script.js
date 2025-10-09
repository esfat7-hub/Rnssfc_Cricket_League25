
const teams = [
  {name: 'Arabian Kings', matches:0, wins:0, losses:0, points:0, nrr:0.00},
  {name: 'Knight Riders', matches:0, wins:0, losses:0, points:0, nrr:0.00},
  {name: 'Flying Falcon', matches:0, wins:0, losses:0, points:0, nrr:0.00},
  {name: 'Power Heaters', matches:0, wins:0, losses:0, points:0, nrr:0.00},
  {name: 'All-round Royals', matches:0, wins:0, losses:0, points:0, nrr:0.00}
];

function renderTable(){
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  teams.sort((a,b)=>{
    if(b.points!==a.points) return b.points - a.points;
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

function buildInputs(){
  const wrap = document.getElementById('teamInputs');
  wrap.innerHTML = '';
  teams.forEach((t, idx)=>{
    const div = document.createElement('div');
    div.className = 'team-row';
    div.innerHTML = `<strong style="width:100%">${t.name}</strong>
      <label>Matches <input type="number" min="0" id="m${idx}" value="${t.matches}"></label>
      <label>Wins <input type="number" min="0" id="w${idx}" value="${t.wins}"></label>
      <label>Losses <input type="number" min="0" id="l${idx}" value="${t.losses}"></label>
      <label>Points <input type="number" min="0" id="p${idx}" value="${t.points}"></label>
      <label>NRR <input step="0.01" type="number" id="n${idx}" value="${t.nrr.toFixed(2)}"></label>
      <button class="update-btn" onclick="apply(${idx})">Update</button>`;
    wrap.appendChild(div);
  });
}

function apply(i){
  const m = parseInt(document.getElementById('m'+i).value) || 0;
  const w = parseInt(document.getElementById('w'+i).value) || 0;
  const l = parseInt(document.getElementById('l'+i).value) || 0;
  const p = parseInt(document.getElementById('p'+i).value) || 0;
  const n = parseFloat(document.getElementById('n'+i).value) || 0.00;
  teams[i].matches = m;
  teams[i].wins = w;
  teams[i].losses = l;
  teams[i].points = p;
  teams[i].nrr = n;
  renderTable();
  const rows = document.querySelectorAll('#tableBody tr');
  if(rows[i]){
    rows[i].style.transition = 'none';
    rows[i].style.background = 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))';
    setTimeout(()=>{ rows[i].style.transition='all .18s'; renderTable(); },120);
  }
}

buildInputs();
renderTable();
