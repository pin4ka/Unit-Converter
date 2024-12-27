import React from 'react'

export default function SwapButon({ param }) {
    return (
        <div>
            <div className="buttoncontainer">

            <button className='swbn' onClick={() => param && param()}>
                Swap
            </button>
            </div>
        </div>
    )
}
