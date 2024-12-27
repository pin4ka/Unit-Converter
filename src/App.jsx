import { useState, useCallback, useEffect } from 'react'
import './App.css'
import { InputD, SwapButon } from './Components'
import UnitConverter from './hooks/UnitConverter';
import Units from './hooks/Units';

function App() {
  const [MeasureValue, setMeasureValue] = useState(1)
  const [MeasuredValue, setMeasuredValue] = useState(0)
  const [FromUnit, setFromUnit] = useState('cm')
  const [ToUnit, setToUnit] = useState('mm')
  UnitConverter(FromUnit, ToUnit, MeasureValue, setMeasuredValue)
  const Swap = () => {
    setFromUnit(ToUnit)
    setToUnit(FromUnit)
  }
  return (
    <>
      <main>

        <InputD
          label='From' //Name of card
          MeasureValue={MeasureValue}
          setUserValue={setMeasureValue}
          setUserOption={setFromUnit}
          Options={Units()}
          selectedOption={FromUnit}
        />

        <SwapButon
          param={Swap}
        />

        <InputD
          label='To' //Name of card
          MeasureValue={MeasuredValue}
          // setUserValue={setMeasureValue}
          DisabledValueChange
          setUserOption={setToUnit}
          Options={Units()}
          selectedOption={ToUnit}
        />

      </main>
    </>
  )
}

export default App