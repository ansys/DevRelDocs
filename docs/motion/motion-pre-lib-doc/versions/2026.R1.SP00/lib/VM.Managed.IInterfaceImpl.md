# Class IInterfaceImpl
<a id="VM_Managed_IInterfaceImpl"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the interface.

```csharp
public class IInterfaceImpl
```

#### Inheritance

object ← 
[IInterfaceImpl](VM.Managed.IInterfaceImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_IInterfaceImpl__ctor"></a> IInterfaceImpl\(\)

```csharp
public IInterfaceImpl()
```

## Methods

### <a id="VM_Managed_IInterfaceImpl_IsInterface_VM_Managed_IInterface_"></a> IsInterface\(IInterface\)

Determines whether the specified object is interface.

```csharp
public static bool IsInterface(IInterface itf)
```

#### Parameters

`itf` [IInterface](VM.Managed.IInterface.md)

The object.

#### Returns

 bool

<code>true</code> if the specified object is interface; otherwise, <code>false</code>.

### <a id="VM_Managed_IInterfaceImpl_SetInterface_VM_Managed_IInterface_System_Boolean_"></a> SetInterface\(IInterface, bool\)

Sets the interface.

```csharp
public static void SetInterface(IInterface itfOb, bool bSet)
```

#### Parameters

`itfOb` [IInterface](VM.Managed.IInterface.md)

The object.

`bSet` bool

if set to <code>true</code> interface.

