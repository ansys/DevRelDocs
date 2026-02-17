# <a id="OpenTD_RadCAD_RcEntityData"></a> Class RcEntityData

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Base class for entities with materials, u and v nodal breakdowns,
optical properties, etc.

```csharp
public class RcEntityData : TdDbEntityData, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[RcEntityData](OpenTD.RadCAD.RcEntityData.md)

#### Derived

[Polygon](OpenTD.RadCAD.Polygon.md), 
[RcConicData](OpenTD.RadCAD.RcConicData.md), 
[RcSurfaceElement](OpenTD.RadCAD.FEM.RcSurfaceElement.md)

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

### <a id="OpenTD_RadCAD_RcEntityData__ctor"></a> RcEntityData\(\)

```csharp
public RcEntityData()
```

## Properties

### <a id="OpenTD_RadCAD_RcEntityData_AnalysisGroups"></a> AnalysisGroups

```csharp
public UniqueItemList<AnalysisGroupSurfaceInfo> AnalysisGroups { get; set; }
```

#### Property Value

 [UniqueItemList](OpenTD.Utility.UniqueItemList\-1.md)<[AnalysisGroupSurfaceInfo](OpenTD.RadCAD.AnalysisGroupSurfaceInfo.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_AnalysisGroupsVolumetric"></a> AnalysisGroupsVolumetric

```csharp
public UniqueItemList<AnalysisGroupVolumetricInfo> AnalysisGroupsVolumetric { get; set; }
```

#### Property Value

 [UniqueItemList](OpenTD.Utility.UniqueItemList\-1.md)<[AnalysisGroupVolumetricInfo](OpenTD.RadCAD.AnalysisGroupVolumetricInfo.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_AttachedCompartmentHandles"></a> AttachedCompartmentHandles

```csharp
public List<string> AttachedCompartmentHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_AttachedConductorHandles"></a> AttachedConductorHandles

```csharp
public List<string> AttachedConductorHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_AttachedHeatLoadHandles"></a> AttachedHeatLoadHandles

```csharp
public List<string> AttachedHeatLoadHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_AttachedNodeHandles"></a> AttachedNodeHandles

```csharp
public List<string> AttachedNodeHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_AttachedPipeHandles"></a> AttachedPipeHandles

```csharp
public List<string> AttachedPipeHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_AttachedTieHandles"></a> AttachedTieHandles

```csharp
public List<string> AttachedTieHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_BotFmcOpticalProp"></a> BotFmcOpticalProp

```csharp
public string BotFmcOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_BotIdType"></a> BotIdType

