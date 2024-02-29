# <a id="VM_Models_Post_UserDefinedAxisDataSet"></a> Class UserDefinedAxisDataSet

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public class UserDefinedAxisDataSet
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[UserDefinedAxisDataSet](VM.Models.Post.UserDefinedAxisDataSet.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_UserDefinedAxisDataSet__ctor_System_String_"></a> UserDefinedAxisDataSet\(string\)

```csharp
public UserDefinedAxisDataSet(string targetFullName)
```

#### Parameters

`targetFullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_UserDefinedAxisDataSet__ctor_VM_Models_Post_IPlottable_System_String_VM_Models_Post_IMarker_"></a> UserDefinedAxisDataSet\(IPlottable, string, IMarker\)

```csharp
public UserDefinedAxisDataSet(IPlottable target, string fullPath, IMarker marker)
```

#### Parameters

`target` [IPlottable](VM.Models.Post.IPlottable.md)

`fullPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`marker` [IMarker](VM.Models.Post.IMarker.md)

### <a id="VM_Models_Post_UserDefinedAxisDataSet__ctor_VM_Models_Post_IPlottable_System_String_System_String_VM_Models_Post_IMarker_"></a> UserDefinedAxisDataSet\(IPlottable, string, string, IMarker\)

```csharp
public UserDefinedAxisDataSet(IPlottable target, string characteristic, string component, IMarker marker)
```

#### Parameters

`target` [IPlottable](VM.Models.Post.IPlottable.md)

`characteristic` [string](https://learn.microsoft.com/dotnet/api/system.string)

`component` [string](https://learn.microsoft.com/dotnet/api/system.string)

`marker` [IMarker](VM.Models.Post.IMarker.md)

## Properties

### <a id="VM_Models_Post_UserDefinedAxisDataSet_Characteristic"></a> Characteristic

```csharp
[SaveProperty(false)]
public string Characteristic { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_UserDefinedAxisDataSet_Component"></a> Component

```csharp
[SaveProperty(false)]
public string Component { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_UserDefinedAxisDataSet_Marker"></a> Marker

```csharp
[SaveProperty(false)]
public IMarker Marker { get; }
```

#### Property Value

 [IMarker](VM.Models.Post.IMarker.md)

### <a id="VM_Models_Post_UserDefinedAxisDataSet_Parent"></a> Parent

```csharp
public IEntity Parent { get; }
```

#### Property Value

 [IEntity](VM.Models.Post.IEntity.md)

### <a id="VM_Models_Post_UserDefinedAxisDataSet_Target"></a> Target

```csharp
[SaveProperty(false)]
public IPlottable Target { get; }
```

#### Property Value

 [IPlottable](VM.Models.Post.IPlottable.md)

### <a id="VM_Models_Post_UserDefinedAxisDataSet_TargetFullName"></a> TargetFullName

```csharp
[SaveProperty(true)]
public string TargetFullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_UserDefinedAxisDataSet_TargetSubPath"></a> TargetSubPath

```csharp
public string TargetSubPath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

