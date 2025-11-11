# Class SimulationScenarioAPI
<a id="VM_API_Pre_SimulationScenarioAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for scenario class.

```csharp
public static class SimulationScenarioAPI
```

#### Inheritance

object ← 
[SimulationScenarioAPI](VM.API.Pre.SimulationScenarioAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_SimulationScenarioAPI_CreateSimulationScenarioForActivate_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_Simulation_Scenario_Sensor_System_Nullable_VM_API_Pre_Obj__VM_Managed_Simulation_Scenario_Sign_VM_API_Pre_ScenarioActivateType_VM_Managed_Simulation_Scenario_Motion_"></a> CreateSimulationScenarioForActivate\(SubSystemDocument, Obj, ExpressionValueVariable?, string, Sensor, Obj?, Sign, ScenarioActivateType, Motion\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static Obj CreateSimulationScenarioForActivate(this SubSystemDocument document, Obj target, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual, ScenarioActivateType eventType = ScenarioActivateType.Activate, Scenario.Motion subTarget = Motion.None)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the simulation scenario.

`target` [Obj](VM.API.Pre.Obj.md)

The enable target of the simulation scenario.

`referenceValue` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The value of the simulation scenario.

`name` string

The name of the simulation scenario.

`sensorType` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sensor](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sign](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sign type of the simulation scenario.

`eventType` [ScenarioActivateType](VM.API.Pre.ScenarioActivateType.md)

The action type of the simulation scenario.

`subTarget` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Motion](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sub target of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'target' is null.

 ArgumentException

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if the type of 'target' is not <xref href="VM.Managed.IEnableForSimulationScenario" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_SimulationScenarioAPI_CreateSimulationScenarioForBody_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_Simulation_Scenario_Sensor_System_Nullable_VM_API_Pre_Obj__VM_Managed_Simulation_Scenario_Sign_VM_API_Pre_ScenarioBodyType_"></a> CreateSimulationScenarioForBody\(SubSystemDocument, Obj, ExpressionValueVariable?, string, Sensor, Obj?, Sign, ScenarioBodyType\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static Obj CreateSimulationScenarioForBody(this SubSystemDocument document, Obj target, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual, ScenarioBodyType eventType = ScenarioBodyType.SetToRigidBody)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the simulation scenario.

`target` [Obj](VM.API.Pre.Obj.md)

The enable target of the simulation scenario.

`referenceValue` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The value of the simulation scenario.

`name` string

The name of the simulation scenario.

`sensorType` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sensor](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sign](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sign type of the simulation scenario.

`eventType` [ScenarioBodyType](VM.API.Pre.ScenarioBodyType.md)

The action type of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'target' is null.

 ArgumentException

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if the type of 'target' is not <xref href="VM.Managed.DAFUL.IBodyAnalysisType" data-throw-if-not-resolved="false"></xref> or if the type of target's analysisType is not <xref href="VM.Managed.DAFUL.BodyAnalysisType.Rigid" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_SimulationScenarioAPI_CreateSimulationScenarioForFile_VM_Managed_DAFUL_SubSystemDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_Simulation_Scenario_Sensor_System_Nullable_VM_API_Pre_Obj__VM_Managed_Simulation_Scenario_Sign_VM_API_Pre_ScenarioFileType_"></a> CreateSimulationScenarioForFile\(SubSystemDocument, string, ExpressionValueVariable?, string, Sensor, Obj?, Sign, ScenarioFileType\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "targetFilePath" })]
public static Obj CreateSimulationScenarioForFile(this SubSystemDocument document, string targetFilePath, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual, ScenarioFileType eventType = ScenarioFileType.ExportIcfFile)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the simulation scenario.

`targetFilePath` string

The ICF file path of the simulation scenario.

`referenceValue` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The value of the simulation scenario.

`name` string

The name of the simulation scenario.

`sensorType` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sensor](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sign](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sign type of the simulation scenario.

`eventType` [ScenarioFileType](VM.API.Pre.ScenarioFileType.md)

The action type of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

 ArgumentException

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_SimulationScenarioAPI_CreateSimulationScenarioForOutput_VM_Managed_DAFUL_SubSystemDocument_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_Simulation_Scenario_Sensor_System_Nullable_VM_API_Pre_Obj__VM_Managed_Simulation_Scenario_Sign_VM_API_Pre_ScenarioOutputType_"></a> CreateSimulationScenarioForOutput\(SubSystemDocument, ExpressionValueVariable?, ExpressionValueVariable?, string, Sensor, Obj?, Sign, ScenarioOutputType\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSimulationScenarioForOutput(this SubSystemDocument document, ExpressionValueVariable? target = null, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual, ScenarioOutputType eventType = ScenarioOutputType.SetMaximumStepsize)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the simulation scenario.

`target` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The action value of the simulation scenario.

`referenceValue` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The value of the simulation scenario.

`name` string

The name of the simulation scenario.

`sensorType` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sensor](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sign](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sign type of the simulation scenario.

`eventType` [ScenarioOutputType](VM.API.Pre.ScenarioOutputType.md)

The action type of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

 ArgumentException

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_SimulationScenarioAPI_CreateSimulationScenarioForStop_VM_Managed_DAFUL_SubSystemDocument_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_Simulation_Scenario_Sensor_System_Nullable_VM_API_Pre_Obj__VM_Managed_Simulation_Scenario_Sign_"></a> CreateSimulationScenarioForStop\(SubSystemDocument, ExpressionValueVariable?, string, Sensor, Obj?, Sign\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSimulationScenarioForStop(this SubSystemDocument document, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the simulation scenario.

`referenceValue` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The value of the simulation scenario.

`name` string

The name of the simulation scenario.

`sensorType` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sensor](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sign](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sign type of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

 ArgumentException

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

