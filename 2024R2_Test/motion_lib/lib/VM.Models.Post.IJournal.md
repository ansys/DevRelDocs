# <a id="VM_Models_Post_IJournal"></a> Interface IJournal

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IJournal
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IJournal_IsJournalRecording"></a> IsJournalRecording

```csharp
bool IsJournalRecording { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Post_IJournal_AddEntry_VM_Models_Post_IJournalContentState_"></a> AddEntry\(IJournalContentState\)

```csharp
void AddEntry(IJournalContentState entry)
```

#### Parameters

`entry` [IJournalContentState](VM.Models.Post.IJournalContentState.md)

### <a id="VM_Models_Post_IJournal_WriteScripts"></a> WriteScripts\(\)

```csharp
string WriteScripts()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

