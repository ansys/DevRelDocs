# Class Api
<a id="VM_Managed_DAFUL_Pre_Api"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpreAPI.dll  

This class is to represent API for DAFUL.

```csharp
public class Api : IPre, IMainWindow
```

#### Inheritance

object ← 
[Api](VM.Managed.DAFUL.Pre.Api.md)

#### Implements

IPre, 
IMainWindow

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Pre_Api_ActiveDocument"></a> ActiveDocument

Gets the active document. [Not Implementation]

```csharp
public IDocument ActiveDocument { get; set; }
```

#### Property Value

 IDocument

### <a id="VM_Managed_DAFUL_Pre_Api_ActiveDocumentViewModel"></a> ActiveDocumentViewModel

Gets the active DocumentViewModel

```csharp
public IDocumentViewModel ActiveDocumentViewModel { get; }
```

#### Property Value

 IDocumentViewModel

### <a id="VM_Managed_DAFUL_Pre_Api_ActiveModel"></a> ActiveModel

Gets the active model.

```csharp
public Model ActiveModel { get; }
```

#### Property Value

 Model

### <a id="VM_Managed_DAFUL_Pre_Api_ActiveWork"></a> ActiveWork

Gets the active work.

```csharp
public Work ActiveWork { get; }
```

#### Property Value

 Work

### <a id="VM_Managed_DAFUL_Pre_Api_ApplicationCore"></a> ApplicationCore

Gets the application core.

```csharp
public Application ApplicationCore { get; }
```

#### Property Value

 Application

### <a id="VM_Managed_DAFUL_Pre_Api_DialogManager"></a> DialogManager

Gets the dialog manager.

```csharp
public IDlgManager DialogManager { get; }
```

#### Property Value

 IDlgManager

### <a id="VM_Managed_DAFUL_Pre_Api_GlobalJournal"></a> GlobalJournal

Gets the global journal.

```csharp
public JournalRecorder GlobalJournal { get; }
```

#### Property Value

 [JournalRecorder](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMJournal/journalRecorder.cs)

### <a id="VM_Managed_DAFUL_Pre_Api_KerenlTranslatorMessageWriter"></a> KerenlTranslatorMessageWriter

```csharp
public Action<string> KerenlTranslatorMessageWriter { get; set; }
```

#### Property Value

 Action<string\>

### <a id="VM_Managed_DAFUL_Pre_Api_KernelMessageWriter"></a> KernelMessageWriter

Messagen output action for the kernel message

```csharp
public Action<string> KernelMessageWriter { get; set; }
```

#### Property Value

 Action<string\>

### <a id="VM_Managed_DAFUL_Pre_Api_LocalJournal"></a> LocalJournal

Gets the local journal.

```csharp
public JournalRecorder LocalJournal { get; }
```

#### Property Value

 [JournalRecorder](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMJournal/journalRecorder.cs)

### <a id="VM_Managed_DAFUL_Pre_Api_MainWindow"></a> MainWindow

Gets the main window. [Not Implementation]

```csharp
public IMainWindow MainWindow { get; }
```

#### Property Value

 IMainWindow

### <a id="VM_Managed_DAFUL_Pre_Api_UnUseMRU"></a> UnUseMRU

Gets or sets a value indicating whether [un use MRU].

