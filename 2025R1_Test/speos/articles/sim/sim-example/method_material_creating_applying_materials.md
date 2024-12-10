# Material – Creating and applying materials

The following script sample shows you an example on how to define VOP and SOP and apply them.

```ironpython
newMaterial = SpeosSim.Material.Create()
newMaterial.Name = "New material"
newMaterial.OpticalPropertiesType = SpeosSim.Material.EnumOpticalPropertiesType.Volumic
newMaterial.VOPType = SpeosSim.Material.EnumVOPType.Optic
newMaterial.VOPIndex = 1.5
newMaterial.VOPAbsorption = 0
newMaterial.VOPConstringence = 0
newMaterial.SOPType = SpeosSim.Material.EnumSOPType.OpticalPolished
newMaterial.VolumeGeometries.Set(GetRootPart().Bodies[0])

newSOP = SpeosSim.Material.Create()
newSOP.Name = "New surface optical property"
newSOP.OpticalPropertiesType = SpeosSim.Material.EnumOpticalPropertiesType.Surfacic
newSOP.SOPType = SpeosSim.Material.EnumSOPType.Library
newSOP.SOPLibrary = R".\SPEOS input files\Munsell07_Whitepaint.bsdf180"

orientedFace = SpeosSim.OrientedFace.Create()
orientedFace.Face.Set(face)
orientedFace.ReverseDirection = True

newSOP.OrientedFaces.Add(orientedFace)
```