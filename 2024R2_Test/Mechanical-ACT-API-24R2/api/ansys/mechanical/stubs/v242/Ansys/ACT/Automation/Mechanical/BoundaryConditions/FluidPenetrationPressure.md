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
|---------------------------|-----------------------------------------------------------------------------------|
| `GetActivateAtLoadStep`   | Returns whether fluid penetration pressure is active at the stepNumber.           |
| `SetActivateAtLoadStep`   | Sets whether fluid penetration pressure is active at the stepNumber.              |
| `PromoteToNamedSelection` | Run the PromoteToNamedSelection action.                                           |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `ContactRegionSelection`        | Gets or sets contact region.                                                                                        |
| `StartPointLocation`            | Gets or sets the Start Point Location.                                                                              |
| `InternalObject`                | Gets the internal object. For advanced usage only.                                                                  |
| `NumberOfSegments`              | Gets or sets the NumberofSegments.                                                                                  |
| `Magnitude`                     | Gets the Magnitude.                                                                                                 |
| `PenetrationCriterion`          | Gets the PenetrationCriterion.                                                                                      |
| `GraphControlsXAxis`            | Gets or sets the GraphControlsXAxis.                                                                                |
| `GraphDisplaySelection`         | Gets or sets the GraphDisplaySelection which determines which variable to display in graph, Pressure or Criterion.  |
| `PenetrationCriterionDefinedBy` | Gets or sets the PenetrationCriterionDefinedBy which determines whether user define the criterion.                  |
| `PenetrationPathType`           | Gets or sets the PenetrationPathType which determines whether path is history dependent or history independent.     |
| `StartPointScopingType`         | Gets or set the StartPointScopingType which determines scoping method for stating point.                            |
| `IndependentVariable`           | Gets or set the IndependentVariable.                                                                                |
| `UpdatePressureType`            | Gets or sets the UpdatePressureType which determines when to update fluid pressure, each iteration or each substep. |
| `XYZFunctionCoordinateSystem`   | Gets or sets the XYZFunctionCoordinateSystem.                                                                       |
| `DataModelObjectCategory`       | Gets the current DataModelObject's category.                                                                        |
| `Suppressed`                    | Gets or sets the Suppressed.                                                                                        |
| `SharedRefBody`                 | Gets or sets the SharedRefBody.                                                                                     |
| `Children`                      | Gets the list of children.                                                                                          |
| `Comments`                      | Gets the list of associated comments.                                                                               |
| `Figures`                       | Gets the list of associated figures.                                                                                |
| `Images`                        | Gets the list of associated images.                                                                                 |
| `ReadOnly`                      | Gets or sets the ReadOnly.                                                                                          |
| `InternalObject`                | Gets the internal object. For advanced usage only.                                                                  |
| `Properties`                    | Gets the list of properties for this object.                                                                        |
| `VisibleProperties`             | Gets the list of properties that are visible for this object.                                                       |

<a id="property-detail"></a>

## Property detail

### *property* FluidPenetrationPressure.ContactRegionSelection *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Connections/ContactRegion.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets contact region.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.StartPointLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Start Point Location.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberofSegments.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.PenetrationCriterion *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PenetrationCriterion.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.GraphDisplaySelection *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.GraphDisplay](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/GraphDisplay.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.GraphDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphDisplaySelection which determines which variable to display in graph, Pressure or Criterion.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.PenetrationCriterionDefinedBy *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.CriterionDefinedByType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/CriterionDefinedByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.CriterionDefinedByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationCriterionDefinedBy which determines whether user define the criterion.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.PenetrationPathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.FluidPathType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/FluidPathType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.FluidPathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PenetrationPathType which determines whether path is history dependent or history independent.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.StartPointScopingType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.StartPointScopingType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/StartPointScopingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.StartPointScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set the StartPointScopingType which determines scoping method for stating point.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or set the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.UpdatePressureType *: [Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.PenetrationPressureUpdateType](../../../../Mechanical/DataModel/MechanicalEnums/FluidPenetrationPressure/PenetrationPressureUpdateType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.FluidPenetrationPressure.PenetrationPressureUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdatePressureType which determines when to update fluid pressure, each iteration or each substep.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* FluidPenetrationPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### FluidPenetrationPressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

Returns whether fluid penetration pressure is active at the stepNumber.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

Sets whether fluid penetration pressure is active at the stepNumber.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### FluidPenetrationPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

