import React from 'react'

import { Dropdown } from 'semantic-ui-react'

function CoinPicker({coinOptions, coinId, setCoinId}){

    function handleChange(event){
        setCoinId(event.target.textContent)
    }

    return(
        <React.Fragment>
            <Dropdown
            placeholder={'select a coin'}
            closeOnBlur
            selection
            options={coinOptions}
            onChange={handleChange}
            />{' '}
        </React.Fragment>
    )
}
export default CoinPicker