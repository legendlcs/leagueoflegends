import React from 'react'
import loldata from './loldata'
import Leagueshow from './Leagueshow'

class Leaguefilter extends React.Component {
    
    filterByRole = tags => {
        return loldata.filter(role => role.tags.includes(tags) )
    }
    
    mapNames = lolMap => {
        return lolMap.map(champ => <Leagueshow character={champ} />)
    }

    render() {

        const adc = this.filterByRole('Marksman')
        const mage = this.filterByRole('Mage')
        const fighter = this.filterByRole('Fighter')
        const support = this.filterByRole('Support')
        const assassin = this.filterByRole('Assassin')

        return(
            <div>
                <h1> League of Legends Search engine </h1>
                <ul>
                    <h2> ADC </h2>
                    {this.mapNames(adc)}
                </ul>
                <ul>
                    <h2> Mage </h2>
                    {this.mapNames(mage)}
                </ul>
                <ul>
                    <h2> Fighter </h2>
                    {this.mapNames(fighter)}
                </ul>
                <ul>
                    <h2> Support</h2>
                    {this.mapNames(support)}
                </ul>
                <ul>
                    <h2> Assassin </h2>
                    {this.mapNames(assassin)}
                </ul>
            </div>
        )
    }

}

export default Leaguefilter