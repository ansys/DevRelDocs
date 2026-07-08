# Class Application

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the application.

```csharp
public abstract class Application : IHasVerifyLevel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Application](VM.Managed.Application.md)

#### Implements

[IHasVerifyLevel](VM.Managed.IHasVerifyLevel.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### Application\(IApplication\*\)

Initializes a new instance of the <xref href="VM.Managed.Application" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Application(IApplication* pApp)
```

#### Parameters

`pApp` [IApplication](VM.DAFUL.IApplication.md)\*

The info of application.

## Properties

### DialogManager

Gets or sets the threading of picker.

```csharp
public static IDlgManager DialogManager { get; set; }
```

#### Property Value

 IDlgManager

### DocumentForUpdateContents

```csharp
public Document DocumentForUpdateContents { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### Documents

Gets all opened documents

```csharp
public ICollection<Document> Documents { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Document](VM.Managed.Document.md)\>

### Kernel

Gets the Kernel.

```csharp
public Kernel Kernel { get; }
```

#### Property Value

 [Kernel](VM.Managed.CAD.Kernel.md)

### OEMMode

```csharp
public static bool OEMMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShowOEMError

```csharp
public static bool ShowOEMError { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### CreateDocument\(DocumentType, Type, string\[\], DocCreateInfo\)

Creates the document.

```csharp
public Document3D CreateDocument(Application.DocumentType type, Type typeDoc, string[] arIconFiles, DocCreateInfo docCreateInfo)
```

#### Parameters

`type` [Application](VM.Managed.Application.md).[DocumentType](VM.Managed.Application.DocumentType.md)

The type of document.

`typeDoc` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The system type of document.

`arIconFiles` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Icon files.

`docCreateInfo` [DocCreateInfo](VM.Managed.DocCreateInfo.md)

The info of creating document.

#### Returns

 [Document3D](VM.Managed.Document3D.md)

The created document.

### CreateDocument\(DocumentType, Type\)

Creates the document.

```csharp
public Document CreateDocument(Application.DocumentType type, Type typeDoc)
```

#### Parameters

`type` [Application](VM.Managed.Application.md).[DocumentType](VM.Managed.Application.DocumentType.md)

The type of document.

`typeDoc` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The system type of document.

#### Returns

 [Document](VM.Managed.Document.md)

The created document.

### Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dispose\(\)

destroy a instance of the <xref href="VM.Managed.Application" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override sealed void Dispose()
```

### \~Application\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.Application" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~Application()
```

### GetTranslateFilter\(string\)

```csharp
public string GetTranslateFilter(string strFilter)
```

#### Parameters

`strFilter` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetTranslateForExportFilter\(string\)

```csharp
public string GetTranslateForExportFilter(string strFilter)
```

#### Parameters

`strFilter` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### InitPlugins\(string\[\]\)

Initializes a plugin.

```csharp
public abstract void InitPlugins(string[] arStrPluginPath)
```

#### Parameters

`arStrPluginPath` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The path of plugin.

### OpenDocument\(string, DocumentType, string\[\], PostOpenDocument\)

Opens the document.

```csharp
public Document3D OpenDocument(string strFilePath, Application.DocumentType type, string[] arIconFiles, Application.PostOpenDocument delPostOpen)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of opened document.

`type` [Application](VM.Managed.Application.md).[DocumentType](VM.Managed.Application.DocumentType.md)

The type of document.

`arIconFiles` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Icon files.

`delPostOpen` [Application](VM.Managed.Application.md).[PostOpenDocument](VM.Managed.Application.PostOpenDocument.md)

The delegate of post open.

#### Returns

 [Document3D](VM.Managed.Document3D.md)

The open document.

### OpenTemplateBasedDocument\(string, DocumentType, string\[\], PostOpenDocument\)

Opens the document of template base.

```csharp
public Document3D OpenTemplateBasedDocument(string strFilePath, Application.DocumentType type, string[] arIconFiles, Application.PostOpenDocument delPostOpen)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of opened document.

`type` [Application](VM.Managed.Application.md).[DocumentType](VM.Managed.Application.DocumentType.md)

The type of document.

`arIconFiles` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Icon files.

`delPostOpen` [Application](VM.Managed.Application.md).[PostOpenDocument](VM.Managed.Application.PostOpenDocument.md)

The delegate of post open.

#### Returns

 [Document3D](VM.Managed.Document3D.md)

The open document.

### OpenXmlDocument\(string, DocumentType, string\[\], PostOpenDocument\)

Opens the xml document

```csharp
public Document3D OpenXmlDocument(string strFilePath, Application.DocumentType type, string[] arIconFiles, Application.PostOpenDocument delPostOpen)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of opened document.

`type` [Application](VM.Managed.Application.md).[DocumentType](VM.Managed.Application.DocumentType.md)

The type of document.

`arIconFiles` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Icon files.

`delPostOpen` [Application](VM.Managed.Application.md).[PostOpenDocument](VM.Managed.Application.PostOpenDocument.md)

The delegate of post open.

#### Returns

 [Document3D](VM.Managed.Document3D.md)

The open document.

### SetAxisSetting\(bool, AxisLocation\)

Sets Axis Setting.

```csharp
public static void SetAxisSetting(bool bUseRotate, AxisLocation enLocation)
```

#### Parameters

`bUseRotate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Use rotate in axis area

`enLocation` [AxisLocation](VM.Managed.AxisLocation.md)

Axis Location

### SetBinderDictionary\(Dictionary<string, BinderInfo\>, Dictionary<string, BinderInfo\>\)

```csharp
public static void SetBinderDictionary(Dictionary<string, Application.BinderInfo> dicBinder, Dictionary<string, Application.BinderInfo> dicBinderForCollection)
```

#### Parameters

`dicBinder` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [Application](VM.Managed.Application.md).[BinderInfo](VM.Managed.Application.BinderInfo.md)\>

`dicBinderForCollection` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [Application](VM.Managed.Application.md).[BinderInfo](VM.Managed.Application.BinderInfo.md)\>

### SetDoubleFormat\(int\)

Sets the double format.

```csharp
public static void SetDoubleFormat(int nValue)
```

#### Parameters

`nValue` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The value.

### SetInforceBuild\(string, bool\)

```csharp
public void SetInforceBuild(string strFile, bool bOnOff)
```

#### Parameters

`strFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bOnOff` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetNavigationSetting\(NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, bool, bool, bool, int, int\)

```csharp
public static void SetNavigationSetting(NavigationKeys oRotateMain, NavigationKeys oRotateSub, NavigationKeys oTranslateMain, NavigationKeys oTranslateSub, NavigationKeys oZoomMain, NavigationKeys oZoomSub, NavigationKeys oCenterMain, NavigationKeys oCenterSub, bool bZoomInMouseDown, bool bZoomInWheelDown, bool bTrackball, int nRotateSpeed, int nZoomSpeed)
```

#### Parameters

`oRotateMain` [NavigationKeys](VM.Managed.NavigationKeys.md)

`oRotateSub` [NavigationKeys](VM.Managed.NavigationKeys.md)

`oTranslateMain` [NavigationKeys](VM.Managed.NavigationKeys.md)

`oTranslateSub` [NavigationKeys](VM.Managed.NavigationKeys.md)

`oZoomMain` [NavigationKeys](VM.Managed.NavigationKeys.md)

`oZoomSub` [NavigationKeys](VM.Managed.NavigationKeys.md)

`oCenterMain` [NavigationKeys](VM.Managed.NavigationKeys.md)

`oCenterSub` [NavigationKeys](VM.Managed.NavigationKeys.md)

`bZoomInMouseDown` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bZoomInWheelDown` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bTrackball` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nRotateSpeed` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nZoomSpeed` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Start\(string, StartOption\)

Start application.

```csharp
public static Application Start(string strKernelPath, Application.StartOption obOption)
```

#### Parameters

`strKernelPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of kernel.

`obOption` [Application](VM.Managed.Application.md).[StartOption](VM.Managed.Application.StartOption.md)

The application start option

#### Returns

 [Application](VM.Managed.Application.md)


