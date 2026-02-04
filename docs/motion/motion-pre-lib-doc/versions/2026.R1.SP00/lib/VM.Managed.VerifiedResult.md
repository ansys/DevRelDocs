# Class VerifiedResult
<a id="VM_Managed_VerifiedResult"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the verified result.

```csharp
public class VerifiedResult
```

#### Inheritance

object ← 
[VerifiedResult](VM.Managed.VerifiedResult.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_VerifiedResult__ctor"></a> VerifiedResult\(\)

Initializes a new instance of the <xref href="VM.Managed.VerifiedResult" data-throw-if-not-resolved="false"></xref> class.

```csharp
public VerifiedResult()
```

## Properties

### <a id="VM_Managed_VerifiedResult_Level"></a> Level

Gets the level.

```csharp
public int Level { get; }
```

#### Property Value

 int

### <a id="VM_Managed_VerifiedResult_TypeOfResult"></a> TypeOfResult

Gets the type of result.

```csharp
public VerifiedResult.ResultType TypeOfResult { get; }
```

#### Property Value

 [VerifiedResult](VM.Managed.VerifiedResult.md).[ResultType](VM.Managed.VerifiedResult.ResultType.md)

## Methods

### <a id="VM_Managed_VerifiedResult_Add_VM_Managed_ErrorReport_"></a> Add\(ErrorReport\)

Add.

```csharp
public void Add(ErrorReport er)
```

#### Parameters

`er` [ErrorReport](VM.Managed.ErrorReport.md)

The error report.

### <a id="VM_Managed_VerifiedResult_GetAllErrors"></a> GetAllErrors\(\)

Gets all errors.

```csharp
public string[] GetAllErrors()
```

#### Returns

 string\[\]

The error list.

