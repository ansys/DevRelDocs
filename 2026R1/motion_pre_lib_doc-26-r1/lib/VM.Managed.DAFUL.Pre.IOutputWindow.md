# Interface IOutputWindow
<a id="VM_Managed_DAFUL_Pre_IOutputWindow"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the output window.

```csharp
public interface IOutputWindow
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Pre_IOutputWindow_AddMessage_System_String_System_String_"></a> AddMessage\(string, string\)

Adds the message.

```csharp
void AddMessage(string strOutputName, string strMessage)
```

#### Parameters

`strOutputName` string

Name of the output.

`strMessage` string

The message.

### <a id="VM_Managed_DAFUL_Pre_IOutputWindow_ClearMessage_System_String_"></a> ClearMessage\(string\)

the clear.

```csharp
void ClearMessage(string strOutputName)
```

#### Parameters

`strOutputName` string

### <a id="VM_Managed_DAFUL_Pre_IOutputWindow_ReadAllTextFromFile_System_String_System_String_System_Boolean_"></a> ReadAllTextFromFile\(string, string, bool\)

Reads all text from file.

```csharp
void ReadAllTextFromFile(string strOutputName, string strFileName, bool bDeleteFile)
```

#### Parameters

`strOutputName` string

Name of the output.

`strFileName` string

Name of the file.

`bDeleteFile` bool

if set to <code>true</code> [delete file].

### <a id="VM_Managed_DAFUL_Pre_IOutputWindow_ReportFile_System_String_System_String_"></a> ReportFile\(string, string\)

Reports the file.

```csharp
void ReportFile(string strOutputName, string strFileName)
```

#### Parameters

`strOutputName` string

Name of the output.

`strFileName` string

Name of the file.

### <a id="VM_Managed_DAFUL_Pre_IOutputWindow_StopReportFile_System_String_"></a> StopReportFile\(string\)

Stops the report file.

```csharp
void StopReportFile(string strOutputName)
```

#### Parameters

`strOutputName` string

Name of the output.

