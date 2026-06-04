#  Class Configuration

Namespace: [VM.Managed.Simulation](VM.Managed.Simulation.md)  
Assembly: VMDFBase.dll  

This class is to represent the simulation configuration.

```csharp
public class Configuration : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IEnableManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Configuration](VM.Managed.Simulation.Configuration.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable, 
IEnableManager

#### Inherited Members

LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
LinkableBase.OnDeserialization\(object\), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Simulation_Configuration__ctor"></a> Configuration\(\)

Initializes a new instance of the <xref href="VM.Managed.Simulation.Configuration" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Configuration()
```

## Properties

### <a id="VM_Managed_Simulation_Configuration_AccuracyOfGMS"></a> AccuracyOfGMS

Gets or sets the accuracy of GMS

```csharp
public int AccuracyOfGMS { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Simulation_Configuration_AppendedDateTime"></a> AppendedDateTime

Gets or sets a value indicating whether [append date time].

```csharp
public bool AppendedDateTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_Attributes"></a> Attributes

Gets or sets the attributes

```csharp
public AttributeCollection Attributes { get; set; }
```

#### Property Value

 AttributeCollection

### <a id="VM_Managed_Simulation_Configuration_BodyOrientationType"></a> BodyOrientationType

Gets or sets the type of the body orientation.

