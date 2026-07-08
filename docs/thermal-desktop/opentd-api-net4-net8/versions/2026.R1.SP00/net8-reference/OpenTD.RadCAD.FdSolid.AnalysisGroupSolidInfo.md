# Class AnalysisGroupSolidInfo

Namespace: [OpenTD.RadCAD.FdSolid](OpenTD.RadCAD.FdSolid.md)  
Assembly: OpenTD.dll  

Used to specify which faces of a solid are active in a
Radiation Analysis Group.

```csharp
[MessagePackObject(true)]
public class AnalysisGroupSolidInfo
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisGroupSolidInfo](OpenTD.RadCAD.FdSolid.AnalysisGroupSolidInfo.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### AnalysisGroupSolidInfo\(string, Active, IEnumerable<int\>\)

```csharp
public AnalysisGroupSolidInfo(string name, RcFdSolidData.Active activeSides, IEnumerable<int> faces)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`activeSides` [RcFdSolidData](OpenTD.RadCAD.FdSolid.RcFdSolidData.md).[Active](OpenTD.RadCAD.FdSolid.RcFdSolidData.Active.md)

`faces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### AnalysisGroupSolidInfo\(\)

```csharp
public AnalysisGroupSolidInfo()
```

## Properties

### ActiveSides

```csharp
public RcFdSolidData.Active ActiveSides { get; set; }
```

#### Property Value

 [RcFdSolidData](OpenTD.RadCAD.FdSolid.RcFdSolidData.md).[Active](OpenTD.RadCAD.FdSolid.RcFdSolidData.Active.md)

### Faces

```csharp
public List<int> Faces { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Equals\(object\)

Determines whether the specified object is equal to the current object.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object to compare with the current object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

[true](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool) if the specified object  is equal to the current object; otherwise, [false](https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool).

### GetHashCode\(\)

Serves as the default hash function.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for the current object.

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.


