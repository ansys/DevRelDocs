# ComponentExport – Creating a lightBox export

The following script sample shows you an example on how to create a Light Box Export.

```ironpython
lightBoxExport = SpeosSim.ComponentExport.Create()
lightBoxExport.Name = "Created component export"

lightBoxExport.OriginPoint.Set(GetRootPart().Curves[0])
lightBoxExport.XDirection.Set(GetRootPart().Curves[1])
lightBoxExport.YDirection.Set(GetRootPart().Curves[2])

surfaceSource = SpeosSim.SourceSurface.Find("Surface.1")
lightBoxExport.Sources.Set(surfaceSource)
lightBoxExport.Geometries.Set(GetRootPart().Bodies[0])


lightBoxExport.Compute()

lightBoxExportPath = lightBoxExport.GetResultFilePath()
```