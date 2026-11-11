# Class RcEntityData

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Base class for entities with materials, u and v nodal breakdowns,
optical properties, etc.

```csharp
[MessagePackObject(true)]
public class RcEntityData : TdDbEntityData, IUpdatable
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[RcEntityData](OpenTD.RadCAD.RcEntityData.md)

#### Derived

[Polygon](OpenTD.RadCAD.Polygon.md), 
[RcConicData](OpenTD.RadCAD.RcConicData.md), 
[RcSurfaceElement](OpenTD.RadCAD.FEM.RcSurfaceElement.md)

## Implements

[IUpdatable](OpenTD.IUpdatable.md)

## Inherited Members

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

### RcEntityData\(\)

```csharp
public RcEntityData()
```

## Properties

### AnalysisGroups

```csharp
public UniqueItemList<AnalysisGroupSurfaceInfo> AnalysisGroups { get; set; }
```

#### Property Value

 [UniqueItemList](OpenTD.Utility.UniqueItemList\-1.md)<[AnalysisGroupSurfaceInfo](OpenTD.RadCAD.AnalysisGroupSurfaceInfo.md)\>

### AnalysisGroupsVolumetric

```csharp
public UniqueItemList<AnalysisGroupVolumetricInfo> AnalysisGroupsVolumetric { get; set; }
```

#### Property Value

 [UniqueItemList](OpenTD.Utility.UniqueItemList\-1.md)<[AnalysisGroupVolumetricInfo](OpenTD.RadCAD.AnalysisGroupVolumetricInfo.md)\>

### AttachedCompartmentHandles

```csharp
[IgnoreMember]
public List<string> AttachedCompartmentHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AttachedConductorHandles

```csharp
[IgnoreMember]
public List<string> AttachedConductorHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AttachedHeatLoadHandles

```csharp
[IgnoreMember]
public List<string> AttachedHeatLoadHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AttachedNodeHandles

```csharp
[IgnoreMember]
public List<string> AttachedNodeHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AttachedPipeHandles

```csharp
[IgnoreMember]
public List<string> AttachedPipeHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### AttachedTieHandles

```csharp
[IgnoreMember]
public List<string> AttachedTieHandles { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### BotFmcOpticalProp

```csharp
public string BotFmcOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BotIdType

