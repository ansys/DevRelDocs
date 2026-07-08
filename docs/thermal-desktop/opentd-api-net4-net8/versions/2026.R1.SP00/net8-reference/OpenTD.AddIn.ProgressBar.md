# Class ProgressBar

Namespace: [OpenTD.AddIn](OpenTD.AddIn.md)  
Assembly: OpenTD.dll  

Use to control the TD/AutoCAD progress bar.

```csharp
public class ProgressBar : TdConnected
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
[ProgressBar](OpenTD.AddIn.ProgressBar.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### ProgressBar\(ThermalDesktop\)

```csharp
public ProgressBar(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Methods

### Hide\(\)

Hide the progress bar.

```csharp
public void Hide()
```

### SetProgress\(int\)

Set the position of the bar from 0 to 100.

```csharp
public void SetProgress(int progressPercent)
```

#### Parameters

`progressPercent` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetTitle\(string\)

Set the text to display near the bar.

```csharp
public void SetTitle(string title)
```

#### Parameters

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

### Show\(\)

Show the progress bar.

```csharp
public void Show()
```


