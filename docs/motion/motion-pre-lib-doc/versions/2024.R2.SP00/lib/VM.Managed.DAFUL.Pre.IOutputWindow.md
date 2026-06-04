# Interface IOutputWindow

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

### AddMessage\(string, string\)

Adds the message.

```csharp
void AddMessage(string strOutputName, string strMessage)
```

#### Parameters

`strOutputName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the output.

`strMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message.

### ClearMessage\(string\)

the clear.

```csharp
void ClearMessage(string strOutputName)
```

#### Parameters

`strOutputName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ReadAllTextFromFile\(string, string, bool\)

Reads all text from file.

```csharp
void ReadAllTextFromFile(string strOutputName, string strFileName, bool bDeleteFile)
```

#### Parameters

`strOutputName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the output.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

`bDeleteFile` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [delete file].

### ReportFile\(string, string\)

Reports the file.

```csharp
void ReportFile(string strOutputName, string strFileName)
```

#### Parameters

`strOutputName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the output.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the file.

### StopReportFile\(string\)

Stops the report file.

```csharp
void StopReportFile(string strOutputName)
```

#### Parameters

`strOutputName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the output.


