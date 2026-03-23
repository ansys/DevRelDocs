# Class Module.Command

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the command.

```csharp
public class Module.Command
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Module.Command](VM.Managed.DAFUL.Pre.Module.Command.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Command\(\)

```csharp
public Command()
```

## Properties

### Name

Gets or sets the name.

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Operation

Gets or sets the operation.

```csharp
public string Operation { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Parameters

Gets or sets the parameters.

```csharp
public XmlElement Parameters { get; set; }
```

#### Property Value

 [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

## Methods

### StartOperation\(\)

Starts the operation.

```csharp
public void StartOperation()
```

### StartOperation\(Document\)

Starts the operation.

```csharp
public void StartOperation(Document doc)
```

#### Parameters

`doc` Document

The doc.

### StartOperation\(View\)

Starts the operation.

```csharp
public void StartOperation(View view)
```

#### Parameters

`view` View

The view.

### UpdateUI\(IUIUpdate\)

Updates the UI.

```csharp
public void UpdateUI(IUIUpdate uiUpdater)
```

#### Parameters

`uiUpdater` IUIUpdate

The UI updater.

### UpdateUI\(IUIUpdate, Document\)

Updates the UI.

```csharp
public void UpdateUI(IUIUpdate uiUpdater, Document doc)
```

#### Parameters

`uiUpdater` IUIUpdate

The UI updater.

`doc` Document

The doc.

### UpdateUI\(IUIUpdate, View\)

Updates the UI.

```csharp
public void UpdateUI(IUIUpdate uiUpdater, View view)
```

#### Parameters

`uiUpdater` IUIUpdate

The UI updater.

`view` View

The view.


