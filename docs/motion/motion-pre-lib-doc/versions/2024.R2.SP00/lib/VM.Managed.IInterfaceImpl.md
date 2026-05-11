# Class IInterfaceImpl

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the interface.

```csharp
public class IInterfaceImpl
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IInterfaceImpl](VM.Managed.IInterfaceImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### IInterfaceImpl\(\)

```csharp
public IInterfaceImpl()
```

## Methods

### IsInterface\(IInterface\)

Determines whether the specified object is interface.

```csharp
public static bool IsInterface(IInterface itf)
```

#### Parameters

`itf` [IInterface](VM.Managed.IInterface.md)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified object is interface; otherwise, <code>false</code>.

### SetInterface\(IInterface, bool\)

Sets the interface.

```csharp
public static void SetInterface(IInterface itfOb, bool bSet)
```

#### Parameters

`itfOb` [IInterface](VM.Managed.IInterface.md)

The object.

`bSet` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> interface.


