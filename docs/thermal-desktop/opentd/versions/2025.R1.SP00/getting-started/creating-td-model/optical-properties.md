# Create optical properties

If you have a RadCAD license, you can create optical properties with OpenTD. The following program creates a simple optical property, and a more complicated wavelength-dependent property:

```c#
using System.Collections.Generic;
using OpenTD;

namespace OpenTDGettingStarted
{
    class CreateOpticalProperties
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();

            // Let's make sure we're working with an empty optical database.
            // Note: relative pathnames in OpenTD are relative to the current
            // working directory, which usually starts at the location of your
            // exe file.
            string dbPath = "TemporaryOpticalPropDatabase.rco";
            System.IO.File.Delete(dbPath);
            td.OpenOpticalPropDB(dbPath);

            // create simple optical property
            var black = td.CreateOpticalProps("black");
            black.Comment = "ideal black surface";
            black.Alph = 1;
            black.Emis = 1;
            black.Update();

            // create wavelength-dependent optical property
            var catalac = td.CreateOpticalProps("Cat-A-Lac Black");
            catalac.Comment = "Cat-A-Lac Black from TwoPlates.dwg";
            catalac.UseWaveLengthDepProps = 1;
            catalac.UseVarWaveLengthEmiss = 1;

            // wavelength always in micrometers, regardless of WorkingUnits:
            catalac.emissVarWaveLengthum = new List< double> {

                0.100, 8.000, 10.000, 13.000, 19.000, 20.000,
                30.000, 40.000, 60.000, 110.000, 1000.000,
            };
            catalac.emissVarWaveLengthValue = new List<double> {
                0.92, 0.92, 0.85, 0.91, 0.94, 0.82,
                0.95, 0.95, 0.78, 0.6, 0.1,
            };
            catalac.Update();
        }
    }
}
```
