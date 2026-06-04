#  Class Pre

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the Pre.

```csharp
public class Pre
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Pre](VM.Managed.DAFUL.Pre.Pre.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_Pre__ctor"></a> Pre\(\)

```csharp
public Pre()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_Pre_ActiveDocument"></a> ActiveDocument

Gets the active document.

```csharp
public static IDocument ActiveDocument { get; }
```

#### Property Value

 IDocument

### <a id="VM_Managed_DAFUL_Pre_Pre_ActiveDocumentViewModel"></a> ActiveDocumentViewModel

Gets the active document viewmodel.

```csharp
public static IDocumentViewModel ActiveDocumentViewModel { get; }
```

#### Property Value

 IDocumentViewModel

### <a id="VM_Managed_DAFUL_Pre_Pre_ApplicationCore"></a> ApplicationCore

Gets the application core.

```csharp
public static Application ApplicationCore { get; }
```

#### Property Value

 Application

### <a id="VM_Managed_DAFUL_Pre_Pre_Core"></a> Core

Gets or sets the core.

```csharp
public static IPre Core { set; }
```

#### Property Value

 [IPre](VM.Managed.DAFUL.Pre.IPre.md)

### <a id="VM_Managed_DAFUL_Pre_Pre_CreateFileName"></a> CreateFileName

Gets or sets the name of the create file.

```csharp
public static string CreateFileName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Pre_DialogManager"></a> DialogManager

Gets the dialog manager.

```csharp
public static IDlgManager DialogManager { get; }
```

#### Property Value

 IDlgManager

### <a id="VM_Managed_DAFUL_Pre_Pre_DocumentInfo"></a> DocumentInfo

Gets or sets the document info.

```csharp
public static List<DocInfo> DocumentInfo { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DocInfo](VM.Managed.DAFUL.Pre.DocInfo.md)\>

### <a id="VM_Managed_DAFUL_Pre_Pre_GlobalJournal"></a> GlobalJournal

Gets the global journal.

```csharp
public static JournalRecorder GlobalJournal { get; }
```

#### Property Value

 JournalRecorder

### <a id="VM_Managed_DAFUL_Pre_Pre_LocalJournal"></a> LocalJournal

Gets the local journal.

```csharp
public static JournalRecorder LocalJournal { get; }
```

#### Property Value

 JournalRecorder

### <a id="VM_Managed_DAFUL_Pre_Pre_MainWindow"></a> MainWindow

Gets the main window.

```csharp
public static IMainWindow MainWindow { get; }
```

#### Property Value

 [IMainWindow](VM.Managed.DAFUL.Pre.IMainWindow.md)

### <a id="VM_Managed_DAFUL_Pre_Pre_Settings"></a> Settings

Gets the application settings.

```csharp
public static Settings Settings { get; }
```

#### Property Value

 [Settings](VM.Managed.DAFUL.Pre.Settings.md)

### <a id="VM_Managed_DAFUL_Pre_Pre_TemplateInfo"></a> TemplateInfo

Gets or sets the template info.

```csharp
public static Dictionary<string, UIntPtr> TemplateInfo { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\>

### <a id="VM_Managed_DAFUL_Pre_Pre_UnUseMRU"></a> UnUseMRU

Gets or sets a value indicating whether [un use MRU].

```csharp
public static bool UnUseMRU { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Pre_Version"></a> Version

Gets the version.

```csharp
public static string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_Pre_WriteDFG"></a> WriteDFG

Gets or sets the WriteDFG flag.

```csharp
public static bool WriteDFG { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Pre_Pre_AutoSave"></a> AutoSave\(\)

Auto save.

```csharp
public static void AutoSave()
```

### <a id="VM_Managed_DAFUL_Pre_Pre_CloseAllFile"></a> CloseAllFile\(\)

Closes all file.

```csharp
public static void CloseAllFile()
```

### <a id="VM_Managed_DAFUL_Pre_Pre_CloseAllFileExceptWork"></a> CloseAllFileExceptWork\(\)

Closes all file except work.

```csharp
public static void CloseAllFileExceptWork()
```

### <a id="VM_Managed_DAFUL_Pre_Pre_CloseFile_System_String_"></a> CloseFile\(string\)

Closes the file.

```csharp
public static bool CloseFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Pre_CloseFile_System_String_System_Boolean_"></a> CloseFile\(string, bool\)

Closes the file.

```csharp
public static bool CloseFile(string strFileName, bool bUseWork)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

`bUseWork` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use work].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Pre_CloseFile_System_String_System_Boolean_System_Boolean_"></a> CloseFile\(string, bool, bool\)

Closes the file.

```csharp
public static bool CloseFile(string strFileName, bool bUseWork, bool bActivate)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string file.

`bUseWork` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b use work].

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b activate].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Pre_CloseHiddenFile_System_String_"></a> CloseHiddenFile\(string\)

Closes the hidden file.

```csharp
public static bool CloseHiddenFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string file.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_Pre_CloseWork"></a> CloseWork\(\)

Close work.

```csharp
public static void CloseWork()
```

### <a id="VM_Managed_DAFUL_Pre_Pre_CreateDocument_System_String_"></a> CreateDocument\(string\)

Creates the document.

```csharp
public static Document CreateDocument(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

#### Returns

 Document

The document.

### <a id="VM_Managed_DAFUL_Pre_Pre_CreateDocument_System_String_System_Boolean_"></a> CreateDocument\(string, bool\)

Creates the document.

```csharp
public static Document CreateDocument(string strFileName, bool bActivate)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b activate].

