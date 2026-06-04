#  Class CoSimulatorAPI

Namespace: [VM.API.Pre.CoSimulator](VM.API.Pre.CoSimulator.md)  
Assembly: VM.API.Pre.CoSimulator.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.CoSim.Matlab.MFileGen" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class CoSimulatorAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CoSimulatorAPI](VM.API.Pre.CoSimulator.CoSimulatorAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_CoSimulator_CoSimulatorAPI_CreateSInput_VM_Managed_DAFUL_SubSystemDocument_VM_Models_Pre_UnitName_System_String_"></a> CreateSInput\(SubSystemDocument, UnitName, string\)

Create <xref href="VM.Managed.DAFUL.CoSim.SInput" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSInput(this SubSystemDocument document, UnitName unit = UnitName.None, string name = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the scalar input.

`unit` UnitName

The unit of the scalar input.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the scalar input.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.CoSim.SInput" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_CoSimulator_CoSimulatorAPI_CreateSOutput_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_Models_Pre_UnitName_System_String_"></a> CreateSOutput\(SubSystemDocument, Obj, UnitName, string\)

Create <xref href="VM.Managed.DAFUL.CoSim.SOutput" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "formula" })]
[MatchTypeObj(new object[] { "formula", typeof(Function) })]
public static Obj CreateSOutput(this SubSystemDocument document, Obj formula, UnitName unit = UnitName.None, string name = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the scalar output.

`formula` Obj

The formula of the scalar output.

`unit` UnitName

The unit of the scalar output.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the scalar output.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.CoSim.SOutput" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'formula' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'formula' is not <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_CoSimulator_CoSimulatorAPI_ExecuteMatlabProcess_VM_API_Pre_Obj_System_String_System_String_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> ExecuteMatlabProcess\(Obj, string, string, IEnumerable<Obj\>, IEnumerable<Obj\>, string, ExpressionValueVariable?\)

Execute process using <xref href="VM.Managed.DAFUL.CoSim.Matlab.MFileGen" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullObj(new string[] { "fileGen" })]
[NotNullOrEmpty(new string[] { "strFileName", "strFileDir", "strInterfacePath" })]
[MatchTypeObj(new object[] { "fileGen", typeof(MFileGen) })]
public static void ExecuteMatlabProcess(this Obj fileGen, string strFileName, string strFileDir, IEnumerable<Obj> inputs, IEnumerable<Obj> outputs, string strInterfacePath, ExpressionValueVariable? interfaceTimeStep = null)
```

#### Parameters

`fileGen` Obj

The M file generation to excute process.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file name of a matlab file to be generated.

`strFileDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of matlab file to be generated.

`inputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The inputs of the M file generation setting.

`outputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The outputs of the M file generation setting.

`strInterfacePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface folder path of the M file generation setting.

`interfaceTimeStep` ExpressionValueVariable?

The interface time step of the M file generation setting.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'fileGen', 'strFileName' 'strFileDir', 'strInterfacePath' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'fileGen' is not <xref href="VM.Managed.DAFUL.CoSim.Matlab.MFileGen" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'inputs' is not <xref href="VM.Managed.DAFUL.CoSim.SInput" data-throw-if-not-resolved="false"></xref> or if the type of 'output' is not <xref href="VM.Managed.DAFUL.CoSim.SOutput" data-throw-if-not-resolved="false"></xref>.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'interfaceTimeStep' value is equal to or less than 0.

### <a id="VM_API_Pre_CoSimulator_CoSimulatorAPI_ExecuteProcess_VM_API_Pre_Obj_System_String_System_String_System_String_"></a> ExecuteProcess\(Obj, string, string, string\)

Execute process using <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullObj(new string[] { "fileGen" })]
[NotNullOrEmpty(new string[] { "strFileName", "strFileDir", "strInterfacePath" })]
[MatchTypeObj(new object[] { "fileGen", typeof(FileGen) })]
public static void ExecuteProcess(this Obj fileGen, string strFileName, string strFileDir, string strInterfacePath)
```

#### Parameters

`fileGen` Obj

The file generation to excute process.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file name of a fmu file to be generated.

`strFileDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of a fmu file to be generated.

`strInterfacePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface folder path.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'fileGen', 'strFileName', 'strFileDir', 'strInterfacePath' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'fileGen' is not <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_CoSimulator_CoSimulatorAPI_ExportMatlabModel_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_System_String_"></a> ExportMatlabModel\(Obj, IEnumerable<Obj\>, IEnumerable<Obj\>, string, string\)

Export matlab model using <xref href="VM.Managed.DAFUL.CoSim.Matlab.MFileGen" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullObj(new string[] { "fileGen" })]
[NotNullOrEmpty(new string[] { "strFileName", "strFileDir" })]
[MatchTypeObj(new object[] { "fileGen", typeof(MFileGen) })]
public static void ExportMatlabModel(this Obj fileGen, IEnumerable<Obj> inputs, IEnumerable<Obj> outputs, string strFileName, string strFileDir)
```

#### Parameters

`fileGen` Obj

The file generation to export matlab model.

`inputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The inputs of the matlab file generation setting.

`outputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The outputs of the matlab file generation setting.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file name of a matlab file to be generated.

`strFileDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of a matlab file to be generated.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'fileGen', 'strFileName', 'strFileDir' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'fileGen' is not <xref href="VM.Managed.DAFUL.CoSim.Matlab.MFileGen" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_CoSimulator_CoSimulatorAPI_ExportModel_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_System_String_System_String_VM_API_Pre_CoSimulator_FMIVersionType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> ExportModel\(Obj, IEnumerable<Obj\>, IEnumerable<Obj\>, string, string, string, FMIVersionType, ExpressionValueVariable?, string\)

Export model using <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref>..

```csharp
[NotNullObj(new string[] { "fileGen" })]
[NotNullOrEmpty(new string[] { "strFileName", "strFileDir", "strInterfacePath" })]
[MatchTypeObj(new object[] { "fileGen", typeof(FileGen) })]
public static void ExportModel(this Obj fileGen, IEnumerable<Obj> inputs, IEnumerable<Obj> outputs, string strFileName, string strFileDir, string strInterfacePath, FMIVersionType version = FMIVersionType.One, ExpressionValueVariable? interfaceTimeStep = null, string modelDescription = "This is the pendulum models.")
```

#### Parameters

`fileGen` Obj

The file generation to export model.

`inputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The inputs of the file generation setting.

`outputs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The outputs of the file generation setting.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file name of fmu file to be generated.

`strFileDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of files to be generated.

`strInterfacePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface folder path.

`version` [FMIVersionType](VM.API.Pre.CoSimulator.FMIVersionType.md)

The version of the file generation setting.

`interfaceTimeStep` ExpressionValueVariable?

The interface time step of the file generation setting.

`modelDescription` [string](https://learn.microsoft.com/dotnet/api/system.string)

The model description of the file generation setting.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'fileGen', 'strFileName', 'strFileDir', 'strInterfacePath' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'fileGen' is not <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'inputs' is not <xref href="VM.Managed.DAFUL.CoSim.SInput" data-throw-if-not-resolved="false"></xref> or if the type of 'output' is not <xref href="VM.Managed.DAFUL.CoSim.SOutput" data-throw-if-not-resolved="false"></xref>.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'interfaceTimeStep' value is equal to or less than 0.

### <a id="VM_API_Pre_CoSimulator_CoSimulatorAPI_GenerateFile_VM_Managed_DAFUL_SubSystemDocument_System_String_"></a> GenerateFile\(SubSystemDocument, string\)

Create <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj GenerateFile(this SubSystemDocument document, string name = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the file generation setting of FMI version.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the file generation setting of FMI version.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.CoSim.FileGen" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_CoSimulator_CoSimulatorAPI_GenerateMatlabFile_VM_Managed_DAFUL_SubSystemDocument_System_String_"></a> GenerateMatlabFile\(SubSystemDocument, string\)

Create <xref href="VM.Managed.DAFUL.CoSim.Matlab.MFileGen" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj GenerateMatlabFile(this SubSystemDocument document, string name = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the M file generation setting of matlab version.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the M file generation setting of matlab version.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.CoSim.Matlab.MFileGen" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

