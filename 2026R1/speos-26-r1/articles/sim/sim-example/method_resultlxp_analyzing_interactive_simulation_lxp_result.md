# ResultLXP – Analyzing the interactive simulation light expert result

The following script sample shows you an example on how to analyze an Interactive Simulation Light Expert result.

```ironpython
interactiveSimulation = SpeosSim.SimulationInteractive.Create()
interactiveSimulation.Geometries.SelectAll()
interactiveSimulation.Sources.Set(interactiveSource.Subject)
interactiveSimulation.Compute()
interactiveSimulation.ExportRaysAsGeometry()

interactiveSimulation.FlagLXPActivation = True
interactiveSimulation.Compute()

lxpResult = SpeosSim.ResultLXP.Find(interactiveSimulation.Name + ".lpf")
lxpResult.RequiredFaces.Set(lxpRequiredFace)
lxpResult.RejectedFaces.Set(lxpRejectedFace)

lxpResult.Compute()
lxpResult.ExportRaysAsGeometry()
```