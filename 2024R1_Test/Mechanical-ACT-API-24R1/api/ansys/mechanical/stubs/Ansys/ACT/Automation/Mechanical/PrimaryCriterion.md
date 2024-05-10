# PrimaryCriterion

<a id="PrimaryCriterion"></a>

### *class* PrimaryCriterion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PrimaryCriterion.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`EvaluateAllResults`](#PrimaryCriterion.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`RenameBasedOnDefinition`](#PrimaryCriterion.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`ClearGeneratedData`](#PrimaryCriterion.ClearGeneratedData)           | Run the ClearGeneratedData action.                                                |
| [`Delete`](#PrimaryCriterion.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PrimaryCriterion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PrimaryCriterion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PrimaryCriterion.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PrimaryCriterion.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PrimaryCriterion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PrimaryCriterion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PrimaryCriterion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PrimaryCriterion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PrimaryCriterion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PrimaryCriterion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PrimaryCriterion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PrimaryCriterion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PrimaryCriterion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CoordinateSystem`](./../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the Coordinate System.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DirectionX`](#PrimaryCriterion.DirectionX)                                                                        | Gets or sets the DirectionX.                                  |
| [`DirectionY`](#PrimaryCriterion.DirectionY)                                                                        | Gets or sets the DirectionY.                                  |
| [`DirectionZ`](#PrimaryCriterion.DirectionZ)                                                                        | Gets or sets the DirectionZ.                                  |
| [`DiscretizationError`](#PrimaryCriterion.DiscretizationError)                                                      | Gets or sets the DiscretizationError.                         |
| [`Step`](#PrimaryCriterion.Step)                                                                                    | Gets or sets the Step.                                        |
| [`ModeNumber`](#PrimaryCriterion.ModeNumber)                                                                        | Gets or sets the ModeNumber.                                  |
| [`MaximumFrequency`](#PrimaryCriterion.MaximumFrequency)                                                            | Gets or sets the MaximumFrequency.                            |
| [`MinimumFrequency`](#PrimaryCriterion.MinimumFrequency)                                                            | Gets or sets the MinimumFrequency.                            |
| [`Value`](#PrimaryCriterion.Value)                                                                                  | Gets the Value.                                               |
| [`BaseResult`](#PrimaryCriterion.BaseResult)                                                                        | Gets or sets the BaseResult.                                  |
| [`FrequencyRangeType`](./../../../Mechanical/DataModel/Enums/FrequencyRangeType.md#FrequencyRangeType)                | Gets or sets the FrequencyRangeType.                          |
| [`FrequencyReduction`](#PrimaryCriterion.FrequencyReduction)                                                        | Gets or sets the FrequencyReduction.                          |
| [`LocationMethod`](#PrimaryCriterion.LocationMethod)                                                                | Gets or sets the LocationMethod.                              |
| [`ReferenceType`](#PrimaryCriterion.ReferenceType)                                                                  | Gets or sets the ReferenceType.                               |
| [`RobustFrequenciesReduction`](#PrimaryCriterion.RobustFrequenciesReduction)                                        | Gets or sets the RobustFrequenciesReduction.                  |
| [`SpatialReduction`](#PrimaryCriterion.SpatialReduction)                                                            | Gets or sets the SpatialReduction.                            |
| [`SpatialReductionMethod`](#PrimaryCriterion.SpatialReductionMethod)                                                | Gets or sets the SpatialReductionMethod.                      |
| [`VectorReduction`](#PrimaryCriterion.VectorReduction)                                                              | Gets or sets the VectorReduction.                             |
| [`BoundaryCondition`](#PrimaryCriterion.BoundaryCondition)                                                          | Gets or sets the BoundaryCondition.                           |
| [`RemotePoint`](RemotePoint.md#RemotePoint)                                                                         | Gets or sets the RemotePoint.                                 |
| [`Location`](#PrimaryCriterion.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#PrimaryCriterion.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`Children`](#PrimaryCriterion.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#PrimaryCriterion.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#PrimaryCriterion.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#PrimaryCriterion.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#PrimaryCriterion.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PrimaryCriterion.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PrimaryCriterion.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import PrimaryCriterion
```

<a id="property-detail"></a>

## Property detail

<a id="PrimaryCriterion.CoordinateSystem"></a>

### *property* PrimaryCriterion.CoordinateSystem *: Ansys.Mechanical.DataModel.Interfaces.ICoordinateSystemSelection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.InternalObject"></a>

### *property* PrimaryCriterion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoCriterionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DirectionX"></a>

### *property* PrimaryCriterion.DirectionX *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DirectionX.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DirectionY"></a>

### *property* PrimaryCriterion.DirectionY *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DirectionY.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DirectionZ"></a>

### *property* PrimaryCriterion.DirectionZ *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DirectionZ.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DiscretizationError"></a>

### *property* PrimaryCriterion.DiscretizationError *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DiscretizationError.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Step"></a>

### *property* PrimaryCriterion.Step *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Step.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ModeNumber"></a>

### *property* PrimaryCriterion.ModeNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeNumber.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.MaximumFrequency"></a>

### *property* PrimaryCriterion.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.MinimumFrequency"></a>

### *property* PrimaryCriterion.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Value"></a>

### *property* PrimaryCriterion.Value *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Value.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.BaseResult"></a>

### *property* PrimaryCriterion.BaseResult *: [Ansys.Mechanical.DataModel.Enums.BaseResultType](./../../../Mechanical/DataModel/Enums/BaseResultType.md#BaseResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseResult.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.FrequencyRangeType"></a>

### *property* PrimaryCriterion.FrequencyRangeType *: [Ansys.Mechanical.DataModel.Enums.CriterionFrequencyRangeType](./../../../Mechanical/DataModel/Enums/CriterionFrequencyRangeType.md#CriterionFrequencyRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyRangeType.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.FrequencyReduction"></a>

### *property* PrimaryCriterion.FrequencyReduction *: [Ansys.Mechanical.DataModel.Enums.FrequencyReductionType](./../../../Mechanical/DataModel/Enums/FrequencyReductionType.md#FrequencyReductionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencyReduction.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.LocationMethod"></a>

### *property* PrimaryCriterion.LocationMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LocationMethod.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ReferenceType"></a>

### *property* PrimaryCriterion.ReferenceType *: [Ansys.Mechanical.DataModel.Enums.VectorReductionReferenceType](./../../../Mechanical/DataModel/Enums/VectorReductionReferenceType.md#VectorReductionReferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceType.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.RobustFrequenciesReduction"></a>

### *property* PrimaryCriterion.RobustFrequenciesReduction *: [Ansys.Mechanical.DataModel.Enums.RobustFrequenciesReductionType](./../../../Mechanical/DataModel/Enums/RobustFrequenciesReductionType.md#RobustFrequenciesReductionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RobustFrequenciesReduction.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.SpatialReduction"></a>

### *property* PrimaryCriterion.SpatialReduction *: [Ansys.Mechanical.DataModel.Enums.SpatialReductionType](./../../../Mechanical/DataModel/Enums/SpatialReductionType.md#SpatialReductionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialReduction.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.SpatialReductionMethod"></a>

### *property* PrimaryCriterion.SpatialReductionMethod *: [Ansys.Mechanical.DataModel.Enums.SpatialReductionMethodType](./../../../Mechanical/DataModel/Enums/SpatialReductionMethodType.md#SpatialReductionMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpatialReductionMethod.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.VectorReduction"></a>

### *property* PrimaryCriterion.VectorReduction *: [Ansys.Mechanical.DataModel.Enums.VectorReductionType](./../../../Mechanical/DataModel/Enums/VectorReductionType.md#VectorReductionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VectorReduction.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.BoundaryCondition"></a>

### *property* PrimaryCriterion.BoundaryCondition *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.RemotePoint"></a>

### *property* PrimaryCriterion.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemotePoint.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Location"></a>

### *property* PrimaryCriterion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.DataModelObjectCategory"></a>

### *property* PrimaryCriterion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Suppressed"></a>

### *property* PrimaryCriterion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Children"></a>

### *property* PrimaryCriterion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Comments"></a>

### *property* PrimaryCriterion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Figures"></a>

### *property* PrimaryCriterion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Images"></a>

### *property* PrimaryCriterion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ReadOnly"></a>

### *property* PrimaryCriterion.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PrimaryCriterion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Properties"></a>

### *property* PrimaryCriterion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.VisibleProperties"></a>

### *property* PrimaryCriterion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PrimaryCriterion.EvaluateAllResults"></a>

### PrimaryCriterion.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.RenameBasedOnDefinition"></a>

### PrimaryCriterion.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.ClearGeneratedData"></a>

### PrimaryCriterion.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Delete"></a>

### PrimaryCriterion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetChildren"></a>

### PrimaryCriterion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PrimaryCriterion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.AddComment"></a>

### PrimaryCriterion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.AddFigure"></a>

### PrimaryCriterion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.AddImage"></a>

### PrimaryCriterion.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Activate"></a>

### PrimaryCriterion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.CopyTo"></a>

### PrimaryCriterion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.Duplicate"></a>

### PrimaryCriterion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GroupAllSimilarChildren"></a>

### PrimaryCriterion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GroupSimilarObjects"></a>

### PrimaryCriterion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.PropertyByName"></a>

### PrimaryCriterion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.PropertyByAPIName"></a>

### PrimaryCriterion.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.CreateParameter"></a>

### PrimaryCriterion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.GetParameter"></a>

### PrimaryCriterion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PrimaryCriterion.RemoveParameter"></a>

### PrimaryCriterion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
