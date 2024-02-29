# <a id="VM_IOutput"></a> Interface IOutput

Namespace: [VM](VM.md)  
Assembly: VM.dll  

지정한 메시지를 출력하는 기능을 제공합니다.

```csharp
public interface IOutput
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_IOutput_Clear"></a> Clear\(\)

출력한 메시지들을 초기화합니다.

```csharp
void Clear()
```

### <a id="VM_IOutput_Write_System_String_System_String_"></a> Write\(string, string\)

지정한 메시지를 출력합니다.

```csharp
void Write(string category, string message)
```

#### Parameters

`category` [string](https://learn.microsoft.com/dotnet/api/system.string)

출력할 메시지의 범주입니다.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

출력할 메시지입니다.

