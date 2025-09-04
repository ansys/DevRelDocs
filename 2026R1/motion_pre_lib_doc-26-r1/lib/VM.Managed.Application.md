#  Class Application

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

### <a id="VM_Managed_Application__ctor_VM_DAFUL_IApplication__"></a> Application\(IApplication\*\)

Initializes a new instance of the <xref href="VM.Managed.Application" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Application(IApplication* pApp)
```

#### Parameters

`pApp` [IApplication](VM.DAFUL.IApplication.md)\*

The info of application.

## Properties

### <a id="VM_Managed_Application_ConversionMethod"></a> ConversionMethod

```csharp
public static ConversionMethod ConversionMethod { get; set; }
```

#### Property Value

 ConversionMethod

### <a id="VM_Managed_Application_DialogManager"></a> DialogManager

Gets or sets the threading of picker.

```csharp
public static IDlgManager DialogManager { get; set; }
```

#### Property Value

 IDlgManager

### <a id="VM_Managed_Application_DocumentForUpdateContents"></a> DocumentForUpdateContents

```csharp
public Document DocumentForUpdateContents { get; }
```

#### Property Value

 [Document](VM.Managed.Document.md)

### <a id="VM_Managed_Application_Documents"></a> Documents

Gets all opened documents

```csharp
public ICollection<Document> Documents { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[Document](VM.Managed.Document.md)\>

### <a id="VM_Managed_Application_Kernel"></a> Kernel

Gets the Kernel.

```csharp
public Kernel Kernel { get; }
```

#### Property Value

 [Kernel](VM.Managed.CAD.Kernel.md)

### <a id="VM_Managed_Application_LoadPrior242Sp3Files"></a> LoadPrior242Sp3Files

```csharp
public static bool LoadPrior242Sp3Files { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Application_OEMMode"></a> OEMMode

```csharp
public static bool OEMMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Application_ShowOEMError"></a> ShowOEMError

```csharp
public static bool ShowOEMError { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Application_SupportLegacyACISBasedFile"></a> SupportLegacyACISBasedFile

```csharp
public static bool SupportLegacyACISBasedFile { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_Application_CreateDocument_VM_Models_Pre_DocumentType_System_Type_System_String___VM_Managed_DocCreateInfo_"></a> CreateDocument\(DocumentType, Type, string\[\], DocCreateInfo\)

Creates the document.

```csharp
public Document3D CreateDocument(DocumentType type, Type typeDoc, string[] arIconFiles, DocCreateInfo docCreateInfo)
```

#### Parameters

`type` DocumentType

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

### <a id="VM_Managed_Application_CreateDocument_VM_Models_Pre_DocumentType_System_Type_"></a> CreateDocument\(DocumentType, Type\)

Creates the document.

```csharp
public Document CreateDocument(DocumentType type, Type typeDoc)
```

#### Parameters

`type` DocumentType

The type of document.

`typeDoc` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The system type of document.

#### Returns

 [Document](VM.Managed.Document.md)

The created document.

### <a id="VM_Managed_Application_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Application_Dispose"></a> Dispose\(\)

destroy a instance of the <xref href="VM.Managed.Application" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_Application_Finalize"></a> \~Application\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.Application" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~Application()
```

### <a id="VM_Managed_Application_GetTranslateFilter_System_String_"></a> GetTranslateFilter\(string\)

```csharp
public string GetTranslateFilter(string strFilter)
```

#### Parameters

`strFilter` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Application_GetTranslateForExportFilter_System_String_"></a> GetTranslateForExportFilter\(string\)

```csharp
public string GetTranslateForExportFilter(string strFilter)
```

#### Parameters

`strFilter` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Application_InitPlugins_System_String___"></a> InitPlugins\(string\[\]\)

Initializes a plugin.

```csharp
public abstract void InitPlugins(string[] arStrPluginPath)
```

#### Parameters

`arStrPluginPath` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The path of plugin.

### <a id="VM_Managed_Application_OpenDocument_System_String_VM_Models_Pre_DocumentType_System_String___VM_Managed_Application_PostOpenDocument_"></a> OpenDocument\(string, DocumentType, string\[\], PostOpenDocument\)

Opens the document.

```csharp
public Document3D OpenDocument(string strFilePath, DocumentType type, string[] arIconFiles, Application.PostOpenDocument delPostOpen)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of opened document.

`type` DocumentType

The type of document.

`arIconFiles` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Icon files.

`delPostOpen` [Application](VM.Managed.Application.md).[PostOpenDocument](VM.Managed.Application.PostOpenDocument.md)

The delegate of post open.

#### Returns

 [Document3D](VM.Managed.Document3D.md)

The open document.

### <a id="VM_Managed_Application_OpenTemplateBasedDocument_System_String_VM_Models_Pre_DocumentType_System_String___VM_Managed_Application_PostOpenDocument_"></a> OpenTemplateBasedDocument\(string, DocumentType, string\[\], PostOpenDocument\)

Opens the document of template base.

```csharp
public Document3D OpenTemplateBasedDocument(string strFilePath, DocumentType type, string[] arIconFiles, Application.PostOpenDocument delPostOpen)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of opened document.

`type` DocumentType

The type of document.

`arIconFiles` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Icon files.

`delPostOpen` [Application](VM.Managed.Application.md).[PostOpenDocument](VM.Managed.Application.PostOpenDocument.md)

The delegate of post open.

#### Returns

 [Document3D](VM.Managed.Document3D.md)

The open document.

### <a id="VM_Managed_Application_OpenXmlDocument_System_String_VM_Models_Pre_DocumentType_System_String___VM_Managed_Application_PostOpenDocument_"></a> OpenXmlDocument\(string, DocumentType, string\[\], PostOpenDocument\)

Opens the xml document

```csharp
public Document3D OpenXmlDocument(string strFilePath, DocumentType type, string[] arIconFiles, Application.PostOpenDocument delPostOpen)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of opened document.

`type` DocumentType

The type of document.

`arIconFiles` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

Icon files.

`delPostOpen` [Application](VM.Managed.Application.md).[PostOpenDocument](VM.Managed.Application.PostOpenDocument.md)

The delegate of post open.

#### Returns

 [Document3D](VM.Managed.Document3D.md)

The open document.

### <a id="VM_Managed_Application_SetAxisSetting_System_Boolean_VM_Managed_AxisLocation_"></a> SetAxisSetting\(bool, AxisLocation\)

Sets Axis Setting.

```csharp
public static void SetAxisSetting(bool bUseRotate, AxisLocation enLocation)
```

#### Parameters

`bUseRotate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Use rotate in axis area

`enLocation` [AxisLocation](VM.Managed.AxisLocation.md)

Axis Location

### <a id="VM_Managed_Application_SetBinderDictionary_System_Collections_Generic_Dictionary_System_String_VM_Managed_Application_BinderInfo__System_Collections_Generic_Dictionary_System_String_VM_Managed_Application_BinderInfo__"></a> SetBinderDictionary\(Dictionary<string, BinderInfo\>, Dictionary<string, BinderInfo\>\)

```csharp
public static void SetBinderDictionary(Dictionary<string, Application.BinderInfo> dicBinder, Dictionary<string, Application.BinderInfo> dicBinderForCollection)
```

#### Parameters

`dicBinder` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [Application](VM.Managed.Application.md).[BinderInfo](VM.Managed.Application.BinderInfo.md)\>

`dicBinderForCollection` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [Application](VM.Managed.Application.md).[BinderInfo](VM.Managed.Application.BinderInfo.md)\>

### <a id="VM_Managed_Application_SetDoubleFormat_System_Int32_"></a> SetDoubleFormat\(int\)

Sets the double format.

```csharp
public static void SetDoubleFormat(int nValue)
```

#### Parameters

`nValue` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The value.

### <a id="VM_Managed_Application_SetInforceBuild_System_String_System_Boolean_"></a> SetInforceBuild\(string, bool\)

```csharp
public void SetInforceBuild(string strFile, bool bOnOff)
```

#### Parameters

`strFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bOnOff` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Application_SetKernelLogLevel_System_Int32_System_Int32_"></a> SetKernelLogLevel\(int, int\)

Set kernel log level

```csharp
public void SetKernelLogLevel(int nKernelLogLevel, int nTranslatorLogLevel)
```

#### Parameters

`nKernelLogLevel` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Log level for the kernel messages.

`nTranslatorLogLevel` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Log level for the translator messages.

### <a id="VM_Managed_Application_SetNavigationSetting_VM_Managed_NavigationKeys_VM_Managed_NavigationKeys_VM_Managed_NavigationKeys_VM_Managed_NavigationKeys_VM_Managed_NavigationKeys_VM_Managed_NavigationKeys_VM_Managed_NavigationKeys_VM_Managed_NavigationKeys_System_Boolean_System_Boolean_System_Boolean_System_Int32_System_Int32_"></a> SetNavigationSetting\(NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, NavigationKeys, bool, bool, bool, int, int\)

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

### <a id="VM_Managed_Application_Start_System_String_VM_Managed_Application_StartOption_"></a> Start\(string, StartOption\)

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

