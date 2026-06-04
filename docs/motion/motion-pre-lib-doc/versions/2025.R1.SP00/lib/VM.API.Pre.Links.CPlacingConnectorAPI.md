#  Class CPlacingConnectorAPI

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This class implements APIs for chained placing connector.

```csharp
public static class CPlacingConnectorAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CPlacingConnectorAPI](VM.API.Pre.Links.CPlacingConnectorAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Links_CPlacingConnectorAPI_CalculatePinStiffness_System_String_System_String_"></a> CalculatePinStiffness\(string, string\)

Calculate pin stiffness.

```csharp
[ExistFile(new string[] { "pinFilePath" })]
[NotNullOrEmpty(new string[] { "pinName" })]
public static double CalculatePinStiffness(string pinFilePath, string pinName)
```

#### Parameters

`pinFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pin file path.

`pinName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pin name.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The stiffness information that is calculated by this API.

#### Exceptions

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'pinFilePath' file path does not exist.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'pinName' argument is empty.

### <a id="VM_API_Pre_Links_CPlacingConnectorAPI_CalculatePulleyStiffness_System_String_System_String_System_String_"></a> CalculatePulleyStiffness\(string, string, string\)

Calculate pulley stiffness.

```csharp
[ExistFile(new string[] { "pulleyFilePath", "pinFilePath" })]
[NotNullOrEmpty(new string[] { "pulleyName" })]
public static List<double[]> CalculatePulleyStiffness(string pulleyFilePath, string pulleyName, string pinFilePath)
```

#### Parameters

`pulleyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pulley file path.

`pulleyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pulley name.

`pinFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pin file path

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

The stiffness information that is calculated by this API.

#### Exceptions

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'pulleyFilePath' file path does not exist.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'pulleyName' argument is empty.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'pinFilePath' file path does not exist.

### <a id="VM_API_Pre_Links_CPlacingConnectorAPI_CalculateSegmentStiffness_System_String_"></a> CalculateSegmentStiffness\(string\)

Calculate segment stiffness.

```csharp
[ExistFile(new string[] { "segmentFilePath" })]
public static Dictionary<string, VectorBase> CalculateSegmentStiffness(string segmentFilePath)
```

#### Parameters

`segmentFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The segment file path.

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), VectorBase\>

The stiffness information that is calculated by this API.

#### Exceptions

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'segmentFilePath' file path does not exist.

### <a id="VM_API_Pre_Links_CPlacingConnectorAPI_CreateCPlacingConnector_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_String_"></a> CreateCPlacingConnector\(SubSystemDocument, Obj, string\)

Create Chained placing connector <xref href="VM.Managed.DAFUL.CPlacingConnector.CPlacingConnector" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "chainedPlacing" })]
public static Obj CreateCPlacingConnector(this SubSystemDocument document, Obj chainedPlacing, string name = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the Chained placing connector.

`chainedPlacing` Obj

The chained placing.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.CPlacingConnector.Pulley" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'CPlacingConnector_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.CPlacingConnector.Pulley" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'chainedPlacing' are null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if item type of 'chainedPlacing' is not <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_Links_CPlacingConnectorAPI_CreatePin_VM_Managed_DAFUL_Chained_IChainedSegmentInfo_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_"></a> CreatePin\(IChainedSegmentInfo, Obj, Vector, Vector, string\)

Create pin <xref href="VM.Managed.DAFUL.CPlacingConnector.Pin" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "body" })]
[NotZeroMagnitude(new string[] { "direction" })]
public static Obj CreatePin(this IChainedSegmentInfo document, Obj body, Vector position, Vector direction, string name = "")
```

#### Parameters

`document` IChainedSegmentInfo

The document to create the pin.

`body` Obj

The body to create the pin.

`position` Vector

The position to create the pin.

`direction` Vector

The direction to create the pin.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.CPlacingConnector.Pin" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'Pin_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.CPlacingConnector.Pin" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'body' are null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'direction' is 0.

### <a id="VM_API_Pre_Links_CPlacingConnectorAPI_CreatePulley_VM_Managed_DAFUL_Chained_IChainedPathInfo_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_"></a> CreatePulley\(IChainedPathInfo, Obj, Vector, Vector, string\)

Create pulley <xref href="VM.Managed.DAFUL.CPlacingConnector.Pulley" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "body" })]
[NotZeroMagnitude(new string[] { "axisZ" })]
public static Obj CreatePulley(this IChainedPathInfo document, Obj body, Vector position, Vector axisZ, string name = "")
```

#### Parameters

`document` IChainedPathInfo

The document to create the pulley.

`body` Obj

The body to create the pulley.

`position` Vector

The position to create the pulley.

`axisZ` Vector

The z-axis to create the pulley.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.CPlacingConnector.Pulley" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'Pulley_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.CPlacingConnector.Pulley" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'body' are null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'axisZ' is 0.

