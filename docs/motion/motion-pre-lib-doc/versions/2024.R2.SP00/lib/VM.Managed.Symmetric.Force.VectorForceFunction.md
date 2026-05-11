# Class VectorForceFunction

Namespace: [VM.Managed.Symmetric.Force](VM.Managed.Symmetric.Force.md)  
Assembly: VMSymFP.dll  

```csharp
public class VectorForceFunction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VectorForceFunction](VM.Managed.Symmetric.Force.VectorForceFunction.md)

#### Derived

[VectorForceStandard](VM.Managed.Symmetric.Force.VectorForceStandard.md), 
[VectorForceUserSubroutine](VM.Managed.Symmetric.Force.VectorForceUserSubroutine.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### VectorForceFunction\(\)

```csharp
public VectorForceFunction()
```

## Methods

### FindObject\(string, SymmetricType, Plane, Document\)

```csharp
protected object FindObject(string strToolName, SymmetricType sym_type, Plane sym_plane, Document doc)
```

#### Parameters

`strToolName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`sym_type` SymmetricType

`sym_plane` Plane

`doc` Document

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### SetRefereceMarker\(IMarker, Document\)

```csharp
protected IMarker SetRefereceMarker(IMarker tool, Document doc)
```

#### Parameters

`tool` IMarker

`doc` Document

#### Returns

 IMarker