```csharp
public Configuration.BodyOrientation BodyOrientationType { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[BodyOrientation](VM.Managed.Simulation.Configuration.BodyOrientation.md)

### <a id="VM_Managed_Simulation_Configuration_CheckedLevelArray"></a> CheckedLevelArray

Gets or sets the checked level.

```csharp
public bool[] CheckedLevelArray { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

### <a id="VM_Managed_Simulation_Configuration_ConfigName"></a> ConfigName

Gets or sets the name.

```csharp
public string ConfigName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Simulation_Configuration_CriterionVal"></a> CriterionVal

Gets or sets the criterion value.

```csharp
public double[] CriterionVal { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_Simulation_Configuration_DisableEntities"></a> DisableEntities

Gets the disable container.

```csharp
public ObjectBase[] DisableEntities { get; }
```

#### Property Value

 ObjectBase\[\]

### <a id="VM_Managed_Simulation_Configuration_EigenvalueOutputStep"></a> EigenvalueOutputStep

Gets or sets the eigen value output step.

```csharp
public int EigenvalueOutputStep { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Simulation_Configuration_ExportICFFilePath"></a> ExportICFFilePath

Gets or sets the export ICF path.

```csharp
public string ExportICFFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Simulation_Configuration_ExtraConfigs"></a> ExtraConfigs

Gets or sets the extra configuration.

```csharp
public ConfigurationExtraCollection ExtraConfigs { get; set; }
```

#### Property Value

 [ConfigurationExtraCollection](VM.Managed.Simulation.ConfigurationExtraCollection.md)

### <a id="VM_Managed_Simulation_Configuration_FlexibleBodyLevelForSuperSolver"></a> FlexibleBodyLevelForSuperSolver

Gets or sets the level of flexible body for super solver.

```csharp
public int FlexibleBodyLevelForSuperSolver { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Simulation_Configuration_GINFPath"></a> GINFPath

Gets or sets the GINF file path.

```csharp
public string GINFPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Simulation_Configuration_HighSpeedRotationOption"></a> HighSpeedRotationOption

```csharp
public HighSpeedRotationOption HighSpeedRotationOption { get; set; }
```

#### Property Value

 [HighSpeedRotationOption](VM.Managed.DAFUL.HighSpeedRotationOption.md)

### <a id="VM_Managed_Simulation_Configuration_ImportICFFilePath"></a> ImportICFFilePath

Gets or sets the import ICF path.

```csharp
public string ImportICFFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Simulation_Configuration_IsIncludeEigenvalue"></a> IsIncludeEigenvalue

Gets or sets a value indicating whether [include eigenvalue].

```csharp
public bool IsIncludeEigenvalue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_IsIncludeStatic"></a> IsIncludeStatic

Gets or sets a value indicating whether [include static].

```csharp
public bool IsIncludeStatic { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_IsIncludeThermal"></a> IsIncludeThermal

Gets or sets a value indicating whether [include thermal].

```csharp
public bool IsIncludeThermal { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_IsUseLocalRefinement"></a> IsUseLocalRefinement

Gets or sets a value indicating whether [use local refinement].

```csharp
public bool IsUseLocalRefinement { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_JacobianOption"></a> JacobianOption

Gets or sets the jacobian eval option.

```csharp
public Configuration.LinearProblem JacobianOption { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[LinearProblem](VM.Managed.Simulation.Configuration.LinearProblem.md)

### <a id="VM_Managed_Simulation_Configuration_LevelOfGeometryPrecision"></a> LevelOfGeometryPrecision

Gets or sets the geometry precision level.

```csharp
public int LevelOfGeometryPrecision { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Simulation_Configuration_MeshFreeAnalysisLevelGroup"></a> MeshFreeAnalysisLevelGroup

Gets or sets analysis level group for MeshFree

```csharp
[Obsolete]
public MeshFreeAnalysisLevelGroup MeshFreeAnalysisLevelGroup { get; set; }
```

#### Property Value

 MeshFreeAnalysisLevelGroup

### <a id="VM_Managed_Simulation_Configuration_MotionStepForPositionAnaly"></a> MotionStepForPositionAnaly

```csharp
public uint MotionStepForPositionAnaly { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_Simulation_Configuration_NodalOutputEntities"></a> NodalOutputEntities

Gets the nodal output container.

```csharp
public ObjectBase[] NodalOutputEntities { get; }
```

#### Property Value

 ObjectBase\[\]

### <a id="VM_Managed_Simulation_Configuration_NumberOfCore"></a> NumberOfCore

Gets or sets the number of core.

```csharp
public uint NumberOfCore { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_Simulation_Configuration_ParameterOfDynamicAnalysis"></a> ParameterOfDynamicAnalysis

Gets or sets the dynamic analysis parameter.

```csharp
public AnalysisParameterDynamic ParameterOfDynamicAnalysis { get; set; }
```

#### Property Value

 AnalysisParameterDynamic

### <a id="VM_Managed_Simulation_Configuration_ParameterOfEigenvalueAnalysis"></a> ParameterOfEigenvalueAnalysis

Gets or sets the eigenvalue analysis parameter.

```csharp
public AnalysisParameterEigenvalue ParameterOfEigenvalueAnalysis { get; set; }
```

#### Property Value

 AnalysisParameterEigenvalue

### <a id="VM_Managed_Simulation_Configuration_ParameterOfStaticAnalysis"></a> ParameterOfStaticAnalysis

Gets or sets the static analysis parameter.

```csharp
public AnalysisParameterStatic ParameterOfStaticAnalysis { get; set; }
```

#### Property Value

 AnalysisParameterStatic

### <a id="VM_Managed_Simulation_Configuration_ParameterOfThermalAnalysis"></a> ParameterOfThermalAnalysis

Gets or sets the thermal analysis parameter.

```csharp
public AnalysisParameterThermal ParameterOfThermalAnalysis { get; set; }
```

#### Property Value

 AnalysisParameterThermal

### <a id="VM_Managed_Simulation_Configuration_PlasticMaterialStrain"></a> PlasticMaterialStrain

```csharp
public PlasticMaterialStrain PlasticMaterialStrain { get; set; }
```

#### Property Value

 [PlasticMaterialStrain](VM.Managed.DAFUL.PlasticMaterialStrain.md)

### <a id="VM_Managed_Simulation_Configuration_PreventShearLocking"></a> PreventShearLocking

```csharp
public bool PreventShearLocking { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_RecordOfResult"></a> RecordOfResult

Gets or sets the result record.

```csharp
public Configuration.ResultRecord RecordOfResult { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[ResultRecord](VM.Managed.Simulation.Configuration.ResultRecord.md)

### <a id="VM_Managed_Simulation_Configuration_RecordOfStressStrainType"></a> RecordOfStressStrainType

Gets or sets the type of the stress/strain record.

```csharp
public Configuration.RecordOfStressStrain RecordOfStressStrainType { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[RecordOfStressStrain](VM.Managed.Simulation.Configuration.RecordOfStressStrain.md)

### <a id="VM_Managed_Simulation_Configuration_ResultFilePath"></a> ResultFilePath

Gets or sets the result path.

```csharp
public string ResultFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Simulation_Configuration_ShowHideAdvancedOption"></a> ShowHideAdvancedOption

Gets or sets a value indicating whether [show advanced option].

```csharp
public bool ShowHideAdvancedOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_SimulationParam"></a> SimulationParam

Gets or sets the simulation parameter.

```csharp
public SimulationParameter SimulationParam { get; set; }
```

#### Property Value

 SimulationParameter

### <a id="VM_Managed_Simulation_Configuration_SimulationStepForPLT"></a> SimulationStepForPLT

Gets or sets the simulation step of plt.

```csharp
public uint SimulationStepForPLT { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_Simulation_Configuration_StepOfDynamicSimulation"></a> StepOfDynamicSimulation

Gets or sets the dynamic simulation step.

```csharp
public uint StepOfDynamicSimulation { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_Simulation_Configuration_StepOfStaticSimulation"></a> StepOfStaticSimulation

Gets or sets the static simulation step.

```csharp
public uint StepOfStaticSimulation { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_Simulation_Configuration_StressStrainReport"></a> StressStrainReport

```csharp
public StressStrainReport StressStrainReport { get; set; }
```

#### Property Value

 [StressStrainReport](VM.Managed.DAFUL.StressStrainReport.md)

### <a id="VM_Managed_Simulation_Configuration_SubTypeOfCriterion"></a> SubTypeOfCriterion

Gets or sets the type of the criterion sub.

```csharp
public Configuration.CriterionSub SubTypeOfCriterion { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[CriterionSub](VM.Managed.Simulation.Configuration.CriterionSub.md)

### <a id="VM_Managed_Simulation_Configuration_SynchronizeMaxStepSize"></a> SynchronizeMaxStepSize

Gets or sets a value indicating whether [synchronize maximum step size].

```csharp
public bool SynchronizeMaxStepSize { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_TreatAsModalForEFModalBodyResult"></a> TreatAsModalForEFModalBodyResult

Gets or sets the flag that whether treat as modal for efmodal body result or not.

```csharp
public bool TreatAsModalForEFModalBodyResult { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_TypeOfCriterion"></a> TypeOfCriterion

Gets or sets the type of the criterion.

```csharp
public Configuration.Criterion TypeOfCriterion { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[Criterion](VM.Managed.Simulation.Configuration.Criterion.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfDynamicSkipAnalysis"></a> TypeOfDynamicSkipAnalysis

Gets or sets the type of dynamic skip analysis.

```csharp
public Configuration.SkipAnalysis TypeOfDynamicSkipAnalysis { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[SkipAnalysis](VM.Managed.Simulation.Configuration.SkipAnalysis.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfEigenvalueSkipAnalysis"></a> TypeOfEigenvalueSkipAnalysis

Gets or sets the type of eigenvalue skip analysis.

```csharp
public Configuration.SkipAnalysis TypeOfEigenvalueSkipAnalysis { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[SkipAnalysis](VM.Managed.Simulation.Configuration.SkipAnalysis.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfInitialSkipAnalysis"></a> TypeOfInitialSkipAnalysis

Gets or sets the type of initial skip analysis.

```csharp
public Configuration.SkipAnalysis TypeOfInitialSkipAnalysis { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[SkipAnalysis](VM.Managed.Simulation.Configuration.SkipAnalysis.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfJacobian"></a> TypeOfJacobian

Gets or sets the type of the jacobian.

```csharp
public Configuration.Jacobian TypeOfJacobian { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[Jacobian](VM.Managed.Simulation.Configuration.Jacobian.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfLinearSolver"></a> TypeOfLinearSolver

Gets or sets the type of the linear solver.

```csharp
public Configuration.LinearSolver TypeOfLinearSolver { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[LinearSolver](VM.Managed.Simulation.Configuration.LinearSolver.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfMemoryOptimization"></a> TypeOfMemoryOptimization

Gets or sets the type of the memory optimization.

```csharp
public Configuration.MemoryOptimization TypeOfMemoryOptimization { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[MemoryOptimization](VM.Managed.Simulation.Configuration.MemoryOptimization.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfMeshDataForOutput"></a> TypeOfMeshDataForOutput

Gets or sets the type of the mesh data for output.

```csharp
public Configuration.MeshDataForOutput TypeOfMeshDataForOutput { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[MeshDataForOutput](VM.Managed.Simulation.Configuration.MeshDataForOutput.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfNodalCoordinate"></a> TypeOfNodalCoordinate

Gets or sets the type of the nodal coordinate.

```csharp
public Configuration.NodalCoordinate TypeOfNodalCoordinate { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[NodalCoordinate](VM.Managed.Simulation.Configuration.NodalCoordinate.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfSimulation"></a> TypeOfSimulation

Gets or sets the type of the simulation.

```csharp
public Configuration.Simulation TypeOfSimulation { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[Simulation](VM.Managed.Simulation.Configuration.Simulation.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfStaticSkipAnalysis"></a> TypeOfStaticSkipAnalysis

Gets or sets the type of static skip analysis.

```csharp
public Configuration.SkipAnalysis TypeOfStaticSkipAnalysis { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[SkipAnalysis](VM.Managed.Simulation.Configuration.SkipAnalysis.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfThermalSkipAnalysis"></a> TypeOfThermalSkipAnalysis

Gets or sets the type of thermal skip analysis.

```csharp
public Configuration.SkipAnalysis TypeOfThermalSkipAnalysis { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[SkipAnalysis](VM.Managed.Simulation.Configuration.SkipAnalysis.md)

### <a id="VM_Managed_Simulation_Configuration_TypeOfTreatmentOfNonContactEntity"></a> TypeOfTreatmentOfNonContactEntity

Gets or sets the type of the Treatment of non-contact entity.

```csharp
public Configuration.TreatmentOfNonContactEntity TypeOfTreatmentOfNonContactEntity { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md).[TreatmentOfNonContactEntity](VM.Managed.Simulation.Configuration.TreatmentOfNonContactEntity.md)

### <a id="VM_Managed_Simulation_Configuration_UseAutoSolverProgressBar"></a> UseAutoSolverProgressBar

Gets or sets a value indicating whether [auto solver progress bar].

```csharp
public bool UseAutoSolverProgressBar { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_UseExportICF"></a> UseExportICF

Gets or sets a value indicating whether this instance is use export ICF.

```csharp
public bool UseExportICF { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_UseImportICF"></a> UseImportICF

Gets or sets a value indicating whether this instance is use import ICF.

```csharp
public bool UseImportICF { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_UseMeshFreeAllBodySettings"></a> UseMeshFreeAllBodySettings

Gets or sets whether use all body settings for MeshFree

```csharp
[Obsolete]
public bool UseMeshFreeAllBodySettings { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_UseMotionStep"></a> UseMotionStep

Gets or sets a value indicating whether this instance is use motion step.

```csharp
public bool UseMotionStep { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_UseOutOfCore"></a> UseOutOfCore

Gets or sets a value indicating whether [out of core].

```csharp
public bool UseOutOfCore { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_UsePLT"></a> UsePLT

Gets or sets a value indicating whether this instance is use the simulation step of plt.

```csharp
public bool UsePLT { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_UseSolvingSpeedOption"></a> UseSolvingSpeedOption

Gets or sets a value indicating whether [solving speed option].

```csharp
public bool UseSolvingSpeedOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Simulation_Configuration_UserTetraFilePath"></a> UserTetraFilePath

Gets or sets the user tetra path.

```csharp
public string UserTetraFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_Simulation_Configuration_AddNodalOutputEntity_VM_Managed_ObjectBase_"></a> AddNodalOutputEntity\(ObjectBase\)

Add new nodal output entity.

```csharp
public void AddNodalOutputEntity(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object.

### <a id="VM_Managed_Simulation_Configuration_AddToolkitSetting_System_String_VM_Managed_DAFUL_ToolKitSettingBase_"></a> AddToolkitSetting\(string, ToolKitSettingBase\)

Adds the toolkit setting.

```csharp
public void AddToolkitSetting(string strName, ToolKitSettingBase setting)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

`setting` [ToolKitSettingBase](VM.Managed.DAFUL.ToolKitSettingBase.md)

The setting.

### <a id="VM_Managed_Simulation_Configuration_AddToolkitSettingValue_System_String_VM_Managed_ObjectBase_"></a> AddToolkitSettingValue\(string, ObjectBase\)

Adds the toolkit setting.

```csharp
public void AddToolkitSettingValue(string strKey, ObjectBase ob)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

key of toolkit.

`ob` ObjectBase

The new toolkit setting.

### <a id="VM_Managed_Simulation_Configuration_ClearNodalOutputEntity"></a> ClearNodalOutputEntity\(\)

Clear nodal output list.

```csharp
public void ClearNodalOutputEntity()
```

### <a id="VM_Managed_Simulation_Configuration_Clone_System_String_"></a> Clone\(string\)

Clones the specified STR name.

```csharp
public virtual Configuration Clone(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

#### Returns

 [Configuration](VM.Managed.Simulation.Configuration.md)

### <a id="VM_Managed_Simulation_Configuration_ContainsToolkitSetting_System_String_"></a> ContainsToolkitSetting\(string\)

Determines whether contains toolkit setting with the specified STR key.

```csharp
public bool ContainsToolkitSetting(string strKey)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

key of toolkit.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if contains toolkit setting with the specified STR key; otherwise, <code>false</code>.

### <a id="VM_Managed_Simulation_Configuration_ContainsToolkitSettingValue_System_String_VM_Managed_ObjectBase_"></a> ContainsToolkitSettingValue\(string, ObjectBase\)

Determines whether contains toolkit setting with the specified toolkit key.

```csharp
public bool ContainsToolkitSettingValue(string strKey, ObjectBase ob)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

key of toolkit.

`ob` ObjectBase

The toolkit setting.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if contains toolkit setting value with the specified toolkit key; otherwise, <code>false</code>.

### <a id="VM_Managed_Simulation_Configuration_DeserializeConfiguration_System_String_"></a> DeserializeConfiguration\(string\)

Deserializes the configuration.

```csharp
public Configuration DeserializeConfiguration(string strReader)
```

#### Parameters

`strReader` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reader.

#### Returns

 [Configuration](VM.Managed.Simulation.Configuration.md)

### <a id="VM_Managed_Simulation_Configuration_GetNewConfigurationList_VM_Managed_DAFUL_DocumentAnalysis_"></a> GetNewConfigurationList\(DocumentAnalysis\)

Gets the new configuration list.

```csharp
public static Configuration[] GetNewConfigurationList(DocumentAnalysis doc)
```

#### Parameters

`doc` [DocumentAnalysis](VM.Managed.DAFUL.DocumentAnalysis.md)

The document.

#### Returns

 [Configuration](VM.Managed.Simulation.Configuration.md)\[\]

configuration list.

### <a id="VM_Managed_Simulation_Configuration_GetToolkitSetting_System_String_"></a> GetToolkitSetting\(string\)

Gets the toolkit setting.

```csharp
public ToolKitSettingBase GetToolkitSetting(string strKey)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

key of toolkit.

#### Returns

 [ToolKitSettingBase](VM.Managed.DAFUL.ToolKitSettingBase.md)

### <a id="VM_Managed_Simulation_Configuration_InitializeConfig_System_String_"></a> InitializeConfig\(string\)

Initializes the config.

```csharp
public void InitializeConfig(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the simulation configuration.

### <a id="VM_Managed_Simulation_Configuration_IsEnabled_VM_Managed_ObjectBase_"></a> IsEnabled\(ObjectBase\)

Determines whether the specified ob is enabled.

```csharp
public bool IsEnabled(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified object is enabled; otherwise, <code>false</code>.

### <a id="VM_Managed_Simulation_Configuration_IsThermalAnalysis"></a> IsThermalAnalysis\(\)

Determines whether is thermal analysis.

```csharp
public bool IsThermalAnalysis()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if this instance is thermal analysis; otherwise, <code>false</code>.

### <a id="VM_Managed_Simulation_Configuration_LinkRemovedFromDocument_System_Object_VM_Managed_RemoveFromDocEventArgs_"></a> LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)

Remove Anlaysis Type in the Analysis Setting to a document.

```csharp
protected override void LinkRemovedFromDocument(object objNotifier, RemoveFromDocEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` RemoveFromDocEventArgs

The <xref href="VM.Managed.AddToDocEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_Simulation_Configuration_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_Simulation_Configuration_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_Simulation_Configuration_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_Simulation_Configuration_PostDeserialize_VM_Managed_Simulation_Configuration_"></a> PostDeserialize\(Configuration\)

Posts the deserialize.

```csharp
public void PostDeserialize(Configuration config)
```

#### Parameters

`config` [Configuration](VM.Managed.Simulation.Configuration.md)

The configuration.

### <a id="VM_Managed_Simulation_Configuration_RemoveToolkitSetting_System_String_"></a> RemoveToolkitSetting\(string\)

Removes the toolkit setting.

```csharp
public void RemoveToolkitSetting(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

### <a id="VM_Managed_Simulation_Configuration_RemoveToolkitSettingValue_System_String_VM_Managed_ObjectBase_"></a> RemoveToolkitSettingValue\(string, ObjectBase\)

Removes the toolkit setting.

```csharp
public void RemoveToolkitSettingValue(string strKey, ObjectBase ob)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

key of toolkit.

`ob` ObjectBase

The toolkit setting to remove.

### <a id="VM_Managed_Simulation_Configuration_ReplaceAnalysisParameter_VM_Managed_Simulation_Configuration_"></a> ReplaceAnalysisParameter\(Configuration\)

Replaces the specified configuration.

```csharp
public void ReplaceAnalysisParameter(Configuration configReplace)
```

#### Parameters

`configReplace` [Configuration](VM.Managed.Simulation.Configuration.md)

The replacing configuration .

### <a id="VM_Managed_Simulation_Configuration_ReplaceToolkitSettingValue_System_String_VM_Managed_ObjectBase_VM_Managed_ObjectBase_"></a> ReplaceToolkitSettingValue\(string, ObjectBase, ObjectBase\)

Replaces the toolkit setting.

```csharp
public void ReplaceToolkitSettingValue(string strKey, ObjectBase obOld, ObjectBase obNew)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

key of toolkit.

`obOld` ObjectBase

The old toolkit setting.

`obNew` ObjectBase

The new toolkit setting.

### <a id="VM_Managed_Simulation_Configuration_SerializeConfiguration"></a> SerializeConfiguration\(\)

Serializes the configuration.

```csharp
public string SerializeConfiguration()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Simulation_Configuration_SetEnable_VM_Managed_ObjectBase_System_Boolean_"></a> SetEnable\(ObjectBase, bool\)

Sets the enable.

```csharp
public void SetEnable(ObjectBase ob, bool bEnabled)
```

#### Parameters

`ob` ObjectBase

The object.

`bEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> enabled.