```csharp
public bool UnUseMRU { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Pre_Api_Version"></a> Version

Gets the version.

```csharp
public string Version { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_Api_WriteDFG"></a> WriteDFG

Gets or sets the WriteDFG flag. [Not Implementation]

```csharp
public bool WriteDFG { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_Pre_Api_ActiveDocChanged"></a> ActiveDocChanged\(\)

Activate changed document.

```csharp
public void ActiveDocChanged()
```

### <a id="VM_Managed_DAFUL_Pre_Api_ActiveViewChanged"></a> ActiveViewChanged\(\)

Activate changed view.

```csharp
public void ActiveViewChanged()
```

### <a id="VM_Managed_DAFUL_Pre_Api_AutoSave"></a> AutoSave\(\)

Auto save. [Not Implementation]

```csharp
public void AutoSave()
```

### <a id="VM_Managed_DAFUL_Pre_Api_CanSimulation_System_Boolean_"></a> CanSimulation\(bool\)

Determines whether this instance can simulation the specified can. [Not Implementation]

```csharp
public void CanSimulation(bool bCan)
```

#### Parameters

`bCan` bool

if set to <code>true</code> [can].

### <a id="VM_Managed_DAFUL_Pre_Api_ClearMessage_System_String_"></a> ClearMessage\(string\)

Clear Message. [Not Implementation]

```csharp
public void ClearMessage(string strName)
```

#### Parameters

`strName` string

Name.

### <a id="VM_Managed_DAFUL_Pre_Api_CloseAllFile"></a> CloseAllFile\(\)

Closes all file.

```csharp
public void CloseAllFile()
```

### <a id="VM_Managed_DAFUL_Pre_Api_CloseAllFileExceptWork"></a> CloseAllFileExceptWork\(\)

Closes all file except work.

```csharp
public void CloseAllFileExceptWork()
```

### <a id="VM_Managed_DAFUL_Pre_Api_CloseDocument_VM_Managed_Document_"></a> CloseDocument\(Document\)

Closes the file.

```csharp
public bool CloseDocument(Document doc)
```

#### Parameters

`doc` Document

The <xref href="VM.Managed.Document" data-throw-if-not-resolved="false"></xref> to close.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Pre_Api_CloseFile_System_String_"></a> CloseFile\(string\)

Closes the file.

```csharp
public bool CloseFile(string strFileName)
```

#### Parameters

`strFileName` string

Name of the file.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Api_CloseFile_System_String_System_Boolean_"></a> CloseFile\(string, bool\)

Closes the file.

```csharp
public bool CloseFile(string strFileName, bool bUseWork)
```

#### Parameters

`strFileName` string

Name of the STR file.

`bUseWork` bool

if set to <code>true</code> [b use work].

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Pre_Api_CloseFile_System_String_System_Boolean_System_Boolean_"></a> CloseFile\(string, bool, bool\)

Closes the file.

```csharp
public bool CloseFile(string strFileName, bool bUseWork, bool bActivate)
```

#### Parameters

`strFileName` string

Name of the string file.

`bUseWork` bool

if set to <code>true</code> [b use work].

`bActivate` bool

if set to <code>true</code> [b activate].

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Pre_Api_CloseHiddenFile_System_String_"></a> CloseHiddenFile\(string\)

Closes the hidden file.

```csharp
public bool CloseHiddenFile(string strFileName)
```

#### Parameters

`strFileName` string

Name of the string file.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Pre_Api_CloseWork"></a> CloseWork\(\)

Close work.

```csharp
public void CloseWork()
```

### <a id="VM_Managed_DAFUL_Pre_Api_CreateDocument_System_String_"></a> CreateDocument\(string\)

Creates the document.

```csharp
public Document CreateDocument(string strFileName)
```

#### Parameters

`strFileName` string

Name of the file.

#### Returns

 Document

The document.

### <a id="VM_Managed_DAFUL_Pre_Api_CreateDocument_System_String_System_Boolean_"></a> CreateDocument\(string, bool\)

Creates the document.

```csharp
public Document CreateDocument(string strFileName, bool bActivate)
```

#### Parameters

`strFileName` string

Name of the file.

`bActivate` bool

if set to <code>true</code> [b activate].

#### Returns

 Document

The document.

### <a id="VM_Managed_DAFUL_Pre_Api_CreateDocument_System_String_System_Boolean_System_String_"></a> CreateDocument\(string, bool, string\)

Creates the document.

```csharp
public Document CreateDocument(string strFileName, bool bActivate, string strDocCreateInfo)
```

#### Parameters

`strFileName` string

Name of the STR file.

`bActivate` bool

if set to <code>true</code> [b activate].

`strDocCreateInfo` string

The STR doc create info.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Api_CreateDocument_System_String_System_Boolean_System_String_System_Boolean_"></a> CreateDocument\(string, bool, string, bool\)

Creates the document.

```csharp
public Document CreateDocument(string strFileName, bool bActivate, string strDocCreateInfo, bool bDesigner)
```

#### Parameters

`strFileName` string

Name of the string file.

`bActivate` bool

if set to <code>true</code> [b activate].

`strDocCreateInfo` string

The string document create information.

`bDesigner` bool

if set to <code>true</code> [b designer].

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Api_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` bool

### <a id="VM_Managed_DAFUL_Pre_Api_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_Managed_DAFUL_Pre_Api_EndOutput_System_String_"></a> EndOutput\(string\)

Ends the output. [Not Implementation]

```csharp
public void EndOutput(string strName)
```

#### Parameters

`strName` string

Name.

### <a id="VM_Managed_DAFUL_Pre_Api_Finalize"></a> \~Api\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.DAFUL.Pre.Api" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~Api()
```

### <a id="VM_Managed_DAFUL_Pre_Api_Fit_System_String_"></a> Fit\(string\)

Fits this instance.

```csharp
public void Fit(string strPathName)
```

#### Parameters

`strPathName` string

Name of the string path.

### <a id="VM_Managed_DAFUL_Pre_Api_GetAllOpenDocument"></a> GetAllOpenDocument\(\)

Gets all opend document.

```csharp
public List<Document> GetAllOpenDocument()
```

#### Returns

 List<Document\>

### <a id="VM_Managed_DAFUL_Pre_Api_GetDocumentFromOpenedDocument_System_String_"></a> GetDocumentFromOpenedDocument\(string\)

Gets the document from opened document.

```csharp
public Document GetDocumentFromOpenedDocument(string strFileName)
```

#### Parameters

`strFileName` string

Name of the file.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Api_GetMode"></a> GetMode\(\)

Gets the mode.

```csharp
public string GetMode()
```

#### Returns

 string

The mode type

### <a id="VM_Managed_DAFUL_Pre_Api_IsOpenDocument_System_String_"></a> IsOpenDocument\(string\)

Determines whether [is open document] [the specified STR file name].

```csharp
public bool IsOpenDocument(string strFileName)
```

#### Parameters

`strFileName` string

Name of the file.

#### Returns

 bool

<code>true</code> if [is open document] [the specified STR file name]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Api_IsRunningSimulation"></a> IsRunningSimulation\(\)

Determines whether [is running simulation].

```csharp
public bool IsRunningSimulation()
```

#### Returns

 bool

### <a id="VM_Managed_DAFUL_Pre_Api_NewFile_VM_Managed_DAFUL_Pre_NewFile_"></a> NewFile\(NewFile\)

New file.

```csharp
public void NewFile(NewFile nf)
```

#### Parameters

`nf` NewFile

The new file information.

### <a id="VM_Managed_DAFUL_Pre_Api_NewModel_VM_Managed_DAFUL_Pre_NewModel_"></a> NewModel\(NewModel\)

New model.

```csharp
public void NewModel(NewModel nM)
```

#### Parameters

`nM` NewModel

The new model information.

### <a id="VM_Managed_DAFUL_Pre_Api_OpenDocument_System_String_"></a> OpenDocument\(string\)

Opens the document.

```csharp
public Document OpenDocument(string strFileName)
```

#### Parameters

`strFileName` string

Name of the file.

#### Returns

 Document

The document.

### <a id="VM_Managed_DAFUL_Pre_Api_OpenDocument_System_String_System_Boolean_"></a> OpenDocument\(string, bool\)

Opens the document.

```csharp
public Document OpenDocument(string strFileName, bool bActivate)
```

#### Parameters

`strFileName` string

Name of the file.

`bActivate` bool

if set to <code>true</code> [b activate].

#### Returns

 Document

The document.

### <a id="VM_Managed_DAFUL_Pre_Api_OpenDocument_System_String_System_String_System_Boolean_"></a> OpenDocument\(string, string, bool\)

Opens the document.

```csharp
public Document OpenDocument(string strFileName, string strRelatedPath, bool bActivate)
```

#### Parameters

`strFileName` string

Name of the STR file.

`strRelatedPath` string

The STR related path.

`bActivate` bool

if set to <code>true</code> [b activate].

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Api_OpenDocumentFile_System_String_"></a> OpenDocumentFile\(string\)

Opens the document file.

```csharp
public Document OpenDocumentFile(string strFileName)
```

#### Parameters

`strFileName` string

Name of the STR file.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Api_OpenFile_System_String_System_String_"></a> OpenFile\(string, string\)

Opens the file.

```csharp
public GroupItem OpenFile(string strFileName, string strRefDir)
```

#### Parameters

`strFileName` string

Name of the file.

`strRefDir` string

The reference directory.

#### Returns

 GroupItem

The file information class.

### <a id="VM_Managed_DAFUL_Pre_Api_OpenFileDialogAsMainWindow_VM_Managed_DAFUL_Pre_OpenFileDialogInfo_"></a> OpenFileDialogAsMainWindow\(OpenFileDialogInfo\)

Opens the file dialog as main window. [Not Implementation]

```csharp
public string OpenFileDialogAsMainWindow(OpenFileDialogInfo info)
```

#### Parameters

`info` OpenFileDialogInfo

The info.

#### Returns

 string

the file name

### <a id="VM_Managed_DAFUL_Pre_Api_OpenHiddenDocument_System_Object_"></a> OpenHiddenDocument\(object\)

Opens the hidden document.

```csharp
public Document OpenHiddenDocument(object obj)
```

#### Parameters

`obj` object

The object.

#### Returns

 Document

### <a id="VM_Managed_DAFUL_Pre_Api_OpenModel_System_String_"></a> OpenModel\(string\)

Opens the model.

```csharp
public Model OpenModel(string strFileName)
```

#### Parameters

`strFileName` string

Name of the file.

#### Returns

 Model

The model.

### <a id="VM_Managed_DAFUL_Pre_Api_OpenWork_System_String_"></a> OpenWork\(string\)

Opens the work.

```csharp
public Work OpenWork(string strFileName)
```

#### Parameters

`strFileName` string

Name of the STR file.

#### Returns

 Work

### <a id="VM_Managed_DAFUL_Pre_Api_PrepareSimulation"></a> PrepareSimulation\(\)

Prepares the simulation. [Not Implementation]

```csharp
public bool PrepareSimulation()
```

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Api_ReadAllText_System_String_System_String_"></a> ReadAllText\(string, string\)

Reads all text. [Not Implementation]

```csharp
public void ReadAllText(string strPath, string strName)
```

#### Parameters

`strPath` string

The path.

`strName` string

Name.

### <a id="VM_Managed_DAFUL_Pre_Api_ReadAllText_System_String_System_String_System_Boolean_"></a> ReadAllText\(string, string, bool\)

Reads all text.

```csharp
public void ReadAllText(string strPath, string strName, bool bDeleteFIle)
```

#### Parameters

`strPath` string

The STR path.

`strName` string

Name of the STR.

`bDeleteFIle` bool

if set to <code>true</code> [b delete F ile].

### <a id="VM_Managed_DAFUL_Pre_Api_SaveAllFile"></a> SaveAllFile\(\)

Saves all file.

```csharp
public SaveAllResult SaveAllFile()
```

#### Returns

 SaveAllResult

### <a id="VM_Managed_DAFUL_Pre_Api_SaveFile"></a> SaveFile\(\)

Save the file.

```csharp
public void SaveFile()
```

### <a id="VM_Managed_DAFUL_Pre_Api_SaveFile_System_String_"></a> SaveFile\(string\)

Saves the file.

```csharp
public void SaveFile(string strPath)
```

#### Parameters

`strPath` string

The path.

### <a id="VM_Managed_DAFUL_Pre_Api_SaveFile_VM_Managed_Document_System_String_"></a> SaveFile\(Document, string\)

Saves the file.

```csharp
public void SaveFile(Document doc, string strFileName)
```

#### Parameters

`doc` Document

The doc.

`strFileName` string

Name of the STR file.

### <a id="VM_Managed_DAFUL_Pre_Api_SaveFile_VM_Managed_Document_System_String_System_Boolean_"></a> SaveFile\(Document, string, bool\)

Saves the file.

```csharp
[Obsolete("This method is obsolete, use SaveFile(VM.Managed.Document doc, string strFileName) instead.")]
public void SaveFile(Document doc, string strFileName, bool bIgnoreExternChange)
```

#### Parameters

`doc` Document

The doc.

`strFileName` string

Name of the STR file.

`bIgnoreExternChange` bool

if set to <code>true</code> [b ignore extern change].

### <a id="VM_Managed_DAFUL_Pre_Api_SaveFile_VM_Managed_Document_"></a> SaveFile\(Document\)

Saves the file.

```csharp
public void SaveFile(Document doc)
```

#### Parameters

`doc` Document

The document to save.

### <a id="VM_Managed_DAFUL_Pre_Api_SaveFileDialogAsMainWindow_VM_Managed_DAFUL_Pre_SaveFileDialogInfo_"></a> SaveFileDialogAsMainWindow\(SaveFileDialogInfo\)

Saves the file dialog as main window. [Not Implementation]

```csharp
public string SaveFileDialogAsMainWindow(SaveFileDialogInfo info)
```

#### Parameters

`info` SaveFileDialogInfo

The info.

#### Returns

 string

the file name

### <a id="VM_Managed_DAFUL_Pre_Api_SaveModel_System_String_"></a> SaveModel\(string\)

Saves the model.

```csharp
public void SaveModel(string strFileName)
```

#### Parameters

`strFileName` string

Name of the file.

### <a id="VM_Managed_DAFUL_Pre_Api_SaveWork_System_String_"></a> SaveWork\(string\)

Saves the work.

```csharp
public void SaveWork(string strFileName)
```

#### Parameters

`strFileName` string

Name of the file.

### <a id="VM_Managed_DAFUL_Pre_Api_SetEnableOfTabCtrl_System_Object_System_Boolean_"></a> SetEnableOfTabCtrl\(object, bool\)

Sets enable or disable of Tab..

```csharp
public void SetEnableOfTabCtrl(object obj, bool bEnable)
```

#### Parameters

`obj` object

The current document.

`bEnable` bool

if set to <code>true</code> [is enable].

### <a id="VM_Managed_DAFUL_Pre_Api_SetIntervalForAutoSize"></a> SetIntervalForAutoSize\(\)

Sets the size of the interval for auto. [Not Implementation]

```csharp
public void SetIntervalForAutoSize()
```

### <a id="VM_Managed_DAFUL_Pre_Api_SetPathName_System_String_System_String_"></a> SetPathName\(string, string\)

Set path name.

```csharp
public void SetPathName(string strOldPath, string strNewPath)
```

#### Parameters

`strOldPath` string

The old path.

`strNewPath` string

The new path.

### <a id="VM_Managed_DAFUL_Pre_Api_SetProgressState_System_Int32_"></a> SetProgressState\(int\)

Set taskbar progress state.

```csharp
public void SetProgressState(int nStats)
```

#### Parameters

`nStats` int

0x0 : NOPROGRESS, 0x1 : INDETERMINATE, 0x2 : NORMAL, 0x4 : ERROR, 0x8 : PAUSED

### <a id="VM_Managed_DAFUL_Pre_Api_SetProgressValue_System_UInt64_System_UInt64_"></a> SetProgressValue\(ulong, ulong\)

Set taskbar progress value.

```csharp
public void SetProgressValue(ulong nCompleted, ulong nTotal)
```

#### Parameters

`nCompleted` ulong

The completed value.

`nTotal` ulong

The total value.

### <a id="VM_Managed_DAFUL_Pre_Api_SetSimulationParameters_System_String_System_String_"></a> SetSimulationParameters\(string, string\)

Sets the simulation parameters. [Not Implementation]

```csharp
public bool SetSimulationParameters(string strEndTime, string strStepSize)
```

#### Parameters

`strEndTime` string

The end time.

`strStepSize` string

Size of the step.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Pre_Api_SetStatusBar_System_String_"></a> SetStatusBar\(string\)

Set status bar.

```csharp
public void SetStatusBar(string strMessage)
```

#### Parameters

`strMessage` string

The message.

### <a id="VM_Managed_DAFUL_Pre_Api_Start"></a> Start\(\)

Start Api instance

```csharp
public static Api Start()
```

#### Returns

 [Api](VM.Managed.DAFUL.Pre.Api.md)

new Api instance

### <a id="VM_Managed_DAFUL_Pre_Api_Start_System_String_System_String_"></a> Start\(string, string\)

Start Api instance.

```csharp
public static Api Start(string strKernelPath, string strKernelCoreModulePath)
```

#### Parameters

`strKernelPath` string

The kernel path.

`strKernelCoreModulePath` string

The kernel core module path.

#### Returns

 [Api](VM.Managed.DAFUL.Pre.Api.md)

new Api instance

### <a id="VM_Managed_DAFUL_Pre_Api_Start_System_String_System_String_System_String_System_String_"></a> Start\(string, string, string, string\)

Start Api instance.

```csharp
public static Api Start(string strKernelPath, string strKernelCoreModulePath, string strTranslatorDir, string strHoopsExchangeDirectory)
```

#### Parameters

`strKernelPath` string

The kernel path.

`strKernelCoreModulePath` string

The kernel core module path.

`strTranslatorDir` string

The translator directory.

`strHoopsExchangeDirectory` string

The Hoops Exchange directory.

#### Returns

 [Api](VM.Managed.DAFUL.Pre.Api.md)

new Api instance

### <a id="VM_Managed_DAFUL_Pre_Api_Start_VM_Managed_DAFUL_Pre_ApiStartOptions_"></a> Start\(ApiStartOptions\)

Start Api instance with given <xref href="VM.Managed.DAFUL.Pre.ApiStartOptions" data-throw-if-not-resolved="false"></xref>

```csharp
public static Api Start(ApiStartOptions options)
```

#### Parameters

`options` [ApiStartOptions](VM.Managed.DAFUL.Pre.ApiStartOptions.md)

The <xref href="VM.Managed.DAFUL.Pre.ApiStartOptions" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [Api](VM.Managed.DAFUL.Pre.Api.md)

new Api instance

### <a id="VM_Managed_DAFUL_Pre_Api_StartOperationStatus"></a> StartOperationStatus\(\)

Starts the operation status.

```csharp
public void StartOperationStatus()
```

### <a id="VM_Managed_DAFUL_Pre_Api_StartOutput_System_String_System_String_"></a> StartOutput\(string, string\)

Starts the output. [Not Implementation]

```csharp
public void StartOutput(string strPath, string strName)
```

#### Parameters

`strPath` string

The path.

`strName` string

Name.

### <a id="VM_Managed_DAFUL_Pre_Api_UseSession_System_String_"></a> UseSession\(string\)

Get session object to menage operation session

```csharp
public ISession UseSession(string strSessionName)
```

#### Parameters

`strSessionName` string

The name of the session

#### Returns

 ISession

The <xref href="VM.CAD.Kernel.ISession?text=session" data-throw-if-not-resolved="false"></xref> object

### <a id="VM_Managed_DAFUL_Pre_Api_UseSession_VM_Models_IOperation_"></a> UseSession\(IOperation\)

Get session object to menage operation session

```csharp
public ISession UseSession(IOperation operation)
```

#### Parameters

`operation` IOperation

The <xref href="VM.Models.IOperation?text=operation" data-throw-if-not-resolved="false"></xref> will be executed.

#### Returns

 ISession

The <xref href="VM.CAD.Kernel.ISession?text=session" data-throw-if-not-resolved="false"></xref> object

### <a id="VM_Managed_DAFUL_Pre_Api_OnActiveDocumentChanged"></a> OnActiveDocumentChanged

Occurs when [on active document changed]. [Not Implementation]

```csharp
public event EventHandler OnActiveDocumentChanged
```

#### Event Type

 EventHandler

### <a id="VM_Managed_DAFUL_Pre_Api_OnActiveViewChanged"></a> OnActiveViewChanged

Occurs when [on active view changed]. [Not Implementation]

```csharp
public event EventHandler OnActiveViewChanged
```

#### Event Type

 EventHandler

