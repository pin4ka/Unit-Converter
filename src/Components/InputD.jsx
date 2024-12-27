import React from 'react'
export default function InputD({
  label = '', //Card name
  DisabledValueChange = false, //User Value change korte pare na
  MeasureValue, //Input field er value 
  setUserValue,//User je value debe
  selectedOption,
  Options = [],
  DisabledSelect = false,
  setUserOption,
}) {

  return ( //Return statement
    <div className='card'>
      <div className="container">

        <h3>{label}</h3> {/*Card er nam*/}
        <div className="barContainer">

          <input
            type="number"
            disabled={DisabledValueChange}
            value={MeasureValue}
            onChange={(e) => setUserValue && setUserValue(e.target.value)}
            className='fields value'
          />
          <select value={selectedOption} disabled={DisabledSelect} onChange={(e) => setUserOption && setUserOption((e.target.value))} className='fields select' >
            {
              Options.map((e) => {
                return <option value={e} key={e} >{e}</option>
              })
            }
          </select>

        </div>
      </div>
    </div>
  )
}
