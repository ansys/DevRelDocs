# ResultProjectedGrid – Exporting a Projected Grid as Geometry

The following script sample shows you an example on how to export a Projected Grid as geometry.

```
interactiveSimulation = SpeosSim.SimulationInteractive.Find("Interactive.1")
interactiveSimulation.Compute()

results = interactiveSimulation.GetResultFilePaths()

for resultFile in results:
if (resultFile.ToString().EndsWith("OPTProjectedGrid")):
file = Path.GetFileName(resultFile)
projectedGridResult = SpeosSim.ResultProjectedGrid.Find(file)
projectedGridResult.ExportProjectedGridAsGeometry()
```