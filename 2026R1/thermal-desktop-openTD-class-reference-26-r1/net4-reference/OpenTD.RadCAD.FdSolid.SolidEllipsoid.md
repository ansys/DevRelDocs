# <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid"></a> Class SolidEllipsoid

Namespace: [OpenTD.RadCAD.FdSolid](OpenTD.RadCAD.FdSolid.md)  
Assembly: OpenTD.dll  

Client-side representation of a SolidEllipsoid entity in a TD instance.

```csharp
[DataContract]
public class SolidEllipsoid : RcFdSolidData, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[RcFdSolidData](OpenTD.RadCAD.FdSolid.RcFdSolidData.md) ← 
[SolidEllipsoid](OpenTD.RadCAD.FdSolid.SolidEllipsoid.md)

#### Implements

[IUpdatable](OpenTD.IUpdatable.md)

#### Inherited Members

[RcFdSolidData.AnalysisGroups](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_AnalysisGroups), 
[RcFdSolidData.Comment](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_Comment), 
[RcFdSolidData.LocalTrans](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_LocalTrans), 
[RcFdSolidData.BaseTrans](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_BaseTrans), 
[RcFdSolidData.ThermoMaterial](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_ThermoMaterial), 
[RcFdSolidData.IdType](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_IdType), 
[RcFdSolidData.StartSubmodel](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_StartSubmodel), 
[RcFdSolidData.StartId](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_StartId), 
[RcFdSolidData.NodeNames](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_NodeNames), 
[RcFdSolidData.CondSubmodel](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_CondSubmodel), 
[RcFdSolidData.NodeType](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_NodeType), 
[RcFdSolidData.OutputNodesAsArithmetic](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_OutputNodesAsArithmetic), 
[RcFdSolidData.BreakdownU](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_BreakdownU), 
[RcFdSolidData.BreakdownV](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_BreakdownV), 
[RcFdSolidData.BreakdownW](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_BreakdownW), 
[RcFdSolidData.OutsideOpticalProperties](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_OutsideOpticalProperties), 
[RcFdSolidData.InsideOpticalProperties](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_InsideOpticalProperties), 
[RcFdSolidData.OutsideFmcOpticalProperties](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_OutsideFmcOpticalProperties), 
[RcFdSolidData.InsideFmcOpticalProperties](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_InsideFmcOpticalProperties), 
[RcFdSolidData.ShowArrow](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_ShowArrow), 
[RcFdSolidData.UseFaceContact](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_UseFaceContact), 
[RcFdSolidData.FaceContactValue](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_FaceContactValue), 
[RcFdSolidData.FaceContactExp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_FaceContactExp), 
[RcFdSolidData.AreaContactAbsolute](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_AreaContactAbsolute), 
[RcFdSolidData.DensityMult](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_DensityMult), 
[RcFdSolidData.KuMult](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_KuMult), 
[RcFdSolidData.KvMult](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_KvMult), 
[RcFdSolidData.KwMult](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_KwMult), 
[RcFdSolidData.DensityMultExp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_DensityMultExp), 
[RcFdSolidData.KuMultExp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_KuMultExp), 
[RcFdSolidData.KvMultExp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_KvMultExp), 
[RcFdSolidData.KwMultExp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_KwMultExp), 
[RcFdSolidData.UseFaceMli](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_UseFaceMli), 
[RcFdSolidData.UseFaceMliExp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_UseFaceMliExp), 
[RcFdSolidData.MliMaterial](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliMaterial), 
[RcFdSolidData.MliThickness](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliThickness), 
[RcFdSolidData.MliThicknessExp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliThicknessExp), 
[RcFdSolidData.MliOffset](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliOffset), 
[RcFdSolidData.MliNodeType](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliNodeType), 
[RcFdSolidData.MliInitialTemp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliInitialTemp), 
[RcFdSolidData.MliInitialTempExp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliInitialTempExp), 
[RcFdSolidData.MliNodeLayers](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliNodeLayers), 
[RcFdSolidData.MliOverrides](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliOverrides), 
[RcFdSolidData.OpticOverride](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_OpticOverride), 
[RcFdSolidData.GenerateCondCap](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_GenerateCondCap), 
[RcFdSolidData.GenerateCondCapExp](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_GenerateCondCapExp), 
[RcFdSolidData.MliMaterialStackNameArray](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliMaterialStackNameArray), 
[RcFdSolidData.UseMliMaterialStack](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_UseMliMaterialStack), 
[RcFdSolidData.MliSubmodelNames](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliSubmodelNames), 
[RcFdSolidData.MliInsulationNodeSubmodelIdOption](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_MliInsulationNodeSubmodelIdOption), 
[RcFdSolidData.AttachedNodeHandles](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_AttachedNodeHandles), 
[RcFdSolidData.AnalysisGroupsVolumetric](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_AnalysisGroupsVolumetric), 
[RcFdSolidData.CheckData\(\)](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_CheckData), 
[RcFdSolidData.ToString\(\)](OpenTD.RadCAD.FdSolid.RcFdSolidData.md\#OpenTD\_RadCAD\_FdSolid\_RcFdSolidData\_ToString), 
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
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid__ctor"></a> SolidEllipsoid\(\)

```csharp
public SolidEllipsoid()
```

## Properties

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_EndAngle"></a> EndAngle

```csharp
[DataMember]
public Dimensional<Angle> EndAngle { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_EndAngleExp"></a> EndAngleExp

```csharp
[DataMember]
public ExpressionData EndAngleExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerMaxHeight"></a> InnerMaxHeight

```csharp
[DataMember]
public Dimensional<ModelLength> InnerMaxHeight { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerMaxHeightExp"></a> InnerMaxHeightExp

```csharp
[DataMember]
public ExpressionData InnerMaxHeightExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerMinHeight"></a> InnerMinHeight

```csharp
[DataMember]
public Dimensional<ModelLength> InnerMinHeight { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerMinHeightExp"></a> InnerMinHeightExp

```csharp
[DataMember]
public ExpressionData InnerMinHeightExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerXRadius"></a> InnerXRadius

```csharp
[DataMember]
public Dimensional<ModelLength> InnerXRadius { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerXRadiusExp"></a> InnerXRadiusExp

```csharp
[DataMember]
public ExpressionData InnerXRadiusExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerYRadius"></a> InnerYRadius

```csharp
[DataMember]
public Dimensional<ModelLength> InnerYRadius { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerYRadiusExp"></a> InnerYRadiusExp

```csharp
[DataMember]
public ExpressionData InnerYRadiusExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerZRadius"></a> InnerZRadius

```csharp
[DataMember]
public Dimensional<ModelLength> InnerZRadius { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_InnerZRadiusExp"></a> InnerZRadiusExp

```csharp
[DataMember]
public ExpressionData InnerZRadiusExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterMaxHeight"></a> OuterMaxHeight

```csharp
[DataMember]
public Dimensional<ModelLength> OuterMaxHeight { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterMaxHeightExp"></a> OuterMaxHeightExp

```csharp
[DataMember]
public ExpressionData OuterMaxHeightExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterMinHeight"></a> OuterMinHeight

```csharp
[DataMember]
public Dimensional<ModelLength> OuterMinHeight { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterMinHeightExp"></a> OuterMinHeightExp

```csharp
[DataMember]
public ExpressionData OuterMinHeightExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterXRadius"></a> OuterXRadius

```csharp
[DataMember]
public Dimensional<ModelLength> OuterXRadius { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterXRadiusExp"></a> OuterXRadiusExp

```csharp
[DataMember]
public ExpressionData OuterXRadiusExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterYRadius"></a> OuterYRadius

```csharp
[DataMember]
public Dimensional<ModelLength> OuterYRadius { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterYRadiusExp"></a> OuterYRadiusExp

```csharp
[DataMember]
public ExpressionData OuterYRadiusExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterZRadius"></a> OuterZRadius

```csharp
[DataMember]
public Dimensional<ModelLength> OuterZRadius { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[ModelLength](OpenTD.Dimension.ModelLength.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_OuterZRadiusExp"></a> OuterZRadiusExp

```csharp
[DataMember]
public ExpressionData OuterZRadiusExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_StartAngle"></a> StartAngle

```csharp
[DataMember]
public Dimensional<Angle> StartAngle { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Angle](OpenTD.Dimension.Angle.md)\>

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_StartAngleExp"></a> StartAngleExp

```csharp
[DataMember]
public ExpressionData StartAngleExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

## Methods

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_CreateIn_OpenTD_ThermalDesktop_"></a> CreateIn\(ThermalDesktop\)

Creates the TD entity in the specified TD instance.

```csharp
public override void CreateIn(ThermalDesktop td)
```

#### Parameters

`td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_Update"></a> Update\(\)

Updates the TD entity with the latest client data.

```csharp
public override void Update()
```

### <a id="OpenTD_RadCAD_FdSolid_SolidEllipsoid_UpdateFromTD"></a> UpdateFromTD\(\)

Updates the client-side instance with the latest data from the TD entity.

```csharp
public override void UpdateFromTD()
```

## See Also

[ThermalDesktop](OpenTD.ThermalDesktop.md)

