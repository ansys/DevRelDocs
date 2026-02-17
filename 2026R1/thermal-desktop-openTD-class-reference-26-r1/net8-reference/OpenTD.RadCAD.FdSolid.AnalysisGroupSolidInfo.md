# <a id="OpenTD_RadCAD_FdSolid_AnalysisGroupSolidInfo"></a> Class AnalysisGroupSolidInfo

Namespace: [OpenTD.RadCAD.FdSolid](OpenTD.RadCAD.FdSolid.md)  
Assembly: OpenTD.dll  

Used to specify which faces of a solid are active in a
Radiation Analysis Group.

```csharp
public class AnalysisGroupSolidInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisGroupSolidInfo](OpenTD.RadCAD.FdSolid.AnalysisGroupSolidInfo.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="OpenTD_RadCAD_FdSolid_AnalysisGroupSolidInfo__ctor_System_String_OpenTD_RadCAD_FdSolid_RcFdSolidData_Active_System_Collections_Generic_IEnumerable_System_Int32__"></a> AnalysisGroupSolidInfo\(string, Active, IEnumerable<int\>\)

```csharp
public AnalysisGroupSolidInfo(string name, RcFdSolidData.Active activeSides, IEnumerable<int> faces)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`activeSides` [RcFdSolidData](OpenTD.RadCAD.FdSolid.RcFdSolidData.md).[Active](OpenTD.RadCAD.FdSolid.RcFdSolidData.Active.md)

`faces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

## Properties

### <a id="OpenTD_RadCAD_FdSolid_AnalysisGroupSolidInfo_ActiveSides"></a> ActiveSides

```csharp
public RcFdSolidData.Active ActiveSides { get; set; }
```

#### Property Value

 [RcFdSolidData](OpenTD.RadCAD.FdSolid.RcFdSolidData.md).[Active](OpenTD.RadCAD.FdSolid.RcFdSolidData.Active.md)

### <a id="OpenTD_RadCAD_FdSolid_AnalysisGroupSolidInfo_Faces"></a> Faces

```csharp
public List<int> Faces { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="OpenTD_RadCAD_FdSolid_AnalysisGroupSolidInfo_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_RadCAD_FdSolid_AnalysisGroupSolidInfo_Equals_System_Object_"></a> Equals\(object\)

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

### <a id="OpenTD_RadCAD_FdSolid_AnalysisGroupSolidInfo_GetHashCode"></a> GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### <a id="OpenTD_RadCAD_FdSolid_AnalysisGroupSolidInfo_ToString"></a> ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

