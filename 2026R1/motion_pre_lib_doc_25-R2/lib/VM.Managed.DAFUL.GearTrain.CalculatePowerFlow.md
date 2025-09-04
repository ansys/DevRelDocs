#  Class CalculatePowerFlow

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Calculate Power Flow

```csharp
public class CalculatePowerFlow
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CalculatePowerFlow](VM.Managed.DAFUL.GearTrain.CalculatePowerFlow.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow__ctor"></a> CalculatePowerFlow\(\)

```csharp
public CalculatePowerFlow()
```

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow_CalculateInputPower_VM_Managed_DAFUL_GearTrain_PowerFlow_SimulationType_System_Double___System_Double_System_String_"></a> CalculateInputPower\(SimulationType, double\[\], double, string\)

Calculates the input power.

```csharp
public static double[] CalculateInputPower(PowerFlow.SimulationType type, double[] arRPM, double dPower, string strPowerPath)
```

#### Parameters

`type` [PowerFlow](VM.Managed.DAFUL.GearTrain.PowerFlow.md).[SimulationType](VM.Managed.DAFUL.GearTrain.PowerFlow.SimulationType.md)

The type.

`arRPM` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The ar RPM.

`dPower` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d power.

`strPowerPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string power path.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow_CalculateOutputSpeed_System_Double___System_Double_"></a> CalculateOutputSpeed\(double\[\], double\)

Calculates the output speed.

```csharp
public static double[] CalculateOutputSpeed(double[] arInputSpeed, double dReductionRatio)
```

#### Parameters

`arInputSpeed` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The ar input speed.

`dReductionRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d reduction ratio.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow_CalculateRPM_VM_Managed_DAFUL_GearTrain_PowerFlow_SimulationType_System_Double_System_Double_System_Double_System_Double_System_String_System_Double_System_Double_System_Double____System_Double____"></a> CalculateRPM\(SimulationType, double, double, double, double, string, double, double, ref double\[\], ref double\[\]\)

Calculates the RPM.

```csharp
public static bool CalculateRPM(PowerFlow.SimulationType type, double dInterpol, double dSign, double dStartSpeed, double dEndSpeed, string strUIInputSpeedPath, double dDuration, double dEndTime, ref double[] arRPM, ref double[] arTime)
```

#### Parameters

`type` [PowerFlow](VM.Managed.DAFUL.GearTrain.PowerFlow.md).[SimulationType](VM.Managed.DAFUL.GearTrain.PowerFlow.SimulationType.md)

The type.

`dInterpol` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d interpol.

`dSign` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d sign.

`dStartSpeed` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d start speed.

`dEndSpeed` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d end speed.

`strUIInputSpeedPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string UI input speed path.

`dDuration` [double](https://learn.microsoft.com/dotnet/api/system.double)

Duration of the d.

`dEndTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d end time.

`arRPM` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The ar RPM.

`arTime` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The ar time.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow_CalculateReductionRatio_VM_Managed_DAFUL_GearTrain_IHasPowerLoad_VM_Managed_DAFUL_GearTrain_IHasPowerLoad_VM_Managed_DAFUL_GearTrain_GearPair___System_Double__System_Boolean__"></a> CalculateReductionRatio\(IHasPowerLoad, IHasPowerLoad, GearPair\[\], ref double, ref bool\)

Calculates the reduction ratio.

```csharp
public static double CalculateReductionRatio(IHasPowerLoad inputSS, IHasPowerLoad outputSS, GearPair[] arGearPair, ref double dSign, ref bool ContainsPlanetary)
```

#### Parameters

`inputSS` [IHasPowerLoad](VM.Managed.DAFUL.GearTrain.IHasPowerLoad.md)

The input ss.

`outputSS` [IHasPowerLoad](VM.Managed.DAFUL.GearTrain.IHasPowerLoad.md)

The output ss.

`arGearPair` [GearPair](VM.Managed.DAFUL.GearTrain.GearPair.md)\[\]

The ar gear pair.

`dSign` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d sign.

`ContainsPlanetary` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

ContainsPlanetary

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow_CalculateTorque_System_Double_System_Double_System_Double_System_Double___System_Double___System_Double___System_Double_System_Double_"></a> CalculateTorque\(double, double, double, double\[\], double\[\], double\[\], double, double\)

Calculates the torque.

```csharp
public static List<double[]> CalculateTorque(double dSplit, double dEfficiency, double dSign, double[] arInputSpeed, double[] arInputPower, double[] arTime, double dReductionRatio, double dMaxTorque)
```

#### Parameters

`dSplit` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d split.

`dEfficiency` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d efficiency.

`dSign` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d sign.

`arInputSpeed` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The ar output speed.

`arInputPower` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The ar input power.

`arTime` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The ar time.

`dReductionRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

The reduction ratio.

`dMaxTorque` [double](https://learn.microsoft.com/dotnet/api/system.double)

The Max Torque.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow_CalculateTorqueForUserInput_System_String_System_Double_"></a> CalculateTorqueForUserInput\(string, double\)

Calculates the torque for user input.

```csharp
public static List<double[]> CalculateTorqueForUserInput(string strTorquePath, double dSign)
```

#### Parameters

`strTorquePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string torque path.

`dSign` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d sign.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow_IsNumeric_System_String___"></a> IsNumeric\(string\[\]\)

Determines whether the specified number string is numeric.

```csharp
protected static bool IsNumeric(string[] numStr)
```

#### Parameters

`numStr` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The number string.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow_IsNumeric_System_String_"></a> IsNumeric\(string\)

Determines whether the specified number string is numeric.

```csharp
protected static bool IsNumeric(string numStr)
```

#### Parameters

`numStr` [string](https://learn.microsoft.com/dotnet/api/system.string)

The number string.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="VM_Managed_DAFUL_GearTrain_CalculatePowerFlow_LoadPointDataFile_System_String_"></a> LoadPointDataFile\(string\)

Loads the point data file.

```csharp
public static List<double[]> LoadPointDataFile(string strFilePath)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string file path.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

