# <a id="OpenTD_RadCAD_MeshFD"></a> Class MeshFD

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Client-side representation of a finite-difference mesh in a TD instance.

```csharp
public class MeshFD : RcMeshFDData, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[RcEntityData](OpenTD.RadCAD.RcEntityData.md) ← 
RcMeshFDData ← 
[MeshFD](OpenTD.RadCAD.MeshFD.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[RcEntityData.TopIdType](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopIdType), 
[RcEntityData.BotIdType](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotIdType), 
[RcEntityData.TopStartId](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopStartId), 
[RcEntityData.BotStartId](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotStartId), 
[RcEntityData.TopStartSubmodel](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopStartSubmodel), 
[RcEntityData.BotStartSubmodel](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotStartSubmodel), 
[RcEntityData.TopNodeNames](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopNodeNames), 
[RcEntityData.BotNodeNames](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotNodeNames), 
[RcEntityData.SameSideNumbering](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_SameSideNumbering), 
[RcEntityData.NodePositions](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_NodePositions), 
[RcEntityData.BreakdownU](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BreakdownU), 
[RcEntityData.BreakdownV](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BreakdownV), 
[RcEntityData.TopOpticOverride](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopOpticOverride), 
[RcEntityData.BotOpticOverride](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotOpticOverride), 
[RcEntityData.Comment](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_Comment), 
[RcEntityData.TopOpticalProp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopOpticalProp), 
[RcEntityData.BotOpticalProp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotOpticalProp), 
[RcEntityData.TopVolumetricOverride](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopVolumetricOverride), 
[RcEntityData.BotVolumetricOverride](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotVolumetricOverride), 
[RcEntityData.TopVolumetricProp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopVolumetricProp), 
[RcEntityData.BotVolumetricProp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotVolumetricProp), 
[RcEntityData.TopVolumetricSubmodel](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopVolumetricSubmodel), 
[RcEntityData.BotVolumetricSubmodel](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotVolumetricSubmodel), 
[RcEntityData.TopVolumetricIds](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopVolumetricIds), 
[RcEntityData.BotVolumetricIds](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotVolumetricIds), 
[RcEntityData.AnalysisGroups](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_AnalysisGroups), 
[RcEntityData.AnalysisGroupsVolumetric](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_AnalysisGroupsVolumetric), 
[RcEntityData.TopThickness](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopThickness), 
[RcEntityData.BotThickness](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotThickness), 
[RcEntityData.TopBotSepDist](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopBotSepDist), 
[RcEntityData.GenerateCCData](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_GenerateCCData), 
[RcEntityData.GenerateCCDataExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_GenerateCCDataExp), 
[RcEntityData.TopMaterial](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMaterial), 
[RcEntityData.BotMaterial](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMaterial), 
[RcEntityData.TopOrientName](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopOrientName), 
[RcEntityData.BotOrientName](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotOrientName), 
[RcEntityData.TopBotMaterial](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopBotMaterial), 
[RcEntityData.OutputNodesAsArithmetic](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_OutputNodesAsArithmetic), 
[RcEntityData.UseTopMLI](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_UseTopMLI), 
[RcEntityData.UseBotMLI](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_UseBotMLI), 
[RcEntityData.UseTopMLIExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_UseTopMLIExp), 
[RcEntityData.UseBotMLIExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_UseBotMLIExp), 
[RcEntityData.TopMLIMaterial](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMLIMaterial), 
[RcEntityData.BotMLIMaterial](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMLIMaterial), 
[RcEntityData.TopMLIThickness](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMLIThickness), 
[RcEntityData.BotMLIThickness](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMLIThickness), 
[RcEntityData.TopMLISubmodel](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMLISubmodel), 
[RcEntityData.BotMLISubmodel](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMLISubmodel), 
[RcEntityData.TopMLINumOffset](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMLINumOffset), 
[RcEntityData.BotMLINumOffset](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMLINumOffset), 
[RcEntityData.OutputTopMLINodesAsArithmetic](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_OutputTopMLINodesAsArithmetic), 
[RcEntityData.OutputBotMLINodesAsArithmetic](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_OutputBotMLINodesAsArithmetic), 
[RcEntityData.TopMliInitialTemp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMliInitialTemp), 
[RcEntityData.BotMliInitialTemp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMliInitialTemp), 
[RcEntityData.TopMliInitialTempExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMliInitialTempExp), 
[RcEntityData.BotMliInitialTempExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMliInitialTempExp), 
[RcEntityData.TopMLINumLayers](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMLINumLayers), 
[RcEntityData.BotMLINumLayers](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMLINumLayers), 
[RcEntityData.TopMLIOverride](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMLIOverride), 
[RcEntityData.BotMLIOverride](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMLIOverride), 
[RcEntityData.UseTopMaterialStack](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_UseTopMaterialStack), 
[RcEntityData.UseBotMaterialStack](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_UseBotMaterialStack), 
[RcEntityData.TopMaterialStackName](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMaterialStackName), 
[RcEntityData.BotMaterialStackName](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMaterialStackName), 
[RcEntityData.ShowArrow](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_ShowArrow), 
[RcEntityData.TopThicknessExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopThicknessExp), 
[RcEntityData.BotThicknessExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotThicknessExp), 
[RcEntityData.TopBotSepDistExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopBotSepDistExp), 
[RcEntityData.TopMLIThicknessExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopMLIThicknessExp), 
[RcEntityData.BotMLIThicknessExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotMLIThicknessExp), 
[RcEntityData.DensityMult](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_DensityMult), 
[RcEntityData.KuMult](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_KuMult), 
[RcEntityData.KvMult](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_KvMult), 
[RcEntityData.KwMult](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_KwMult), 
[RcEntityData.DensityMultExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_DensityMultExp), 
[RcEntityData.KuMultExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_KuMultExp), 
[RcEntityData.KvMultExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_KvMultExp), 
[RcEntityData.KwMultExp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_KwMultExp), 
[RcEntityData.TopFmcOpticalProp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopFmcOpticalProp), 
[RcEntityData.BotFmcOpticalProp](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotFmcOpticalProp), 
[RcEntityData.CondSubmodel](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_CondSubmodel), 
[RcEntityData.TopInsulationNodeSubmodelIdOption](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_TopInsulationNodeSubmodelIdOption), 
[RcEntityData.BotInsulationNodeSubmodelIdOption](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_BotInsulationNodeSubmodelIdOption), 
[RcEntityData.CoreLateralConduction](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_CoreLateralConduction), 
[RcEntityData.GlobalContactArray](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_GlobalContactArray), 
[RcEntityData.AttachedNodeHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_AttachedNodeHandles), 
[RcEntityData.AttachedConductorHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_AttachedConductorHandles), 
[RcEntityData.AttachedHeatLoadHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_AttachedHeatLoadHandles), 
[RcEntityData.AttachedTieHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_AttachedTieHandles), 
[RcEntityData.AttachedPipeHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_AttachedPipeHandles), 
[RcEntityData.AttachedCompartmentHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_AttachedCompartmentHandles), 
[RcEntityData.\_AttachedNodeHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_\_AttachedNodeHandles), 
[RcEntityData.\_AttachedConductorHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_\_AttachedConductorHandles), 
[RcEntityData.\_AttachedHeatLoadHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_\_AttachedHeatLoadHandles), 
[RcEntityData.\_AttachedTieHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_\_AttachedTieHandles), 
[RcEntityData.\_AttachedPipeHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_\_AttachedPipeHandles), 
[RcEntityData.\_AttachedCompartmentHandles](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_\_AttachedCompartmentHandles), 
[RcEntityData.CheckData\(\)](OpenTD.RadCAD.RcEntityData.md\#OpenTD\_RadCAD\_RcEntityData\_CheckData), 
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

## Methods

### <a id="OpenTD_RadCAD_MeshFD_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_RadCAD_MeshFD_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### <a id="OpenTD_RadCAD_MeshFD_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

