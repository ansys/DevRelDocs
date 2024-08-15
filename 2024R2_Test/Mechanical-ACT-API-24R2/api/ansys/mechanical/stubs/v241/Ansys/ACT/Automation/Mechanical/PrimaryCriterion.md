# `PrimaryCriterion`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.PrimaryCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PrimaryCriterion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `EvaluateAllResults`      | Run the EvaluateAllResults action.                                                |
| `RenameBasedOnDefinition` | Run the RenameBasedOnDefinition action.                                           |
| `ClearGeneratedData`      | Run the ClearGeneratedData action.                                                |
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
|------------------------------|---------------------------------------------------------------|
| `CoordinateSystem`           | Gets or sets the Coordinate System.                           |
| `InternalObject`             | Gets the internal object. For advanced usage only.            |
| `DirectionX`                 | Gets or sets the DirectionX.                                  |
| `DirectionY`                 | Gets or sets the DirectionY.                                  |
| `DirectionZ`                 | Gets or sets the DirectionZ.                                  |
| `DiscretizationError`        | Gets or sets the DiscretizationError.                         |
| `Step`                       | Gets or sets the Step.                                        |
| `ModeNumber`                 | Gets or sets the ModeNumber.                                  |
| `MaximumFrequency`           | Gets or sets the MaximumFrequency.                            |
| `MinimumFrequency`           | Gets or sets the MinimumFrequency.                            |
| `Value`                      | Gets the Value.                                               |
| `BaseResult`                 | Gets or sets the BaseResult.                                  |
| `FrequencyRangeType`         | Gets or sets the FrequencyRangeType.                          |
| `FrequencyReduction`         | Gets or sets the FrequencyReduction.                          |
| `LocationMethod`             | Gets or sets the LocationMethod.                              |
| `ReferenceType`              | Gets or sets the ReferenceType.                               |
| `RobustFrequenciesReduction` | Gets or sets the RobustFrequenciesReduction.                  |
| `SpatialReduction`           | Gets or sets the SpatialReduction.                            |
| `SpatialReductionMethod`     | Gets or sets the SpatialReductionMethod.                      |
| `VectorReduction`            | Gets or sets the VectorReduction.                             |
| `BoundaryCondition`          | Gets or sets the BoundaryCondition.                           |
| `RemotePoint`                | Gets or sets the RemotePoint.                                 |
| `Location`                   | Gets or sets the Location.                                    |
| `DataModelObjectCategory`    | Gets the current DataModelObject's category.                  |
| `Suppressed`                 | Gets or sets the Suppressed.                                  |
| `Children`                   | Gets the list of children.                                    |
| `Comments`                   | Gets the list of associated comments.                         |
| `Figures`                    | Gets the list of associated figures.                          |
| `Images`                     | Gets the list of associated images.                           |
| `ReadOnly`                   | Gets or sets the ReadOnly.                                    |
| `InternalObject`             | Gets the internal object. For advanced usage only.            |
| `Properties`                 | Gets the list of properties for this object.                  |
| `VisibleProperties`          | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* PrimaryCriterion.CoordinateSystem *: Ansys.Mechanical.DataModel.Interfaces.ICoordinateSystemSelection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoCriterionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.DirectionX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DirectionX.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.DirectionY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DirectionY.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.DirectionZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DirectionZ.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.DiscretizationError *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DiscretizationError.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.Step *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Step.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.ModeNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeNumber.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.Value *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Value.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.BaseResult *: [Ansys.Mechanical.DataModel.Enums.BaseResultType](../../../Mechanical/DataModel/Enums/BaseResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.BaseResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseResult.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.FrequencyRangeType *: [Ansys.Mechanical.DataModel.Enums.CriterionFrequencyRangeType](../../../Mechanical/DataModel/Enums/CriterionFrequencyRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CriterionFrequencyRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRangeType.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.FrequencyReduction *: [Ansys.Mechanical.DataModel.Enums.FrequencyReductionType](../../../Mechanical/DataModel/Enums/FrequencyReductionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FrequencyReductionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyReduction.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.ReferenceType *: [Ansys.Mechanical.DataModel.Enums.VectorReductionReferenceType](../../../Mechanical/DataModel/Enums/VectorReductionReferenceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VectorReductionReferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceType.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.RobustFrequenciesReduction *: [Ansys.Mechanical.DataModel.Enums.RobustFrequenciesReductionType](../../../Mechanical/DataModel/Enums/RobustFrequenciesReductionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RobustFrequenciesReductionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RobustFrequenciesReduction.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.SpatialReduction *: [Ansys.Mechanical.DataModel.Enums.SpatialReductionType](../../../Mechanical/DataModel/Enums/SpatialReductionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpatialReductionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialReduction.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.SpatialReductionMethod *: [Ansys.Mechanical.DataModel.Enums.SpatialReductionMethodType](../../../Mechanical/DataModel/Enums/SpatialReductionMethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpatialReductionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialReductionMethod.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.VectorReduction *: [Ansys.Mechanical.DataModel.Enums.VectorReductionType](../../../Mechanical/DataModel/Enums/VectorReductionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.VectorReductionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VectorReduction.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.BoundaryCondition *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePoint.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* PrimaryCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### PrimaryCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### PrimaryCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

