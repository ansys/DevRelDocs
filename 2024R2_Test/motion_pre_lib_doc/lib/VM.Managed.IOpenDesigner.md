# Interface IOpenDesigner

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the open designer.

```csharp
public interface IOpenDesigner
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### FilePath

Gets the file path.

```csharp
string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TargetBody

Gets the target body.

```csharp
ObjectBase[] TargetBody { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### TemplateFilePath

Gets the template file path.

```csharp
string TemplateFilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TypeFileName

Gets the name of the type file.

```csharp
string TypeFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### FindBody\(ObjectBase\)

Finds the body form CAD body.

```csharp
ObjectBase FindBody(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The CAD body.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The body such as solid body, assembled body.

### PostOpenDoc\(Document\)

Post open document.

```csharp
void PostOpenDoc(Document doc)
```

#### Parameters

`doc` [Document](VM.Managed.Document.md)

The hidden document.

### SetCustomFilterEvent\(object\)

Set Custom Filtering Event.

```csharp
void SetCustomFilterEvent(object picker)
```

#### Parameters

`picker` [object](https://learn.microsoft.com/dotnet/api/system.object)

The picker.

### SetDataToDesignDoc\(bool\)

Sets the data to design document.

```csharp
Document SetDataToDesignDoc(bool bRecord)
```

#### Parameters

`bRecord` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Is recording for journal.

#### Returns

 [Document](VM.Managed.Document.md)

The Hidden Document


