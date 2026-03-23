# Interface IPre

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent Pre.

```csharp
public interface IPre
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### ActiveDocument

Gets the active document.

```csharp
IDocument ActiveDocument { get; }
```

#### Property Value

 IDocument

### ActiveDocumentViewModel

Gets the active document view model

```csharp
IDocumentViewModel ActiveDocumentViewModel { get; }
```

#### Property Value

 IDocumentViewModel

### ApplicationCore

Gets the application core.

```csharp
Application ApplicationCore { get; }
```

#### Property Value

 Application

### DialogManager

Gets the dialog manager.

```csharp
IDlgManager DialogManager { get; }
```

#### Property Value

 IDlgManager

### GlobalJournal

Gets the global journal.

```csharp
JournalRecorder GlobalJournal { get; }
```

#### Property Value

 JournalRecorder

### LocalJournal

Gets the local journal.

```csharp
JournalRecorder LocalJournal { get; }
```

#### Property Value

 JournalRecorder

### MainWindow

Gets the main window.

```csharp
IMainWindow MainWindow { get; }
```

#### Property Value

 [IMainWindow](VM.Managed.DAFUL.Pre.IMainWindow.md)

### UnUseMRU

Gets or sets a value indicating whether [un use MRU].

```csharp
bool UnUseMRU { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Version

Gets the version.

```csharp
string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### WriteDFG

Gets or sets the WriteDFG flag.

```csharp
bool WriteDFG { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AutoSave\(\)

Auto save.

```csharp
void AutoSave()
```

### CanSimulation\(bool\)

Determines whether this instance can simulation the specified b can.

```csharp
void CanSimulation(bool bCan)
```

#### Parameters

`bCan` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b can].

### ClearMessage\(string\)

Clear Text.

```csharp
void ClearMessage(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name.

### CloseAllFile\(\)

Closes all file.

```csharp
void CloseAllFile()
```

### CloseAllFileExceptWork\(\)

Closes all file except work.

```csharp
void CloseAllFileExceptWork()
```

### CloseDocument\(Document\)

Closes the file.

```csharp
bool CloseDocument(Document doc)
```

#### Parameters

`doc` Document

The <xref href="VM.Managed.Document" data-throw-if-not-resolved="false"></xref> to close.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseFile\(string\)

Closes the file.

```csharp
bool CloseFile(string strFileName)
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
bool CloseFile(string strFileName, bool bUseWork)
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
bool CloseFile(string strFileName, bool bUseWork, bool bActivate)
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
bool CloseHiddenFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string file.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseWork\(\)

Close work.

```csharp
void CloseWork()
```

### CreateDocument\(string\)

Creates the document.

```csharp
Document CreateDocument(string strFileName)
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
Document CreateDocument(string strFileName, bool bActivate)
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
Document CreateDocument(string strFileName, bool bActivate, string strDocCreateInfo)
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

### CreateDocument\(string, bool, string, bool\)

Creates the document.

```csharp
Document CreateDocument(string strFileName, bool bActivate, string strDocCreateInfo, bool bDesigner)
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

### EndOutput\(string\)

Ends the output.

```csharp
void EndOutput(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name.

### Fit\(string\)

Fits this instance.

```csharp
void Fit(string strPathName)
```

#### Parameters

`strPathName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string path.

### GetAllOpenDocument\(\)

Gets all opend document.

```csharp
List<Document> GetAllOpenDocument()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Document\>

### GetDocumentFromOpenedDocument\(string\)

Gets the document from opened document.

```csharp
Document GetDocumentFromOpenedDocument(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

#### Returns

 Document

### GetMode\(\)

Gets the mode.

```csharp
string GetMode()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The mode type

### IsOpenDocument\(string\)

Determines whether [is open document] [the specified STR file name].

```csharp
bool IsOpenDocument(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if [is open document] [the specified STR file name]; otherwise, <code>false</code>.

### IsRunningSimulation\(\)

Determines whether [is running simulation].

```csharp
bool IsRunningSimulation()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NewFile\(NewFile\)

New file.

```csharp
void NewFile(NewFile nf)
```

#### Parameters

`nf` [NewFile](VM.Managed.DAFUL.Pre.NewFile.md)

The new file information.

### NewModel\(NewModel\)

New model.

```csharp
void NewModel(NewModel nM)
```

#### Parameters

`nM` [NewModel](VM.Managed.DAFUL.Pre.NewModel.md)

The new model information.

### OpenDocument\(string\)

Opens the document.

```csharp
Document OpenDocument(string strFileName)
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
Document OpenDocument(string strFileName, bool bActivate)
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
Document OpenDocumentFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 Document

### OpenFile\(string, string\)

Opens the file.

```csharp
GroupItem OpenFile(string strFileName, string strRefDir)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

#### Returns

 [GroupItem](VM.Managed.DAFUL.Pre.GroupItem.md)

The file informaton class.

### OpenFileDialogAsMainWindow\(OpenFileDialogInfo\)

Opens the file dialog as main window.

```csharp
string OpenFileDialogAsMainWindow(OpenFileDialogInfo info)
```

#### Parameters

`info` [OpenFileDialogInfo](VM.Managed.DAFUL.Pre.OpenFileDialogInfo.md)

The info.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

the file name

### OpenHiddenDocument\(object\)

Opens the hidden document.

```csharp
Document OpenHiddenDocument(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

#### Returns

 Document

### OpenModel\(string\)

Opens the model.

```csharp
Model OpenModel(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

The model.

### OpenWork\(string\)

Opens the work.

```csharp
Work OpenWork(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 [Work](VM.Managed.DAFUL.Pre.Work.md)

### PrepareSimulation\(\)

Prepares the simulation.

```csharp
bool PrepareSimulation()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ReadAllText\(string, string\)

Reads all text.

```csharp
void ReadAllText(string strPath, string strName)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name.

### ReadAllText\(string, string, bool\)

Reads all text.

```csharp
void ReadAllText(string strPath, string strName, bool bDeleteFile)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name.

`bDeleteFile` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b delete file].

### SaveAllFile\(\)

Saves all file.

```csharp
SaveAllResult SaveAllFile()
```

#### Returns

 [SaveAllResult](VM.Managed.DAFUL.Pre.SaveAllResult.md)

### SaveFile\(\)

Save the file.

```csharp
void SaveFile()
```

### SaveFile\(string\)

Saves the file.

```csharp
void SaveFile(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

### SaveFile\(Document, string\)

Saves the file.

```csharp
void SaveFile(Document doc, string strFileName)
```

#### Parameters

`doc` Document

The doc.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

### SaveFile\(Document, string, bool\)

Saves the file.

```csharp
void SaveFile(Document doc, string strFileName, bool bIgnoreExternChange)
```

#### Parameters

`doc` Document

The doc.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

`bIgnoreExternChange` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b ignore extern change].

### SaveFileDialogAsMainWindow\(SaveFileDialogInfo\)

Saves the file dialog as main window.

```csharp
string SaveFileDialogAsMainWindow(SaveFileDialogInfo info)
```

#### Parameters

`info` [SaveFileDialogInfo](VM.Managed.DAFUL.Pre.SaveFileDialogInfo.md)

The info.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

the file name

### SaveModel\(string\)

Saves the model.

```csharp
void SaveModel(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### SaveWork\(string\)

Saves the work.

```csharp
void SaveWork(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### SetEnableOfTabCtrl\(object, bool\)

Sets enable or disable of Tab..

```csharp
void SetEnableOfTabCtrl(object obj, bool bEnable)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The current document.

`bEnable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [is enable].

### SetIntervalForAutoSize\(\)

Sets the size of the interval for auto.

```csharp
void SetIntervalForAutoSize()
```

### SetPathName\(string, string\)

Set path name.

```csharp
void SetPathName(string strOldPath, string strNewPath)
```

#### Parameters

`strOldPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The old path.

`strNewPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new path.

### SetProgressState\(int\)

Set taskbar progress state.

```csharp
void SetProgressState(int nStats)
```

#### Parameters

`nStats` [int](https://learn.microsoft.com/dotnet/api/system.int32)

0x0 : NOPROGRESS, 0x1 : INDETERMINATE, 0x2 : NORMAL, 0x4 : ERROR, 0x8 : PAUSED

### SetProgressValue\(ulong, ulong\)

Set taskbar progress value.

```csharp
void SetProgressValue(ulong nCompleted, ulong nTotal)
```

#### Parameters

`nCompleted` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The completed value.

`nTotal` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The total value.

### SetSimulationParameters\(string, string\)

Sets the simulation parameters.

```csharp
bool SetSimulationParameters(string strEndTime, string strStepSize)
```

#### Parameters

`strEndTime` [string](https://learn.microsoft.com/dotnet/api/system.string)

The end time.

`strStepSize` [string](https://learn.microsoft.com/dotnet/api/system.string)

Size of the step.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### SetStatusBar\(string\)

Set status bar.

```csharp
void SetStatusBar(string strMessage)
```

#### Parameters

`strMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message.

### StartOperationStatus\(\)

Starts the operation status.

```csharp
void StartOperationStatus()
```

### StartOutput\(string, string\)

Starts the output.

```csharp
void StartOutput(string strPath, string strName)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name.

### OnActiveDocumentChanged

Occurs when [on active document changed].

```csharp
event EventHandler OnActiveDocumentChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### OnActiveViewChanged

Occurs when [on active view changed].

```csharp
event EventHandler OnActiveViewChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)