```csharp
public RcEntityData.IdType BotIdType { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[IdType](OpenTD.RadCAD.RcEntityData.IdType.md)

### <a id="OpenTD_RadCAD_RcEntityData_BotInsulationNodeSubmodelIdOption"></a> BotInsulationNodeSubmodelIdOption

```csharp
public RcEntityData.InsulationNodeSubmodelIdOption BotInsulationNodeSubmodelIdOption { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[InsulationNodeSubmodelIdOption](OpenTD.RadCAD.RcEntityData.InsulationNodeSubmodelIdOption.md)

### <a id="OpenTD_RadCAD_RcEntityData_BotMLIMaterial"></a> BotMLIMaterial

```csharp
public string BotMLIMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_BotMLINumLayers"></a> BotMLINumLayers

```csharp
public int BotMLINumLayers { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_BotMLINumOffset"></a> BotMLINumOffset

```csharp
public int BotMLINumOffset { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_BotMLIOverride"></a> BotMLIOverride

```csharp
public List<string> BotMLIOverride { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_BotMLISubmodel"></a> BotMLISubmodel

```csharp
public SubmodelNameData BotMLISubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### <a id="OpenTD_RadCAD_RcEntityData_BotMLIThickness"></a> BotMLIThickness

```csharp
public Dimensional<ModelLength> BotMLIThickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_BotMLIThicknessExp"></a> BotMLIThicknessExp

```csharp
public ExpressionData BotMLIThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_BotMaterial"></a> BotMaterial

```csharp
public string BotMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_BotMaterialStackName"></a> BotMaterialStackName

```csharp
public string BotMaterialStackName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_BotMliInitialTemp"></a> BotMliInitialTemp

```csharp
public Dimensional<Temp> BotMliInitialTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_BotMliInitialTempExp"></a> BotMliInitialTempExp

```csharp
public ExpressionData BotMliInitialTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_BotNodeNames"></a> BotNodeNames

```csharp
public List<string> BotNodeNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_BotOpticOverride"></a> BotOpticOverride

```csharp
public Dictionary<string, string> BotOpticOverride { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_BotOpticalProp"></a> BotOpticalProp

```csharp
public string BotOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_BotOrientName"></a> BotOrientName

```csharp
public string BotOrientName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_BotStartId"></a> BotStartId

```csharp
public int BotStartId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_BotStartSubmodel"></a> BotStartSubmodel

```csharp
public SubmodelNameData BotStartSubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### <a id="OpenTD_RadCAD_RcEntityData_BotThickness"></a> BotThickness

```csharp
public Dimensional<ModelLength> BotThickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_BotThicknessExp"></a> BotThicknessExp

```csharp
public ExpressionData BotThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_BotVolumetricIds"></a> BotVolumetricIds

```csharp
public List<string> BotVolumetricIds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_BotVolumetricOverride"></a> BotVolumetricOverride

```csharp
public Dictionary<string, string> BotVolumetricOverride { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_BotVolumetricProp"></a> BotVolumetricProp

```csharp
public string BotVolumetricProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_BotVolumetricSubmodel"></a> BotVolumetricSubmodel

```csharp
public string BotVolumetricSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_BreakdownU"></a> BreakdownU

```csharp
public NodeBreakdownData BreakdownU { get; set; }
```

#### Property Value

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md)

### <a id="OpenTD_RadCAD_RcEntityData_BreakdownV"></a> BreakdownV

```csharp
public NodeBreakdownData BreakdownV { get; set; }
```

#### Property Value

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md)

### <a id="OpenTD_RadCAD_RcEntityData_Comment"></a> Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_CondSubmodel"></a> CondSubmodel

```csharp
public SubmodelNameData CondSubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### <a id="OpenTD_RadCAD_RcEntityData_CoreLateralConduction"></a> CoreLateralConduction

```csharp
public bool CoreLateralConduction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_RadCAD_RcEntityData_DensityMult"></a> DensityMult

```csharp
public double DensityMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_RcEntityData_DensityMultExp"></a> DensityMultExp

```csharp
public ExpressionData DensityMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_GenerateCCData"></a> GenerateCCData

```csharp
public int GenerateCCData { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_GenerateCCDataExp"></a> GenerateCCDataExp

```csharp
public ExpressionData GenerateCCDataExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_GlobalContactArray"></a> GlobalContactArray

```csharp
public List<GlobalContact> GlobalContactArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GlobalContact](OpenTD.RadCAD.GlobalContact.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_KuMult"></a> KuMult

```csharp
public double KuMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_RcEntityData_KuMultExp"></a> KuMultExp

```csharp
public ExpressionData KuMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_KvMult"></a> KvMult

```csharp
public double KvMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_RcEntityData_KvMultExp"></a> KvMultExp

```csharp
public ExpressionData KvMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_KwMult"></a> KwMult

```csharp
public double KwMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_RcEntityData_KwMultExp"></a> KwMultExp

```csharp
public ExpressionData KwMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_NodePositions"></a> NodePositions

```csharp
public RcEntityData.NodePositionsType NodePositions { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[NodePositionsType](OpenTD.RadCAD.RcEntityData.NodePositionsType.md)

### <a id="OpenTD_RadCAD_RcEntityData_OutputBotMLINodesAsArithmetic"></a> OutputBotMLINodesAsArithmetic

```csharp
public int OutputBotMLINodesAsArithmetic { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_OutputNodesAsArithmetic"></a> OutputNodesAsArithmetic

```csharp
public int OutputNodesAsArithmetic { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_OutputTopMLINodesAsArithmetic"></a> OutputTopMLINodesAsArithmetic

```csharp
public int OutputTopMLINodesAsArithmetic { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_SameSideNumbering"></a> SameSideNumbering

```csharp
public int SameSideNumbering { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_ShowArrow"></a> ShowArrow

```csharp
public int ShowArrow { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_TopBotMaterial"></a> TopBotMaterial

```csharp
public string TopBotMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_TopBotSepDist"></a> TopBotSepDist

```csharp
public Dimensional<ModelLength> TopBotSepDist { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_TopBotSepDistExp"></a> TopBotSepDistExp

```csharp
public ExpressionData TopBotSepDistExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_TopFmcOpticalProp"></a> TopFmcOpticalProp

```csharp
public string TopFmcOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_TopIdType"></a> TopIdType

```csharp
public RcEntityData.IdType TopIdType { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[IdType](OpenTD.RadCAD.RcEntityData.IdType.md)

### <a id="OpenTD_RadCAD_RcEntityData_TopInsulationNodeSubmodelIdOption"></a> TopInsulationNodeSubmodelIdOption

```csharp
public RcEntityData.InsulationNodeSubmodelIdOption TopInsulationNodeSubmodelIdOption { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[InsulationNodeSubmodelIdOption](OpenTD.RadCAD.RcEntityData.InsulationNodeSubmodelIdOption.md)

### <a id="OpenTD_RadCAD_RcEntityData_TopMLIMaterial"></a> TopMLIMaterial

```csharp
public string TopMLIMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_TopMLINumLayers"></a> TopMLINumLayers

```csharp
public int TopMLINumLayers { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_TopMLINumOffset"></a> TopMLINumOffset

```csharp
public int TopMLINumOffset { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_TopMLIOverride"></a> TopMLIOverride

```csharp
public List<string> TopMLIOverride { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_TopMLISubmodel"></a> TopMLISubmodel

```csharp
public SubmodelNameData TopMLISubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### <a id="OpenTD_RadCAD_RcEntityData_TopMLIThickness"></a> TopMLIThickness

```csharp
public Dimensional<ModelLength> TopMLIThickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_TopMLIThicknessExp"></a> TopMLIThicknessExp

```csharp
public ExpressionData TopMLIThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_TopMaterial"></a> TopMaterial

```csharp
public string TopMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_TopMaterialStackName"></a> TopMaterialStackName

```csharp
public string TopMaterialStackName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_TopMliInitialTemp"></a> TopMliInitialTemp

```csharp
public Dimensional<Temp> TopMliInitialTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_TopMliInitialTempExp"></a> TopMliInitialTempExp

```csharp
public ExpressionData TopMliInitialTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_TopNodeNames"></a> TopNodeNames

```csharp
public List<string> TopNodeNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_TopOpticOverride"></a> TopOpticOverride

```csharp
public Dictionary<string, string> TopOpticOverride { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_TopOpticalProp"></a> TopOpticalProp

```csharp
public string TopOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_TopOrientName"></a> TopOrientName

```csharp
public string TopOrientName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_TopStartId"></a> TopStartId

```csharp
public int TopStartId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_TopStartSubmodel"></a> TopStartSubmodel

```csharp
public SubmodelNameData TopStartSubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### <a id="OpenTD_RadCAD_RcEntityData_TopThickness"></a> TopThickness

```csharp
public Dimensional<ModelLength> TopThickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_RcEntityData_TopThicknessExp"></a> TopThicknessExp

```csharp
public ExpressionData TopThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_TopVolumetricIds"></a> TopVolumetricIds

```csharp
public List<string> TopVolumetricIds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_TopVolumetricOverride"></a> TopVolumetricOverride

```csharp
public Dictionary<string, string> TopVolumetricOverride { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData_TopVolumetricProp"></a> TopVolumetricProp

```csharp
public string TopVolumetricProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_TopVolumetricSubmodel"></a> TopVolumetricSubmodel

```csharp
public string TopVolumetricSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_RcEntityData_UseBotMLI"></a> UseBotMLI

```csharp
public int UseBotMLI { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_UseBotMLIExp"></a> UseBotMLIExp

```csharp
public ExpressionData UseBotMLIExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_UseBotMaterialStack"></a> UseBotMaterialStack

```csharp
public int UseBotMaterialStack { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_UseTopMLI"></a> UseTopMLI

```csharp
public int UseTopMLI { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData_UseTopMLIExp"></a> UseTopMLIExp

```csharp
public ExpressionData UseTopMLIExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_RcEntityData_UseTopMaterialStack"></a> UseTopMaterialStack

```csharp
public int UseTopMaterialStack { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_RcEntityData__AttachedCompartmentHandles"></a> \_AttachedCompartmentHandles

Do not use.

```csharp
public List<string> _AttachedCompartmentHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData__AttachedConductorHandles"></a> \_AttachedConductorHandles

Do not use.

```csharp
public List<string> _AttachedConductorHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData__AttachedHeatLoadHandles"></a> \_AttachedHeatLoadHandles

Do not use.

```csharp
public List<string> _AttachedHeatLoadHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData__AttachedNodeHandles"></a> \_AttachedNodeHandles

Do not use.

```csharp
public List<string> _AttachedNodeHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData__AttachedPipeHandles"></a> \_AttachedPipeHandles

Do not use.

```csharp
public List<string> _AttachedPipeHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_RcEntityData__AttachedTieHandles"></a> \_AttachedTieHandles

Do not use.

```csharp
public List<string> _AttachedTieHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="OpenTD_RadCAD_RcEntityData_CheckData"></a> CheckData\(\)

```csharp
public void CheckData()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

