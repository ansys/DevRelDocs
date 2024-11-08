#  Class ErrorReport

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the Error Report for Verify.

```csharp
public class ErrorReport
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ErrorReport](VM.Managed.ErrorReport.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_ErrorReport__ctor"></a> ErrorReport\(\)

```csharp
public ErrorReport()
```

## Properties

### <a id="VM_Managed_ErrorReport_Error"></a> Error

```csharp
public string Error { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_ErrorReport_ErrorCode"></a> ErrorCode

```csharp
public uint ErrorCode { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_ErrorReport_ErrorObject"></a> ErrorObject

```csharp
public ObjectBase ErrorObject { get; set; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)

## Methods

### <a id="VM_Managed_ErrorReport_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