#### Returns

 Document

The document.

### <a id="VM_Managed_DAFUL_Pre_Pre_CreateDocument_System_String_System_Boolean_System_String_"></a> CreateDocument\(string, bool, string\)

Creates the document.

```csharp
public static Document CreateDocument(string strFileName, bool bActivate, string strDocCreateInfo)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b activate].

`strDocCreateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR doc create info.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Pre_CreateDocument_System_String_System_Boolean_VM_Managed_DocCreateInfo_"></a> CreateDocument\(string, bool, DocCreateInfo\)

Creates the document.

```csharp
public static Document CreateDocument(string strFileName, bool bActivate, DocCreateInfo docCreateInfo)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b activate].

`docCreateInfo` DocCreateInfo

The doc create info.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Pre_CreateDocument_System_String_System_Boolean_System_String_System_Boolean_"></a> CreateDocument\(string, bool, string, bool\)

Creates the document.

```csharp
public static Document CreateDocument(string strFileName, bool bActivate, string strDocCreateInfo, bool bDesigner)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string file.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b activate].

`strDocCreateInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string document create information.

`bDesigner` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b designer].

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Pre_Fit_System_String_"></a> Fit\(string\)

Fits the specified string path name.

```csharp
public static void Fit(string strPathName)
```

#### Parameters

`strPathName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string path.

### <a id="VM_Managed_DAFUL_Pre_Pre_GetAllOpenDocument"></a> GetAllOpenDocument\(\)

Gets all document.

