# Component3Dtexture – Creating a 3D texture on a geometry

The following script sample shows you an example on how to create a 3D Texture.

```ironpython
texture3D = SpeosSim.Component3DTexture.Create()
texture3D.Name = "Created 3D texture"

texture3D.OriginPoint.Set(GetRootPart().Curves[0])
texture3D.XDirection.Set(GetRootPart().Curves[1])
texture3D.YDirection.Set(GetRootPart().Curves[2])

texture3D.SupportGeometry.Set(geo)

texture3D.PatternFile = SpeosSim.Command.GetInputFolder() + "PRISM.scdoc"
texture3D.PatternGlobalScale = 0.4
texture3D.PreviewSizeX = 100
texture3D.PreviewSizeY = 100
texture3D.PreviewSizeZ = 100

texture3D.MappingType = SpeosSim.Component3DTexture.EnumMappingType.Rectangular

texture3D.Compute()
```