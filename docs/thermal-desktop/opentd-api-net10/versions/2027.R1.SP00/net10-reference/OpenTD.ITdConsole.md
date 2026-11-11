# Interface ITdConsole

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Provides methods to interact via TD's console

```csharp
public interface ITdConsole
```

## Methods

### BringToFront\(\)

```csharp
void BringToFront()
```

### GetUserBreak\(\)

```csharp
IUserBreak GetUserBreak()
```

#### Returns

 IUserBreak

### HideProgress\(\)

```csharp
void HideProgress()
```

### Print\(string\)

```csharp
void Print(string text)
```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SetProgress\(int\)

```csharp
void SetProgress(int progressPercent)
```

#### Parameters

`progressPercent` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetProgressTitle\(string\)

```csharp
void SetProgressTitle(string title)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ShowProgress\(\)

```csharp
void ShowProgress()
```


