# Interface IEventProvider
<a id="VM_Models_Pre_IEventProvider"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface is to represent the owner object in the object relationship.

```csharp
public interface IEventProvider
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_IEventProvider_IsChildExternable"></a> IsChildExternable

Gets a value indicating whether this instance's child is Externable.

```csharp
bool IsChildExternable { get; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_IEventProvider_IsExternable"></a> IsExternable

Gets a value indicating whether this instance is Externable.

```csharp
bool IsExternable { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Models_Pre_IEventProvider_GetTargetListForUpdate"></a> GetTargetListForUpdate\(\)

Gets a updated objects.

```csharp
List<IEventProvider> GetTargetListForUpdate()
```

#### Returns

 List<[IEventProvider](VM.Models.Pre.IEventProvider.md)\>

### <a id="VM_Models_Pre_IEventProvider_IsSerializable_System_Delegate_"></a> IsSerializable\(Delegate\)

Gets a value indicating whether this instance's event is serializable.

```csharp
bool IsSerializable(Delegate del)
```

#### Parameters

`del` Delegate

The delegate.

#### Returns

 bool

### <a id="VM_Models_Pre_IEventProvider_SkipUpdateObject"></a> SkipUpdateObject\(\)

Skip the object that updated.

```csharp
bool SkipUpdateObject()
```

#### Returns

 bool

