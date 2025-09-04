#  Interface IPre

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

### <a id="VM_Managed_DAFUL_Pre_IPre_ActiveDocument"></a> ActiveDocument

Gets the active document.

```csharp
IDocument ActiveDocument { get; }
```

#### Property Value

 IDocument

### <a id="VM_Managed_DAFUL_Pre_IPre_ActiveDocumentViewModel"></a> ActiveDocumentViewModel

Gets the active document view model

```csharp
IDocumentViewModel ActiveDocumentViewModel { get; }
```

#### Property Value

 IDocumentViewModel

### <a id="VM_Managed_DAFUL_Pre_IPre_ApplicationCore"></a> ApplicationCore

Gets the application core.

```csharp
Application ApplicationCore { get; }
```

#### Property Value

 Application

### <a id="VM_Managed_DAFUL_Pre_IPre_DialogManager"></a> DialogManager

Gets the dialog manager.

```csharp
IDlgManager DialogManager { get; }
```

#### Property Value

 IDlgManager

### <a id="VM_Managed_DAFUL_Pre_IPre_GlobalJournal"></a> GlobalJournal

Gets the global journal.

```csharp
JournalRecorder GlobalJournal { get; }
```

#### Property Value

 JournalRecorder

### <a id="VM_Managed_DAFUL_Pre_IPre_LocalJournal"></a> LocalJournal

Gets the local journal.

```csharp
JournalRecorder LocalJournal { get; }
```

#### Property Value

 JournalRecorder

### <a id="VM_Managed_DAFUL_Pre_IPre_MainWindow"></a> MainWindow

Gets the main window.

```csharp
IMainWindow MainWindow { get; }
```

#### Property Value

 [IMainWindow](VM.Managed.DAFUL.Pre.IMainWindow.md)

### <a id="VM_Managed_DAFUL_Pre_IPre_UnUseMRU"></a> UnUseMRU

Gets or sets a value indicating whether [un use MRU].

```csharp
bool UnUseMRU { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_IPre_Version"></a> Version

Gets the version.

```csharp
string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_IPre_WriteDFG"></a> WriteDFG

Gets or sets the WriteDFG flag.

