#  Class SimulationConfiguration

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the simulation configuration.

```csharp
[Obsolete]
public class SimulationConfiguration : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IEnableManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[SimulationConfiguration](VM.Managed.SimulationConfiguration.md)

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

### <a id="VM_Managed_SimulationConfiguration__ctor"></a> SimulationConfiguration\(\)

Initializes a new instance of the <xref href="VM.Managed.SimulationConfiguration" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SimulationConfiguration()
```

## Properties

### <a id="VM_Managed_SimulationConfiguration_AppendDateTime"></a> AppendDateTime

Gets or sets a value indicating whether [append date time].

```csharp
public bool AppendDateTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_AutoSolverProgressBar"></a> AutoSolverProgressBar

Gets or sets a value indicating whether [auto solver progress bar].

```csharp
public bool AutoSolverProgressBar { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_CheckedLevel"></a> CheckedLevel

Gets or sets the checked level.

```csharp
public bool[] CheckedLevel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

### <a id="VM_Managed_SimulationConfiguration_CriterionSubType"></a> CriterionSubType

Gets or sets the type of the criterion sub.

```csharp
public SimulationConfiguration.CriterionSub CriterionSubType { get; set; }
```

#### Property Value

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md).[CriterionSub](VM.Managed.SimulationConfiguration.CriterionSub.md)

### <a id="VM_Managed_SimulationConfiguration_CriterionType"></a> CriterionType

Gets or sets the type of the criterion.

```csharp
public SimulationConfiguration.Criterion CriterionType { get; set; }
```

#### Property Value

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md).[Criterion](VM.Managed.SimulationConfiguration.Criterion.md)

### <a id="VM_Managed_SimulationConfiguration_CriterionValue"></a> CriterionValue

Gets or sets the criterion value.

```csharp
public double[] CriterionValue { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_SimulationConfiguration_DisableEntities"></a> DisableEntities

Gets the disable entity container.

```csharp
public ObjectBase[] DisableEntities { get; }
```

#### Property Value

 ObjectBase\[\]

### <a id="VM_Managed_SimulationConfiguration_DynamicAnalysisParameter"></a> DynamicAnalysisParameter

Gets or sets the dynamic analysis parameter.

```csharp
public AnalysisParameterDynamic DynamicAnalysisParameter { get; set; }
```

#### Property Value

 [AnalysisParameterDynamic](VM.Managed.AnalysisParameterDynamic.md)

### <a id="VM_Managed_SimulationConfiguration_DynamicSimulationStep"></a> DynamicSimulationStep

Gets or sets the dynamic simulation step.

```csharp
public uint DynamicSimulationStep { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_SimulationConfiguration_EigenvalueAnalysisParameter"></a> EigenvalueAnalysisParameter

Gets or sets the eigenvalue analysis parameter.

```csharp
public AnalysisParameterEigenvalue EigenvalueAnalysisParameter { get; set; }
```

#### Property Value

 [AnalysisParameterEigenvalue](VM.Managed.AnalysisParameterEigenvalue.md)

### <a id="VM_Managed_SimulationConfiguration_ExportICFPath"></a> ExportICFPath

Gets or sets the export ICF path.

```csharp
public string ExportICFPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_SimulationConfiguration_ExtraConfigs"></a> ExtraConfigs

Gets or sets the extra configuration.

```csharp
public SimulationConfigurationExtraCollection ExtraConfigs { get; set; }
```

#### Property Value

 [SimulationConfigurationExtraCollection](VM.Managed.SimulationConfigurationExtraCollection.md)

### <a id="VM_Managed_SimulationConfiguration_GINFFilePath"></a> GINFFilePath

Gets or sets the GINF file path.

```csharp
public string GINFFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_SimulationConfiguration_GeometryPrecisionLevel"></a> GeometryPrecisionLevel

Gets or sets the geometry precision level.

```csharp
public int GeometryPrecisionLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_SimulationConfiguration_ImportICFPath"></a> ImportICFPath

Gets or sets the import ICF path.

```csharp
public string ImportICFPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_SimulationConfiguration_IncludeEigenvalue"></a> IncludeEigenvalue

Gets or sets a value indicating whether [include eigenvalue].

```csharp
public bool IncludeEigenvalue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_IncludeStatic"></a> IncludeStatic

Gets or sets a value indicating whether [include static].

```csharp
public bool IncludeStatic { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_IsUseExportICF"></a> IsUseExportICF

Gets or sets a value indicating whether this instance is use export ICF.

```csharp
public bool IsUseExportICF { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_IsUseImportICF"></a> IsUseImportICF

Gets or sets a value indicating whether this instance is use import ICF.

```csharp
public bool IsUseImportICF { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_IsUseMotionStep"></a> IsUseMotionStep

Gets or sets a value indicating whether this instance is use motion step.

```csharp
public bool IsUseMotionStep { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_IsUsePLT"></a> IsUsePLT

Gets or sets a value indicating whether this instance is use the simulation step of plt.

```csharp
public bool IsUsePLT { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_JacobianEvalOption"></a> JacobianEvalOption

Gets or sets the jacobian eval option.

```csharp
public SimulationConfiguration.LinearProblem JacobianEvalOption { get; set; }
```

#### Property Value

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md).[LinearProblem](VM.Managed.SimulationConfiguration.LinearProblem.md)

### <a id="VM_Managed_SimulationConfiguration_JacobianType"></a> JacobianType

Gets or sets the type of the jacobian.

```csharp
public SimulationConfiguration.Jacobian JacobianType { get; set; }
```

#### Property Value

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md).[Jacobian](VM.Managed.SimulationConfiguration.Jacobian.md)

### <a id="VM_Managed_SimulationConfiguration_LevelOfFlexibleBodyForSuperSolver"></a> LevelOfFlexibleBodyForSuperSolver

Gets or sets the level of flexible body for super solver.

```csharp
public int LevelOfFlexibleBodyForSuperSolver { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_SimulationConfiguration_LinearSolverType"></a> LinearSolverType

Gets or sets the type of the linear solver.

```csharp
public SimulationConfiguration.LinearSolver LinearSolverType { get; set; }
```

#### Property Value

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md).[LinearSolver](VM.Managed.SimulationConfiguration.LinearSolver.md)

### <a id="VM_Managed_SimulationConfiguration_MemoryOptimizationType"></a> MemoryOptimizationType

Gets or sets the type of the memory optimization.

```csharp
public SimulationConfiguration.MemoryOptimization MemoryOptimizationType { get; set; }
```

#### Property Value

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md).[MemoryOptimization](VM.Managed.SimulationConfiguration.MemoryOptimization.md)

### <a id="VM_Managed_SimulationConfiguration_MeshDataForOutputType"></a> MeshDataForOutputType

Gets or sets the type of the mesh data for output.

```csharp
public SimulationConfiguration.MeshDataForOutput MeshDataForOutputType { get; set; }
```

#### Property Value

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md).[MeshDataForOutput](VM.Managed.SimulationConfiguration.MeshDataForOutput.md)

### <a id="VM_Managed_SimulationConfiguration_MeshFreeAnalysisLevelGroup"></a> MeshFreeAnalysisLevelGroup

Gets or sets analysis level group for MeshFree

```csharp
[Obsolete]
public MeshFreeAnalysisLevelGroup MeshFreeAnalysisLevelGroup { get; set; }
```

#### Property Value

 MeshFreeAnalysisLevelGroup

### <a id="VM_Managed_SimulationConfiguration_MotionStepForPositionAnalysis"></a> MotionStepForPositionAnalysis

```csharp
public uint MotionStepForPositionAnalysis { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_SimulationConfiguration_Name"></a> Name

Gets or sets the name.

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_SimulationConfiguration_NodalCoordinateType"></a> NodalCoordinateType

Gets or sets the type of the nodal coordinate.

```csharp
public SimulationConfiguration.NodalCoordinate NodalCoordinateType { get; set; }
```

#### Property Value

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md).[NodalCoordinate](VM.Managed.SimulationConfiguration.NodalCoordinate.md)

### <a id="VM_Managed_SimulationConfiguration_NodalOutputEntities"></a> NodalOutputEntities

Gets the nodal output entity container.

```csharp
public ObjectBase[] NodalOutputEntities { get; }
```

#### Property Value

 ObjectBase\[\]

### <a id="VM_Managed_SimulationConfiguration_NodalOutputs"></a> NodalOutputs

Gets the nodal output container.

```csharp
public IList<ObjectBase> NodalOutputs { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<ObjectBase\>

### <a id="VM_Managed_SimulationConfiguration_NumOfCore"></a> NumOfCore

Gets or sets the number of core.

```csharp
public uint NumOfCore { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_SimulationConfiguration_OutOfCore"></a> OutOfCore

Gets or sets a value indicating whether [out of core].

```csharp
public bool OutOfCore { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_ResultPath"></a> ResultPath

Gets or sets the result path.

```csharp
public string ResultPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_SimulationConfiguration_ShowAdvancedOption"></a> ShowAdvancedOption

Gets or sets a value indicating whether [show advanced option].

```csharp
public bool ShowAdvancedOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_SimulationParameter"></a> SimulationParameter

Gets or sets the simulation parameter.

```csharp
public SimulationParameter SimulationParameter { get; set; }
```

#### Property Value

 [SimulationParameter](VM.Managed.SimulationParameter.md)

### <a id="VM_Managed_SimulationConfiguration_SimulationStepPLT"></a> SimulationStepPLT

Gets or sets the simulation step of plt.

```csharp
public uint SimulationStepPLT { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_SimulationConfiguration_SimulationType"></a> SimulationType

Gets or sets the type of the simulation.

```csharp
public SimulationConfiguration.Simulation SimulationType { get; set; }
```

#### Property Value

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md).[Simulation](VM.Managed.SimulationConfiguration.Simulation.md)

### <a id="VM_Managed_SimulationConfiguration_SolvingSpeedOption"></a> SolvingSpeedOption

Gets or sets a value indicating whether [solving speed option].

```csharp
public bool SolvingSpeedOption { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_StaticAnalysisParameter"></a> StaticAnalysisParameter

Gets or sets the static analysis parameter.

```csharp
public AnalysisParameterStatic StaticAnalysisParameter { get; set; }
```

#### Property Value

 [AnalysisParameterStatic](VM.Managed.AnalysisParameterStatic.md)

### <a id="VM_Managed_SimulationConfiguration_StaticSimulationStep"></a> StaticSimulationStep

Gets or sets the static simulation step.

```csharp
public uint StaticSimulationStep { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_SimulationConfiguration_SynchronizeMaximumStepSize"></a> SynchronizeMaximumStepSize

Gets or sets a value indicating whether [synchronize maximum step size].

```csharp
public bool SynchronizeMaximumStepSize { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_UseLocalRefinement"></a> UseLocalRefinement

Gets or sets a value indicating whether [use local refinement].

```csharp
public bool UseLocalRefinement { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_UseMeshFreeAllBodySettings"></a> UseMeshFreeAllBodySettings

Gets or sets whether use all body settings for MeshFree

```csharp
[Obsolete]
public bool UseMeshFreeAllBodySettings { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SimulationConfiguration_UserTetraPath"></a> UserTetraPath

Gets or sets the user tetra path.

```csharp
public string UserTetraPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_SimulationConfiguration_AddToolkitSettingValue_System_String_VM_Managed_ObjectBase_"></a> AddToolkitSettingValue\(string, ObjectBase\)

Adds the toolkit setting.

```csharp
public void AddToolkitSettingValue(string strKey, ObjectBase ob)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

key of toolkit.

`ob` ObjectBase

The new toolkit setting.

### <a id="VM_Managed_SimulationConfiguration_Clone_System_String_"></a> Clone\(string\)

Clones the specified STR name.

```csharp
public virtual SimulationConfiguration Clone(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR.

#### Returns

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md)

### <a id="VM_Managed_SimulationConfiguration_ContainsToolkitSetting_System_String_"></a> ContainsToolkitSetting\(string\)

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

### <a id="VM_Managed_SimulationConfiguration_ContainsToolkitSettingValue_System_String_VM_Managed_ObjectBase_"></a> ContainsToolkitSettingValue\(string, ObjectBase\)

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

### <a id="VM_Managed_SimulationConfiguration_DeserializeConfiguration_System_String_"></a> DeserializeConfiguration\(string\)

Deserializes the configuration.

```csharp
public virtual SimulationConfiguration DeserializeConfiguration(string strReader)
```

#### Parameters

`strReader` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR reader.

#### Returns

 [SimulationConfiguration](VM.Managed.SimulationConfiguration.md)

### <a id="VM_Managed_SimulationConfiguration_InitializeConfig_System_String_"></a> InitializeConfig\(string\)

Initializes the config.

```csharp
public void InitializeConfig(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the simulation configuration.

### <a id="VM_Managed_SimulationConfiguration_IsEnabled_VM_Managed_ObjectBase_"></a> IsEnabled\(ObjectBase\)

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

### <a id="VM_Managed_SimulationConfiguration_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_SimulationConfiguration_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_SimulationConfiguration_PostDeserialize_VM_Managed_SimulationConfiguration_"></a> PostDeserialize\(SimulationConfiguration\)

Posts the deserialize.

```csharp
public void PostDeserialize(SimulationConfiguration config)
```

#### Parameters

`config` [SimulationConfiguration](VM.Managed.SimulationConfiguration.md)

The configuration.

### <a id="VM_Managed_SimulationConfiguration_RemoveToolkitSettingValue_System_String_VM_Managed_ObjectBase_"></a> RemoveToolkitSettingValue\(string, ObjectBase\)

Removes the toolkit setting.

```csharp
public void RemoveToolkitSettingValue(string strKey, ObjectBase ob)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

key of toolkit.

`ob` ObjectBase

The toolkit setting to remove.

### <a id="VM_Managed_SimulationConfiguration_Replace_VM_Managed_SimulationConfiguration_"></a> Replace\(SimulationConfiguration\)

Replaces the specified configuration.

```csharp
public void Replace(SimulationConfiguration configReplace)
```

#### Parameters

`configReplace` [SimulationConfiguration](VM.Managed.SimulationConfiguration.md)

The replacing configuration .

### <a id="VM_Managed_SimulationConfiguration_ReplaceToolkitSettingValue_System_String_VM_Managed_ObjectBase_VM_Managed_ObjectBase_"></a> ReplaceToolkitSettingValue\(string, ObjectBase, ObjectBase\)

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

### <a id="VM_Managed_SimulationConfiguration_SetEnable_VM_Managed_ObjectBase_System_Boolean_"></a> SetEnable\(ObjectBase, bool\)

Sets the enable.

```csharp
public void SetEnable(ObjectBase ob, bool bEnabled)
```

#### Parameters

`ob` ObjectBase

The object.

`bEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> enabled.

