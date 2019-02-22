import React from 'react'

class Search extends React.Component {

    render () {

        const searchFunction = () => {
            
            let input = document.getElementById('input')
            let filter = input.value.toUpperCase();
            let ul = document.getElementById('leaguelist')
            let li = ul.getElementsByTagName('li')
            let txtValue
            let a 
            let i

            for (i = 0; i < li.length; i++) {
                a = li[i].getElementsByTagName('a')[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }

        }

        return (
            <input type="text" id="input" onkeyup={searchFunction()} placeholder="Search for names.."></input>
        )
        
    }
}

export default Search