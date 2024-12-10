#  Class FullCarAnalysisConfigurationBase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The full car analysis configuration base class

```csharp
public abstract class FullCarAnalysisConfigurationBase : Configuration, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IEnableManager, IHasRoadFile, ILinkOwner, ILinkUpdateOwner
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
Configuration ← 
[FullCarAnalysisConfigurationBase](VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase.md)

#### Derived

[AccelerationConfiguration](VM.Managed.DAFUL.Car.AccelerationConfiguration.md), 
[BrakingConfiguration](VM.Managed.DAFUL.Car.BrakingConfiguration.md), 
[BrakingInTurnConfiguration](VM.Managed.DAFUL.Car.BrakingInTurnConfiguration.md), 
[ConstantRadiusCorneringConfiguration](VM.Managed.DAFUL.Car.ConstantRadiusCorneringConfiguration.md), 
[CorneringWithSteerReleaseConfiguration](VM.Managed.DAFUL.Car.CorneringWithSteerReleaseConfiguration.md), 
[DriftConfiguration](VM.Managed.DAFUL.Car.DriftConfiguration.md), 
[FileDrivenConfiguration](VM.Managed.DAFUL.Car.FileDrivenConfiguration.md), 
[FishHookConfiguration](VM.Managed.DAFUL.Car.FishHookConfiguration.md), 
[ISOLaneChangeConfiguration](VM.Managed.DAFUL.Car.ISOLaneChangeConfiguration.md), 
[ImpulseSteerConfiguration](VM.Managed.DAFUL.Car.ImpulseSteerConfiguration.md), 
[LiftOffTurnInConfiguration](VM.Managed.DAFUL.Car.LiftOffTurnInConfiguration.md), 
[PowerOffCorneringConfiguration](VM.Managed.DAFUL.Car.PowerOffCorneringConfiguration.md), 
[PowerOffStraightLineConfiguration](VM.Managed.DAFUL.Car.PowerOffStraightLineConfiguration.md), 
[RampSteerConfiguration](VM.Managed.DAFUL.Car.RampSteerConfiguration.md), 
[SingleLaneChangeConfiguration](VM.Managed.DAFUL.Car.SingleLaneChangeConfiguration.md), 
[StepSteerConfiguration](VM.Managed.DAFUL.Car.StepSteerConfiguration.md), 
[SweptSineSteerConfiguration](VM.Managed.DAFUL.Car.SweptSineSteerConfiguration.md), 
[ThreeDimensionRoadConfiguration](VM.Managed.DAFUL.Car.ThreeDimensionRoadConfiguration.md)

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

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase__ctor"></a> FullCarAnalysisConfigurationBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.FullCarAnalysisConfigurationBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FullCarAnalysisConfigurationBase()
```

## Fields

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase___a__a_VM_Models_Pre_LinkAttribute"></a> \_\_a$\_a\_VM.Models.Pre.LinkAttribute

```csharp
protected LinkAttribute __a$_a_VM.Models.Pre.LinkAttribute
```

#### Field Value

 LinkAttribute

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase___a__a_VM_Models_Pre_LinkUpdateAttribute"></a> \_\_a$\_a\_VM.Models.Pre.LinkUpdateAttribute

```csharp
protected LinkUpdateAttribute __a$_a_VM.Models.Pre.LinkUpdateAttribute
```

#### Field Value

 LinkUpdateAttribute

## Properties

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_Analysis"></a> Analysis

Gets or sets the analysis.

```csharp
public abstract AnalysisBase Analysis { get; set; }
```

#### Property Value

 [AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md)

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_AnalysisName"></a> AnalysisName

Gets the name of the analysis.

```csharp
protected abstract string AnalysisName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_AnalysisType"></a> AnalysisType

Gets or sets the type of the analysis.

```csharp
public abstract FullCarAnalysisType AnalysisType { get; }
```

#### Property Value

 [FullCarAnalysisType](VM.Managed.DAFUL.Car.FullCarAnalysisType.md)

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_BaseBody"></a> BaseBody

Get/Set the base body of the road

```csharp
public ObjectBase BaseBody { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_RoadDataPath"></a> RoadDataPath

Gets or sets the road data file path.

```csharp
public string RoadDataPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_RoadOffset"></a> RoadOffset

Get/Set offset of the road

```csharp
public PointBase RoadOffset { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_RoadRefFrameName"></a> RoadRefFrameName

Get Roadreference frame name

```csharp
public string RoadRefFrameName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_RoadReferencePosition"></a> RoadReferencePosition

Get reference position of the road

```csharp
public Vector RoadReferencePosition { get; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_RoadRotationAngle"></a> RoadRotationAngle

Get/Set rotation angle of the road

```csharp
public ExpressionValueVariable RoadRotationAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### <a id="VM_Managed_DAFUL_Car_FullCarAnalysisConfigurationBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

