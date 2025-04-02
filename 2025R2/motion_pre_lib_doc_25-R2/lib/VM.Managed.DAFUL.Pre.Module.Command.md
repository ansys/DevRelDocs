#  Class Module.Command

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

### <a id="VM_Managed_DAFUL_Pre_Module_Command__ctor"></a> Command\(\)

```csharp
public Command()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_Module_Command_Name"></a> Name

Gets or sets the name.

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Module_Command_Operation"></a> Operation

Gets or sets the operation.

```csharp
public string Operation { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Module_Command_Parameters"></a> Parameters

Gets or sets the parameters.

```csharp
public XmlElement Parameters { get; set; }
```

#### Property Value

 [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

## Methods

### <a id="VM_Managed_DAFUL_Pre_Module_Command_StartOperation"></a> StartOperation\(\)

Starts the operation.

```csharp
public void StartOperation()
```

### <a id="VM_Managed_DAFUL_Pre_Module_Command_StartOperation_VM_Managed_Document_"></a> StartOperation\(Document\)

Starts the operation.

```csharp
public void StartOperation(Document doc)
```

#### Parameters

`doc` Document

The doc.

### <a id="VM_Managed_DAFUL_Pre_Module_Command_StartOperation_VM_Managed_View_"></a> StartOperation\(View\)

Starts the operation.

```csharp
public void StartOperation(View view)
```

#### Parameters

`view` View

The view.

### <a id="VM_Managed_DAFUL_Pre_Module_Command_UpdateUI_VM_Managed_UI_IUIUpdate_"></a> UpdateUI\(IUIUpdate\)

Updates the UI.

```csharp
public void UpdateUI(IUIUpdate uiUpdater)
```

#### Parameters

`uiUpdater` IUIUpdate

The UI updater.

### <a id="VM_Managed_DAFUL_Pre_Module_Command_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_Document_"></a> UpdateUI\(IUIUpdate, Document\)

Updates the UI.

```csharp
public void UpdateUI(IUIUpdate uiUpdater, Document doc)
```

#### Parameters

`uiUpdater` IUIUpdate

The UI updater.

`doc` Document

The doc.

### <a id="VM_Managed_DAFUL_Pre_Module_Command_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_View_"></a> UpdateUI\(IUIUpdate, View\)

Updates the UI.

```csharp
public void UpdateUI(IUIUpdate uiUpdater, View view)
```

#### Parameters

`uiUpdater` IUIUpdate

The UI updater.

`view` View

The view.

