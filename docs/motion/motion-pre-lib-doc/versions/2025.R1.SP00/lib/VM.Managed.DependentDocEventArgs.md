#  Class DependentDocEventArgs

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the event argument for dependent document.

```csharp
public sealed class DependentDocEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[DependentDocEventArgs](VM.Managed.DependentDocEventArgs.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DependentDocEventArgs__ctor_VM_Managed_Document_"></a> DependentDocEventArgs\(Document\)

Initializes a new instance of the <xref href="VM.Managed.DependentDocEventArgs" data-throw-if-not-resolved="false"></xref> class

```csharp
public DependentDocEventArgs(Document docDependent)
```

#### Parameters

`docDependent` [Document](VM.Managed.Document.md)

The dependent document.

## Properties

### <a id="VM_Managed_DependentDocEventArgs_DependentDocument"></a> DependentDocument

Gets the dependent document.

```csharp
public Document DependentDocument { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

