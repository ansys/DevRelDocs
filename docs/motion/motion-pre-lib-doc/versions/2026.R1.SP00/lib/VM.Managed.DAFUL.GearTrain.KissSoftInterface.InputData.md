# Struct KissSoftInterface.InputData
<a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData"></a>

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

`strFilePath` string

The file path

`nNumberOfTrochoid` uint

The No. of trochoid

`nNumberOfInvolute` uint

The No. of involute

`nNumberOfSlice` uint

The No. of slice

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_FilePath"></a> FilePath

File path

```csharp
public string FilePath { readonly get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_GeneralInputData"></a> GeneralInputData

Gets general input data as double array

```csharp
public double[] GeneralInputData { get; }
```

#### Property Value

 double\[\]

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_NumberOfInvolute"></a> NumberOfInvolute

Number of rows

```csharp
public uint NumberOfInvolute { readonly get; set; }
```

#### Property Value

 uint

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_NumberOfSlice"></a> NumberOfSlice

Number of columns

```csharp
public uint NumberOfSlice { readonly get; set; }
```

#### Property Value

 uint

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_NumberOfTrochoid"></a> NumberOfTrochoid

Number of rows

```csharp
public uint NumberOfTrochoid { readonly get; set; }
```

#### Property Value

 uint

### <a id="VM_Managed_DAFUL_GearTrain_KissSoftInterface_InputData_PreInputData"></a> PreInputData

Gets pre input data as double array

```csharp
public double[] PreInputData { get; }
```

#### Property Value

 double\[\]

