# <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData"></a> Class RcFdSolidData

Namespace: [OpenTD.RadCAD.FdSolid](OpenTD.RadCAD.FdSolid.md)  
Assembly: OpenTD.dll  

Base class for finite-difference (FD) solids.

```csharp
public class RcFdSolidData : TdDbEntityData, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[RcFdSolidData](OpenTD.RadCAD.FdSolid.RcFdSolidData.md)

#### Derived

[SolidBrick](OpenTD.RadCAD.FdSolid.SolidBrick.md), 
[SolidCone](OpenTD.RadCAD.FdSolid.SolidCone.md), 
[SolidCylinder](OpenTD.RadCAD.FdSolid.SolidCylinder.md), 
[SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md), 
[SolidSphere](OpenTD.RadCAD.FdSolid.SolidSphere.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

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

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData__ctor"></a> RcFdSolidData\(\)

```csharp
public RcFdSolidData()
```

## Properties

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_AnalysisGroups"></a> AnalysisGroups

```csharp
public UniqueItemList<AnalysisGroupSolidInfo> AnalysisGroups { get; set; }
```

#### Property Value

 [UniqueItemList](OpenTD.Utility.UniqueItemList\-1.md)<[AnalysisGroupSolidInfo](OpenTD.RadCAD.FdSolid.AnalysisGroupSolidInfo.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_AnalysisGroupsVolumetric"></a> AnalysisGroupsVolumetric

```csharp
public UniqueItemList<AnalysisGroupVolumetricInfo> AnalysisGroupsVolumetric { get; set; }
```

#### Property Value

 [UniqueItemList](OpenTD.Utility.UniqueItemList\-1.md)<[AnalysisGroupVolumetricInfo](OpenTD.RadCAD.AnalysisGroupVolumetricInfo.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_AreaContactAbsolute"></a> AreaContactAbsolute

```csharp
public List<int> AreaContactAbsolute { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_AttachedNodeHandles"></a> AttachedNodeHandles

```csharp
public List<string> AttachedNodeHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_BaseTrans"></a> BaseTrans

Transformation from Base to World Coordinate System (WCS)

```csharp
public Matrix3d BaseTrans { get; set; }
```

#### Property Value

 [Matrix3d](OpenTD.Matrix3d.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_BreakdownU"></a> BreakdownU

```csharp
public NodeBreakdownData BreakdownU { get; set; }
```

#### Property Value

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_BreakdownV"></a> BreakdownV

```csharp
public NodeBreakdownData BreakdownV { get; set; }
```

#### Property Value

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_BreakdownW"></a> BreakdownW

```csharp
public NodeBreakdownData BreakdownW { get; set; }
```

#### Property Value

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_CondSubmodel"></a> CondSubmodel

```csharp
public SubmodelNameData CondSubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_DensityMult"></a> DensityMult

```csharp
public double DensityMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_DensityMultExp"></a> DensityMultExp

```csharp
public ExpressionData DensityMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_FaceContactExp"></a> FaceContactExp

```csharp
public List<ExpressionData> FaceContactExp { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ExpressionData](OpenTD.ExpressionData.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_FaceContactValue"></a> FaceContactValue

```csharp
public DimensionalList<CondPerArea> FaceContactValue { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[CondPerArea](OpenTD.Dimension.CondPerArea.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_GenerateCondCap"></a> GenerateCondCap

```csharp
public int GenerateCondCap { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_GenerateCondCapExp"></a> GenerateCondCapExp

```csharp
public ExpressionData GenerateCondCapExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_IdType"></a> IdType

```csharp
public RcEntityData.IdType IdType { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[IdType](OpenTD.RadCAD.RcEntityData.IdType.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_InsideFmcOpticalProperties"></a> InsideFmcOpticalProperties

```csharp
public List<string> InsideFmcOpticalProperties { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_InsideOpticalProperties"></a> InsideOpticalProperties

```csharp
public List<string> InsideOpticalProperties { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_KuMult"></a> KuMult

```csharp
public double KuMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_KuMultExp"></a> KuMultExp

```csharp
public ExpressionData KuMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_KvMult"></a> KvMult

```csharp
public double KvMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_KvMultExp"></a> KvMultExp

```csharp
public ExpressionData KvMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_KwMult"></a> KwMult

```csharp
public double KwMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_KwMultExp"></a> KwMultExp

```csharp
public ExpressionData KwMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_LocalTrans"></a> LocalTrans

Transformation from Local to Base coordinate system

```csharp
public Transformation LocalTrans { get; set; }
```

#### Property Value

 [Transformation](OpenTD.Transformation.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliInitialTemp"></a> MliInitialTemp

```csharp
public DimensionalList<Temp> MliInitialTemp { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliInitialTempExp"></a> MliInitialTempExp

```csharp
public List<ExpressionData> MliInitialTempExp { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ExpressionData](OpenTD.ExpressionData.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliInsulationNodeSubmodelIdOption"></a> MliInsulationNodeSubmodelIdOption

```csharp
public List<InsulationNodeSubmodelIdOptions> MliInsulationNodeSubmodelIdOption { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[InsulationNodeSubmodelIdOptions](OpenTD.RadCAD.InsulationNodeSubmodelIdOptions.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliMaterial"></a> MliMaterial

```csharp
public List<string> MliMaterial { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliMaterialStackNameArray"></a> MliMaterialStackNameArray

```csharp
public List<string> MliMaterialStackNameArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliNodeLayers"></a> MliNodeLayers

```csharp
public List<int> MliNodeLayers { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliNodeType"></a> MliNodeType

```csharp
public List<RcFdSolidData.MliNodeTypes> MliNodeType { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[RcFdSolidData](OpenTD.RadCAD.FdSolid.RcFdSolidData.md).[MliNodeTypes](OpenTD.RadCAD.FdSolid.RcFdSolidData.MliNodeTypes.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliOffset"></a> MliOffset

```csharp
public List<int> MliOffset { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliOverrides"></a> MliOverrides

```csharp
public List<List<string>> MliOverrides { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliSubmodelNames"></a> MliSubmodelNames

```csharp
public List<string> MliSubmodelNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliThickness"></a> MliThickness

```csharp
public DimensionalList<ModelLength> MliThickness { get; set; }
```

#### Property Value

 [DimensionalList](OpenTD.Dimension.DimensionalList\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_MliThicknessExp"></a> MliThicknessExp

```csharp
public List<ExpressionData> MliThicknessExp { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ExpressionData](OpenTD.ExpressionData.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_NodeNames"></a> NodeNames

```csharp
public List<string> NodeNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_NodeType"></a> NodeType

```csharp
public RcFdSolidData.NodePositionsType NodeType { get; set; }
```

#### Property Value

 [RcFdSolidData](OpenTD.RadCAD.FdSolid.RcFdSolidData.md).[NodePositionsType](OpenTD.RadCAD.FdSolid.RcFdSolidData.NodePositionsType.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_OpticOverride"></a> OpticOverride

```csharp
public List<Dictionary<string, string>> OpticOverride { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_OutputNodesAsArithmetic"></a> OutputNodesAsArithmetic

```csharp
public int OutputNodesAsArithmetic { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_OutsideFmcOpticalProperties"></a> OutsideFmcOpticalProperties

```csharp
public List<string> OutsideFmcOpticalProperties { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_OutsideOpticalProperties"></a> OutsideOpticalProperties

```csharp
public List<string> OutsideOpticalProperties { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_ShowArrow"></a> ShowArrow

```csharp
public int ShowArrow { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_StartId"></a> StartId

```csharp
public int StartId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_StartSubmodel"></a> StartSubmodel

```csharp
public SubmodelNameData StartSubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_ThermoMaterial"></a> ThermoMaterial

```csharp
public string ThermoMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_UseFaceContact"></a> UseFaceContact

```csharp
public List<int> UseFaceContact { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_UseFaceMli"></a> UseFaceMli

```csharp
public List<int> UseFaceMli { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_UseFaceMliExp"></a> UseFaceMliExp

```csharp
public List<ExpressionData> UseFaceMliExp { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ExpressionData](OpenTD.ExpressionData.md)\>

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_UseMliMaterialStack"></a> UseMliMaterialStack

```csharp
public List<int> UseMliMaterialStack { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

## Methods

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_CheckData"></a> CheckData\(\)

```csharp
public void CheckData()
```

### <a id="OpenTD_RadCAD_FdSolid_RcFdSolidData_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

