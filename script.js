const TOTAL_MATCHES = 8;

const teams = [
  {name:'Arabian Kings', matches:8, wins:5, losses:3, points:10, nrr:-0.359},
  {name:'Knight Riders', matches:6, wins:5, losses:1, points:10, nrr:+8.572},
  {name:'Flying Falcon', matches:7, wins:3, losses:4, points:6, nrr:-1.3863},
  {name:'Power Heaters', matches:7, wins:4, losses:3, points:8, nrr:-2.6947},
  {name:'All-round Royals', matches:6, wins:0, losses:6, points:0, nrr:-4.029}
];

function computeMaxPoints(team){
  const remain = TOTAL_MATCHES - team.matches;
  return team.points + remain * 2;
}

function determineStatuses(sorted){
  const fourth = sorted[3];
  const fourthPoints = fourth ? fourth.points : -Infinity;
  const maxPts = sorted.map(t=>computeMaxPoints(t));

  return sorted.map((t,i)=>{
    const myMax = maxPts[i];
    const othersMax = Math.max(...maxPts.filter((_,idx)=>idx!==i));
    const finishedAll = sorted.every(t => t.matches >= TOTAL_MATCHES);

    if(finishedAll){
      if(i < 2) return {label:'Q', title:'Qualified', cls:'badge-qualified'};
      if(i < 4) return {label:'E', title:'Eliminator', cls:'badge-eliminator'};
      return {label:'X', title:'Eliminated', cls:'badge-eliminated'};
    }
    if(myMax < fourthPoints)
      return {label:'X', title:'Eliminated', cls:'badge-eliminated'};
    if(t.points > othersMax)
      return {label:'Q', title:'Qualified', cls:'badge-qualified'};
    return {label:'C', title:'In Contention', cls:'badge-contending'};
  });
}

function renderTable(){
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  teams.sort((a,b)=>{
    if(b.points !== a.points) return b.points - a.points;
    if(b.nrr !== a.nrr) return b.nrr - a.nrr;
    if(b.wins !== a.wins) return b.wins - a.wins;
    return a.matches - b.matches;
  });

  const statuses = determineStatuses(teams);
  const doneMatches = teams.reduce((a,b)=>a+(TOTAL_MATCHES-b.matches>0?0:1),0);

  document.getElementById("matchCount").innerText = `${doneMatches}/5`;

  teams.forEach((t,i)=>{
    const s = statuses[i];
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i+1}</td>
      <td>${t.name}</td>
      <td>${t.matches}/${TOTAL_MATCHES}</td>
      <td>${t.wins}</td>
      <td>${t.losses}</td>
      <td>${t.points}</td>
      <td>${t.nrr>=0? '+'+t.nrr.toFixed(2) : t.nrr.toFixed(2)}</td>
      <td><span class="status-badge ${s.cls}" title="${s.title}">${s.label}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', renderTable);