```csharp
bool WriteDFG { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Pre_IPre_AutoSave"></a> AutoSave\(\)

Auto save.

```csharp
void AutoSave()
```

### <a id="VM_Managed_DAFUL_Pre_IPre_CanSimulation_System_Boolean_"></a> CanSimulation\(bool\)

Determines whether this instance can simulation the specified b can.

```csharp
void CanSimulation(bool bCan)
```

#### Parameters

`bCan` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b can].

### <a id="VM_Managed_DAFUL_Pre_IPre_ClearMessage_System_String_"></a> ClearMessage\(string\)

Clear Text.

```csharp
void ClearMessage(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name.

### <a id="VM_Managed_DAFUL_Pre_IPre_CloseAllFile"></a> CloseAllFile\(\)

Closes all file.

```csharp
void CloseAllFile()
```

### <a id="VM_Managed_DAFUL_Pre_IPre_CloseAllFileExceptWork"></a> CloseAllFileExceptWork\(\)

Closes all file except work.

```csharp
void CloseAllFileExceptWork()
```

### <a id="VM_Managed_DAFUL_Pre_IPre_CloseDocument_VM_Managed_Document_"></a> CloseDocument\(Document\)

Closes the file.

```csharp
bool CloseDocument(Document doc)
```

#### Parameters

`doc` Document

The <xref href="VM.Managed.Document" data-throw-if-not-resolved="false"></xref> to close.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_IPre_CloseFile_System_String_"></a> CloseFile\(string\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_CloseFile_System_String_System_Boolean_"></a> CloseFile\(string, bool\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_CloseFile_System_String_System_Boolean_System_Boolean_"></a> CloseFile\(string, bool, bool\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_CloseHiddenFile_System_String_"></a> CloseHiddenFile\(string\)

Closes the hidden file.

```csharp
bool CloseHiddenFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string file.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_IPre_CloseWork"></a> CloseWork\(\)

Close work.

```csharp
void CloseWork()
```

### <a id="VM_Managed_DAFUL_Pre_IPre_CreateDocument_System_String_"></a> CreateDocument\(string\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_CreateDocument_System_String_System_Boolean_"></a> CreateDocument\(string, bool\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_CreateDocument_System_String_System_Boolean_System_String_"></a> CreateDocument\(string, bool, string\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_CreateDocument_System_String_System_Boolean_System_String_System_Boolean_"></a> CreateDocument\(string, bool, string, bool\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_EndOutput_System_String_"></a> EndOutput\(string\)

Ends the output.

```csharp
void EndOutput(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name.

### <a id="VM_Managed_DAFUL_Pre_IPre_Fit_System_String_"></a> Fit\(string\)

Fits this instance.

```csharp
void Fit(string strPathName)
```

#### Parameters

`strPathName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string path.

### <a id="VM_Managed_DAFUL_Pre_IPre_GetAllOpenDocument"></a> GetAllOpenDocument\(\)

Gets all opend document.

```csharp
List<Document> GetAllOpenDocument()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Document\>

### <a id="VM_Managed_DAFUL_Pre_IPre_GetDocumentFromOpenedDocument_System_String_"></a> GetDocumentFromOpenedDocument\(string\)

Gets the document from opened document.

```csharp
Document GetDocumentFromOpenedDocument(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_IPre_GetMode"></a> GetMode\(\)

Gets the mode.

```csharp
string GetMode()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The mode type

### <a id="VM_Managed_DAFUL_Pre_IPre_IsOpenDocument_System_String_"></a> IsOpenDocument\(string\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_IsRunningSimulation"></a> IsRunningSimulation\(\)

Determines whether [is running simulation].

```csharp
bool IsRunningSimulation()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_IPre_NewFile_VM_Managed_DAFUL_Pre_NewFile_"></a> NewFile\(NewFile\)

New file.

```csharp
void NewFile(NewFile nf)
```

#### Parameters

`nf` [NewFile](VM.Managed.DAFUL.Pre.NewFile.md)

The new file information.

### <a id="VM_Managed_DAFUL_Pre_IPre_NewModel_VM_Managed_DAFUL_Pre_NewModel_"></a> NewModel\(NewModel\)

New model.

```csharp
void NewModel(NewModel nM)
```

#### Parameters

`nM` [NewModel](VM.Managed.DAFUL.Pre.NewModel.md)

The new model information.

### <a id="VM_Managed_DAFUL_Pre_IPre_OpenDocument_System_String_"></a> OpenDocument\(string\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_OpenDocument_System_String_System_Boolean_"></a> OpenDocument\(string, bool\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_OpenDocumentFile_System_String_"></a> OpenDocumentFile\(string\)

Opens the document file.

```csharp
Document OpenDocumentFile(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_IPre_OpenFile_System_String_System_String_"></a> OpenFile\(string, string\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_OpenFileDialogAsMainWindow_VM_Managed_DAFUL_Pre_OpenFileDialogInfo_"></a> OpenFileDialogAsMainWindow\(OpenFileDialogInfo\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_OpenHiddenDocument_System_Object_"></a> OpenHiddenDocument\(object\)

Opens the hidden document.

```csharp
Document OpenHiddenDocument(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_IPre_OpenModel_System_String_"></a> OpenModel\(string\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_OpenWork_System_String_"></a> OpenWork\(string\)

Opens the work.

```csharp
Work OpenWork(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

#### Returns

 [Work](VM.Managed.DAFUL.Pre.Work.md)

### <a id="VM_Managed_DAFUL_Pre_IPre_PrepareSimulation"></a> PrepareSimulation\(\)

Prepares the simulation.

```csharp
bool PrepareSimulation()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_IPre_ReadAllText_System_String_System_String_"></a> ReadAllText\(string, string\)

Reads all text.

```csharp
void ReadAllText(string strPath, string strName)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name.

### <a id="VM_Managed_DAFUL_Pre_IPre_ReadAllText_System_String_System_String_System_Boolean_"></a> ReadAllText\(string, string, bool\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_SaveAllFile"></a> SaveAllFile\(\)

Saves all file.

```csharp
SaveAllResult SaveAllFile()
```

#### Returns

 [SaveAllResult](VM.Managed.DAFUL.Pre.SaveAllResult.md)

### <a id="VM_Managed_DAFUL_Pre_IPre_SaveFile"></a> SaveFile\(\)

Save the file.

```csharp
void SaveFile()
```

### <a id="VM_Managed_DAFUL_Pre_IPre_SaveFile_System_String_"></a> SaveFile\(string\)

Saves the file.

```csharp
void SaveFile(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

### <a id="VM_Managed_DAFUL_Pre_IPre_SaveFile_VM_Managed_Document_System_String_"></a> SaveFile\(Document, string\)

Saves the file.

```csharp
void SaveFile(Document doc, string strFileName)
```

#### Parameters

`doc` Document

The doc.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR file.

### <a id="VM_Managed_DAFUL_Pre_IPre_SaveFile_VM_Managed_Document_System_String_System_Boolean_"></a> SaveFile\(Document, string, bool\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_SaveFileDialogAsMainWindow_VM_Managed_DAFUL_Pre_SaveFileDialogInfo_"></a> SaveFileDialogAsMainWindow\(SaveFileDialogInfo\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_SaveModel_System_String_"></a> SaveModel\(string\)

Saves the model.

```csharp
void SaveModel(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### <a id="VM_Managed_DAFUL_Pre_IPre_SaveWork_System_String_"></a> SaveWork\(string\)

Saves the work.

```csharp
void SaveWork(string strFileName)
```

#### Parameters

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### <a id="VM_Managed_DAFUL_Pre_IPre_SetEnableOfTabCtrl_System_Object_System_Boolean_"></a> SetEnableOfTabCtrl\(object, bool\)

Sets enable or disable of Tab..

```csharp
void SetEnableOfTabCtrl(object obj, bool bEnable)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The current document.

`bEnable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [is enable].

### <a id="VM_Managed_DAFUL_Pre_IPre_SetIntervalForAutoSize"></a> SetIntervalForAutoSize\(\)

Sets the size of the interval for auto.

```csharp
void SetIntervalForAutoSize()
```

### <a id="VM_Managed_DAFUL_Pre_IPre_SetPathName_System_String_System_String_"></a> SetPathName\(string, string\)

Set path name.

```csharp
void SetPathName(string strOldPath, string strNewPath)
```

#### Parameters

`strOldPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The old path.

`strNewPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new path.

### <a id="VM_Managed_DAFUL_Pre_IPre_SetProgressState_System_Int32_"></a> SetProgressState\(int\)

Set taskbar progress state.

```csharp
void SetProgressState(int nStats)
```

#### Parameters

`nStats` [int](https://learn.microsoft.com/dotnet/api/system.int32)

0x0 : NOPROGRESS, 0x1 : INDETERMINATE, 0x2 : NORMAL, 0x4 : ERROR, 0x8 : PAUSED

### <a id="VM_Managed_DAFUL_Pre_IPre_SetProgressValue_System_UInt64_System_UInt64_"></a> SetProgressValue\(ulong, ulong\)

Set taskbar progress value.

```csharp
void SetProgressValue(ulong nCompleted, ulong nTotal)
```

#### Parameters

`nCompleted` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The completed value.

`nTotal` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The total value.

### <a id="VM_Managed_DAFUL_Pre_IPre_SetSimulationParameters_System_String_System_String_"></a> SetSimulationParameters\(string, string\)

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

### <a id="VM_Managed_DAFUL_Pre_IPre_SetStatusBar_System_String_"></a> SetStatusBar\(string\)

Set status bar.

```csharp
void SetStatusBar(string strMessage)
```

#### Parameters

`strMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message.

### <a id="VM_Managed_DAFUL_Pre_IPre_StartOperationStatus"></a> StartOperationStatus\(\)

Starts the operation status.

```csharp
void StartOperationStatus()
```

### <a id="VM_Managed_DAFUL_Pre_IPre_StartOutput_System_String_System_String_"></a> StartOutput\(string, string\)

Starts the output.

```csharp
void StartOutput(string strPath, string strName)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name.

### <a id="VM_Managed_DAFUL_Pre_IPre_OnActiveDocumentChanged"></a> OnActiveDocumentChanged

Occurs when [on active document changed].

```csharp
event EventHandler OnActiveDocumentChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="VM_Managed_DAFUL_Pre_IPre_OnActiveViewChanged"></a> OnActiveViewChanged

Occurs when [on active view changed].

```csharp
event EventHandler OnActiveViewChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

