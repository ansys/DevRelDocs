# `FluidPenetrationPressure`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidPenetrationPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

A class for fluid penetration pressure object in Mechanical. This load object is used to simulate surrounding fluid or air penetrating into the contact interface.
: Users can apply this load to flexible-to-flexible or rigid-to-flexible contact pairs. This load object is available for static structural analysis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#FluidPenetrationPressure.GetActivateAtLoadStep)     | Returns whether fluid penetration pressure is active at the stepNumber.           |
| [`SetActivateAtLoadStep`](#FluidPenetrationPressure.SetActivateAtLoadStep)     | Sets whether fluid penetration pressure is active at the stepNumber.              |
| [`PromoteToNamedSelection`](#FluidPenetrationPressure.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#FluidPenetrationPressure.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FluidPenetrationPressure.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FluidPenetrationPressure.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FluidPenetrationPressure.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FluidPenetrationPressure.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FluidPenetrationPressure.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FluidPenetrationPressure.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FluidPenetrationPressure.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FluidPenetrationPressure.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FluidPenetrationPressure.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FluidPenetrationPressure.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FluidPenetrationPressure.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FluidPenetrationPressure.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FluidPenetrationPressure.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| [`ContactRegionSelection`](#FluidPenetrationPressure.ContactRegionSelection)               | Gets or sets contact region.                                                                                        |
| [`StartPointLocation`](#FluidPenetrationPressure.StartPointLocation)                       | Gets or sets the Start Point Location.                                                                              |
| [`InternalObject`](#id0)                                                                   | Gets the internal object. For advanced usage only.                                                                  |
| [`NumberOfSegments`](#FluidPenetrationPressure.NumberOfSegments)                           | Gets or sets the NumberofSegments.                                                                                  |
| [`Magnitude`](#FluidPenetrationPressure.Magnitude)                                         | Gets the Magnitude.                                                                                                 |
| [`PenetrationCriterion`](#FluidPenetrationPressure.PenetrationCriterion)                   | Gets the PenetrationCriterion.                                                                                      |
| [`GraphControlsXAxis`](#FluidPenetrationPressure.GraphControlsXAxis)                       | Gets or sets the GraphControlsXAxis.                                                                                |
| [`GraphDisplaySelection`](#FluidPenetrationPressure.GraphDisplaySelection)                 | Gets or sets the GraphDisplaySelection which determines which variable to display in graph, Pressure or Criterion.  |
| [`PenetrationCriterionDefinedBy`](#FluidPenetrationPressure.PenetrationCriterionDefinedBy) | Gets or sets the PenetrationCriterionDefinedBy which determines whether user define the criterion.                  |
| [`PenetrationPathType`](#FluidPenetrationPressure.PenetrationPathType)                     | Gets or sets the PenetrationPathType which determines whether path is history dependent or history independent.     |
| [`StartPointScopingType`](#FluidPenetrationPressure.StartPointScopingType)                 | Gets or set the StartPointScopingType which determines scoping method for stating point.                            |
| [`IndependentVariable`](#FluidPenetrationPressure.IndependentVariable)                     | Gets or set the IndependentVariable.                                                                                |
| [`UpdatePressureType`](#FluidPenetrationPressure.UpdatePressureType)                       | Gets or sets the UpdatePressureType which determines when to update fluid pressure, each iteration or each substep. |
| [`XYZFunctionCoordinateSystem`](#FluidPenetrationPressure.XYZFunctionCoordinateSystem)     | Gets or sets the XYZFunctionCoordinateSystem.                                                                       |
| [`DataModelObjectCategory`](#FluidPenetrationPressure.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                                                        |
| [`Suppressed`](#FluidPenetrationPressure.Suppressed)                                       | Gets or sets the Suppressed.                                                                                        |
| [`SharedRefBody`](#FluidPenetrationPressure.SharedRefBody)                                 | Gets or sets the SharedRefBody.                                                                                     |
| [`Children`](#FluidPenetrationPressure.Children)                                           | Gets the list of children.                                                                                          |
| [`Comments`](#FluidPenetrationPressure.Comments)                                           | Gets the list of associated comments.                                                                               |
| [`Figures`](#FluidPenetrationPressure.Figures)                                             | Gets the list of associated figures.                                                                                |
| [`Images`](#FluidPenetrationPressure.Images)                                               | Gets the list of associated images.                                                                                 |
| [`ReadOnly`](#FluidPenetrationPressure.ReadOnly)                                           | Gets or sets the ReadOnly.                                                                                          |
| [`InternalObject`](#id0)                                                                   | Gets the internal object. For advanced usage only.                                                                  |
| [`Properties`](#FluidPenetrationPressure.Properties)                                       | Gets the list of properties for this object.                                                                        |
| [`VisibleProperties`](#FluidPenetrationPressure.VisibleProperties)                         | Gets the list of properties that are visible for this object.                                                       |

<a id="property-detail"></a>

## Property detail

<a id="FluidPenetrationPressure.ContactRegionSelection"></a>

### *property* FluidPenetrationPressure.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets contact region.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.StartPointLocation"></a>

### *property* FluidPenetrationPressure.StartPointLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Start Point Location.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.InternalObject"></a>

### *property* FluidPenetrationPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.NumberOfSegments"></a>

### *property* FluidPenetrationPressure.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberofSegments.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Magnitude"></a>

### *property* FluidPenetrationPressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PenetrationCriterion"></a>

### *property* FluidPenetrationPressure.PenetrationCriterion *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PenetrationCriterion.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GraphControlsXAxis"></a>

### *property* FluidPenetrationPressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GraphDisplaySelection"></a>

### *property* FluidPenetrationPressure.GraphDisplaySelection *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.GraphDisplay](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/GraphDisplay.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.GraphDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphDisplaySelection which determines which variable to display in graph, Pressure or Criterion.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PenetrationCriterionDefinedBy"></a>

### *property* FluidPenetrationPressure.PenetrationCriterionDefinedBy *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.CriterionDefinedByType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/CriterionDefinedByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.CriterionDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationCriterionDefinedBy which determines whether user define the criterion.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PenetrationPathType"></a>

### *property* FluidPenetrationPressure.PenetrationPathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.FluidPathType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/FluidPathType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.FluidPathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationPathType which determines whether path is history dependent or history independent.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.StartPointScopingType"></a>

### *property* FluidPenetrationPressure.StartPointScopingType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.StartPointScopingType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/StartPointScopingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.StartPointScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set the StartPointScopingType which determines scoping method for stating point.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.IndependentVariable"></a>

### *property* FluidPenetrationPressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.UpdatePressureType"></a>

### *property* FluidPenetrationPressure.UpdatePressureType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.PenetrationPressureUpdateType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/PenetrationPressureUpdateType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.PenetrationPressureUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdatePressureType which determines when to update fluid pressure, each iteration or each substep.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.XYZFunctionCoordinateSystem"></a>

### *property* FluidPenetrationPressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.DataModelObjectCategory"></a>

### *property* FluidPenetrationPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Suppressed"></a>

### *property* FluidPenetrationPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.SharedRefBody"></a>

### *property* FluidPenetrationPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Children"></a>

### *property* FluidPenetrationPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Comments"></a>

### *property* FluidPenetrationPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Figures"></a>

### *property* FluidPenetrationPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Images"></a>

### *property* FluidPenetrationPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.ReadOnly"></a>

### *property* FluidPenetrationPressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FluidPenetrationPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Properties"></a>

### *property* FluidPenetrationPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.VisibleProperties"></a>

### *property* FluidPenetrationPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FluidPenetrationPressure.GetActivateAtLoadStep"></a>

### FluidPenetrationPressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

Returns whether fluid penetration pressure is active at the stepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.SetActivateAtLoadStep"></a>

### FluidPenetrationPressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

Sets whether fluid penetration pressure is active at the stepNumber.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PromoteToNamedSelection"></a>

### FluidPenetrationPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Delete"></a>

### FluidPenetrationPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetChildren"></a>

### FluidPenetrationPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FluidPenetrationPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.AddComment"></a>

### FluidPenetrationPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.AddFigure"></a>

### FluidPenetrationPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.AddImage"></a>

### FluidPenetrationPressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Activate"></a>

### FluidPenetrationPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.CopyTo"></a>

### FluidPenetrationPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.Duplicate"></a>

### FluidPenetrationPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GroupAllSimilarChildren"></a>

### FluidPenetrationPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GroupSimilarObjects"></a>

### FluidPenetrationPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PropertyByName"></a>

### FluidPenetrationPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.PropertyByAPIName"></a>

### FluidPenetrationPressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.CreateParameter"></a>

### FluidPenetrationPressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.GetParameter"></a>

### FluidPenetrationPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FluidPenetrationPressure.RemoveParameter"></a>

### FluidPenetrationPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

