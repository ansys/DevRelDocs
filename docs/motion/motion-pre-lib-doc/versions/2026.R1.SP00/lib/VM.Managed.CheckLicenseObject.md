# Class CheckLicenseObject
<a id="VM_Managed_CheckLicenseObject"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the object check licence.

```csharp
public class CheckLicenseObject
```

#### Inheritance

object ← 
[CheckLicenseObject](VM.Managed.CheckLicenseObject.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CheckLicenseObject__ctor"></a> CheckLicenseObject\(\)

```csharp
public CheckLicenseObject()
```

## Methods

### <a id="VM_Managed_CheckLicenseObject_CheckLicense_System_Object_System_String__"></a> CheckLicense\(object, ref string\)

Check license.

```csharp
public static bool CheckLicense(object ob, ref string strErrorMsg)
```

#### Parameters

`ob` object

The object.

`strErrorMsg` string

The error message.

#### Returns

 bool

### <a id="VM_Managed_CheckLicenseObject_CheckLicense_System_Type_System_String__"></a> CheckLicense\(Type, ref string\)

Check license.

```csharp
public static bool CheckLicense(Type type, ref string strErrorMsg)
```

#### Parameters

`type` Type

The Type.

`strErrorMsg` string

The error message.

#### Returns

 bool

### <a id="VM_Managed_CheckLicenseObject_CheckLicenseNoErrorMsg_System_Type_System_String__"></a> CheckLicenseNoErrorMsg\(Type, ref string\)

Check license.

```csharp
public static bool CheckLicenseNoErrorMsg(Type type, ref string strErrorMsg)
```

#### Parameters

`type` Type

The Type.

`strErrorMsg` string

The error message.

#### Returns

 bool

### <a id="VM_Managed_CheckLicenseObject_GetLicenseErrorMessage_VM_Managed_License_ILicense_"></a> GetLicenseErrorMessage\(ILicense\)

Get license message.

```csharp
public static string GetLicenseErrorMessage(ILicense lic)
```

#### Parameters

`lic` ILicense

The License interface.

#### Returns

 string

