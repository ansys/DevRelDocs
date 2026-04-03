# Material – Creating and applying UV mapping

The following script sample shows you an example on how to apply UV mapping on an object.

```ironpython
concreteTexture = SpeosSim.Material.Create()
concreteTexture.Name = "Concrete_texture"
concreteTexture.OpticalPropertiesType = SpeosSim.Material.EnumOpticalPropertiesType.Surfacic

concreteTexture.OrientedFaces.Set(GetRootPart().Bodies[0].Faces[1])
concreteTexture.HasMultipleSOP = True

concreteSOP = concreteTexture.ListSOP[0]
concreteSOP.SOPType = SpeosSim.SurfaceLayer.EnumSOPType.Library
concreteSOP.SOPLibrary = ".\\SPEOS input files\\Concrete.simplescattering"
concreteSOP.ImageTextureType = SpeosSim.SurfaceLayer.EnumImageTextureType.File
concreteSOP.ImageTextureFilePath = ".\\SPEOS input files\\concrete.png"
concreteSOP.ImageTextureWidth = 500
concreteSOP.ImageTextureLayer = 1
concreteSOP.NormalMapType = SpeosSim.SurfaceLayer.EnumNormalMapType.None

uvMapping = SpeosSim.UVMapping.Create()
uvMapping.Geometries.Set([wallBody.Faces[1]]))

for customObject in uvMapping.GetChildSubjects():
uvMap = SpeosSim.UVMap.Find(customObject.GetName())
uvMap.OriginPoint.Set(sensorOrigin)
uvMap.ProjectionDirection.Set(sensorFrontDirection)
uvMap.OrientationDirection.Set(sensorTopDirection)
```