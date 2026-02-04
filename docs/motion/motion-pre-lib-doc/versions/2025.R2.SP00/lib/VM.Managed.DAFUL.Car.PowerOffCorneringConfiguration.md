#  Class PowerOffCorneringConfiguration

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The power off cornering in configuration class

```csharp
public class PowerOffCorneringConfiguration : FullCarAnalysisConfigurationBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IEnableManager, IHasRoadFile, ILinkOwner, ILinkUpdateOwner
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
Configuration ← 
[FullCarAnalysisConfigurationBase](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md) ← 
[PowerOffCorneringConfiguration](VM.Managed.DAFUL.Car.PowerOffCorneringConfiguration.md)

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
IEnableManager, 
[IHasRoadFile](VM.Managed.DAFUL.Car.IHasRoadFile.md), 
ILinkOwner, 
ILinkUpdateOwner

#### Inherited Members

[FullCarAnalysisConfigurationBase.\_\_a$\_a\_VM.Models.Pre.LinkAttribute](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_\_\_a\_\_a\_VM\_Models\_Pre\_LinkAttribute), 
[FullCarAnalysisConfigurationBase.\_\_a$\_a\_VM.Models.Pre.LinkUpdateAttribute](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_\_\_a\_\_a\_VM\_Models\_Pre\_LinkUpdateAttribute), 
[FullCarAnalysisConfigurationBase.OnDeserialization\(object\)](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_OnDeserialization\_System\_Object\_), 
[FullCarAnalysisConfigurationBase.AnalysisName](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_AnalysisName), 
[FullCarAnalysisConfigurationBase.Analysis](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_Analysis), 
[FullCarAnalysisConfigurationBase.AnalysisType](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_AnalysisType), 
[FullCarAnalysisConfigurationBase.RoadDataPath](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_RoadDataPath), 
[FullCarAnalysisConfigurationBase.RoadRefFrameName](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_RoadRefFrameName), 
[FullCarAnalysisConfigurationBase.BaseBody](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_BaseBody), 
[FullCarAnalysisConfigurationBase.RoadReferencePosition](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_RoadReferencePosition), 
[FullCarAnalysisConfigurationBase.RoadRotationAngle](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_RoadRotationAngle), 
[FullCarAnalysisConfigurationBase.RoadOffset](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md\#VM\_Managed\_DAFUL\_Car\_FullCarAnalysisConfigurationBase\_RoadOffset), 
Configuration.InitializeConfig\(string\), 
Configuration.LinkRequestUpdate\(object, LinkEventArgs\), 
Configuration.LinkRequestDestroy\(object, LinkEventArgs\), 
Configuration.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
Configuration.SerializeConfiguration\(\), 
Configuration.DeserializeConfiguration\(string\), 
Configuration.OnDeserialization\(object\), 
Configuration.PostDeserialize\(Configuration\), 
Configuration.ReplaceAnalysisParameter\(Configuration\), 
Configuration.IsThermalAnalysis\(\), 
Configuration.Clone\(string\), 
Configuration.AddToolkitSetting\(string, ToolKitSettingBase\), 
Configuration.RemoveToolkitSetting\(string\), 
Configuration.ContainsToolkitSetting\(string\), 
Configuration.GetToolkitSetting\(string\), 
Configuration.AddToolkitSettingValue\(string, ObjectBase\), 
Configuration.RemoveToolkitSettingValue\(string, ObjectBase\), 
Configuration.ContainsToolkitSettingValue\(string, ObjectBase\), 
Configuration.ReplaceToolkitSettingValue\(string, ObjectBase, ObjectBase\), 
Configuration.GetNewConfigurationList\(DocumentAnalysis\), 
Configuration.AddNodalOutputEntity\(ObjectBase\), 
Configuration.ClearNodalOutputEntity\(\), 
Configuration.IsEnabled\(ObjectBase\), 
Configuration.SetEnable\(ObjectBase, bool\), 
Configuration.UseMeshFreeAllBodySettings, 
Configuration.MeshFreeAnalysisLevelGroup, 
Configuration.ConfigName, 
Configuration.UseOutOfCore, 
Configuration.TypeOfJacobian, 
Configuration.TypeOfTreatmentOfNonContactEntity, 
Configuration.TypeOfMemoryOptimization, 
Configuration.TypeOfLinearSolver, 
Configuration.AccuracyOfGMS, 
Configuration.TypeOfNodalCoordinate, 
Configuration.JacobianOption, 
Configuration.StepOfDynamicSimulation, 
Configuration.StepOfStaticSimulation, 
Configuration.NumberOfCore, 
Configuration.UseMotionStep, 
Configuration.MotionStepForPositionAnaly, 
Configuration.IsIncludeStatic, 
Configuration.IsIncludeEigenvalue, 
Configuration.IsIncludeThermal, 
Configuration.AppendedDateTime, 
Configuration.TypeOfSimulation, 
Configuration.TypeOfDynamicSkipAnalysis, 
Configuration.TypeOfStaticSkipAnalysis, 
Configuration.TypeOfInitialSkipAnalysis, 
Configuration.TypeOfEigenvalueSkipAnalysis, 
Configuration.TypeOfThermalSkipAnalysis, 
Configuration.RecordOfStressStrainType, 
Configuration.TreatAsModalForEFModalBodyResult, 
Configuration.BodyOrientationType, 
Configuration.ShowHideAdvancedOption, 
Configuration.ResultFilePath, 
Configuration.UseSolvingSpeedOption, 
Configuration.UseAutoSolverProgressBar, 
Configuration.SynchronizeMaxStepSize, 
Configuration.UseImportICF, 
Configuration.ImportICFFilePath, 
Configuration.UseExportICF, 
Configuration.ExportICFFilePath, 
Configuration.FlexibleBodyLevelForSuperSolver, 
Configuration.UsePLT, 
Configuration.SimulationStepForPLT, 
Configuration.ParameterOfDynamicAnalysis, 
Configuration.ParameterOfStaticAnalysis, 
Configuration.ParameterOfEigenvalueAnalysis, 
Configuration.ParameterOfThermalAnalysis, 
Configuration.DisableEntities, 
Configuration.NodalOutputEntities, 
Configuration.SimulationParam, 
Configuration.ExtraConfigs, 
Configuration.GINFPath, 
Configuration.LevelOfGeometryPrecision, 
Configuration.TypeOfCriterion, 
Configuration.SubTypeOfCriterion, 
Configuration.TypeOfMeshDataForOutput, 
Configuration.UserTetraFilePath, 
Configuration.CheckedLevelArray, 
Configuration.CriterionVal, 
Configuration.IsUseLocalRefinement, 
Configuration.EigenvalueOutputStep, 
Configuration.RecordOfResult, 
Configuration.HighSpeedRotationOption, 
Configuration.PlasticMaterialStrain, 
Configuration.StressStrainReport, 
Configuration.PreventShearLocking, 
Configuration.Attributes, 
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

### <a id="VM_Managed_DAFUL_Car_PowerOffCorneringConfiguration__ctor"></a> PowerOffCorneringConfiguration\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.PowerOffCorneringConfiguration" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PowerOffCorneringConfiguration()
```

