import React from 'react'

class Leagueshow extends React.Component {

    render() {
        
        const summon = this.props.character

        return (
            <li>
                {summon.name} 
            </li>
        )
    }
}

export default Leagueshow