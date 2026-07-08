# Interface IOutput

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

### Clear\(\)

Cleat output messages.

```csharp
void Clear()
```

### Write\(string, string\)

Output a specified message.

```csharp
void Write(string category, string message)
```

#### Parameters

`category` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category of the message.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to output.


