# Interface IDocument

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

This interface represents the document object of the Motion Preprocessor

```csharp
public interface IDocument : IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID
```

#### Implements

[IObject](VM.Models.Pre.IObject.md), 
[IEventProvider](VM.Models.Pre.IEventProvider.md), 
[IContainer](VM.Models.Pre.IContainer.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[IDocumentExtensions.IsExistNameInDocument\(IDocument, string\)](VM.Models.Pre.IDocumentExtensions.md\#VM\_Models\_Pre\_IDocumentExtensions\_IsExistNameInDocument\_VM\_Models\_Pre\_IDocument\_System\_String\_)

## Properties

### DoingClose

```csharp
bool DoingClose { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DoingOpen

```csharp
bool DoingOpen { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### FilePath

```csharp
string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InitialConvertFactor

```csharp
Unit.ConvertFactor InitialConvertFactor { get; }
```

#### Property Value

 Unit.ConvertFactor

### Modified

```csharp
bool Modified { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Name

```csharp
string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### DisplayModeShape\(int, double\)

```csharp
void DisplayModeShape(int modeSequence, double scale)
```

#### Parameters

`modeSequence` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`scale` [double](https://learn.microsoft.com/dotnet/api/system.double)

### FastToConvertUnitLength\(bool\)

```csharp
double FastToConvertUnitLength(bool reverse)
```

#### Parameters

`reverse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FindObjectFromID\(Identifier\)

```csharp
IObject FindObjectFromID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 [IObject](VM.Models.Pre.IObject.md)

### FindObjectFromKey\(UIntPtr\)

Find object from key.

```csharp
IObject FindObjectFromKey(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key.

#### Returns

 [IObject](VM.Models.Pre.IObject.md)

Find object

### GetChildren\(\)

```csharp
IEnumerable<IObject> GetChildren()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IObject](VM.Models.Pre.IObject.md)\>

### GetCopyOfKernelUnit\(\)

```csharp
Unit GetCopyOfKernelUnit()
```

#### Returns

 Unit

### GetCopyOfUnit\(\)

```csharp
Unit GetCopyOfUnit()
```

#### Returns

 Unit

### GetNextIdentifier\(\)

```csharp
Identifier GetNextIdentifier()
```

#### Returns

 Identifier

### Save\(string\)

```csharp
void Save(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ChildAdded

Raised when a child object is added

```csharp
event EventHandler<Identifier> ChildAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<Identifier\>

### ChildRemoved

Raised when a child object is removed

```csharp
event EventHandler<Identifier> ChildRemoved
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<Identifier\>

### ChildReplaced

Raised when child is replaced by another object

```csharp
event EventHandler<Identifier> ChildReplaced
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<Identifier\>

### ChildReplacing

Raised when child is about to be replaced with another object

```csharp
event EventHandler<Identifier> ChildReplacing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<Identifier\>

### Destroying

Raised when document is about to close

```csharp
event EventHandler Destroying
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### SelectionChanged

```csharp
event EventHandler<IEnumerable<Identifier>> SelectionChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Identifier\>\>


