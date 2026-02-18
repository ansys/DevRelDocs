# <a id="OpenTD_AddIn_ProgressBar"></a> Class ProgressBar

Namespace: [OpenTD.AddIn](OpenTD.AddIn.md)  
Assembly: OpenTD.dll  

Use to control the TD/AutoCAD progress bar.

```csharp
public class ProgressBar : TdConnected
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
[ProgressBar](OpenTD.AddIn.ProgressBar.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_AddIn_ProgressBar__ctor_OpenTD_ThermalDesktop_"></a> ProgressBar\(ThermalDesktop\)

```csharp
public ProgressBar(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Methods

### <a id="OpenTD_AddIn_ProgressBar_Hide"></a> Hide\(\)

Hide the progress bar.

```csharp
public void Hide()
```

### <a id="OpenTD_AddIn_ProgressBar_SetProgress_System_Int32_"></a> SetProgress\(int\)

Set the position of the bar from 0 to 100.

```csharp
public void SetProgress(int progressPercent)
```

#### Parameters

`progressPercent` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_AddIn_ProgressBar_SetTitle_System_String_"></a> SetTitle\(string\)

Set the text to display near the bar.

```csharp
public void SetTitle(string title)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_AddIn_ProgressBar_Show"></a> Show\(\)

Show the progress bar.

```csharp
public void Show()
```

