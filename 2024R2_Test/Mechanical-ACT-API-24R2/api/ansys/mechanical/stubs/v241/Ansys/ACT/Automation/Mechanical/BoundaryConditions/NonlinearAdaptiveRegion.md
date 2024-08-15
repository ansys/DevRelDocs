# `NonlinearAdaptiveRegion`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NonlinearAdaptiveRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NonlinearAdaptiveRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
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
|---------------------------|---------------------------------------------------------------|
| `TimeRange`               | Gets or sets the TimeRange.                                   |
| `CheckAtValue`            | Gets or sets the CheckAtValue.                                |
| `HexDomTimeRange`         | Gets or sets the HexDomTimeRange.                             |
| `HexDomCheckAtValue`      | Gets or sets the HexDomCheckAtValue.                          |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `BufferElements`          | Gets or sets the BufferElements.                              |
| `BufferLayers`            | Gets or sets the BufferLayers.                                |
| `RemeshLayerEnd`          | Gets or sets the RemeshLayerEnd.                              |
| `RemeshLayerFrequency`    | Gets or sets the RemeshLayerFrequency.                        |
| `RemeshLayerStart`        | Gets or sets the RemeshLayerStart.                            |
| `EnergyCoefficient`       | Gets or sets the EnergyCoefficient.                           |
| `JacobianRatioValue`      | Gets or sets the JacobianRatioValue.                          |
| `SkewnessValue`           | Gets or sets the SkewnessValue.                               |
| `LengthX`                 | Gets or sets the LengthX.                                     |
| `LengthY`                 | Gets or sets the LengthY.                                     |
| `LengthZ`                 | Gets or sets the LengthZ.                                     |
| `HexDomEndTime`           | Gets or sets the HexDomEndTime.                               |
| `HexDomStartTime`         | Gets or sets the HexDomStartTime.                             |
| `MaximumCornerAngle`      | Gets or sets the MaximumCornerAngle.                          |
| `EndTime`                 | Gets or sets the EndTime.                                     |
| `StartTime`               | Gets or sets the StartTime.                                   |
| `Criterion`               | Gets or sets the Criterion.                                   |
| `HexDomCheckAt`           | Gets or sets the HexDomCheckAt.                               |
| `Option`                  | Gets or sets the Option.                                      |
| `CheckAt`                 | Gets or sets the CheckAt.                                     |
| `Suppressed`              | Gets or sets the Suppressed.                                  |
| `CoordinateSystem`        | Gets or sets the CoordinateSystem.                            |
| `Location`                | Gets or sets the Location.                                    |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* NonlinearAdaptiveRegion.TimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeRange.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.CheckAtValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAtValue.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomTimeRange *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityTimeRange.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityTimeRange) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomTimeRange.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomCheckAtValue *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAtValue.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNonlinearAdaptivityAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.BufferElements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferElements.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.BufferLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BufferLayers.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.RemeshLayerEnd *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerEnd.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.RemeshLayerFrequency *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerFrequency.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.RemeshLayerStart *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshLayerStart.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.EnergyCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.JacobianRatioValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JacobianRatioValue.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.SkewnessValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SkewnessValue.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.LengthX *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthX.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.LengthY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthY.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.LengthZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthZ.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomEndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomEndTime.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomStartTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomStartTime.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.MaximumCornerAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumCornerAngle.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.EndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndTime.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.StartTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartTime.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Criterion *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityCriterionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityCriterionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Criterion.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.HexDomCheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HexDomCheckAt.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Option *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityOptionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Option.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.CheckAt *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CheckAt.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NonlinearAdaptiveRegion.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### NonlinearAdaptiveRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NonlinearAdaptiveRegion.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

