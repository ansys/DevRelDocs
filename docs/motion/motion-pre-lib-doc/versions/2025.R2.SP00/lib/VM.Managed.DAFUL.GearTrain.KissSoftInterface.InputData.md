#  Struct KissSoftInterface.InputData

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Input data

```csharp
public struct KissSoftInterface.InputData
```

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData__ctor_System_String_System_UInt32_System_UInt32_System_UInt32_"></a> InputData\(string, uint, uint, uint\)

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

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_FilePath"></a> FilePath

File path

```csharp
public string FilePath { readonly get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_GeneralInputData"></a> GeneralInputData

Gets general input data as double array

```csharp
public double[] GeneralInputData { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_NumberOfInvolute"></a> NumberOfInvolute

Number of rows

```csharp
public uint NumberOfInvolute { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_NumberOfSlice"></a> NumberOfSlice

Number of columns

```csharp
public uint NumberOfSlice { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_NumberOfTrochoid"></a> NumberOfTrochoid

Number of rows

```csharp
public uint NumberOfTrochoid { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_PreInputData"></a> PreInputData

Gets pre input data as double array

```csharp
public double[] PreInputData { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

