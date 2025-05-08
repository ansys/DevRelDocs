# Create fluid entities

With a FloCAD license, you can use OpenTD to work with FloCAD entities, using methods like those we’ve already discussed for thermal entities. Here is a program that demonstrates working with FloCAD:

```c#
using System.Collections.Generic;
using OpenTD;
using OpenTD.FloCAD;

namespace OpenTDGettingStarted
{
    class CreateFluidEntities
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();

            // create a fluid submodel
            var primary = td.CreateFluidSubmodel("PRIMARY");
            primary.ClearFluidLists();
            primary.FluidIds.Add(6070);
            primary.FluidLetters.Add(0); // 0 = A, 1 = B, etc.
            primary.FluidFilenames.Add(""); // will be set to "Water", b/c ID 6070
            primary.Update();

            // create some lumps
            var lumps = new List<Lump>();
            for (int i = 0; i < 10; ++i)
            {
                var lump = td.CreateLump();
                lump.Submodel = "PRIMARY";
                lump.Origin = new Point3d(0.1 * i, 1, 0);
                lump.Volume = 1e-4;
                lump.Update();
                lumps.Add(lump);
            }

            // make end lumps into plenums
            lumps[0].LumpType = RcLumpData.LumpTypes.PLENUM;
            lumps[0].InitialPres = 2e5;
            lumps[0].Update();
            lumps[lumps.Count - 1].LumpType = RcLumpData.LumpTypes.PLENUM;
            lumps[lumps.Count - 1].InitialPres = 1e5;
            lumps[lumps.Count - 1].Update();

            // connect the lumps with stubes
            for (int i = 0; i < lumps.Count - 1; ++i)
            {
                var stube = td.CreatePath(lumps[i], lumps[i + 1]);
                stube.FlowArea = 0.003;
                stube.Update();
            }

            // control view
            td.SetVisualStyle(VisualStyles.THERMAL_PP);
            td.RestoreIsoView(IsoViews.SW);
            td.ZoomExtents();
        }
    }
}
```
