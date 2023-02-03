import { useState } from 'react';

const GroupTeamMembers = ({ employees, selectedTeam, setTeam }) => {

  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true }
    teams.push(teamA);

    var TeamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    var TeamB = { team: 'TeamB', members: TeamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true }
    teams.push(TeamB);

    var TeamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    var TeamC = { team: 'TeamC', members: TeamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true }
    teams.push(TeamC);

    var TeamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    var TeamD = { team: 'TeamD', members: TeamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true }
    teams.push(TeamD);

    return teams;
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
      ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id)


  }

  return (
    <main className='container'>
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className='card mt-2' style={{ cursor: "pointer" }}>
              <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
                Team Name : {item.team}
              </h4>
              <div id={'collapse_' + item.team} className={item.collapsed === true ? 'collapse' : ''}>
                <hr />
                {
                  item.members.map(member => {
                    return (
                      <div key = {member.id} className='mt-2'>
                        <h5 className='card-title mt-2'>
                          <span className='text-dark'>Full Name:{member.fullName}</span>
                        </h5>
                        <p>Designtion: {member.designation}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          )
        })
      }
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Footer</h1>
        </div>
      </div>
    </main>
  )
}

export default GroupTeamMembers