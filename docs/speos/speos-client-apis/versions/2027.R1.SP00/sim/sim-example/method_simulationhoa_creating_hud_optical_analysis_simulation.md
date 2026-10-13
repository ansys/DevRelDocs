# SimulationHoa – Creating a HUD optical analysis simulation

The following script sample shows you an example on how to create a HUD Optical Analysis Simulation.

```ironpython
hoaSimulation = SpeosSim.SimulationHoa.Create()
hoaSimulation.Name = "Created HOA simulation"

hoaSimulation.Eyebox.EyeboxCenter.Set(GetRootPart().Components[0].Content.Curves[0])
hoaSimulation.Winshield.WindshieldInnerSurface.Set(GetRootPart().Components[0].Content.Bodies[0].Faces[0])

selection = Selection.Create(GetRootPart().Components[0].Content.Bodies[1].Faces[0], GetRootPart().Components[0].Content.Bodies[2].Faces[0])
hoaSimulation.Mirrors.MirrorFaces.Set(selection)

hoaSimulation.PGU.OriginPoint.Set(GetRootPart().Components[0].Content.CoordinateSystems[0])
hoaSimulation.PGU.XDirection.Set(GetRootPart().Components[0].Content.CoordinateSystems[0].Axes[0])
hoaSimulation.PGU.YDirection.Set(GetRootPart().Components[0].Content.CoordinateSystems[0].Axes[1])
hoaSimulation.Compute()
```