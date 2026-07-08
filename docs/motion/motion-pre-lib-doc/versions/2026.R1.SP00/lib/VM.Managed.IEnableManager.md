# Interface IEnableManager
<a id="VM_Managed_IEnableManager"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the enable manager.

```csharp
public interface IEnableManager
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_IEnableManager_IsEnabled_VM_Managed_ObjectBase_"></a> IsEnabled\(ObjectBase\)

Determines whether is enabled [the specified object].

```csharp
bool IsEnabled(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 bool

<code>true</code> if is enabled [the specified object]; otherwise, <code>false</code>.

### <a id="VM_Managed_IEnableManager_SetEnable_VM_Managed_ObjectBase_System_Boolean_"></a> SetEnable\(ObjectBase, bool\)

Sets the enable.

```csharp
void SetEnable(ObjectBase ob, bool bEnable)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`bEnable` bool

if set to <code>true</code> enable.

