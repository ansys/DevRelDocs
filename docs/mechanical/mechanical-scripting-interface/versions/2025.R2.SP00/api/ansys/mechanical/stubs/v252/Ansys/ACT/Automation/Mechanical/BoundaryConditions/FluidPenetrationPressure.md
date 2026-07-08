# `FluidPenetrationPressure`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidPenetrationPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidPenetrationPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A class for fluid penetration pressure object in Mechanical. This load object is used to simulate surrounding fluid or air penetrating into the contact interface.
: Users can apply this load to flexible-to-flexible or rigid-to-flexible contact pairs. This load object is available for static structural analysis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FluidPenetrationPressure.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FluidPenetrationPressure.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FluidPenetrationPressure.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidPenetrationPressure.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FluidPenetrationPressure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FluidPenetrationPressure.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FluidPenetrationPressure.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FluidPenetrationPressure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#FluidPenetrationPressure.GetActivateAtLoadStep)     | Gets whether the fluid penetration pressure is active at the specified load step. |
| [`GetChildren`](#FluidPenetrationPressure.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FluidPenetrationPressure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FluidPenetrationPressure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidPenetrationPressure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FluidPenetrationPressure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FluidPenetrationPressure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FluidPenetrationPressure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FluidPenetrationPressure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#FluidPenetrationPressure.SetActivateAtLoadStep)     | Sets whether the fluid penetration pressure is active at the specified load step. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| [`Children`](#FluidPenetrationPressure.Children)                                           | Gets the list of children.                                                                                          |
| [`Comments`](#FluidPenetrationPressure.Comments)                                           | Gets the list of associated comments.                                                                               |
| [`ContactRegionSelection`](#FluidPenetrationPressure.ContactRegionSelection)               | Gets or sets contact region.                                                                                        |
| [`DataModelObjectCategory`](#FluidPenetrationPressure.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                                        |
| [`Figures`](#FluidPenetrationPressure.Figures)                                             | Gets the list of associated figures.                                                                                |
| [`GraphControlsXAxis`](#FluidPenetrationPressure.GraphControlsXAxis)                       | Gets or sets the GraphControlsXAxis.                                                                                |
| [`GraphDisplaySelection`](#FluidPenetrationPressure.GraphDisplaySelection)                 | Gets or sets the GraphDisplaySelection which determines which variable to display in graph, Pressure or Criterion.  |
| [`Images`](#FluidPenetrationPressure.Images)                                               | Gets the list of associated images.                                                                                 |
| [`IndependentVariable`](#FluidPenetrationPressure.IndependentVariable)                     | Gets or set the IndependentVariable.                                                                                |
| [`InternalObject`](#FluidPenetrationPressure.InternalObject)                               | Gets the internal object. For advanced usage only.                                                                  |
| [`Magnitude`](#FluidPenetrationPressure.Magnitude)                                         | Gets the Magnitude.                                                                                                 |
| [`NumberOfSegments`](#FluidPenetrationPressure.NumberOfSegments)                           | Gets or sets the NumberofSegments.                                                                                  |
| [`PenetrationCriterion`](#FluidPenetrationPressure.PenetrationCriterion)                   | Gets the PenetrationCriterion.                                                                                      |
| [`PenetrationCriterionDefinedBy`](#FluidPenetrationPressure.PenetrationCriterionDefinedBy) | Gets or sets the PenetrationCriterionDefinedBy which determines whether user define the criterion.                  |
| [`PenetrationPathType`](#FluidPenetrationPressure.PenetrationPathType)                     | Gets or sets the PenetrationPathType which determines whether path is history dependent or history independent.     |
| [`Properties`](#FluidPenetrationPressure.Properties)                                       | Gets the list of properties for this object.                                                                        |
| [`ReadOnly`](#FluidPenetrationPressure.ReadOnly)                                           | Gets or sets the ReadOnly.                                                                                          |
| [`SharedRefBody`](#FluidPenetrationPressure.SharedRefBody)                                 | Gets or sets the SharedRefBody.                                                                                     |
| [`StartPointLocation`](#FluidPenetrationPressure.StartPointLocation)                       | Gets or sets the Start Point Location.                                                                              |
| [`StartPointScopingType`](#FluidPenetrationPressure.StartPointScopingType)                 | Gets or set the StartPointScopingType which determines scoping method for stating point.                            |
| [`Suppressed`](#FluidPenetrationPressure.Suppressed)                                       | Gets or sets the Suppressed.                                                                                        |
| [`UpdatePressureType`](#FluidPenetrationPressure.UpdatePressureType)                       | Gets or sets the UpdatePressureType which determines when to update fluid pressure, each iteration or each substep. |
| [`VisibleProperties`](#FluidPenetrationPressure.VisibleProperties)                         | Gets the list of properties that are visible for this object.                                                       |
| [`XYZFunctionCoordinateSystem`](#FluidPenetrationPressure.XYZFunctionCoordinateSystem)     | Gets or sets the XYZFunctionCoordinateSystem.                                                                       |

<a id="property-detail"></a>

## Property detail

<a id="FluidPenetrationPressure.Children"></a>

### *property* FluidPenetrationPressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Comments"></a>

### *property* FluidPenetrationPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ContactRegionSelection"></a>

### *property* FluidPenetrationPressure.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets contact region.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.DataModelObjectCategory"></a>

### *property* FluidPenetrationPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Figures"></a>

### *property* FluidPenetrationPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GraphControlsXAxis"></a>

### *property* FluidPenetrationPressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GraphDisplaySelection"></a>

### *property* FluidPenetrationPressure.GraphDisplaySelection *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.GraphDisplay](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/GraphDisplay.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.GraphDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphDisplaySelection which determines which variable to display in graph, Pressure or Criterion.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Images"></a>

### *property* FluidPenetrationPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.IndependentVariable"></a>

### *property* FluidPenetrationPressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.InternalObject"></a>

### *property* FluidPenetrationPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Magnitude"></a>

### *property* FluidPenetrationPressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.NumberOfSegments"></a>

### *property* FluidPenetrationPressure.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberofSegments.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PenetrationCriterion"></a>

### *property* FluidPenetrationPressure.PenetrationCriterion *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PenetrationCriterion.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PenetrationCriterionDefinedBy"></a>

### *property* FluidPenetrationPressure.PenetrationCriterionDefinedBy *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.CriterionDefinedByType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/CriterionDefinedByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.CriterionDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationCriterionDefinedBy which determines whether user define the criterion.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PenetrationPathType"></a>

### *property* FluidPenetrationPressure.PenetrationPathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.FluidPathType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/FluidPathType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.FluidPathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationPathType which determines whether path is history dependent or history independent.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Properties"></a>

### *property* FluidPenetrationPressure.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ReadOnly"></a>

### *property* FluidPenetrationPressure.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.SharedRefBody"></a>

### *property* FluidPenetrationPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.StartPointLocation"></a>

### *property* FluidPenetrationPressure.StartPointLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Start Point Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.StartPointScopingType"></a>

### *property* FluidPenetrationPressure.StartPointScopingType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.StartPointScopingType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/StartPointScopingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.StartPointScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set the StartPointScopingType which determines scoping method for stating point.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Suppressed"></a>

### *property* FluidPenetrationPressure.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.UpdatePressureType"></a>

### *property* FluidPenetrationPressure.UpdatePressureType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.PenetrationPressureUpdateType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/PenetrationPressureUpdateType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.PenetrationPressureUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdatePressureType which determines when to update fluid pressure, each iteration or each substep.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.VisibleProperties"></a>

### *property* FluidPenetrationPressure.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.XYZFunctionCoordinateSystem"></a>

### *property* FluidPenetrationPressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidPenetrationPressure.Activate"></a>

### FluidPenetrationPressure.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.AddComment"></a>

### FluidPenetrationPressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.AddFigure"></a>

### FluidPenetrationPressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.AddImage"></a>

### FluidPenetrationPressure.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.CopyTo"></a>

### FluidPenetrationPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.CreateParameter"></a>

### FluidPenetrationPressure.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Delete"></a>

### FluidPenetrationPressure.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Duplicate"></a>

### FluidPenetrationPressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetActivateAtLoadStep"></a>

### FluidPenetrationPressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the fluid penetration pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetChildren"></a>

### FluidPenetrationPressure.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetParameter"></a>

### FluidPenetrationPressure.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GroupAllSimilarChildren"></a>

### FluidPenetrationPressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GroupSimilarObjects"></a>

### FluidPenetrationPressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PromoteToNamedSelection"></a>

### FluidPenetrationPressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PropertyByAPIName"></a>

### FluidPenetrationPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PropertyByName"></a>

### FluidPenetrationPressure.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.RemoveParameter"></a>

### FluidPenetrationPressure.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.SetActivateAtLoadStep"></a>

### FluidPenetrationPressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the fluid penetration pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

