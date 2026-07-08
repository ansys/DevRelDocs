#  Interface IForceComponent

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the force component.

```csharp
public interface IForceComponent
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_IForceComponent_IsAvailable"></a> IsAvailable

Gets the available flag.

```csharp
bool IsAvailable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_IForceComponent_GetActionMarker"></a> GetActionMarker\(\)

Gets the action marker.

```csharp
Marker GetActionMarker()
```

#### Returns

 [Marker](VM.Managed.DAFUL.Marker.md)

The action marker.

### <a id="VM_Managed_DAFUL_IForceComponent_GetActionParentConnectable"></a> GetActionParentConnectable\(\)

Gets the action parent connectable.

```csharp
IConnectable GetActionParentConnectable()
```

#### Returns

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

The action parent connectable.

### <a id="VM_Managed_DAFUL_IForceComponent_GetActionTransform"></a> GetActionTransform\(\)

Gets the action transformation.

```csharp
TransformBase GetActionTransform()
```

#### Returns

 TransformBase

The action transformation.

### <a id="VM_Managed_DAFUL_IForceComponent_GetBaseMarker"></a> GetBaseMarker\(\)

Gets the base marker.

```csharp
Marker GetBaseMarker()
```

#### Returns

 [Marker](VM.Managed.DAFUL.Marker.md)

The base marker.

### <a id="VM_Managed_DAFUL_IForceComponent_GetBaseParentConnectable"></a> GetBaseParentConnectable\(\)

Gets the base parent connectable.

```csharp
IConnectable GetBaseParentConnectable()
```

#### Returns

 [IConnectable](VM.Managed.DAFUL.IConnectable.md)

The base parent connectable.

### <a id="VM_Managed_DAFUL_IForceComponent_GetBaseTransform"></a> GetBaseTransform\(\)

Gets the base transformation.

```csharp
TransformBase GetBaseTransform()
```

#### Returns

 TransformBase

The base transformation.

