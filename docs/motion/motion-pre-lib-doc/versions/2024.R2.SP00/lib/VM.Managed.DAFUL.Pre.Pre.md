# Class Pre

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

### Pre\(\)

```csharp
public Pre()
```

## Properties

### ActiveDocument

Gets the active document.

```csharp
public static IDocument ActiveDocument { get; }
```

#### Property Value

 IDocument

### ActiveDocumentViewModel

Gets the active document viewmodel.

```csharp
public static IDocumentViewModel ActiveDocumentViewModel { get; }
```

#### Property Value

 IDocumentViewModel

### ApplicationCore

Gets the application core.

```csharp
public static Application ApplicationCore { get; }
```

#### Property Value

 Application

### Core

Gets or sets the core.

```csharp
public static IPre Core { set; }
```

#### Property Value

 [IPre](VM.Managed.DAFUL.Pre.IPre.md)

### CreateFileName

Gets or sets the name of the create file.

```csharp
public static string CreateFileName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DialogManager

Gets the dialog manager.

```csharp
public static IDlgManager DialogManager { get; }
```

#### Property Value

 IDlgManager

### DocumentInfo

Gets or sets the document info.

```csharp
public static List<DocInfo> DocumentInfo { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DocInfo](VM.Managed.DAFUL.Pre.DocInfo.md)\>

### GlobalJournal

Gets the global journal.

```csharp
public static JournalRecorder GlobalJournal { get; }
```

#### Property Value

 JournalRecorder

### LocalJournal

Gets the local journal.

```csharp
public static JournalRecorder LocalJournal { get; }
```

#### Property Value

 JournalRecorder

### MainWindow

Gets the main window.

```csharp
public static IMainWindow MainWindow { get; }
```

#### Property Value

 [IMainWindow](VM.Managed.DAFUL.Pre.IMainWindow.md)

### Settings

Gets the application settings.

```csharp
public static Settings Settings { get; }
```

#### Property Value

 [Settings](VM.Managed.DAFUL.Pre.Settings.md)

### TemplateInfo

Gets or sets the template info.

```csharp
public static Dictionary<string, UIntPtr> TemplateInfo { get; set; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)\>

### UnUseMRU

Gets or sets a value indicating whether [un use MRU].

```csharp
public static bool UnUseMRU { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Version

Gets the version.

```csharp
public static string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### WriteDFG

Gets or sets the WriteDFG flag.

```csharp
public static bool WriteDFG { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AutoSave\(\)

Auto save.

```csharp
public static void AutoSave()
```

### CloseAllFile\(\)

Closes all file.

```csharp
public static void CloseAllFile()
```

### CloseAllFileExceptWork\(\)

Closes all file except work.

```csharp
public static void CloseAllFileExceptWork()
```

### CloseFile\(string\)

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

### CloseFile\(string, bool\)

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

### CloseFile\(string, bool, bool\)

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

### CloseHiddenFile\(string\)

Closes the hidden file.

```csharp
public static bool CloseHiddenFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string file.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseWork\(\)

Close work.

```csharp
public static void CloseWork()
```

### CreateDocument\(string\)

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

### CreateDocument\(string, bool\)

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

### CreateDocument\(string, bool, string\)

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

### CreateDocument\(string, bool, DocCreateInfo\)

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

### CreateDocument\(string, bool, string, bool\)

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

### Fit\(string\)

Fits the specified string path name.

```csharp
public static void Fit(string strPathName)
```

#### Parameters

`strPathName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string path.

### GetAllOpenDocument\(\)

Gets all document.

```csharp
public static List<Document> GetAllOpenDocument()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Document\>

### GetDocumentFromOpenedDocument\(string\)

Gets the document from opened document.

```csharp
public static Document GetDocumentFromOpenedDocument(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 Document

### GetMode\(\)

Gets the mode.

```csharp
public static string GetMode()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The mode type.

### IsOpenDocument\(string\)

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

### NewFile\(NewFile\)

New file.

```csharp
public static void NewFile(NewFile nf)
```

#### Parameters

`nf` [NewFile](VM.Managed.DAFUL.Pre.NewFile.md)

The new file information.

### NewModel\(NewModel\)

New model.

```csharp
public static void NewModel(NewModel nM)
```

#### Parameters

`nM` [NewModel](VM.Managed.DAFUL.Pre.NewModel.md)

The new model information.

### OpenDocument\(string\)

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

### OpenDocument\(string, bool\)

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

### OpenDocumentFile\(string\)

Opens the document file.

```csharp
public static Document OpenDocumentFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 Document

### OpenFile\(string, string\)

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

### OpenHiddenDocument\(object\)

Opens the hidden document.

```csharp
public static Document OpenHiddenDocument(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

#### Returns

 Document

### OpenModel\(string\)

Open model.

```csharp
public static Model OpenModel(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file name.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

### OpenWork\(string\)

Opens the work.

```csharp
public static Work OpenWork(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 [Work](VM.Managed.DAFUL.Pre.Work.md)

### SaveAllFile\(\)

Saves all file.

```csharp
public static SaveAllResult SaveAllFile()
```

#### Returns

 [SaveAllResult](VM.Managed.DAFUL.Pre.SaveAllResult.md)

### SaveFile\(\)

Save the file.

```csharp
public static void SaveFile()
```

### SaveFile\(string\)

Saves the file.

```csharp
public static void SaveFile(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR path.

### SaveFile\(Document, string\)

Saves the file.

```csharp
public static void SaveFile(Document doc, string strFileName)
```

#### Parameters

`doc` Document

The doc.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

### SaveFile\(Document, string, bool\)

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

### SaveModel\(string\)

Saves the model.

```csharp
public static void SaveModel(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### SaveWork\(string\)

Saves the work.

```csharp
public static void SaveWork(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### SetPathName\(string, string\)

Set path name.

```csharp
public static void SetPathName(string strOldPath, string strNewPath)
```

#### Parameters

`strOldPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The old path.

`strNewPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new path.

### SetProgressState\(int\)

Set taskbar progress state.

```csharp
public static void SetProgressState(int nStats)
```

#### Parameters

`nStats` [int](https://learn.microsoft.com/dotnet/api/system.int32)

0x0 : NOPROGRESS, 0x1 : INDETERMINATE, 0x2 : NORMAL, 0x4 : ERROR, 0x8 : PAUSED

### SetProgressValue\(ulong, ulong\)

Set taskbar progress value.

```csharp
public static void SetProgressValue(ulong nCompleted, ulong nTotal)
```

#### Parameters

`nCompleted` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The completed value.

`nTotal` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The total value.

### SetStatusBar\(string\)

Set status bar.

```csharp
public static void SetStatusBar(string strMessage)
```

#### Parameters

`strMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message.

### OnActiveDocumentChanged

Occurs when [on active document changed].

```csharp
public static event EventHandler OnActiveDocumentChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### OnActiveViewChanged

Occurs when [on active view changed].

```csharp
public static event EventHandler OnActiveViewChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)


