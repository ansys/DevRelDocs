# Work with units, symbols, and expressions

OpenTD offers full support for units, symbols, and expressions. The most important concept to understand is that-except for a few exceptions discussed below–all dimensional values in OpenTD are expressed in the units defined in a thread static variable called `Units.WorkingUnits`, which is completely independent of the drawing units set in any connected TD instance.

You can use expressions in OpenTD anywhere you can use them in the GUI. Look for members named "SomethingExp" to set the expression corresponding to the member "Something." Just like in the GUI, expressions have their own unit system, independent of the dwg units and the WorkingUnits. This is the main exception to the rule that all dimensional values in OpenTD are expressed in `Units.WorkingUnits`. The other exceptions are rare properties that must be entered in a specific unit, for example km for *PlanetParameters.radiusKm*. In all cases these will be indicated by the unit name in the name of the property. Any other exceptions will be class members with fixed units in their names.

The following program shows how to use WorkingUnits, symbols, and expressions:

```c#
using System;
using System.Collections.Generic;
using System.Linq; // for the Select method, below
using OpenTD;

namespace OpenTDGettingStarted
{
    class WorkWithUnitsSymbolsExpressions
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();

            // To set the units used in the GUI, use SetDwgUnits.
            // This is equivalent to setting Preferences->Units.
            // Here we'll set the dwg units to English with inches
            // instead of feet for model length:
            var dwgUnits = new UnitsData();
            dwgUnits.SetToEng();
            dwgUnits.modelLength = UnitsData.ModelLength.INCH;
            td.SetDwgUnits(dwgUnits);

            // OpenTD uses its own unit system called WorkingUnits
            // to control input and output of all dimensional
            // values. In this example we'll set WorkingUnits to SI,
            // then set and get the density of a material in kg/m3.
            // Then we'll set WorkingUnits.modelLength to cm and get
            // the same property, showing that it will now return as
            // kg/cm3. Note that since the dwg units were set to inches
            // and lbm, the value shown in the GUI is 0.289018 lbm/in^3:
            // it's completely independent of the WorkingUnits.
            string materialName = "steel";
            if (td.GetThermoPropss().Select(x => x.Name).Contains(materialName))
                td.DeleteThermoProps(materialName);
            var material = td.CreateThermoProps(materialName);
            Units.WorkingUnits.SetToSI(); // this is the default anyway
            material.Density = 8000; // kg/m3
            material.Update();
            Console.WriteLine(material.Density); // "8000"
            Console.WriteLine(material.Density.ToString()); // "8000 kg/m^3"
            Units.WorkingUnits.modelLength = UnitsData.ModelLength.CM;
            Console.WriteLine(material.Density); // "0.008"
            Console.WriteLine(material.Density.ToString()); // "0.008 kg/cm^3"

            // You can set both the dwg units and WorkingUnits with the
            // SetUnits method. Also, you don't always have to create
            // a new UnitsData. The Units.SI and Units.Eng UnitsData
            // objects are convenient static readonly objects that
            // correspond to standard SI and English units systems.
            td.SetUnits(Units.SI);

            // Create symbols using the CreateSymbol method. Here we'll
            // create a symbol representing a heat load value in Btu/hr:
            string symbolName = "heatload";
            var heatload = td.CreateSymbol(symbolName, "34.12 * 2");
            heatload.Description = "heat load in Btu/hr";
            heatload.Update();

            // Get evaluated symbol values using GetSymbolValue. These
            // represent the basic symbol values, unmodified by Case Sets
            // or other means.
            var heatloadValue = td.GetSymbolValue(symbolName);
            Console.WriteLine($"{symbolName} value = {heatloadValue}");

            // You can use expressions in OpenTD anywhere you can use
            // them in the GUI. Here we'll create a heatload, set its
            // value expression ("ValueExp") to our symbol created above,
            // then set the units of the expression to BTU/hr to match
            // the symbol:
            var n = td.CreateNode();
            var q = td.CreateHeatLoad(new List<Connection> { n });
            q.ValueExp.Value = symbolName;
            q.ValueExp.units.energy = UnitsData.Energy.BTU;
            q.ValueExp.units.time = UnitsData.Time.HR;
            q.Update();

            td.ZoomExtents();
        }
    }
}
```
