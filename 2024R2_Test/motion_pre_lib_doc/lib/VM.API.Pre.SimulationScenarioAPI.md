# Class SimulationScenarioAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for scenario class.

```csharp
public static class SimulationScenarioAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SimulationScenarioAPI](VM.API.Pre.SimulationScenarioAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreateSimulationScenarioForActivate\(SubSystemDocument, Obj, ExpressionValueVariable?, string, Sensor, Obj?, Sign, ScenarioActivateType, Motion\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static Obj CreateSimulationScenarioForActivate(this SubSystemDocument document, Obj target, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual, ScenarioActivateType eventType = ScenarioActivateType.Activate, Scenario.Motion subTarget = Motion.None)
```

#### Parameters

`document` SubSystemDocument

The document to create the simulation scenario.

`target` [Obj](VM.API.Pre.Obj.md)

The enable target of the simulation scenario.

`referenceValue` ExpressionValueVariable?

The value of the simulation scenario.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the simulation scenario.

`sensorType` Scenario.Sensor

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` Scenario.Sign

The sign type of the simulation scenario.

`eventType` [ScenarioActivateType](VM.API.Pre.ScenarioActivateType.md)

The action type of the simulation scenario.

`subTarget` Scenario.Motion

The sub target of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'target' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'target' is not <xref href="VM.Managed.IEnableForSimulationScenario" data-throw-if-not-resolved="false"></xref>.

### CreateSimulationScenarioForBody\(SubSystemDocument, Obj, ExpressionValueVariable?, string, Sensor, Obj?, Sign, ScenarioBodyType\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "target" })]
public static Obj CreateSimulationScenarioForBody(this SubSystemDocument document, Obj target, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual, ScenarioBodyType eventType = ScenarioBodyType.SetToRigidBody)
```

#### Parameters

`document` SubSystemDocument

The document to create the simulation scenario.

`target` [Obj](VM.API.Pre.Obj.md)

The enable target of the simulation scenario.

`referenceValue` ExpressionValueVariable?

The value of the simulation scenario.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the simulation scenario.

`sensorType` Scenario.Sensor

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` Scenario.Sign

The sign type of the simulation scenario.

`eventType` [ScenarioBodyType](VM.API.Pre.ScenarioBodyType.md)

The action type of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'target' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'target' is not <xref href="VM.Managed.DAFUL.IBodyAnalysisType" data-throw-if-not-resolved="false"></xref> or if the type of target's analysisType is not <xref href="VM.Managed.DAFUL.BodyAnalysisType.Rigid" data-throw-if-not-resolved="false"></xref>.

### CreateSimulationScenarioForFile\(SubSystemDocument, string, ExpressionValueVariable?, string, Sensor, Obj?, Sign, ScenarioFileType\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "targetFilePath" })]
public static Obj CreateSimulationScenarioForFile(this SubSystemDocument document, string targetFilePath, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual, ScenarioFileType eventType = ScenarioFileType.ExportIcfFile)
```

#### Parameters

`document` SubSystemDocument

The document to create the simulation scenario.

`targetFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ICF file path of the simulation scenario.

`referenceValue` ExpressionValueVariable?

The value of the simulation scenario.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the simulation scenario.

`sensorType` Scenario.Sensor

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` Scenario.Sign

The sign type of the simulation scenario.

`eventType` [ScenarioFileType](VM.API.Pre.ScenarioFileType.md)

The action type of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### CreateSimulationScenarioForOutput\(SubSystemDocument, ExpressionValueVariable?, ExpressionValueVariable?, string, Sensor, Obj?, Sign, ScenarioOutputType\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSimulationScenarioForOutput(this SubSystemDocument document, ExpressionValueVariable? target = null, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual, ScenarioOutputType eventType = ScenarioOutputType.SetMaximumStepsize)
```

#### Parameters

`document` SubSystemDocument

The document to create the simulation scenario.

`target` ExpressionValueVariable?

The action value of the simulation scenario.

`referenceValue` ExpressionValueVariable?

The value of the simulation scenario.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the simulation scenario.

`sensorType` Scenario.Sensor

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` Scenario.Sign

The sign type of the simulation scenario.

`eventType` [ScenarioOutputType](VM.API.Pre.ScenarioOutputType.md)

The action type of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### CreateSimulationScenarioForStop\(SubSystemDocument, ExpressionValueVariable?, string, Sensor, Obj?, Sign\)

Create <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSimulationScenarioForStop(this SubSystemDocument document, ExpressionValueVariable? referenceValue = null, string name = "", Scenario.Sensor sensorType = Sensor.Time, Obj? function = null, Scenario.Sign sign = Sign.GreaterAndEqual)
```

#### Parameters

`document` SubSystemDocument

The document to create the simulation scenario.

`referenceValue` ExpressionValueVariable?

The value of the simulation scenario.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the simulation scenario.

`sensorType` Scenario.Sensor

The sensor type of the simulation scenario.

`function` [Obj](VM.API.Pre.Obj.md)?

The function of the simulation scenario.

`sign` Scenario.Sign

The sign type of the simulation scenario.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.Simulation.Scenario" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'function' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.


