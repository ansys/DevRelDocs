#  Class IVisibleImpl

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the visible for layer.

```csharp
public class IVisibleImpl
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IVisibleImpl](VM.Managed.IVisibleImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_IVisibleImpl__ctor"></a> IVisibleImpl\(\)

```csharp
public IVisibleImpl()
```

## Methods

### <a id="VM_Managed_IVisibleImpl_GetLayer_VM_Managed_ObjectBase_"></a> GetLayer\(ObjectBase\)

Gets the layer.

```csharp
public static Layer GetLayer(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 [Layer](VM.Managed.Layer.md)

The layer

### <a id="VM_Managed_IVisibleImpl_GetVisibleState_VM_Managed_ObjectBase_"></a> GetVisibleState\(ObjectBase\)

Gets the visible state of an object.

```csharp
public static bool GetVisibleState(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The visible state

### <a id="VM_Managed_IVisibleImpl_SetLayer_VM_Managed_ObjectBase_VM_Managed_Layer_"></a> SetLayer\(ObjectBase, Layer\)

Sets the layer.

```csharp
public static void SetLayer(ObjectBase ob, Layer layer)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`layer` [Layer](VM.Managed.Layer.md)

The layer.

### <a id="VM_Managed_IVisibleImpl_SetVisibleState_VM_Managed_ObjectBase_System_Boolean_"></a> SetVisibleState\(ObjectBase, bool\)

Sets the visible state of an object.

```csharp
public static void SetVisibleState(ObjectBase ob, bool bVisible)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`bVisible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The visibility.

