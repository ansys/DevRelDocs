# ComponentImport – Creating a LightBox Import

The following script sample shows you an example on how to create a Light Box Import.

```
lightBoxImport = SpeosSim.ComponentImport.Create()
lightBoxImport.Name = "Created component import"

lightBoxImport.OriginPoint.Set(GetRootPart().Curves[0])
lightBoxImport.XDirection.Set(GetRootPart().Curves[1])
lightBoxImport.YDirection.Set(GetRootPart().Curves[2])
lightBoxImport.ImportFile = lightBoxExportPath

lightBoxImport.Compute()
```