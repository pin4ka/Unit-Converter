import React, { useEffect } from "react";
function UnitConverter(from, to, value,setMeasuredValue) {
    const conversionFactors = {
        // Metric Units
        nm: 1e-9,
        µm: 1e-6,
        mm: 0.001,
        cm: 0.01,
        dm: 0.1,
        m: 1,
        km: 1000,

        // Imperial Units
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.34,
        nmi: 1852,

        // Astronomical Units
        AU: 149597870700,
        ly: 9.4607e15,
        pc: 3.086e16,

        // Marine and Aviation Units
        fth: 1.8288,
        cb: 185.2,

        // Surveying Units
        rd: 5.0292,
        ch: 20.1168,
        lnk: 0.201168,

        // Traditional and Other Units
        Å: 1e-10,
        mil: 0.0000254,
        lg: 4828.03,
        hd: 0.1016,
        sp: 0.2286,
        bc: 0.00847,
        cbt: 0.4572,
        sm: 1.7018, // Approximate length of a Smoot
    };
    let convertedValue
    useEffect(() => {

        // Ensure the units are valid
        if (!(from in conversionFactors && to in conversionFactors)) {
            throw new Error("Invalid units provided.");
        }

        // Convert the value to meters and then to the target unit
        const valueInMeters = value * conversionFactors[from];
        convertedValue = valueInMeters / conversionFactors[to];
        console.log(convertedValue);
        
        setMeasuredValue(convertedValue)
    }, [from, to, value])
    return convertedValue;
}

export default UnitConverter
