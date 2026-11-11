# Create thermophysical properties using bivariate arrays

The following program demonstrates how to create or open a thermophysical property database, and how to create materials in it. One of the material definitions uses bivariate arrays, which are used in many places within SINDA/FLUINT, TD, and OpenTD.

```c#
using System.Collections.Generic;
using OpenTD;

namespace OpenTDGettingStarted
{
    class CreateThermophysicalProps
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();

            // Let's make sure we're working with an empty database.
            // Note: relative pathnames in OpenTD are relative to the current
            // working directory, which usually starts at the location of your
            // exe file.
            string dbPath = "TemporaryThermoPropDatabase.tdp";
            System.IO.File.Delete(dbPath);
            td.OpenThermoPropDB(dbPath);

            // We'll create a thermophysical property representing Al 6061-T6,
            // with data taken from the Spacecraft Thermal Control Handbook.
            // The handbook uses the following units:
            // density: kg/cm3
            // k: W/(cm.degC)
            // Cp: W-hr/(kg.degC)
            // We'll set WorkingUnits to SI with cm before setting density and k.
            // For Cp, we'll need to set energy units to W-hr.
            // Since we're working with inconsistent units, we'll save and restore
            // whatever working unit system was in use before now.
            Units.SaveWorkingUnits();
            Units.WorkingUnits.SetToSI();
            Units.WorkingUnits.modelLength = UnitsData.ModelLength.CM;
            var Al6061 = td.CreateThermoProps("Al6061-T6");
            Al6061.Comment = "Al 6061-T6 from Spacecraft Thermal Control Handbook\\n" + "The Aerospace Corp., 2002";
            Al6061.Density = 0.00277;
            Al6061.Conductivity = 1.679;
            Units.WorkingUnits.energy = UnitsData.Energy.WATT_HOUR;
            Al6061.SpecificHeat = 0.267;
            Al6061.Update();
            Units.RestoreWorkingUnits();

            // To rename a thermophysical property, you need to use Rename,
            // since thermophysical properties are stored in TD using names as
            // identifiers, unlike other entities that use AutoCAD handles.
            Al6061.Rename("Aluminum 6061-T6");

            // What if you've got a material with anisotropic,
            // temperature- and pressure-dependent conductivity?
            // For example, here's the conductivity of "Material A":

            // conductivity in x and y directions:
            // 100 K: 21 W/(m.K)
            // 200 K: 25 W/(m.K)
            // 300 K: 27 W/(m.K)

            // conductivity in z-dir: (W/(m.K))
            // 150 K 250 K 350 K
            // 50 kPa 3 5 8
            // 100 kPa 6 9 10

            // Here's how to create a material with temperature-
            // and pressure-dependent conductivity.
            Units.WorkingUnits.SetToSI();
            var materialA = td.CreateThermoProps("Material A");
            materialA.Comment = "Aniso k demo";
            materialA.Anisotropic = 1;
            materialA.VarConductivity = 1;
            materialA.VarConductivityY = 1;
            var kxyTemp = new List<double> { 100, 200, 300, };
            var kxyValue = new List<double> { 21, 25, 27, };
            materialA.ConductivityTemp = kxyTemp;
            materialA.ConductivityValue = kxyValue;
            materialA.ConductivityYTemp = kxyTemp;
            materialA.ConductivityYValue = kxyValue;
            materialA.VarCondTempPresZ = 1;
            materialA.bivarTemperatureZ = new List<double> { 150, 250, 350 };
            materialA.bivarPressureZ = new List<double> { 50, 100 };
            materialA.bivarConductivityZ = new List<double> 
            { 
                3, 5, 8,
                6, 9, 10, 
            };
            materialA.Update();
        }
    }
}
```

After running the program, the kz conductivity for Material A will show that the three lists of doubles we input are now expressed as a bivariate array:

![Bivariate array](./../media/b81c03156e87978bef43d64eefb85d01.png)

The dwg units default to SI so the pressures are shown in Pa, even though we set the OpenTD WorkingUnits to kPa. Remember that WorkingUnits are independent of dwg units (See the [Work with units, symbols, and expressions](units-symbols-expressions.md) section).