```csharp
public RcEntityData.IdType BotIdType { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[IdType](OpenTD.RadCAD.RcEntityData.IdType.md)

### BotInsulationNodeSubmodelIdOption

```csharp
public RcEntityData.InsulationNodeSubmodelIdOption BotInsulationNodeSubmodelIdOption { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[InsulationNodeSubmodelIdOption](OpenTD.RadCAD.RcEntityData.InsulationNodeSubmodelIdOption.md)

### BotMLIMaterial

```csharp
public string BotMLIMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BotMLINumLayers

```csharp
public int BotMLINumLayers { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BotMLINumOffset

```csharp
public int BotMLINumOffset { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BotMLIOverride

```csharp
public List<string> BotMLIOverride { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### BotMLISubmodel

```csharp
public SubmodelNameData BotMLISubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### BotMLIThickness

```csharp
public Dimensional<ModelLength> BotMLIThickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### BotMLIThicknessExp

```csharp
public ExpressionData BotMLIThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### BotMaterial

```csharp
public string BotMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BotMaterialStackName

```csharp
public string BotMaterialStackName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BotMliInitialTemp

```csharp
public Dimensional<Temp> BotMliInitialTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### BotMliInitialTempExp

```csharp
public ExpressionData BotMliInitialTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### BotNodeNames

```csharp
public List<string> BotNodeNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### BotOpticOverride

```csharp
public Dictionary<string, string> BotOpticOverride { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### BotOpticalProp

```csharp
public string BotOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BotOrientName

```csharp
public string BotOrientName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BotStartId

```csharp
public int BotStartId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### BotStartSubmodel

```csharp
public SubmodelNameData BotStartSubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### BotThickness

```csharp
public Dimensional<ModelLength> BotThickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### BotThicknessExp

```csharp
public ExpressionData BotThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### BotVolumetricIds

```csharp
public List<string> BotVolumetricIds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### BotVolumetricOverride

```csharp
public Dictionary<string, string> BotVolumetricOverride { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### BotVolumetricProp

```csharp
public string BotVolumetricProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BotVolumetricSubmodel

```csharp
public string BotVolumetricSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### BreakdownU

```csharp
public NodeBreakdownData BreakdownU { get; set; }
```

#### Property Value

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md)

### BreakdownV

```csharp
public NodeBreakdownData BreakdownV { get; set; }
```

#### Property Value

 [NodeBreakdownData](OpenTD.NodeBreakdownData.md)

### Comment

```csharp
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### CondSubmodel

```csharp
public SubmodelNameData CondSubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### CoreLateralConduction

```csharp
public bool CoreLateralConduction { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DensityMult

```csharp
public double DensityMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### DensityMultExp

```csharp
public ExpressionData DensityMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### GenerateCCData

```csharp
public int GenerateCCData { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GenerateCCDataExp

```csharp
public ExpressionData GenerateCCDataExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### GlobalContactArray

```csharp
public List<GlobalContact> GlobalContactArray { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GlobalContact](OpenTD.RadCAD.GlobalContact.md)\>

### KuMult

```csharp
public double KuMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### KuMultExp

```csharp
public ExpressionData KuMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### KvMult

```csharp
public double KvMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### KvMultExp

```csharp
public ExpressionData KvMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### KwMult

```csharp
public double KwMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### KwMultExp

```csharp
public ExpressionData KwMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### NodePositions

```csharp
public RcEntityData.NodePositionsType NodePositions { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[NodePositionsType](OpenTD.RadCAD.RcEntityData.NodePositionsType.md)

### OutputBotMLINodesAsArithmetic

```csharp
public int OutputBotMLINodesAsArithmetic { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputNodesAsArithmetic

```csharp
public int OutputNodesAsArithmetic { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### OutputTopMLINodesAsArithmetic

```csharp
public int OutputTopMLINodesAsArithmetic { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SameSideNumbering

```csharp
public int SameSideNumbering { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ShowArrow

```csharp
public int ShowArrow { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TopBotMaterial

```csharp
public string TopBotMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TopBotSepDist

```csharp
public Dimensional<ModelLength> TopBotSepDist { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### TopBotSepDistExp

```csharp
public ExpressionData TopBotSepDistExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TopFmcOpticalProp

```csharp
public string TopFmcOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TopIdType

```csharp
public RcEntityData.IdType TopIdType { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[IdType](OpenTD.RadCAD.RcEntityData.IdType.md)

### TopInsulationNodeSubmodelIdOption

```csharp
public RcEntityData.InsulationNodeSubmodelIdOption TopInsulationNodeSubmodelIdOption { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[InsulationNodeSubmodelIdOption](OpenTD.RadCAD.RcEntityData.InsulationNodeSubmodelIdOption.md)

### TopMLIMaterial

```csharp
public string TopMLIMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TopMLINumLayers

```csharp
public int TopMLINumLayers { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TopMLINumOffset

```csharp
public int TopMLINumOffset { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TopMLIOverride

```csharp
public List<string> TopMLIOverride { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### TopMLISubmodel

```csharp
public SubmodelNameData TopMLISubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### TopMLIThickness

```csharp
public Dimensional<ModelLength> TopMLIThickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### TopMLIThicknessExp

```csharp
public ExpressionData TopMLIThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TopMaterial

```csharp
public string TopMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TopMaterialStackName

```csharp
public string TopMaterialStackName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TopMliInitialTemp

```csharp
public Dimensional<Temp> TopMliInitialTemp { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### TopMliInitialTempExp

```csharp
public ExpressionData TopMliInitialTempExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TopNodeNames

```csharp
public List<string> TopNodeNames { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### TopOpticOverride

```csharp
public Dictionary<string, string> TopOpticOverride { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### TopOpticalProp

```csharp
public string TopOpticalProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TopOrientName

```csharp
public string TopOrientName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TopStartId

```csharp
public int TopStartId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TopStartSubmodel

```csharp
public SubmodelNameData TopStartSubmodel { get; set; }
```

#### Property Value

 [SubmodelNameData](OpenTD.SubmodelNameData.md)

### TopThickness

```csharp
public Dimensional<ModelLength> TopThickness { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### TopThicknessExp

```csharp
public ExpressionData TopThicknessExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### TopVolumetricIds

```csharp
public List<string> TopVolumetricIds { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### TopVolumetricOverride

```csharp
public Dictionary<string, string> TopVolumetricOverride { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### TopVolumetricProp

```csharp
public string TopVolumetricProp { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TopVolumetricSubmodel

```csharp
public string TopVolumetricSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UseBotMLI

```csharp
public int UseBotMLI { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseBotMLIExp

```csharp
public ExpressionData UseBotMLIExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### UseBotMaterialStack

```csharp
public int UseBotMaterialStack { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseTopMLI

```csharp
public int UseTopMLI { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### UseTopMLIExp

```csharp
public ExpressionData UseTopMLIExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### UseTopMaterialStack

```csharp
public int UseTopMaterialStack { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### \_AttachedCompartmentHandles

Do not use.

```csharp
public List<string> _AttachedCompartmentHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### \_AttachedConductorHandles

Do not use.

```csharp
public List<string> _AttachedConductorHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### \_AttachedHeatLoadHandles

Do not use.

```csharp
public List<string> _AttachedHeatLoadHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### \_AttachedNodeHandles

Do not use.

```csharp
public List<string> _AttachedNodeHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### \_AttachedPipeHandles

Do not use.

```csharp
public List<string> _AttachedPipeHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### \_AttachedTieHandles

Do not use.

```csharp
public List<string> _AttachedTieHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### CheckData\(\)

```csharp
public void CheckData()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)


