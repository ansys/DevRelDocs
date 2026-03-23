# Struct KissSoftInterface.InputData

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Input data

```csharp
public struct KissSoftInterface.InputData
```

## Constructors

### InputData\(string, uint, uint, uint\)

Constructor of InputData

```csharp
public InputData(string strFilePath, uint nNumberOfTrochoid, uint nNumberOfInvolute, uint nNumberOfSlice)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path

`nNumberOfTrochoid` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The No. of trochoid

`nNumberOfInvolute` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The No. of involute

`nNumberOfSlice` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The No. of slice

## Properties

### FilePath

File path

```csharp
public string FilePath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GeneralInputData

Gets general input data as double array

```csharp
public double[] GeneralInputData { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### NumberOfInvolute

Number of rows

```csharp
public uint NumberOfInvolute { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumberOfSlice

Number of columns

```csharp
public uint NumberOfSlice { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NumberOfTrochoid

Number of rows

```csharp
public uint NumberOfTrochoid { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### PreInputData

Gets pre input data as double array

```csharp
public double[] PreInputData { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]


