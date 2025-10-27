# Interface IOutput
<a id="VM_IOutput"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

Provides the ability to output a specified message.

```csharp
public interface IOutput
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_IOutput_Clear"></a> Clear\(\)

Cleat output messages.

```csharp
void Clear()
```

### <a id="VM_IOutput_Write_System_String_System_String_"></a> Write\(string, string\)

Output a specified message.

```csharp
void Write(string category, string message)
```

#### Parameters

`category` string

The category of the message.

`message` string

The message to output.

