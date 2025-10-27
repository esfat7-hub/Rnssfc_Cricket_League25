// ===========================
const TOTAL_MATCHES = 8;

const teams = [
  {name:'Arabian Kings', matches:8, wins:5, losses:3, ties:0, points:10, nrr:-0.359},
  {name:'Knight Riders', matches:6, wins:5, losses:1, ties:0, points:10, nrr:8.572},
  {name:'Flying Falcon', matches:7, wins:3, losses:4, ties:0, points:6, nrr:-1.3863},
  {name:'Power Heaters', matches:7, wins:4, losses:3, ties:0, points:8, nrr:-2.6947},
  {name:'All-round Royals', matches:6, wins:0, losses:6, ties:0, points:0, nrr:-4.029}
];

// Auto points formula (optional toggle)
// teams.forEach(t => t.points = (t.wins * 2) + (t.ties * 1));

function computeMaxPoints(team){
  const remaining = TOTAL_MATCHES - team.matches;
  return team.points + (remaining * 2);
}

function sortTeams(arr){
  arr.sort((a,b)=>{
    if(b.points!==a.points) return b.points-a.points;
    if(b.nrr!==a.nrr) return b.nrr-a.nrr;
    if(b.wins!==a.wins) return b.wins-a.wins;
    return a.matches-b.matches;
  });
}

function determineStatuses(sortedTeams){
  const fourth = sortedTeams[3];
  const fourthPoints = fourth? fourth.points : -Infinity;

  const maxPointsArr = sortedTeams.map(t => computeMaxPoints(t));
  const maxOtherMax = i => Math.max(...maxPointsArr.filter((_,idx)=>idx!==i));
  const finishedAll = sortedTeams.every(t=>t.matches>=TOTAL_MATCHES);

  return sortedTeams.map((t,i)=>{
    if(finishedAll){
      if(i===0) return {label:'Qualifier 1', cls:'badge-qualified'};
      if(i===1) return {label:'Qualifier 2', cls:'badge-qualified'};
      if(i===2||i===3) return {label:'Eliminator', cls:'badge-playoff'};
      return {label:'Eliminated', cls:'badge-eliminated'};
    }
    const maxP = computeMaxPoints(t);
    if(maxP < fourthPoints) return {label:'Eliminated', cls:'badge-eliminated'};
    const othersMax = maxOtherMax(i);
    if(t.points > othersMax) return {label:'Locked (Qualified)', cls:'badge-locked'};
    if(t.matches>=TOTAL_MATCHES && i>=4) return {label:'Eliminated', cls:'badge-eliminated'};
    if(i<4) return {label:'In contention', cls:'badge-contending'};
    return {label:'In contention', cls:'badge-contending'};
  });
}

function renderTable(){
  const arr = teams.map(t=>({...t}));
  sortTeams(arr);
  const statuses = determineStatuses(arr);

  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  arr.forEach((t,i)=>{
    const s = statuses[i];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="rank-cell">${i+1}</td>
      <td style="text-align:left;padding-left:10px">${t.name}</td>
      <td>${t.matches}/${TOTAL_MATCHES}</td>
      <td>${t.wins}</td>
      <td>${t.losses}</td>
      <td>${t.points}</td>
      <td>${t.nrr>=0? '+'+t.nrr.toFixed(2):t.nrr.toFixed(2)}</td>
      <td><span class="status-badge ${s.cls}">${s.label}</span></td>
    `;
    tbody.appendChild(tr);
  });

  const live = document.getElementById('liveInfo');
  const finishedCount = teams.filter(x=>x.matches>=TOTAL_MATCHES).length;
  live.textContent = `Matches completed: ${finishedCount}/${teams.length}`;
}

document.addEventListener('DOMContentLoaded', renderTable);
