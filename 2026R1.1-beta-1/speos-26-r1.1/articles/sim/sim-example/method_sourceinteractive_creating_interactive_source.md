# SourceInteractive – Creating an interactive source

The following script sample shows you an example on how to create an Interactive Source.

```ironpython
interactiveSource = SpeosSim.SourceInteractive.Create() br>interactiveSource.StartType = SpeosSim.SourceInteractive.EnumStartType.Point
interactiveSource.StartGeometries.Set(GetRootPart().Curves[0])

interactiveSource.EndType = SpeosSim.SourceInteractive.EnumEndType.Curve
interactiveSource.EndCurveGeometries.Set(GetRootPart().Curves[1])

interactiveSource.EndXSampling = 50
interactiveSource.Wavelength = 550
interactiveSource.RayLength = 1
```