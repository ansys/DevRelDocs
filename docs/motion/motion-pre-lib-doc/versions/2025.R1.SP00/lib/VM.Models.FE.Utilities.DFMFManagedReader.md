#  Class DFMFManagedReader

Namespace: [VM.Models.FE.Utilities](VM.Models.FE.Utilities.md)  
Assembly: VM.Models.FE.Utilities.dll  

```csharp
public class DFMFManagedReader : DFMFReader, IDFMFReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DFMFReader](VM.Models.FE.Utilities.DFMFReader.md) ← 
[DFMFManagedReader](VM.Models.FE.Utilities.DFMFManagedReader.md)

#### Implements

[IDFMFReader](VM.Models.FE.Utilities.IDFMFReader.md)

#### Inherited Members

[DFMFReader.V1Version](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_V1Version), 
[DFMFReader.Create\(string, Unit, bool\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Create\_System\_String\_VM\_Unit\_System\_Boolean\_), 
[DFMFReader.GetMarkerInformation\(Vector, int, out Vector, out Vector\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetMarkerInformation\_VM\_Vector\_System\_Int32\_VM\_Vector\_\_VM\_Vector\_\_), 
[DFMFReader.GetModeInterPoint\(Vector, int, out Vector, out Vector\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetModeInterPoint\_VM\_Vector\_System\_Int32\_VM\_Vector\_\_VM\_Vector\_\_), 
[DFMFReader.GetRotationalShape\(int, int, out Vector\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetRotationalShape\_System\_Int32\_System\_Int32\_VM\_Vector\_\_), 
[DFMFReader.GetRotationalShape\(ICollection<int\>, int, out Vector\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetRotationalShape\_System\_Collections\_Generic\_ICollection\_System\_Int32\_\_System\_Int32\_VM\_Vector\_\_\_\_), 
[DFMFReader.GetTranslationalShape\(int, int, out Vector\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetTranslationalShape\_System\_Int32\_System\_Int32\_VM\_Vector\_\_), 
[DFMFReader.GetTranslationalShape\(ICollection<int\>, int, out Vector\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetTranslationalShape\_System\_Collections\_Generic\_ICollection\_System\_Int32\_\_System\_Int32\_VM\_Vector\_\_\_\_), 
[DFMFReader.GetUnusedModeIndexes\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetUnusedModeIndexes), 
[DFMFReader.SetUnusedModeIndexes\(IEnumerable<int\>\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetUnusedModeIndexes\_System\_Collections\_Generic\_IEnumerable\_System\_Int32\_\_), 
[DFMFReader.GetStressShape\(int, int, out double\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetStressShape\_System\_Int32\_System\_Int32\_System\_Double\_\_\_\_), 
[DFMFReader.GetStressShape\(ICollection<int\>, int, out ICollection<double\[\]\>\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetStressShape\_System\_Collections\_Generic\_ICollection\_System\_Int32\_\_System\_Int32\_System\_Collections\_Generic\_ICollection\_System\_Double\_\_\_\_\_), 
[DFMFReader.EqualsPatch\(FEPatchInfo\[\], FEPatchInfo\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_EqualsPatch\_VM\_Models\_FE\_Utilities\_FEPatchInfo\_\_\_VM\_Models\_FE\_Utilities\_FEPatchInfo\_\_\_), 
[DFMFReader.CalcUnitFactor\(Unit\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_CalcUnitFactor\_VM\_Unit\_), 
[DFMFReader.GetMultipleShapes\(DFMFReader.ModeMeta, ICollection<int\>, int, double, out Vector\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetMultipleShapes\_VM\_Models\_FE\_Utilities\_DFMFReader\_ModeMeta\_System\_Collections\_Generic\_ICollection\_System\_Int32\_\_System\_Int32\_System\_Double\_VM\_Vector\_\_\_\_), 
[DFMFReader.GetMultipleStress\(DFMFReader.ModeMeta, ICollection<int\>, int, double, out ICollection<double\[\]\>\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetMultipleStress\_VM\_Models\_FE\_Utilities\_DFMFReader\_ModeMeta\_System\_Collections\_Generic\_ICollection\_System\_Int32\_\_System\_Int32\_System\_Double\_System\_Collections\_Generic\_ICollection\_System\_Double\_\_\_\_\_), 
[DFMFReader.GetPointInformation\(ICollection<Vector\>, DFMFReader.ModeMeta, Vector, int, out Vector, out Vector\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetPointInformation\_System\_Collections\_Generic\_ICollection\_VM\_Vector\_\_VM\_Models\_FE\_Utilities\_DFMFReader\_ModeMeta\_VM\_Vector\_System\_Int32\_VM\_Vector\_\_VM\_Vector\_\_), 
[DFMFReader.GetPointInformationImpl\(ICollection<Vector\>, DFMFReader.ModeMeta, Vector, int, out Vector, out Vector, Func<int, \(Vector, Vector\)\>\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetPointInformationImpl\_System\_Collections\_Generic\_ICollection\_VM\_Vector\_\_VM\_Models\_FE\_Utilities\_DFMFReader\_ModeMeta\_VM\_Vector\_System\_Int32\_VM\_Vector\_\_VM\_Vector\_\_System\_Func\_System\_Int32\_System\_ValueTuple\_VM\_Vector\_VM\_Vector\_\_\_), 
[DFMFReader.GetSingleShape\(DFMFReader.ModeMeta, int, int, double, out Vector\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetSingleShape\_VM\_Models\_FE\_Utilities\_DFMFReader\_ModeMeta\_System\_Int32\_System\_Int32\_System\_Double\_VM\_Vector\_\_), 
[DFMFReader.GetSingleStress\(DFMFReader.ModeMeta, int, int, double, out double\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_GetSingleStress\_VM\_Models\_FE\_Utilities\_DFMFReader\_ModeMeta\_System\_Int32\_System\_Int32\_System\_Double\_System\_Double\_\_\_\_), 
[DFMFReader.ImportImpl\(string, Unit\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ImportImpl\_System\_String\_VM\_Unit\_), 
[DFMFReader.ReadInterfacePoints\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadInterfacePoints), 
[DFMFReader.ReadMarkerPositions\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadMarkerPositions), 
[DFMFReader.ReadMassInfoForOldVer\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadMassInfoForOldVer), 
[DFMFReader.ReadMasterPoints\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadMasterPoints), 
[DFMFReader.ReadModes\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadModes), 
[DFMFReader.ReadNBodyInformations\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadNBodyInformations), 
[DFMFReader.ReadMaterialInformation\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadMaterialInformation), 
[DFMFReader.ReadPropertyInformation\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadPropertyInformation), 
[DFMFReader.ReadConstraintInformation\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadConstraintInformation), 
[DFMFReader.ReadNamedSelectionInformation\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadNamedSelectionInformation), 
[DFMFReader.SetInterfacePoints\(Vector\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetInterfacePoints\_VM\_Vector\_\_\_), 
[DFMFReader.SetMarkerPositions\(Vector\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetMarkerPositions\_VM\_Vector\_\_\_), 
[DFMFReader.SetMassInfosForOldVer\(MassInfoForOldVer\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetMassInfosForOldVer\_VM\_Models\_FE\_Utilities\_MassInfoForOldVer\_\_\_), 
[DFMFReader.SetMasterPoints\(uint\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetMasterPoints\_System\_UInt32\_\_\_), 
[DFMFReader.SetModes\(Mode\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetModes\_VM\_Models\_FE\_Utilities\_Mode\_\_\_), 
[DFMFReader.SetNBodyInformations\(Vector\[\], int\[\], int\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetNBodyInformations\_VM\_Vector\_\_\_System\_Int32\_\_\_System\_Int32\_\_\_), 
[DFMFReader.SetNodesForRBE\(Vector\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetNodesForRBE\_VM\_Vector\_\_\_), 
[DFMFReader.SetNBodyInformations\(NBody\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetNBodyInformations\_VM\_Models\_FE\_Utilities\_NBody\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_VM\_Models\_FE\_Utilities\_FEElement\_\_\_), 
[DFMFReader.SetMaterialInformation\(MaterialISO\[\], MaterialORTHO\[\], MaterialAB\[\], MaterialNH\[\], MaterialMR\[\], MaterialOG\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetMaterialInformation\_VM\_Models\_FE\_Utilities\_MaterialISO\_\_\_VM\_Models\_FE\_Utilities\_MaterialORTHO\_\_\_VM\_Models\_FE\_Utilities\_MaterialAB\_\_\_VM\_Models\_FE\_Utilities\_MaterialNH\_\_\_VM\_Models\_FE\_Utilities\_MaterialMR\_\_\_VM\_Models\_FE\_Utilities\_MaterialOG\_\_\_), 
[DFMFReader.SetPropertyInformation\(FEPropertyBeam\[\], FEPropertyBeamL\[\], FEPropertyShell\[\], FEPropertySolid\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetPropertyInformation\_VM\_Models\_FE\_Utilities\_FEPropertyBeam\_\_\_VM\_Models\_FE\_Utilities\_FEPropertyBeamL\_\_\_VM\_Models\_FE\_Utilities\_FEPropertyShell\_\_\_VM\_Models\_FE\_Utilities\_FEPropertySolid\_\_\_), 
[DFMFReader.SetConstraintInformation\(FEConstraintRBE\[\], FEConstraintRBE\[\], FEConstraintTie\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetConstraintInformation\_VM\_Models\_FE\_Utilities\_FEConstraintRBE\_\_\_VM\_Models\_FE\_Utilities\_FEConstraintRBE\_\_\_VM\_Models\_FE\_Utilities\_FEConstraintTie\_\_\_), 
[DFMFReader.SetNamedSelectionInformation\(NamedSelection\[\], NamedSelection\[\]\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SetNamedSelectionInformation\_VM\_Models\_FE\_Utilities\_NamedSelection\_\_\_VM\_Models\_FE\_Utilities\_NamedSelection\_\_\_), 
[DFMFReader.ReadNamedSelectionFromConstraintInformation\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ReadNamedSelectionFromConstraintInformation), 
[DFMFReader.DisposeManagedResource\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_DisposeManagedResource), 
[DFMFReader.DisposeNativeResources\(\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_DisposeNativeResources), 
[DFMFReader.Dispose\(bool\)](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Dispose\_System\_Boolean\_), 
[DFMFReader.DFMFFileType](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_DFMFFileType), 
[DFMFReader.FactorForce](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_FactorForce), 
[DFMFReader.FactorLength](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_FactorLength), 
[DFMFReader.FactorMass](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_FactorMass), 
[DFMFReader.FactorScale](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_FactorScale), 
[DFMFReader.FactorTime](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_FactorTime), 
[DFMFReader.FilePath](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_FilePath), 
[DFMFReader.InterfacePoints](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_InterfacePoints), 
[DFMFReader.InvariantFilePosition](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_InvariantFilePosition), 
[DFMFReader.Level](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Level), 
[DFMFReader.MarkerPositions](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_MarkerPositions), 
[DFMFReader.Mass](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Mass), 
[DFMFReader.MassCenter](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_MassCenter), 
[DFMFReader.MassInfoForOldVerArray](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_MassInfoForOldVerArray), 
[DFMFReader.MasterPoints](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_MasterPoints), 
[DFMFReader.ModalType](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ModalType), 
[DFMFReader.Modes](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Modes), 
[DFMFReader.MomentOfInertia](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_MomentOfInertia), 
[DFMFReader.NodePositions](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NodePositions), 
[DFMFReader.NumberOfInterfacePoints](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NumberOfInterfacePoints), 
[DFMFReader.NumberOfMarkerPositions](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NumberOfMarkerPositions), 
[DFMFReader.NumberOfDummyNode](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NumberOfDummyNode), 
[DFMFReader.NumberOfMassInfosForOldVersion](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NumberOfMassInfosForOldVersion), 
[DFMFReader.NumberOfMasterPoints](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NumberOfMasterPoints), 
[DFMFReader.NumberOfModes](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NumberOfModes), 
[DFMFReader.NumberOfNodes](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NumberOfNodes), 
[DFMFReader.NumberOfTetraConnectivities](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NumberOfTetraConnectivities), 
[DFMFReader.NumberOfTriaConnectivities](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NumberOfTriaConnectivities), 
[DFMFReader.TetraConnectivities](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_TetraConnectivities), 
[DFMFReader.TotalNodesForModal](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_TotalNodesForModal), 
[DFMFReader.AddedNodesForRBE](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_AddedNodesForRBE), 
[DFMFReader.TriaConnectivities](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_TriaConnectivities), 
[DFMFReader.NBodies](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NBodies), 
[DFMFReader.Beam2Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Beam2Elements), 
[DFMFReader.Shell3Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Shell3Elements), 
[DFMFReader.Shell4Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Shell4Elements), 
[DFMFReader.Shell6Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Shell6Elements), 
[DFMFReader.Shell8Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Shell8Elements), 
[DFMFReader.Solid4Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Solid4Elements), 
[DFMFReader.Solid5Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Solid5Elements), 
[DFMFReader.Solid6Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Solid6Elements), 
[DFMFReader.Solid8Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Solid8Elements), 
[DFMFReader.Solid10Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Solid10Elements), 
[DFMFReader.Solid13Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Solid13Elements), 
[DFMFReader.Solid15Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Solid15Elements), 
[DFMFReader.Solid20Elements](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Solid20Elements), 
[DFMFReader.ISOMaterials](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ISOMaterials), 
[DFMFReader.ORTHOMaterials](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ORTHOMaterials), 
[DFMFReader.ArrudaBoyceMaterials](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ArrudaBoyceMaterials), 
[DFMFReader.NeoHookeanMaterials](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_NeoHookeanMaterials), 
[DFMFReader.MooneyRivlinMaterials](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_MooneyRivlinMaterials), 
[DFMFReader.OgdenMaterials](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_OgdenMaterials), 
[DFMFReader.BeamProperties](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_BeamProperties), 
[DFMFReader.BeamLProperties](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_BeamLProperties), 
[DFMFReader.ShellProperties](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_ShellProperties), 
[DFMFReader.SolidProperties](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_SolidProperties), 
[DFMFReader.RBE2s](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_RBE2s), 
[DFMFReader.RBE3s](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_RBE3s), 
[DFMFReader.Ties](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Ties), 
[DFMFReader.PatchSets](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_PatchSets), 
[DFMFReader.EdgeSets](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_EdgeSets), 
[DFMFReader.UnitForce](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_UnitForce), 
[DFMFReader.UnitLength](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_UnitLength), 
[DFMFReader.UnitMass](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_UnitMass), 
[DFMFReader.UnitTime](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_UnitTime), 
[DFMFReader.Version](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_Version), 
[DFMFReader.AvailableAsNodal](VM.Models.FE.Utilities.DFMFReader.md\#VM\_Models\_FE\_Utilities\_DFMFReader\_AvailableAsNodal)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_FE_Utilities_DFMFManagedReader__ctor"></a> DFMFManagedReader\(\)

```csharp
public DFMFManagedReader()
```

## Methods

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_GetMultipleShapes_VM_Models_FE_Utilities_DFMFReader_ModeMeta_System_Collections_Generic_ICollection_System_Int32__System_Int32_System_Double_VM_Vector____"></a> GetMultipleShapes\(ModeMeta, ICollection<int\>, int, double, out Vector\[\]\)

```csharp
protected override sealed void GetMultipleShapes(DFMFReader.ModeMeta meta, ICollection<int> arnModeSeq, int nNodeSeq, double dFactor, out Vector[] arVecMode)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`arnModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`arVecMode` Vector\[\]

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_GetMultipleStress_VM_Models_FE_Utilities_DFMFReader_ModeMeta_System_Collections_Generic_ICollection_System_Int32__System_Int32_System_Double_System_Collections_Generic_ICollection_System_Double_____"></a> GetMultipleStress\(ModeMeta, ICollection<int\>, int, double, out ICollection<double\[\]\>\)

```csharp
protected override sealed void GetMultipleStress(DFMFReader.ModeMeta meta, ICollection<int> colModeSeq, int nodeSeq, double factor, out ICollection<double[]> colStress)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`factor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`colStress` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_GetPointInformation_System_Collections_Generic_ICollection_VM_Vector__VM_Models_FE_Utilities_DFMFReader_ModeMeta_VM_Vector_System_Int32_VM_Vector__VM_Vector__"></a> GetPointInformation\(ICollection<Vector\>, ModeMeta, Vector, int, out Vector, out Vector\)

```csharp
protected override sealed bool GetPointInformation(ICollection<Vector> points, DFMFReader.ModeMeta meta, Vector position, int modeSequence, out Vector vecTra, out Vector vecRot)
```

#### Parameters

`points` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`position` Vector

`modeSequence` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vecTra` Vector

