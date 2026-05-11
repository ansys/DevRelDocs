# Class IEnableImpl

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the whether enalble or disable.

```csharp
public class IEnableImpl
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IEnableImpl](VM.Managed.IEnableImpl.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### IEnableImpl\(\)

```csharp
public IEnableImpl()
```

## Methods

### GetEnabled\(INamed\)

Determines whether the specified object is enable.

```csharp
public static bool GetEnabled(INamed namedObj)
```

#### Parameters

`namedObj` [INamed](VM.Managed.INamed.md)

The object has name.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified object is enable; otherwise, <code>false</code>.

### SetEnabled\(INamed, bool\)

Sets the enabled to object.

```csharp
public static void SetEnabled(INamed namedObj, bool bEnabled)
```

#### Parameters

`namedObj` [INamed](VM.Managed.INamed.md)

The object has name.

`bEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

whether or not enabled.


