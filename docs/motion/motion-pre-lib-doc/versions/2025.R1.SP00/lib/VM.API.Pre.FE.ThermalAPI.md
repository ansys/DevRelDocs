#  Class ThermalAPI

Namespace: [VM.API.Pre.FE](VM.API.Pre.FE.md)  
Assembly: VM.API.Pre.FE.dll  

This class implements APIs for BoundaryCondition class.

```csharp
public static class ThermalAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ThermalAPI](VM.API.Pre.FE.ThermalAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_FE_ThermalAPI_CreateConvectionWithFunction_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_Thermal_ConvectionCoefficientUnit_ConvectionCoefficient_VM_Managed_DAFUL_Thermal_TemperatureUnit_Temperature_"></a> CreateConvectionWithFunction\(SubSystemDocument, Obj, string, Obj?, Obj?, ConvectionCoefficient, Temperature\)

Create <xref href="VM.Managed.DAFUL.Thermal.Convection" data-throw-if-not-resolved="false"></xref> with functions.

```csharp
[MatchTypeObj(new object[] { "convectionCoefficientFunction", typeof(Function), "ambientTemperatureFunction", typeof(Function) })]
public static Obj CreateConvectionWithFunction(this SubSystemDocument document, Obj convectionComponent, string convectionName = "", Obj? convectionCoefficientFunction = null, Obj? ambientTemperatureFunction = null, ConvectionCoefficientUnit.ConvectionCoefficient convectionCoefficientUnit = ConvectionCoefficient.WPerm2C, TemperatureUnit.Temperature ambientTemperatureUnit = Temperature.C)
```

#### Parameters

`document` SubSystemDocument

The document to create the convection.

`convectionComponent` Obj

The convection component

`convectionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the convection. If empty, default name starts with 'Convection_' will be generated and used.

`convectionCoefficientFunction` Obj?

The name of the convection coefficient function.

`ambientTemperatureFunction` Obj?

The name of the ambient temperature function.

`convectionCoefficientUnit` ConvectionCoefficientUnit.ConvectionCoefficient

The unit of the convection coefficient.

`ambientTemperatureUnit` TemperatureUnit.Temperature

The unit of the ambient temperature.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.Convection" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'convectionComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'convectionCoefficientFunction' argument is not empty and type of 'convectionCoefficientFunction' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'ambientTemperatureFunction' argument is not empty and type of 'ambientTemperatureFunction' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateConvectionWithUserSubroutine_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateConvectionWithUserSubroutine\(SubSystemDocument, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.Thermal.Convection" data-throw-if-not-resolved="false"></xref> with user-subrooutine.

```csharp
[MatchTypeObj(new object[] { "usub", typeof(UserSubroutine) })]
public static Obj CreateConvectionWithUserSubroutine(this SubSystemDocument document, Obj convectionComponent, Obj usub, string convectionName = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the convection.

`convectionComponent` Obj

The convection component

`usub` Obj

The name of the user-subrooutine.

`convectionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the convection. If empty, default name starts with 'Convection_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.Convection" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'convectionComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'usub' argument is not empty and type of 'usub' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateHeatFlowWithFunction_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_Thermal_HeatFlowUnit_HeatFlow_"></a> CreateHeatFlowWithFunction\(SubSystemDocument, Obj, string, Obj?, HeatFlow\)

Create <xref href="VM.Managed.DAFUL.Thermal.HeatFlow" data-throw-if-not-resolved="false"></xref> with functions.

```csharp
[MatchTypeObj(new object[] { "heatFlowFunction", typeof(Function) })]
public static Obj CreateHeatFlowWithFunction(this SubSystemDocument document, Obj heatFlowComponent, string heatFlowName = "", Obj? heatFlowFunction = null, HeatFlowUnit.HeatFlow heatFlowUnit = HeatFlow.W)
```

#### Parameters

`document` SubSystemDocument

The document to create the heat flow.

`heatFlowComponent` Obj

The heat flow component

