# Class AnalysisParallelTravel
<a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The parallel travel analysis class

```csharp
public class AnalysisParallelTravel : SuspensionAnalysisBase
```

#### Inheritance

object ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[SuspensionAnalysisBase](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md) ← 
[AnalysisParallelTravel](VM.Managed.DAFUL.Car.AnalysisParallelTravel.md)

#### Derived

[AnalysisOppositeTravel](VM.Managed.DAFUL.Car.AnalysisOppositeTravel.md)

#### Inherited Members

[SuspensionAnalysisBase.GetDataForLoadCase\(int, Dictionary<SuspensionLoadCase.Column, double\[\]\>, SuspensionLoadCase.SuspensionMode\)](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_GetDataForLoadCase\_System\_Int32\_System\_Collections\_Generic\_Dictionary\_VM\_Managed\_DAFUL\_Car\_SuspensionLoadCase\_Column\_System\_Double\_\_\_\_VM\_Managed\_DAFUL\_Car\_SuspensionLoadCase\_SuspensionMode\_), 
[SuspensionAnalysisBase.SetDataForLoadCase\(SuspensionLoadCase.SuspensionMode\)](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_SetDataForLoadCase\_VM\_Managed\_DAFUL\_Car\_SuspensionLoadCase\_SuspensionMode\_), 
[SuspensionAnalysisBase.GetXmlData\(XmlWriter\)](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_GetXmlData\_System\_Xml\_XmlWriter\_), 
[SuspensionAnalysisBase.SetXmlData\(XmlReader\)](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_SetXmlData\_System\_Xml\_XmlReader\_), 
[SuspensionAnalysisBase.SteeringFunctionArgument](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_SteeringFunctionArgument), 
[SuspensionAnalysisBase.SteeringInputType](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_SteeringInputType), 
[SuspensionAnalysisBase.VerticalModeForSetup](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_VerticalModeForSetup), 
[SuspensionAnalysisBase.Vertical](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_SuspensionAnalysisBase\_Vertical), 
[AnalysisBase.m\_pLnkContainer](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_m\_pLnkContainer), 
[AnalysisBase.SetModified\(\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_SetModified), 
[AnalysisBase.GetTestRigMotionUSUBArgument\(string\[\]\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetTestRigMotionUSUBArgument\_System\_String\_\_\_), 
[AnalysisBase.GetConvertUnit\(LengthUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Models\_Pre\_LengthUnitType\_), 
[AnalysisBase.GetGravity\(\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetGravity), 
[AnalysisBase.GetConvertUnit\(VelocityUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Managed\_DAFUL\_Car\_Analysis\_VelocityUnitType\_), 
[AnalysisBase.GetConvertUnit\(AccelerationUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Managed\_DAFUL\_Car\_Analysis\_AccelerationUnitType\_), 
[AnalysisBase.IsSim](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_IsSim)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel__ctor"></a> AnalysisParallelTravel\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisParallelTravel" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisParallelTravel()
```

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel__ctor_VM_Models_Pre_ILinkContainer_"></a> AnalysisParallelTravel\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisParallelTravel" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisParallelTravel(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_BumpTravelOfOpposit"></a> BumpTravelOfOpposit

Gets or sets the bump travel.

```csharp
public double BumpTravelOfOpposit { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_ReboundTravelOfOpposit"></a> ReboundTravelOfOpposit

Gets or sets the rebound travel.

```csharp
public double ReboundTravelOfOpposit { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_SteeringFunctionArgument"></a> SteeringFunctionArgument

Gets the steering function argument.

```csharp
public override string SteeringFunctionArgument { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_SteeringPosition"></a> SteeringPosition

Gets or sets the steering input.

```csharp
public double SteeringPosition { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_TravelMotionType"></a> TravelMotionType

Gets or sets the travel motion.

```csharp
public TravelMotionType TravelMotionType { get; set; }
```

#### Property Value

 [TravelMotionType](VM.Managed.DAFUL.Car.Analysis.Suspension.TravelMotionType.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_GetDataForLoadCase_System_Int32_System_Collections_Generic_Dictionary_VM_Managed_DAFUL_Car_SuspensionLoadCase_Column_System_Double____VM_Managed_DAFUL_Car_SuspensionLoadCase_SuspensionMode_"></a> GetDataForLoadCase\(int, Dictionary<Column, double\[\]\>, SuspensionMode\)

Gets the data for load case.

```csharp
public override void GetDataForLoadCase(int nStep, Dictionary<SuspensionLoadCase.Column, double[]> dicCol, SuspensionLoadCase.SuspensionMode mode)
```

#### Parameters

`nStep` int

The step.

`dicCol` Dictionary<[SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[Column](VM.Managed.DAFUL.Car.SuspensionLoadCase.Column.md), double\[\]\>

The column information.

`mode` [SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[SuspensionMode](VM.Managed.DAFUL.Car.SuspensionLoadCase.SuspensionMode.md)

The mode.

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_GetDataForLoadCaseCore_System_Int32_System_Collections_Generic_Dictionary_VM_Managed_DAFUL_Car_SuspensionLoadCase_Column_System_Double____VM_Managed_DAFUL_Car_SuspensionLoadCase_SuspensionMode_"></a> GetDataForLoadCaseCore\(int, Dictionary<Column, double\[\]\>, SuspensionMode\)

Gets the data for load case core.

```csharp
protected virtual void GetDataForLoadCaseCore(int nStep, Dictionary<SuspensionLoadCase.Column, double[]> dicCol, SuspensionLoadCase.SuspensionMode mode)
```

#### Parameters

`nStep` int

The step.

`dicCol` Dictionary<[SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[Column](VM.Managed.DAFUL.Car.SuspensionLoadCase.Column.md), double\[\]\>

The column information.

`mode` [SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[SuspensionMode](VM.Managed.DAFUL.Car.SuspensionLoadCase.SuspensionMode.md)

The mode.

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_GetTestRigMotionUSUBArgument_System_String___"></a> GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` string\[\]

The parameter array.

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_GetXmlData_System_Xml_XmlWriter_"></a> GetXmlData\(XmlWriter\)

Gets the XML data.

```csharp
public override void GetXmlData(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_SetDataForLoadCase_VM_Managed_DAFUL_Car_SuspensionLoadCase_SuspensionMode_"></a> SetDataForLoadCase\(SuspensionMode\)

Sets the data for load case.

```csharp
public override void SetDataForLoadCase(SuspensionLoadCase.SuspensionMode mode)
```

#### Parameters

`mode` [SuspensionLoadCase](VM.Managed.DAFUL.Car.SuspensionLoadCase.md).[SuspensionMode](VM.Managed.DAFUL.Car.SuspensionLoadCase.SuspensionMode.md)

The mode.

### <a id="VM_Managed_DAFUL_Car_AnalysisParallelTravel_SetXmlData_System_Xml_XmlReader_"></a> SetXmlData\(XmlReader\)

Sets the XML data.

```csharp
public override void SetXmlData(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The reader.

