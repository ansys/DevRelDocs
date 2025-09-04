# Working with case sets

OpenTD gives you full control over case sets. You can create, query, modify, run, or delete them. The following sections show how.

## Create and run a Case

OpenTD can be used to interact with the Case Set Manager to create and run cases as shown in the following program:

```c#
using System.Collections.Generic;
using System.IO;
using OpenTD;

namespace OpenTDGettingStarted
{
    class CreateAndRunCase
    {
        public static void Main(string[] args)
        {
            // you may wish to change the location of the working dir:
            string workingDir = @"c:\\temp\\OpenTDCreateAndRunCase";
            if (Directory.Exists(workingDir))
                Directory.Delete(workingDir, true);
            Directory.CreateDirectory(workingDir);

            var td = new ThermalDesktop();
            td.ConnectConfig.StartDirectory = workingDir;
            td.Connect();

            // \*\*\* Create a simple model of a heated bar \*\*\*
            var barNodes = new List< Node> ();
            for (int i = 0; i < 10; ++i)
            {
                var n = td.CreateNode();
                n.Submodel = "bar";
                n.Id = i + 1;
                n.MassVol = 10;
                n.Origin = new Point3d(0.01 * i, 1, 0);
                n.InitialTemp = 300;
                n.Update();
                barNodes.Add(n);
            }
            for (int i = 0; i < barNodes.Count - 1; ++i)
            {
                var c = td.CreateConductor(barNodes[i], barNodes[i + 1]);
                c.Submodel = "bar";
                c.Id = i + 1;
                c.Value = 0.1;
                c.Update();
            }
            var roomAir = td.CreateNode();
            roomAir.Submodel = "room";
            roomAir.NodeType = RcNodeData.NodeTypes.BOUNDARY;
            roomAir.Origin = new Point3d(0.055, 1.1, 0);
            roomAir.InitialTemp = 300;
            roomAir.Update();

            var barConnections = new List<Connection>();
            foreach (Node n in barNodes)
                barConnections.Add(new Connection(n));
            var convection = td.CreateConductor(roomAir, barConnections);
            convection.Value = 1;
            convection.Submodel = "room";
            convection.Update();

            var qTorch = td.CreateSymbol("qTorch", "80");
            qTorch.OutputAsRegister = true;
            qTorch.Update();

            var torch = td.CreateHeatLoad(new Connection(barNodes[0]));
            torch.ValueExp.Value = qTorch.Name;
            torch.Submodel = "torch";
            torch.Update();

            td.ZoomExtents();
            // \*\*\* End simple model creation \*\*\*

            // Create a transient case and run it:
            var nominal = td.CreateCaseSet("transient with nominal torch", "", "torchNom");
            nominal.SteadyState = 0;
            nominal.Transient = 1;
            nominal.SindaControl.timend = 600;
            nominal.Update();
            nominal.Run();

            // Create a cold case by overriding a symbol, and run it:
            var cold = td.CreateCaseSet
            ("transient with cold torch", "", "torchCold");
            cold.SteadyState = 0;
            cold.Transient = 1;
            cold.SindaControl.timend = 1200;
            cold.SymbolNames.Add(qTorch.Name);
            cold.SymbolValues.Add("50");
            cold.SymbolComments.Add("cold torch heat input");
            cold.SaveAll = 1;
            cold.Update();
            cold.Run();
        }
    }
}
```

Solution files, including “torchNom.sav” and “torchCold.sav”, will be written to the working directory, which we created and then set with ThermalDesktop.*ConnectConfig.StartDirectory*. (See the [Control how OpenTD connects to Thermal Desktop](extras.md#control-how-opentd-connects-to-thermal-desktop) section for more information about controlling how OpenTD connects to TD.) Otherwise, the working directory would have probably been the directory containing your exe. You can also use the ThermalDesktop.*SaveAs* method before running to save the dwg and set the working directory.

## Create an orbit and apply it to a case set

Orbits are created using the ThermalDesktop.*CreateOrbit* method. Once created, they are applied to case sets by adding a new item to the *CaseSet.RadiationTasks* list. This can also be used to add other types of radiation tasks, such as RADK calculations, as shown in the following program:

```c#
using OpenTD;
using OpenTD.RadCAD;

namespace OpenTDGettingStarted
{
    class CreateOrbit
    {
        public static void Main(string[] args)
        {
            var td = new ThermalDesktop();
            td.Connect();

            // create an orbit
            var beta30 = td.CreateOrbit("beta30");
            beta30.OrbitType = Orbit.OrbitTypes.BASIC;
            beta30.Planet = Orbit.Planets.EARTH;
            beta30.OrbitData.Inclination = 30;
            beta30.Update();

            // add orbit to a new case set
            var beta30Case = td.CreateCaseSet("beta30 case");
            // first add a RADK task:
            beta30Case.RadiationTasks.Add(new RadiationTaskData()
            {
                TypeCalc = RadiationTaskData.calcType.RADK,
                AnalGroup = "BASE",
            });
            // now add the orbital heat rates task:
            beta30Case.RadiationTasks.Add(new RadiationTaskData()
            {
                TypeCalc = RadiationTaskData.calcType.HEATRATE,
                OrbitName = "beta30",
                AnalGroup = "BASE",
            });
            beta30Case.Update();
        }
    }
}
```

## Run in batch mode

When you call CaseSet.Run(), it is the same as selecting and running a single case in the GUI. If you would like to select multiple cases and run, either in Demand or Batch mode, you can use ThermalDesktop.*CaseSetManager*. It provides all the functionality of the Case Set Manager, including the ability to adjust Manager-level options, using the CaseSetManager.*Options* member.

To run multiple cases–just like selecting them all in the GUI and running–use the following CaseSetManager.Run overload:

```c#
void Run(IEnumerable<int> caseIndices)
```

In other words, you provide a List<int> or other IEnumerable<int> containing the indices of the cases you would like to run. These indices correspond to the list indices returned by CaseSetManager.*GetCaseSets()* or the equivalent ThermalDesktop.*GetCaseSets()* method.
