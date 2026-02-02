# Class FilterArgs
<a id="VM_Managed_Picker_Core_FilterArgs"></a>

Namespace: [VM.Managed.Picker.Core](VM.Managed.Picker.Core.md)  
Assembly: VMAppCore.dll  

This class is to represent the custom filter's data.

```csharp
public class FilterArgs : EventArgs
```

#### Inheritance

object ← 
EventArgs ← 
[FilterArgs](VM.Managed.Picker.Core.FilterArgs.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Picker_Core_FilterArgs__ctor_VM_Managed_Picker_Core_FilteringTarget_"></a> FilterArgs\(FilteringTarget\)

Initializes a new instance of the <xref href="VM.Managed.Picker.Core.FilterArgs" data-throw-if-not-resolved="false"></xref> class

```csharp
public FilterArgs(FilteringTarget target)
```

#### Parameters

`target` [FilteringTarget](VM.Managed.Picker.Core.FilteringTarget.md)

## Properties

### <a id="VM_Managed_Picker_Core_FilterArgs_OK"></a> OK

Gets the result of filter.

```csharp
public bool OK { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_Picker_Core_FilterArgs_Target"></a> Target

Gets the target for filtering.

```csharp
public FilteringTarget Target { get; }
```

#### Property Value

 [FilteringTarget](VM.Managed.Picker.Core.FilteringTarget.md)

## Methods

### <a id="VM_Managed_Picker_Core_FilterArgs_SetReject"></a> SetReject\(\)

Sets the result to reject.

```csharp
public void SetReject()
```

