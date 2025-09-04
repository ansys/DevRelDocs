# List (Enum) parameters

Parameters that are defined though a choice list (usually a **Type** list in the Speos interface) can be changed using their corresponding `enum`. For instance, there are three different types of volume properties (opaque, optic and library) and three types of surface properties (mirror, optical polished, library) in the Material definition:

```ironpython
#Example of the use of enum to define optical properties
newMaterial = SpeosSim.Material.Create()
newMaterial.Name = "Plastic"
newMaterial.VOPType = SpeosSim.Material.EnumVOPType.Opaque
newMaterial.SOPType = SpeosSim.Material.EnumSOPType.Library 
newMaterial.SOPLibrary = ".\\SPEOS input files\\Plastic.simplescattering"
```

For lists that are not predefined, for example the possible locations of a Natural Light Ambient Source, the complete list of `enums` can be obtained though a `Get` method and parsed to find the useful value.

```ironpython
naturalLight = SpeosSim.SourceAmbientNaturalLight.Create() 
locations = naturalLight.GetLocationPossibleValues()
locationLabel = ""
for locationLabel in locations:
 print locationLabel
 if locationLabel.Contains("Boston"): 
 break
naturalLight.Location = locationLabel
```