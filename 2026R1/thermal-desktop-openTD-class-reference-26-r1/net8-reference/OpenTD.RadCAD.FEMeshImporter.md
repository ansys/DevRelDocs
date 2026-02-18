# <a id="OpenTD_RadCAD_FEMeshImporter"></a> Class FEMeshImporter

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Finite-element mesh importer.

```csharp
public class FEMeshImporter : MeshDisplayer, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[MeshDisplayer](OpenTD.MeshDisplayer.md) ← 
[FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[MeshDisplayer.LocalToWorldTransformation](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_LocalToWorldTransformation), 
[MeshDisplayer.TransformBy\(Matrix3d\)](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_TransformBy\_OpenTD\_Matrix3d\_), 
[MeshDisplayer.BaseTrans](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_BaseTrans), 
[MeshDisplayer.PostProcessingDisplayMode](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_PostProcessingDisplayMode), 
[MeshDisplayer.ModelViewDisplayMode](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_ModelViewDisplayMode), 
[MeshDisplayer.Label](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_Label), 
[MeshDisplayer.StressThermalGroupMap](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_StressThermalGroupMap), 
[MeshDisplayer.SetThermalStressAssociation\(string, string\)](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_SetThermalStressAssociation\_System\_String\_System\_String\_), 
[MeshDisplayer.SetThermalStressGradAssociation\(string, string\)](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_SetThermalStressGradAssociation\_System\_String\_System\_String\_), 
[MeshDisplayer.GetThermalStressAssociations\(\)](OpenTD.MeshDisplayer.md\#OpenTD\_MeshDisplayer\_GetThermalStressAssociations), 
[TdDbEntityData.SetFrom\(TdDbEntityData\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_SetFrom\_OpenTD\_TdDbEntityData\_), 
[TdDbEntityData.Layer](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_Layer), 
[TdDbEntityData.ColorIndex](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ColorIndex), 
[TdDbEntityData.ToString\(string, string, string\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ToString\_System\_String\_System\_String\_System\_String\_), 
[TdDbEntityData.ToString\(string, int, string\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ToString\_System\_String\_System\_Int32\_System\_String\_), 
[TdDbEntityData.ToString\(\)](OpenTD.TdDbEntityData.md\#OpenTD\_TdDbEntityData\_ToString), 
[DbObject.SetFrom\(DbObject\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_SetFrom\_OpenTD\_DbObject\_), 
[DbObject.Update\(\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_Update), 
[DbObject.UpdateFromTD\(\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_UpdateFromTD), 
[DbObject.CreateIn\(ThermalDesktop\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[DbObject.Handle](OpenTD.DbObject.md\#OpenTD\_DbObject\_Handle), 
[DbObject.TypeName](OpenTD.DbObject.md\#OpenTD\_DbObject\_TypeName), 
[DbObject.Equals\(object\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_Equals\_System\_Object\_), 
[DbObject.GetHashCode\(\)](OpenTD.DbObject.md\#OpenTD\_DbObject\_GetHashCode), 
[OpenTDObject.SetFrom\(OpenTDObject\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_SetFrom\_OpenTD\_OpenTDObject\_), 
[OpenTDObject.Update\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_Update), 
[OpenTDObject.UpdateFromTD\(\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateFromTD), 
[OpenTDObject.UpdateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_UpdateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.CreateIn\(ThermalDesktop\)](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_CreateIn\_OpenTD\_ThermalDesktop\_), 
[OpenTDObject.TdProxy](OpenTD.OpenTDObject.md\#OpenTD\_OpenTDObject\_TdProxy), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_RadCAD_FEMeshImporter__ctor"></a> FEMeshImporter\(\)

Do not use

```csharp
public FEMeshImporter()
```

### <a id="OpenTD_RadCAD_FEMeshImporter__ctor_OpenTD_Internal_Communication_ITdCommander_System_String_System_Boolean_"></a> FEMeshImporter\(ITdCommander, string, bool\)

```csharp
public FEMeshImporter(ITdCommander TdProxy, string name, bool useCurrentUCS)
```

#### Parameters

`TdProxy` ITdCommander

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`useCurrentUCS` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_RadCAD_FEMeshImporter__ctor_OpenTD_Internal_Communication_ITdCommander_System_String_"></a> FEMeshImporter\(ITdCommander, string\)

```csharp
public FEMeshImporter(ITdCommander TdProxy, string handle)
```

#### Parameters

`TdProxy` ITdCommander

`handle` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_RadCAD_FEMeshImporter_ReadMeshDataFile_System_String_OpenTD_RadCAD_FEMeshImporter_ImporterFiletype_System_Int32_System_Boolean_System_Boolean_"></a> ReadMeshDataFile\(string, ImporterFiletype, int, bool, bool\)

Read an external mesh data file to create a TD FEM.
Set inputModelLengthUnits to an integer corresponding to the Units.ModelLength enum.
If left at the default value of -999, WorkingUnits.ModelLength will be assumed.
inputModelLengthUnits functions normally for NASTRAN and FEMAP.
inputModelLengthUnits has no effect on Ansys CDB or Ideas - ensure source file units match drawing units.
Versions 6.1 - 6.3 used ReadNastranFile() instead.

```csharp
public void ReadMeshDataFile(string filename, FEMeshImporter.ImporterFiletype filetype, int inputModelLengthUnits = -999, bool loadProps = true, bool loadBoundaryConditions = true)
```

#### Parameters

`filename` [string](https://learn.microsoft.com/dotnet/api/system.string)

`filetype` [FEMeshImporter](OpenTD.RadCAD.FEMeshImporter.md).[ImporterFiletype](OpenTD.RadCAD.FEMeshImporter.ImporterFiletype.md)

`inputModelLengthUnits` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`loadProps` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`loadBoundaryConditions` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### See Also

[UnitsData](OpenTD.UnitsData.md).[ModelLength](OpenTD.UnitsData.ModelLength.md), 
[Units](OpenTD.Units.md).[WorkingUnits](OpenTD.Units.md\#OpenTD\_Units\_WorkingUnits)

### <a id="OpenTD_RadCAD_FEMeshImporter_SetMesh_OpenTD_RadCAD_FEModel_FEMesh_"></a> SetMesh\(FEMesh\)

```csharp
public void SetMesh(FEMesh mesh)
```

#### Parameters

`mesh` [FEMesh](OpenTD.RadCAD.FEModel.FEMesh.md)

### <a id="OpenTD_RadCAD_FEMeshImporter_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### <a id="OpenTD_RadCAD_FEMeshImporter_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

