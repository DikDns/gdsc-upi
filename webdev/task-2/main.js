const teamCandidatesTextArea = document.getElementById("team-candidates");
const teamCountInput = document.getElementById("team-count");
const teamList = document.getElementById("team-list");
const generateBtn = document.getElementById("generate-btn");
const audio = new Audio("sfx.wav");

const defaultTeamCandidates = [
  "Gale",
  "Walter",
  "Hank",
  "Lydia",
  "Holly",
  "Gustavo",
  "Jesse",
  "Brrok",
  "Hector",
  "Skyler",
  "Marie",
  "Pete",
  "Saul",
  "Mike",
  "Jane",
  "Todd",
];

teamCandidatesTextArea.innerHTML = defaultTeamCandidates.join("\n");

function generateRandomTeams() {
  const teamCandidates = teamCandidatesTextArea.innerHTML.split("\n");
  const teamCount =
    teamCountInput.value >= teamCandidates.length
      ? teamCandidates.length
      : teamCountInput.value;

  const teams = [];
  for (let i = 0; i < teamCount; i++) {
    teams.push([]);
  }

  let teamIndex = 0;
  while (teamCandidates.length > 0) {
    const randomIndex = Math.floor(Math.random() * teamCandidates.length);
    const randomCandidate = teamCandidates[randomIndex];
    teams[teamIndex].push(randomCandidate);

    teamCandidates.splice(randomIndex, 1);
    teamIndex = (teamIndex + 1) % teamCount;
  }

  let teamListString = "";

  teams.forEach((team, index) => {
    teamListString += `
      <div class="col col-sm-3 ">
        <h5 class="text-bg-info text-nowrap p-2">Team ${index + 1}</h5>
        <ul id="team-${index + 1}">
          ${team.map((member) => `<li>${member}</li>`).join("")}
        </ul>
      </div>
    `;
  });

  teamList.innerHTML = teamListString;
}

generateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  generateRandomTeams();
  audio.currentTime = 0;
  audio.play();
});

generateRandomTeams();
