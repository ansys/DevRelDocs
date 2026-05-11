# Class FilteringTarget

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the custom filter's target data.

```csharp
public class FilteringTarget
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FilteringTarget](VM.Managed.Picker.Core.FilteringTarget.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### FilteringTarget\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.FilteringTarget" data-throw-if-not-resolved="false"></xref> class

```csharp
public FilteringTarget(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

## Properties

### IsReplace

Gets the flag indicating whether object is replaced.

```csharp
public bool IsReplace { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OriginalObject

Gets the original object for filtering.

```csharp
public ObjectBase OriginalObject { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

### ReplaceObject

Gets or sets the replaced object for filtering.

```csharp
public ObjectBase ReplaceObject { get; set; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)