`heatFlowName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the heat flow. If empty, default name starts with 'HeatFlow_' will be generated and used.

`heatFlowFunction` Obj?

The name of the heat flow function.

`heatFlowUnit` HeatFlowUnit.HeatFlow

The unit of the heat flow.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.HeatFlow" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'heatFlowComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'heatFlowFunction' argument is not empty and type of 'heatFlowFunction' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateHeatFlowWithUserSubroutine_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateHeatFlowWithUserSubroutine\(SubSystemDocument, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.Thermal.HeatFlow" data-throw-if-not-resolved="false"></xref> with user-subrooutine.

```csharp
[MatchTypeObj(new object[] { "usub", typeof(UserSubroutine) })]
public static Obj CreateHeatFlowWithUserSubroutine(this SubSystemDocument document, Obj heatFlowComponent, Obj usub, string heatFlowName = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the heat flow.

`heatFlowComponent` Obj

The heat flow component

`usub` Obj

The name of the user-subrooutine.

`heatFlowName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the heat flow. If empty, default name starts with 'HeatFlow_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.HeatFlow" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'heatFlowComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'usub' argument is not empty and type of 'usub' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateHeatFluxWithFunction_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_Thermal_HeatFluxUnit_HeatFlux_"></a> CreateHeatFluxWithFunction\(SubSystemDocument, Obj, string, Obj?, HeatFlux\)

Create <xref href="VM.Managed.DAFUL.Thermal.HeatFlux" data-throw-if-not-resolved="false"></xref> with functions.

```csharp
[MatchTypeObj(new object[] { "heatFluxFunction", typeof(Function) })]
public static Obj CreateHeatFluxWithFunction(this SubSystemDocument document, Obj heatFluxComponent, string heatFluxName = "", Obj? heatFluxFunction = null, HeatFluxUnit.HeatFlux heatFluxUnit = HeatFlux.WPermm2)
```

#### Parameters

`document` SubSystemDocument

The document to create the heat flux.

`heatFluxComponent` Obj

The heat flux component

`heatFluxName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the heat flux. If empty, default name starts with 'HeatFlux_' will be generated and used.

`heatFluxFunction` Obj?

The name of the heat flux function.

`heatFluxUnit` HeatFluxUnit.HeatFlux

The unit of the heat flux.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.HeatFlux" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'heatFluxComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'heatFluxFunction' argument is not empty and type of 'heatFluxFunction' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateHeatFluxWithUserSubroutine_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateHeatFluxWithUserSubroutine\(SubSystemDocument, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.Thermal.HeatFlux" data-throw-if-not-resolved="false"></xref> with user-subrooutine.

```csharp
[MatchTypeObj(new object[] { "usub", typeof(UserSubroutine) })]
public static Obj CreateHeatFluxWithUserSubroutine(this SubSystemDocument document, Obj heatFluxComponent, Obj usub, string heatFluxName = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the heat flux.

`heatFluxComponent` Obj

The heat flux component

`usub` Obj

The name of the user-subrooutine.

`heatFluxName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the heat flux. If empty, default name starts with 'HeatFlux_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.HeatFlux" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'heatFluxComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'usub' argument is not empty and type of 'usub' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateHeatGenerationWithFunction_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_Thermal_HeatGenerationUnit_HeatGeneration_"></a> CreateHeatGenerationWithFunction\(SubSystemDocument, Obj, string, Obj?, HeatGeneration\)

Create <xref href="VM.Managed.DAFUL.Thermal.HeatGeneration" data-throw-if-not-resolved="false"></xref> with functions.

```csharp
[MatchTypeObj(new object[] { "heatGenerationFunction", typeof(Function) })]
public static Obj CreateHeatGenerationWithFunction(this SubSystemDocument document, Obj heatGenerationComponent, string heatGenerationName = "", Obj? heatGenerationFunction = null, HeatGenerationUnit.HeatGeneration heatGenerationUnit = HeatGeneration.WPermm3)
```

#### Parameters

`document` SubSystemDocument

The document to create the heat generation.

`heatGenerationComponent` Obj

The heat generation component

`heatGenerationName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the heat generation. If empty, default name starts with 'HeatGeneration_' will be generated and used.

`heatGenerationFunction` Obj?

The name of the heat generation function.

`heatGenerationUnit` HeatGenerationUnit.HeatGeneration

The unit of the heat generation.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.HeatGeneration" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'heatGenerationComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'heatGenerationFunction' argument is not empty and type of 'heatGenerationFunction' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateHeatGenerationWithUserSubroutine_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateHeatGenerationWithUserSubroutine\(SubSystemDocument, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.Thermal.HeatGeneration" data-throw-if-not-resolved="false"></xref> with user-subrooutine.

```csharp
[MatchTypeObj(new object[] { "usub", typeof(UserSubroutine) })]
public static Obj CreateHeatGenerationWithUserSubroutine(this SubSystemDocument document, Obj heatGenerationComponent, Obj usub, string heatGenerationName = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the heat generation.

`heatGenerationComponent` Obj

The heat generation component

`usub` Obj

The name of the user-subrooutine.

`heatGenerationName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the heat generation. If empty, default name starts with 'HeatGeneration_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.HeatGeneration" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'heatGenerationComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'usub' argument is not empty and type of 'usub' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateTemperatureWithDFTHFile_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_VM_Managed_DAFUL_Thermal_TemperatureUnit_Temperature_System_String_"></a> CreateTemperatureWithDFTHFile\(SubSystemDocument, Obj, string, Temperature, string\)

Create <xref href="VM.Managed.DAFUL.Thermal.Temperature" data-throw-if-not-resolved="false"></xref> with .dfth file.

```csharp
[ExistFile(new string[] { "dfthFilePath" })]
public static Obj CreateTemperatureWithDFTHFile(this SubSystemDocument document, Obj temperatureComponent, string dfthFilePath, TemperatureUnit.Temperature temperatureUnit = Temperature.C, string temperatureName = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the temperature.

`temperatureComponent` Obj

The temperature component

`dfthFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The .dfth file path.

`temperatureUnit` TemperatureUnit.Temperature

The unit of the temperature.

`temperatureName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the temperature. If empty, default name starts with 'Temperature_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.Temperature" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'temperatureComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'temperatureFunction' is not <xref href="VM.Managed.DAFUL.FE.NodalBody" data-throw-if-not-resolved="false"></xref>.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if dfthFilePath file is not exist.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateTemperatureWithFunction_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_Thermal_TemperatureUnit_Temperature_"></a> CreateTemperatureWithFunction\(SubSystemDocument, Obj, string, Obj?, Temperature\)

Create <xref href="VM.Managed.DAFUL.Thermal.Temperature" data-throw-if-not-resolved="false"></xref> with functions.

```csharp
[MatchTypeObj(new object[] { "temperatureFunction", typeof(Function) })]
public static Obj CreateTemperatureWithFunction(this SubSystemDocument document, Obj temperatureComponent, string temperatureName = "", Obj? temperatureFunction = null, TemperatureUnit.Temperature temperatureUnit = Temperature.C)
```

#### Parameters

`document` SubSystemDocument

The document to create the temperature.

`temperatureComponent` Obj

The temperature component

`temperatureName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the temperature. If empty, default name starts with 'Temperature_' will be generated and used.

`temperatureFunction` Obj?

The name of the temperature function.

`temperatureUnit` TemperatureUnit.Temperature

The unit of the temperature.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.Temperature" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'temperatureComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'temperatureFunction' is not <xref href="VM.Managed.DAFUL.ITemperatureComponent" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'temperatureFunction' argument is not empty and type of 'temperatureFunction' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateTemperatureWithUserSubroutine_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateTemperatureWithUserSubroutine\(SubSystemDocument, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.Thermal.Temperature" data-throw-if-not-resolved="false"></xref> with user-subrooutine.

```csharp
[MatchTypeObj(new object[] { "usub", typeof(UserSubroutine) })]
public static Obj CreateTemperatureWithUserSubroutine(this SubSystemDocument document, Obj temperatureComponent, Obj usub, string temperatureName = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the temperature.

`temperatureComponent` Obj

The temperature component

`usub` Obj

The name of the user-subrooutine.

`temperatureName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the temperature. If empty, default name starts with 'Temperature_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.Temperature" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'temperatureComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'temperatureFunction' is not <xref href="VM.Managed.DAFUL.ITemperatureComponent" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'usub' argument is not empty and type of 'usub' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateThermalContactWithFunction_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_Thermal_ConvectionCoefficientUnit_ConvectionCoefficient_"></a> CreateThermalContactWithFunction\(SubSystemDocument, Obj, string, Obj?, ConvectionCoefficient\)

Create <xref href="VM.Managed.DAFUL.Thermal.ThermalContact" data-throw-if-not-resolved="false"></xref> with functions.

```csharp
[MatchTypeObj(new object[] { "thermalContactFunction", typeof(Function) })]
public static Obj CreateThermalContactWithFunction(this SubSystemDocument document, Obj thermalContactComponent, string thermalContactName = "", Obj? thermalContactFunction = null, ConvectionCoefficientUnit.ConvectionCoefficient convectionCoefficient = ConvectionCoefficient.WPermm2C)
```

#### Parameters

`document` SubSystemDocument

The document to create the thermal contact.

`thermalContactComponent` Obj

The thermal contact component

`thermalContactName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the thermal contact. If empty, default name starts with 'ThermalContact_' will be generated and used.

`thermalContactFunction` Obj?

The name of the thermal contact function.

`convectionCoefficient` ConvectionCoefficientUnit.ConvectionCoefficient

The unit of the thermal contact conductance coefficient.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.ThermalContact" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'thermalContactComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'thermalContactFunction' argument is not empty and type of 'thermalContactFunction' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_FE_ThermalAPI_CreateThermalContactWithUserSubroutine_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateThermalContactWithUserSubroutine\(SubSystemDocument, Obj, Obj, string\)

Create <xref href="VM.Managed.DAFUL.Thermal.ThermalContact" data-throw-if-not-resolved="false"></xref> with user-subrooutine.

```csharp
[MatchTypeObj(new object[] { "usub", typeof(UserSubroutine) })]
public static Obj CreateThermalContactWithUserSubroutine(this SubSystemDocument document, Obj thermalContactComponent, Obj usub, string thermalContactName = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the thermal contact.

`thermalContactComponent` Obj

The thermal contact component

`usub` Obj

The name of the user-subrooutine.

`thermalContactName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the thermal contact. If empty, default name starts with 'ThermalContact_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Thermal.ThermalContact" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'thermalContactComponent' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'usub' argument is not empty and type of 'usub' is not <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

