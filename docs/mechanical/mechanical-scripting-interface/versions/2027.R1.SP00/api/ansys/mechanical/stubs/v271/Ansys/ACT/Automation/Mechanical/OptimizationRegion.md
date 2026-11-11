# `OptimizationRegion`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.OptimizationRegion(internalObject: Any)

<a id="OptimizationRegion"></a>

### *class* OptimizationRegion(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a OptimizationRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#OptimizationRegion.Activate)                                   | Activate the current object.                                                                |
| [`AddExclusionRegion`](#OptimizationRegion.AddExclusionRegion)               | Obsolete. Use AddLocalDesignRestriction.                                                    |
| [`AddLocalDesignRestriction`](#OptimizationRegion.AddLocalDesignRestriction) | Creates a new LocalDesignRestriction                                                        |
| [`Copy`](#OptimizationRegion.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#OptimizationRegion.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#OptimizationRegion.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#OptimizationRegion.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#OptimizationRegion.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#OptimizationRegion.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#OptimizationRegion.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#OptimizationRegion.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#OptimizationRegion.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#OptimizationRegion.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#OptimizationRegion.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDefinition`](#OptimizationRegion.GetDefinition)                         | Gets the Worksheet Definition.                                                              |
| [`GetDetailsView`](#OptimizationRegion.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#OptimizationRegion.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#OptimizationRegion.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#OptimizationRegion.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#OptimizationRegion.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#OptimizationRegion.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#OptimizationRegion.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#OptimizationRegion.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#OptimizationRegion.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#OptimizationRegion.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#OptimizationRegion.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#OptimizationRegion.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#OptimizationRegion.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#OptimizationRegion.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#OptimizationRegion.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#OptimizationRegion.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#OptimizationRegion.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#OptimizationRegion.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#OptimizationRegion.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#OptimizationRegion.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#OptimizationRegion.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#OptimizationRegion.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#OptimizationRegion.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#OptimizationRegion.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#OptimizationRegion.AttachedRefs)                                                   | AttachedRefs property.                                        |
| [`BoundaryCondition`](#OptimizationRegion.BoundaryCondition)                                         | Gets or sets the BoundaryCondition.                           |
| [`Children`](#OptimizationRegion.Children)                                                           | Gets the list of children.                                    |
| [`ClsId`](#OptimizationRegion.ClsId)                                                                 | ClsId property.                                               |
| [`DataModelObjectCategory`](#OptimizationRegion.DataModelObjectCategory)                             | Gets the current DataModelObject's category.                  |
| [`DesignRegionLocation`](#OptimizationRegion.DesignRegionLocation)                                   | Gets or sets the DesignRegionLocation.                        |
| [`DistortionControl`](#OptimizationRegion.DistortionControl)                                         |                                                               |
| [`ExclusionExtension`](#OptimizationRegion.ExclusionExtension)                                       | Gets or sets the ExclusionExtension.                          |
| [`ExclusionRegionLocation`](#OptimizationRegion.ExclusionRegionLocation)                             | Gets or sets the ExclusionRegionLocation.                     |
| [`ExclusionScopingMethod`](#OptimizationRegion.ExclusionScopingMethod)                               | Gets or sets the ExclusionScopingMethod.                      |
| [`ExclusionThickness`](#OptimizationRegion.ExclusionThickness)                                       | Gets or sets the ExclusionThickness.                          |
| [`GroupingFolder`](#OptimizationRegion.GroupingFolder)                                               | GroupingFolder property.                                      |
| [`HyperbolicProjection`](#OptimizationRegion.HyperbolicProjection)                                   | Gets or sets the HyperbolicProjection.                        |
| [`IconName`](#OptimizationRegion.IconName)                                                           | IconName property.                                            |
| [`InitialVolumeFraction`](#OptimizationRegion.InitialVolumeFraction)                                 | Gets or sets the InitialVolumeFraction.                       |
| [`InitializationHoleSize`](#OptimizationRegion.InitializationHoleSize)                               | Gets or sets the InitializationHoleSize.                      |
| [`InitializationModifierType`](#OptimizationRegion.InitializationModifierType)                       | Gets or sets the InitializationModifierType.                  |
| [`InternalObject`](#OptimizationRegion.InternalObject)                                               | Gets the internal object. For advanced usage only.            |
| [`LatticeMaxDensity`](#OptimizationRegion.LatticeMaxDensity)                                         | Gets or sets the LatticeMaxDensity.                           |
| [`LatticeMinDensity`](#OptimizationRegion.LatticeMinDensity)                                         | Gets or sets the LatticeMinDensity.                           |
| [`LatticeSize`](#OptimizationRegion.LatticeSize)                                                     | Gets or sets the LatticeSize.                                 |
| [`LatticeType`](#OptimizationRegion.LatticeType)                                                     | Gets or sets the LatticeType.                                 |
| [`MaxCumulatedDisplacementControl`](#OptimizationRegion.MaxCumulatedDisplacementControl)             | Gets or sets the MaxCumulatedDisplacementControl.             |
| [`MeshDeformationToleranceControl`](#OptimizationRegion.MeshDeformationToleranceControl)             | Gets or sets the MeshDeformationToleranceControl.             |
| [`MorphingIterationMoveLimit`](#OptimizationRegion.MorphingIterationMoveLimit)                       | Gets or sets the MorphingIterationMoveLimit.                  |
| [`MorphingTotalMeshDeformationTolerance`](#OptimizationRegion.MorphingTotalMeshDeformationTolerance) | Gets or sets the MorphingTotalMeshDeformationTolerance.       |
| [`MorphingTotalMoveLimit`](#OptimizationRegion.MorphingTotalMoveLimit)                               | Gets or sets the MorphingTotalMoveLimit.                      |
| [`Name`](#OptimizationRegion.Name)                                                                   | Name property.                                                |
| [`ObjectId`](#OptimizationRegion.ObjectId)                                                           | ObjectId property.                                            |
| [`ObjectState`](#OptimizationRegion.ObjectState)                                                     | ObjectState property.                                         |
| [`ObjectTags`](#OptimizationRegion.ObjectTags)                                                       | ObjectTags property.                                          |
| [`OptimizationType`](#OptimizationRegion.OptimizationType)                                           | Gets or sets the OptimizationType.                            |
| [`Parent`](#OptimizationRegion.Parent)                                                               | Parent property.                                              |
| [`PenaltyFactor`](#OptimizationRegion.PenaltyFactor)                                                 | Gets or sets the PenaltyFactor.                               |
| [`Properties`](#OptimizationRegion.Properties)                                                       | Gets the list of properties for this object.                  |
| [`ShapeMoveLimitControl`](#OptimizationRegion.ShapeMoveLimitControl)                                 | Gets or sets the ShapeMoveLimitControl.                       |
| [`State`](#OptimizationRegion.State)                                                                 | State property.                                               |
| [`Suppressed`](#OptimizationRegion.Suppressed)                                                       | Gets or sets the suppressed state.                            |
| [`VisibleProperties`](#OptimizationRegion.VisibleProperties)                                         | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="OptimizationRegion.AttachedRefs"></a>

### *property* OptimizationRegion.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.BoundaryCondition"></a>

### *property* OptimizationRegion.BoundaryCondition *: [Ansys.Mechanical.DataModel.Enums.BoundaryConditionType](../../../Mechanical/DataModel/Enums/BoundaryConditionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.BoundaryConditionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Children"></a>

### *property* OptimizationRegion.Children *: List[Ansys.ACT.Automation.Mechanical.DataModelObject] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ClsId"></a>

### *property* OptimizationRegion.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.DataModelObjectCategory"></a>

### *property* OptimizationRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.DesignRegionLocation"></a>

### *property* OptimizationRegion.DesignRegionLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the DesignRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.DistortionControl"></a>

### *property* OptimizationRegion.DistortionControl *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

<a id="OptimizationRegion.ExclusionExtension"></a>

### *property* OptimizationRegion.ExclusionExtension *: [Ansys.Mechanical.DataModel.Enums.ExclusionType](../../../Mechanical/DataModel/Enums/ExclusionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ExclusionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionExtension.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ExclusionRegionLocation"></a>

### *property* OptimizationRegion.ExclusionRegionLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionRegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ExclusionScopingMethod"></a>

### *property* OptimizationRegion.ExclusionScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ExclusionThickness"></a>

### *property* OptimizationRegion.ExclusionThickness *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ExclusionThickness.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GroupingFolder"></a>

### *property* OptimizationRegion.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.HyperbolicProjection"></a>

### *property* OptimizationRegion.HyperbolicProjection *: [Ansys.Mechanical.DataModel.Enums.HyperbolicProjectionType](../../../Mechanical/DataModel/Enums/HyperbolicProjectionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.HyperbolicProjectionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the HyperbolicProjection.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.IconName"></a>

### *property* OptimizationRegion.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.InitialVolumeFraction"></a>

### *property* OptimizationRegion.InitialVolumeFraction *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitialVolumeFraction.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.InitializationHoleSize"></a>

### *property* OptimizationRegion.InitializationHoleSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitializationHoleSize.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.InitializationModifierType"></a>

### *property* OptimizationRegion.InitializationModifierType *: [Ansys.Mechanical.DataModel.Enums.InitializationModifierType](../../../Mechanical/DataModel/Enums/InitializationModifierType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.InitializationModifierType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InitializationModifierType.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.InternalObject"></a>

### *property* OptimizationRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSOptimizationRegionAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.LatticeMaxDensity"></a>

### *property* OptimizationRegion.LatticeMaxDensity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LatticeMaxDensity.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.LatticeMinDensity"></a>

### *property* OptimizationRegion.LatticeMinDensity *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LatticeMinDensity.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.LatticeSize"></a>

### *property* OptimizationRegion.LatticeSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LatticeSize.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.LatticeType"></a>

### *property* OptimizationRegion.LatticeType *: [Ansys.Mechanical.DataModel.Enums.LatticeType](../../../Mechanical/DataModel/Enums/LatticeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.LatticeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LatticeType.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MaxCumulatedDisplacementControl"></a>

### *property* OptimizationRegion.MaxCumulatedDisplacementControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaxCumulatedDisplacementControl.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MeshDeformationToleranceControl"></a>

### *property* OptimizationRegion.MeshDeformationToleranceControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshDeformationToleranceControl.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MorphingIterationMoveLimit"></a>

### *property* OptimizationRegion.MorphingIterationMoveLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MorphingIterationMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MorphingTotalMeshDeformationTolerance"></a>

### *property* OptimizationRegion.MorphingTotalMeshDeformationTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MorphingTotalMeshDeformationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.MorphingTotalMoveLimit"></a>

### *property* OptimizationRegion.MorphingTotalMoveLimit *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MorphingTotalMoveLimit.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Name"></a>

### *property* OptimizationRegion.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ObjectId"></a>

### *property* OptimizationRegion.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ObjectState"></a>

### *property* OptimizationRegion.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ObjectTags"></a>

### *property* OptimizationRegion.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.OptimizationType"></a>

### *property* OptimizationRegion.OptimizationType *: [Ansys.Mechanical.DataModel.Enums.OptimizationType](../../../Mechanical/DataModel/Enums/OptimizationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.OptimizationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OptimizationType.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Parent"></a>

### *property* OptimizationRegion.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.PenaltyFactor"></a>

### *property* OptimizationRegion.PenaltyFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PenaltyFactor.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Properties"></a>

### *property* OptimizationRegion.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.ShapeMoveLimitControl"></a>

### *property* OptimizationRegion.ShapeMoveLimitControl *: [Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType](../../../Mechanical/DataModel/Enums/TopoPropertyControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TopoPropertyControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ShapeMoveLimitControl.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.State"></a>

### *property* OptimizationRegion.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Suppressed"></a>

### *property* OptimizationRegion.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the suppressed state.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.VisibleProperties"></a>

### *property* OptimizationRegion.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="OptimizationRegion.Activate"></a>

### OptimizationRegion.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.AddExclusionRegion"></a>

### OptimizationRegion.AddExclusionRegion() → [Ansys.ACT.Automation.Mechanical.LocalDesignRestriction](LocalDesignRestriction.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.LocalDesignRestriction)

Obsolete. Use AddLocalDesignRestriction.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.AddLocalDesignRestriction"></a>

### OptimizationRegion.AddLocalDesignRestriction() → [Ansys.ACT.Automation.Mechanical.LocalDesignRestriction](LocalDesignRestriction.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.LocalDesignRestriction)

Creates a new LocalDesignRestriction

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Copy"></a>

### OptimizationRegion.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.CopyTo"></a>

### OptimizationRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.CreateObjRef"></a>

### OptimizationRegion.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.CreateParameter"></a>

### OptimizationRegion.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Cut"></a>

### OptimizationRegion.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Delete"></a>

### OptimizationRegion.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Duplicate"></a>

### OptimizationRegion.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Equals"></a>

### OptimizationRegion.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetAPIName"></a>

### OptimizationRegion.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetAllProperties"></a>

### OptimizationRegion.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetChildren"></a>

### OptimizationRegion.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### OptimizationRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetDefinition"></a>

### OptimizationRegion.GetDefinition() → Ansys.ACT.Automation.Mechanical.MaterialsOptimizationDefinition

```text
Gets the Worksheet Definition.
This Definition is a list of OptimizationMaterial.
```

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetDetailsView"></a>

### OptimizationRegion.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetEnumName"></a>

### OptimizationRegion.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetHashCode"></a>

### OptimizationRegion.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetIconFile"></a>

### OptimizationRegion.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetLifetimeService"></a>

### OptimizationRegion.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetObjectData"></a>

### OptimizationRegion.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetParameter"></a>

### OptimizationRegion.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetPath"></a>

### OptimizationRegion.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetPropertyName"></a>

### OptimizationRegion.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetPropertyValue"></a>

### OptimizationRegion.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetVisibleProperties"></a>

### OptimizationRegion.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GetVisiblePropertyNames"></a>

### OptimizationRegion.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GroupAllSimilarChildren"></a>

### OptimizationRegion.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.GroupSimilarObjects"></a>

### OptimizationRegion.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.InitializeLifetimeService"></a>

### OptimizationRegion.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.IsPropertyEditable"></a>

### OptimizationRegion.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### OptimizationRegion.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.IsPropertyVisible"></a>

### OptimizationRegion.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### OptimizationRegion.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.Paste"></a>

### OptimizationRegion.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.PropertyByAPIName"></a>

### OptimizationRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.PropertyById"></a>

### OptimizationRegion.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.PropertyByName"></a>

### OptimizationRegion.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.RemoveFromGroup"></a>

### OptimizationRegion.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.RemoveParameter"></a>

### OptimizationRegion.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="OptimizationRegion.RenameBasedOnDefinition"></a>

### OptimizationRegion.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

