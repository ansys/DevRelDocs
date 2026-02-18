# <a id="OpenTD_RadCAD_FEM_RcSolidElement"></a> Class RcSolidElement

Namespace: [OpenTD.RadCAD.FEM](OpenTD.RadCAD.FEM.md)  
Assembly: OpenTD.dll  

Base class for solid finite elements.

```csharp
[DataContract]
public class RcSolidElement : TdDbEntityData, IUpdatable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenTDObject](OpenTD.OpenTDObject.md) ← 
[DbObject](OpenTD.DbObject.md) ← 
[TdDbEntityData](OpenTD.TdDbEntityData.md) ← 
[RcSolidElement](OpenTD.RadCAD.FEM.RcSolidElement.md)

#### Derived

[LinearBrick](OpenTD.RadCAD.FEM.LinearBrick.md), 
[LinearPyramid](OpenTD.RadCAD.FEM.LinearPyramid.md), 
[LinearTet](OpenTD.RadCAD.FEM.LinearTet.md), 
[LinearWedge](OpenTD.RadCAD.FEM.LinearWedge.md), 
[QuadraticBrick](OpenTD.RadCAD.FEM.QuadraticBrick.md), 
[QuadraticPyramid](OpenTD.RadCAD.FEM.QuadraticPyramid.md), 
[QuadraticTet](OpenTD.RadCAD.FEM.QuadraticTet.md), 
[QuadraticWedge](OpenTD.RadCAD.FEM.QuadraticWedge.md)

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
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_RadCAD_FEM_RcSolidElement__ctor"></a> RcSolidElement\(\)

```csharp
public RcSolidElement()
```

## Properties

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_AnalysisGroupsVolumetric"></a> AnalysisGroupsVolumetric

```csharp
[DataMember]
public UniqueItemList<AnalysisGroupVolumetricInfo> AnalysisGroupsVolumetric { get; set; }
```

#### Property Value

 [UniqueItemList](OpenTD.Utility.UniqueItemList\-1.md)<[AnalysisGroupVolumetricInfo](OpenTD.RadCAD.AnalysisGroupVolumetricInfo.md)\>

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_AttachedNodeHandles"></a> AttachedNodeHandles

```csharp
[DataMember]
public List<string> AttachedNodeHandles { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_Comment"></a> Comment

```csharp
[DataMember]
public string Comment { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_CondSubmodel"></a> CondSubmodel

```csharp
[DataMember]
public string CondSubmodel { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_DensityMult"></a> DensityMult

```csharp
[DataMember]
public double DensityMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_DensityMultExp"></a> DensityMultExp

```csharp
[DataMember]
public ExpressionData DensityMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_FaceVisibility"></a> FaceVisibility

```csharp
[DataMember]
public int FaceVisibility { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_GenerateCondCap"></a> GenerateCondCap

```csharp
[DataMember]
public int GenerateCondCap { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_GenerateCondCapExp"></a> GenerateCondCapExp

```csharp
[DataMember]
public ExpressionData GenerateCondCapExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_KuMult"></a> KuMult

```csharp
[DataMember]
public double KuMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_KuMultExp"></a> KuMultExp

```csharp
[DataMember]
public ExpressionData KuMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_KvMult"></a> KvMult

```csharp
[DataMember]
public double KvMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_KvMultExp"></a> KvMultExp

```csharp
[DataMember]
public ExpressionData KvMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_KwMult"></a> KwMult

```csharp
[DataMember]
public double KwMult { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_KwMultExp"></a> KwMultExp

```csharp
[DataMember]
public ExpressionData KwMultExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_OrienterName"></a> OrienterName

```csharp
[DataMember]
public string OrienterName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_SolidOrienters"></a> SolidOrienters

```csharp
[DataMember]
public List<Quaternion> SolidOrienters { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Quaternion](OpenTD.Quaternion.md)\>

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_ThermoMaterial"></a> ThermoMaterial

```csharp
[DataMember]
public string ThermoMaterial { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_RadCAD_FEM_RcSolidElement_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

