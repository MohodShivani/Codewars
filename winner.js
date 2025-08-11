Finish the uefaEuro2016() function so it return string just like in the examples below:
ex:uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany 
//My Solution:
function uefaEuro2016(teams, scores){
  const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2

    return score1 === score2
        ? `At match ${team1} - ${team2}, teams played draw.`
        : `At match ${team1} - ${team2}, ${winner} won!`
  
}
