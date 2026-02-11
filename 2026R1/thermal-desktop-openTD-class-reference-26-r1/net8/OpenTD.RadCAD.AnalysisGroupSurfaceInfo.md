# <a id="OpenTD_RadCAD_AnalysisGroupSurfaceInfo"></a> Class AnalysisGroupSurfaceInfo

Namespace: [OpenTD.RadCAD](OpenTD.RadCAD.md)  
Assembly: OpenTD.dll  

Used to specify what sides of a surface are active in a radiation
analysis group.

```csharp
public class AnalysisGroupSurfaceInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisGroupSurfaceInfo](OpenTD.RadCAD.AnalysisGroupSurfaceInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_RadCAD_AnalysisGroupSurfaceInfo__ctor_System_String_OpenTD_RadCAD_RcEntityData_Active_"></a> AnalysisGroupSurfaceInfo\(string, Active\)

```csharp
public AnalysisGroupSurfaceInfo(string name, RcEntityData.Active activeSides)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`activeSides` [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[Active](OpenTD.RadCAD.RcEntityData.Active.md)

## Properties

### <a id="OpenTD_RadCAD_AnalysisGroupSurfaceInfo_ActiveSides"></a> ActiveSides

```csharp
public RcEntityData.Active ActiveSides { get; set; }
```

#### Property Value

 [RcEntityData](OpenTD.RadCAD.RcEntityData.md).[Active](OpenTD.RadCAD.RcEntityData.Active.md)

### <a id="OpenTD_RadCAD_AnalysisGroupSurfaceInfo_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_RadCAD_AnalysisGroupSurfaceInfo_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the specified object  is equal to the current object; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="OpenTD_RadCAD_AnalysisGroupSurfaceInfo_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="OpenTD_RadCAD_AnalysisGroupSurfaceInfo_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