### <a id="VM_Managed_DAFUL_Car_PowerOffCorneringConfiguration__ctor_VM_Managed_DAFUL_Car_AnalysisPowerOffCornering_"></a> PowerOffCorneringConfiguration\(AnalysisPowerOffCornering\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.PowerOffCorneringConfiguration" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PowerOffCorneringConfiguration(AnalysisPowerOffCornering analysis)
```

#### Parameters

`analysis` [AnalysisPowerOffCornering](VM.Managed.DAFUL.Car.AnalysisPowerOffCornering.md)

The analysis.

## Properties

### <a id="VM_Managed_DAFUL_Car_PowerOffCorneringConfiguration_Analysis"></a> Analysis

Gets or sets the analysis.

```csharp
public override AnalysisBase Analysis { get; set; }
```

#### Property Value

 [AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md)

### <a id="VM_Managed_DAFUL_Car_PowerOffCorneringConfiguration_AnalysisName"></a> AnalysisName

Gets the name of the analysis.

```csharp
protected override string AnalysisName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Car_PowerOffCorneringConfiguration_AnalysisType"></a> AnalysisType

Gets or sets the type of the analysis.

```csharp
public override FullCarAnalysisType AnalysisType { get; }
```

#### Property Value

 [FullCarAnalysisType](VM.Managed.DAFUL.Car.FullCarAnalysisType.md)

### <a id="VM_Managed_DAFUL_Car_PowerOffCorneringConfiguration_PowerOffCorneringParam"></a> PowerOffCorneringParam

Gets or sets the power off cornering parameter.

```csharp
public AnalysisPowerOffCornering PowerOffCorneringParam { get; set; }
```

#### Property Value

 [AnalysisPowerOffCornering](VM.Managed.DAFUL.Car.AnalysisPowerOffCornering.md)

