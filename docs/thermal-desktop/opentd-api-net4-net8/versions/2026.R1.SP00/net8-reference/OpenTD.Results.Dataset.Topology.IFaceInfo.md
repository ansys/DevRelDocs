# Class IFaceInfo

Namespace: [OpenTD.Results.Dataset.Topology](OpenTD.Results.Dataset.Topology.md)  
Assembly: OpenTD.Results.dll  

Represents IFace information.

```csharp
public class IFaceInfo : ObjectInfoBase, IIFaceInfo, IObjectInfoBase
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObjectInfoBase](OpenTD.Results.Dataset.Topology.ObjectInfoBase.md) ← 
[IFaceInfo](OpenTD.Results.Dataset.Topology.IFaceInfo.md)

## Implements

[IIFaceInfo](OpenTD.Results.Dataset.Topology.IIFaceInfo.md), 
[IObjectInfoBase](OpenTD.Results.Dataset.Topology.IObjectInfoBase.md)

## Inherited Members

[ObjectInfoBase.SindaName](OpenTD.Results.Dataset.Topology.ObjectInfoBase.md\#OpenTD\_Results\_Dataset\_Topology\_ObjectInfoBase\_SindaName), 
[ObjectInfoBase.ItemIdentifier](OpenTD.Results.Dataset.Topology.ObjectInfoBase.md\#OpenTD\_Results\_Dataset\_Topology\_ObjectInfoBase\_ItemIdentifier), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### FromLump

```csharp
public ILumpInfo FromLump { get; }
```

#### Property Value

 [ILumpInfo](OpenTD.Results.Dataset.Topology.ILumpInfo.md)

### IFaceType

```csharp
public IFaceType IFaceType { get; }
```

#### Property Value

 [IFaceType](OpenTD.Results.Dataset.Topology.IFaceType.md)

### ToLump

```csharp
public ILumpInfo ToLump { get; }
```

#### Property Value

 [ILumpInfo](OpenTD.Results.Dataset.Topology.ILumpInfo.md)

## Methods

### ToString\(\)

Returns a string that represents the current object.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

A string that represents the current object.

## See Also

[ObjectInfoBase](OpenTD.Results.Dataset.Topology.ObjectInfoBase.md)


