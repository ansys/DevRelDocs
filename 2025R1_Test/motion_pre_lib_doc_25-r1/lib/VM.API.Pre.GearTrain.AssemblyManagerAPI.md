#  Class AssemblyManagerAPI

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.GearTrain.AssemblyManager" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class AssemblyManagerAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AssemblyManagerAPI](VM.API.Pre.GearTrain.AssemblyManagerAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_AssemblyManagerAPI_ApplyAssemblyBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_GearTrain_BearingInformationInAssemblyManager__System_Collections_Generic_IEnumerable_VM_API_Pre_GearTrain_CycloidPinInformationInAssemblyManager__"></a> ApplyAssemblyBearing\(GearTrainDocument, Obj, IEnumerable<BearingInformationInAssemblyManager\>, IEnumerable<CycloidPinInformationInAssemblyManager\>\)

Apply assembly bearing.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "referenceBody" })]
[MatchTypeObj(new object[] { "referenceBody", typeof(IConnectable) })]
public static void ApplyAssemblyBearing(this GearTrainDocument document, Obj referenceBody, IEnumerable<BearingInformationInAssemblyManager> bearingInfo = null, IEnumerable<CycloidPinInformationInAssemblyManager> cycloidPinInfo = null)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for assembly bearing apply. If null, the active document will be used.

`referenceBody` Obj

The reference body. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`bearingInfo` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[BearingInformationInAssemblyManager](VM.API.Pre.GearTrain.BearingInformationInAssemblyManager.md)\>

The bearing information. If it is not given, default values will be used..

`cycloidPinInfo` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[CycloidPinInformationInAssemblyManager](VM.API.Pre.GearTrain.CycloidPinInformationInAssemblyManager.md)\>

The cycloid information. If it is not given, default values will be used..

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'referenceBody' arguments are empty.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'referenceBody' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_AssemblyManagerAPI_ApplyAssemblyIOShaft_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_VM_Vector_System_Collections_Generic_IEnumerable_VM_API_Pre_GearTrain_ShaftInformationInAssemblyManager__System_Collections_Generic_IEnumerable_VM_API_Pre_GearTrain_ShaftInformationInAssemblyManager__"></a> ApplyAssemblyIOShaft\(GearTrainDocument, Obj, Vector, IEnumerable<ShaftInformationInAssemblyManager\>, IEnumerable<ShaftInformationInAssemblyManager\>\)

Apply assembly IO shaft.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "referenceBody" })]
[NotZeroMagnitude(new string[] { "referenceVector" })]
[MatchTypeObj(new object[] { "referenceBody", typeof(IConnectable) })]
public static void ApplyAssemblyIOShaft(this GearTrainDocument document, Obj referenceBody, Vector referenceVector, IEnumerable<ShaftInformationInAssemblyManager> inputInfo = null, IEnumerable<ShaftInformationInAssemblyManager> outputInfo = null)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for assembly IO shaft apply. If null, the active document will be used.

`referenceBody` Obj

The reference body. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`referenceVector` Vector

The reference vector.

`inputInfo` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ShaftInformationInAssemblyManager](VM.API.Pre.GearTrain.ShaftInformationInAssemblyManager.md)\>

The input information. If it is not given, default values will be used.

`outputInfo` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ShaftInformationInAssemblyManager](VM.API.Pre.GearTrain.ShaftInformationInAssemblyManager.md)\>

The output information. If it is not given, default values will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'referenceBody' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'referenceVector' is 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'referenceBody' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'inputInfo' is not (<xref href="VM.Managed.DAFUL.GearTrain.IPowerLoad" data-throw-if-not-resolved="false"></xref>, <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>).

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'outputInfo' is not (<xref href="VM.Managed.DAFUL.GearTrain.IPowerLoad" data-throw-if-not-resolved="false"></xref>, <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>).

### <a id="VM_API_Pre_GearTrain_AssemblyManagerAPI_ApplyPowerFlow_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_Nullable_VM_API_Pre_GearTrain_PowerFlowParameters__"></a> ApplyPowerFlow\(GearTrainDocument, PowerFlowParameters?\)

Apply power flow.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplyPowerFlow(this GearTrainDocument document, PowerFlowParameters? powerFlowParameters = null)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for power apply. If null, the active document will be used.

`powerFlowParameters` [PowerFlowParameters](VM.API.Pre.GearTrain.PowerFlowParameters.md)?

The power flow parameters. If it is not given, default values will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'powerFlow' arguments are empty.

### <a id="VM_API_Pre_GearTrain_AssemblyManagerAPI_ApplyRequest_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_Collections_Generic_IEnumerable_System_Boolean__System_Nullable_VM_API_Pre_GearTrain_RequestParameters__"></a> ApplyRequest\(GearTrainDocument, IEnumerable<bool\>, RequestParameters?\)

Apply request.

```csharp
[NotNull(new string[] { "document" })]
public static void ApplyRequest(this GearTrainDocument document, IEnumerable<bool> gearsetForceDisplay, RequestParameters? requestParameters = null)
```

#### Parameters

`document` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for request apply. If null, the active document will be used.

`gearsetForceDisplay` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

The flags whether using force display of gearset.

`requestParameters` [RequestParameters](VM.API.Pre.GearTrain.RequestParameters.md)?

The request parameters. If it is not given, default values will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'request' arguments are empty.

### <a id="VM_API_Pre_GearTrain_AssemblyManagerAPI_SimulateInAssemblyManager_VM_Managed_DAFUL_GearTrain_GearTrainDocument_"></a> SimulateInAssemblyManager\(GearTrainDocument\)

Simulate in assembly manager.

```csharp
[NotNull(new string[] { "doc" })]
public static void SimulateInAssemblyManager(this GearTrainDocument doc)
```

#### Parameters

`doc` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

### <a id="VM_API_Pre_GearTrain_AssemblyManagerAPI_UpdateAssemblyManager_VM_Managed_DAFUL_GearTrain_GearTrainDocument_"></a> UpdateAssemblyManager\(GearTrainDocument\)

Update assembly manager.

```csharp
[NotNull(new string[] { "doc" })]
public static void UpdateAssemblyManager(this GearTrainDocument doc)
```

#### Parameters

`doc` GearTrainDocument

The <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> for assembly manager update. If null, the active document will be used.

