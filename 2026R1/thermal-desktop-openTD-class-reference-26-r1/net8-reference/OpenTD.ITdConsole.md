# <a id="OpenTD_ITdConsole"></a> Interface ITdConsole

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Provides methods to interact via TD's console

```csharp
public interface ITdConsole
```

## Methods

### <a id="OpenTD_ITdConsole_BringToFront"></a> BringToFront\(\)

```csharp
void BringToFront()
```

### <a id="OpenTD_ITdConsole_GetUserBreak"></a> GetUserBreak\(\)

```csharp
IUserBreak GetUserBreak()
```

#### Returns

 IUserBreak

### <a id="OpenTD_ITdConsole_HideProgress"></a> HideProgress\(\)

```csharp
void HideProgress()
```

### <a id="OpenTD_ITdConsole_Print_System_String_"></a> Print\(string\)

```csharp
void Print(string text)
```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ITdConsole_SetProgress_System_Int32_"></a> SetProgress\(int\)

```csharp
void SetProgress(int progressPercent)
```

#### Parameters

`progressPercent` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_ITdConsole_SetProgressTitle_System_String_"></a> SetProgressTitle\(string\)

```csharp
void SetProgressTitle(string title)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_ITdConsole_ShowProgress"></a> ShowProgress\(\)

```csharp
void ShowProgress()
```