```csharp
public static List<Document> GetAllOpenDocument()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Document\>

### <a id="VM_Managed_DAFUL_Pre_Pre_GetDocumentFromOpenedDocument_System_String_"></a> GetDocumentFromOpenedDocument\(string\)

Gets the document from opened document.

```csharp
public static Document GetDocumentFromOpenedDocument(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Pre_GetMode"></a> GetMode\(\)

Gets the mode.

```csharp
public static string GetMode()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The mode type.

### <a id="VM_Managed_DAFUL_Pre_Pre_IsOpenDocument_System_String_"></a> IsOpenDocument\(string\)

Determines whether [is open document] [the specified file name].

```csharp
public static bool IsOpenDocument(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is open document; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Pre_NewFile_VM_Managed_DAFUL_Pre_NewFile_"></a> NewFile\(NewFile\)

New file.

```csharp
public static void NewFile(NewFile nf)
```

#### Parameters

`nf` [NewFile](VM.Managed.DAFUL.Pre.NewFile.md)

The new file information.

### <a id="VM_Managed_DAFUL_Pre_Pre_NewModel_VM_Managed_DAFUL_Pre_NewModel_"></a> NewModel\(NewModel\)

New model.

```csharp
public static void NewModel(NewModel nM)
```

#### Parameters

`nM` [NewModel](VM.Managed.DAFUL.Pre.NewModel.md)

The new model information.

### <a id="VM_Managed_DAFUL_Pre_Pre_OpenDocument_System_String_"></a> OpenDocument\(string\)

Opens the document.

```csharp
public static Document OpenDocument(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

#### Returns

 Document

The document.

### <a id="VM_Managed_DAFUL_Pre_Pre_OpenDocument_System_String_System_Boolean_"></a> OpenDocument\(string, bool\)

Opens the document.

```csharp
public static Document OpenDocument(string strFileName, bool bActivate)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b activate].

#### Returns

 Document

The document.

### <a id="VM_Managed_DAFUL_Pre_Pre_OpenDocumentFile_System_String_"></a> OpenDocumentFile\(string\)

Opens the document file.

```csharp
public static Document OpenDocumentFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Pre_OpenFile_System_String_System_String_"></a> OpenFile\(string, string\)

Opens the file.

```csharp
public static GroupItem OpenFile(string strFileName, string strRefDir)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

#### Returns

 [GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

The file informaton class.

### <a id="VM_Managed_DAFUL_Pre_Pre_OpenHiddenDocument_System_Object_"></a> OpenHiddenDocument\(object\)

Opens the hidden document.

```csharp
public static Document OpenHiddenDocument(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Pre_OpenModel_System_String_"></a> OpenModel\(string\)

Open model.

```csharp
public static Model OpenModel(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file name.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

### <a id="VM_Managed_DAFUL_Pre_Pre_OpenWork_System_String_"></a> OpenWork\(string\)

Opens the work.

```csharp
public static Work OpenWork(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 [Work](VM.Managed.DAFUL.Pre.Work.md)

### <a id="VM_Managed_DAFUL_Pre_Pre_SaveAllFile"></a> SaveAllFile\(\)

Saves all file.

```csharp
public static SaveAllResult SaveAllFile()
```

#### Returns

 [SaveAllResult](VM.Managed.DAFUL.Pre.SaveAllResult.md)

### <a id="VM_Managed_DAFUL_Pre_Pre_SaveFile"></a> SaveFile\(\)

Save the file.

```csharp
public static void SaveFile()
```

### <a id="VM_Managed_DAFUL_Pre_Pre_SaveFile_System_String_"></a> SaveFile\(string\)

Saves the file.

```csharp
public static void SaveFile(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR path.

### <a id="VM_Managed_DAFUL_Pre_Pre_SaveFile_VM_Managed_Document_System_String_"></a> SaveFile\(Document, string\)

Saves the file.

```csharp
public static void SaveFile(Document doc, string strFileName)
```

#### Parameters

`doc` Document

The doc.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

### <a id="VM_Managed_DAFUL_Pre_Pre_SaveFile_VM_Managed_Document_System_String_System_Boolean_"></a> SaveFile\(Document, string, bool\)

Saves the file.

```csharp
public static void SaveFile(Document doc, string strFileName, bool bIgnoreExternChange)
```

#### Parameters

`doc` Document

The doc.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

`bIgnoreExternChange` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b ignore extern change].

### <a id="VM_Managed_DAFUL_Pre_Pre_SaveModel_System_String_"></a> SaveModel\(string\)

Saves the model.

```csharp
public static void SaveModel(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### <a id="VM_Managed_DAFUL_Pre_Pre_SaveWork_System_String_"></a> SaveWork\(string\)

Saves the work.

```csharp
public static void SaveWork(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### <a id="VM_Managed_DAFUL_Pre_Pre_SetPathName_System_String_System_String_"></a> SetPathName\(string, string\)

Set path name.

```csharp
public static void SetPathName(string strOldPath, string strNewPath)
```

#### Parameters

`strOldPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The old path.

`strNewPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new path.

### <a id="VM_Managed_DAFUL_Pre_Pre_SetProgressState_System_Int32_"></a> SetProgressState\(int\)

Set taskbar progress state.

```csharp
public static void SetProgressState(int nStats)
```

#### Parameters

`nStats` [int](https://learn.microsoft.com/dotnet/api/system.int32)

0x0 : NOPROGRESS, 0x1 : INDETERMINATE, 0x2 : NORMAL, 0x4 : ERROR, 0x8 : PAUSED

### <a id="VM_Managed_DAFUL_Pre_Pre_SetProgressValue_System_UInt64_System_UInt64_"></a> SetProgressValue\(ulong, ulong\)

Set taskbar progress value.

```csharp
public static void SetProgressValue(ulong nCompleted, ulong nTotal)
```

#### Parameters

`nCompleted` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The completed value.

`nTotal` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The total value.

### <a id="VM_Managed_DAFUL_Pre_Pre_SetStatusBar_System_String_"></a> SetStatusBar\(string\)

Set status bar.

```csharp
public static void SetStatusBar(string strMessage)
```

#### Parameters

`strMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message.

### <a id="VM_Managed_DAFUL_Pre_Pre_OnActiveDocumentChanged"></a> OnActiveDocumentChanged

Occurs when [on active document changed].

```csharp
public static event EventHandler OnActiveDocumentChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="VM_Managed_DAFUL_Pre_Pre_OnActiveViewChanged"></a> OnActiveViewChanged

Occurs when [on active view changed].

```csharp
public static event EventHandler OnActiveViewChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