`vecRot` Vector

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_GetSingleShape_VM_Models_FE_Utilities_DFMFReader_ModeMeta_System_Int32_System_Int32_System_Double_VM_Vector__"></a> GetSingleShape\(ModeMeta, int, int, double, out Vector\)

```csharp
protected override sealed void GetSingleShape(DFMFReader.ModeMeta meta, int nModeSeq, int nNodeSeq, double dFactor, out Vector vecMode)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`nModeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vecMode` Vector

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_GetSingleStress_VM_Models_FE_Utilities_DFMFReader_ModeMeta_System_Int32_System_Int32_System_Double_System_Double____"></a> GetSingleStress\(ModeMeta, int, int, double, out double\[\]\)

```csharp
protected override sealed void GetSingleStress(DFMFReader.ModeMeta meta, int modeSeq, int nodeSeq, double factor, out double[] stress)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`factor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ImportImpl_System_String_VM_Unit_"></a> ImportImpl\(string, Unit\)

```csharp
protected override sealed void ImportImpl(string strModeFileName, Unit unit)
```

#### Parameters

`strModeFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` Unit

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadConstraintInformation"></a> ReadConstraintInformation\(\)

```csharp
protected override void ReadConstraintInformation()
```

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadInterfacePoints"></a> ReadInterfacePoints\(\)

```csharp
protected override void ReadInterfacePoints()
```

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadMarkerPositions"></a> ReadMarkerPositions\(\)

```csharp
protected override void ReadMarkerPositions()
```

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadMassInfoForOldVer"></a> ReadMassInfoForOldVer\(\)

```csharp
protected override void ReadMassInfoForOldVer()
```

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadMasterPoints"></a> ReadMasterPoints\(\)

```csharp
protected override void ReadMasterPoints()
```

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadMaterialInformation"></a> ReadMaterialInformation\(\)

```csharp
protected override void ReadMaterialInformation()
```

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadModes"></a> ReadModes\(\)

```csharp
protected override void ReadModes()
```

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadNBodyInformations"></a> ReadNBodyInformations\(\)

```csharp
protected override void ReadNBodyInformations()
```

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadNamedSelectionInformation"></a> ReadNamedSelectionInformation\(\)

```csharp
protected override void ReadNamedSelectionInformation()
```

### <a id="VM_Models_FE_Utilities_DFMFManagedReader_ReadPropertyInformation"></a> ReadPropertyInformation\(\)

```csharp
protected override void ReadPropertyInformation()
```

