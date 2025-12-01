# Interface IDocument
<a id="VM_Models_Pre_IDocument"></a>

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

### <a id="VM_Models_Pre_IDocument_DoingClose"></a> DoingClose

```csharp
bool DoingClose { get; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_IDocument_DoingOpen"></a> DoingOpen

```csharp
bool DoingOpen { get; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_IDocument_FilePath"></a> FilePath

```csharp
string FilePath { get; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_IDocument_InitialConvertFactor"></a> InitialConvertFactor

```csharp
Unit.ConvertFactor InitialConvertFactor { get; }
```

#### Property Value

 Unit.ConvertFactor

### <a id="VM_Models_Pre_IDocument_Modified"></a> Modified

```csharp
bool Modified { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_IDocument_Name"></a> Name

```csharp
string Name { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Models_Pre_IDocument_DisplayModeShape_System_Int32_System_Double_"></a> DisplayModeShape\(int, double\)

```csharp
void DisplayModeShape(int modeSequence, double scale)
```

#### Parameters

`modeSequence` int

`scale` double

### <a id="VM_Models_Pre_IDocument_FastToConvertUnitLength_System_Boolean_"></a> FastToConvertUnitLength\(bool\)

```csharp
double FastToConvertUnitLength(bool reverse)
```

#### Parameters

`reverse` bool

#### Returns

 double

### <a id="VM_Models_Pre_IDocument_FindObjectFromID_VM_Identifier_"></a> FindObjectFromID\(Identifier\)

```csharp
IObject FindObjectFromID(Identifier identifier)
```

#### Parameters

`identifier` Identifier

#### Returns

 [IObject](VM.Models.Pre.IObject.md)

### <a id="VM_Models_Pre_IDocument_FindObjectFromKey_System_UIntPtr_"></a> FindObjectFromKey\(UIntPtr\)

Find object from key.

```csharp
IObject FindObjectFromKey(UIntPtr key)
```

#### Parameters

`key` UIntPtr

The key.

#### Returns

 [IObject](VM.Models.Pre.IObject.md)

Find object

### <a id="VM_Models_Pre_IDocument_GetChildren"></a> GetChildren\(\)

```csharp
IEnumerable<IObject> GetChildren()
```

#### Returns

 IEnumerable<[IObject](VM.Models.Pre.IObject.md)\>

### <a id="VM_Models_Pre_IDocument_GetCopyOfKernelUnit"></a> GetCopyOfKernelUnit\(\)

```csharp
Unit GetCopyOfKernelUnit()
```

#### Returns

 Unit

### <a id="VM_Models_Pre_IDocument_GetCopyOfUnit"></a> GetCopyOfUnit\(\)

```csharp
Unit GetCopyOfUnit()
```

#### Returns

 Unit

### <a id="VM_Models_Pre_IDocument_GetNextIdentifier"></a> GetNextIdentifier\(\)

```csharp
Identifier GetNextIdentifier()
```

#### Returns

 Identifier

### <a id="VM_Models_Pre_IDocument_Save_System_String_"></a> Save\(string\)

```csharp
void Save(string path)
```

#### Parameters

`path` string

### <a id="VM_Models_Pre_IDocument_ChildAdded"></a> ChildAdded

Raised when a child object is added

```csharp
event EventHandler<Identifier> ChildAdded
```

#### Event Type

 EventHandler<Identifier\>

### <a id="VM_Models_Pre_IDocument_ChildRemoved"></a> ChildRemoved

Raised when a child object is removed

```csharp
event EventHandler<Identifier> ChildRemoved
```

#### Event Type

 EventHandler<Identifier\>

### <a id="VM_Models_Pre_IDocument_ChildReplaced"></a> ChildReplaced

Raised when child is replaced by another object

```csharp
event EventHandler<Identifier> ChildReplaced
```

#### Event Type

 EventHandler<Identifier\>

### <a id="VM_Models_Pre_IDocument_ChildReplacing"></a> ChildReplacing

Raised when child is about to be replaced with another object

```csharp
event EventHandler<Identifier> ChildReplacing
```

#### Event Type

 EventHandler<Identifier\>

### <a id="VM_Models_Pre_IDocument_Destroying"></a> Destroying

Raised when document is about to close

```csharp
event EventHandler Destroying
```

#### Event Type

 EventHandler

### <a id="VM_Models_Pre_IDocument_SelectionChanged"></a> SelectionChanged

```csharp
event EventHandler<IEnumerable<Identifier>> SelectionChanged
```

#### Event Type

 EventHandler<IEnumerable<Identifier\>\>

