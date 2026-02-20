# Class BatchControl

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Used to control batch run settings in the Case Set Manager.

```csharp
[MessagePackObject(true)]
public class BatchControl : TdConnected
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
TdConnected ← 
[BatchControl](OpenTD.BatchControl.md)

## Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### BatchControl\(\)

```csharp
public BatchControl()
```

### BatchControl\(ThermalDesktop\)

```csharp
public BatchControl(ThermalDesktop _td)
```

#### Parameters

`_td` [ThermalDesktop](OpenTD.ThermalDesktop.md)

## Properties

### changeDirLocalOrMaster

```csharp
public int changeDirLocalOrMaster { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### copyFiles

```csharp
public bool copyFiles { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### copyFilesFormat

```csharp
public string copyFilesFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### licenseWait

```csharp
public bool licenseWait { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### masterHeader

```csharp
public string masterHeader { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### masterPerCasePost

```csharp
public string masterPerCasePost { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### outputEachCaseToLogFile

```csharp
public bool outputEachCaseToLogFile { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### runBatchCommandFormat

```csharp
public string runBatchCommandFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### setDirectoryFormat

```csharp
public string setDirectoryFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### sindaCleanup

```csharp
public bool sindaCleanup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### sindaMultiProcessor

```csharp
public bool sindaMultiProcessor { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### sindaStatusWindow

```csharp
public bool sindaStatusWindow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### submitCommand

```csharp
public string submitCommand { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### SetToHTCondor\(\)

```csharp
public void SetToHTCondor()
```

### SetToLocalMachine\(\)

```csharp
public void SetToLocalMachine()
```


