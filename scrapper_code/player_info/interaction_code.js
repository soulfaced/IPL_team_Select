navigate('https://stats.espncricinfo.com/ci/engine/records/team/match_results.html?id=14450;type=tournament');

let links = parse().matchSummaryLinks;
for(let i of links) { 
  next_stage({url: i}) 
}