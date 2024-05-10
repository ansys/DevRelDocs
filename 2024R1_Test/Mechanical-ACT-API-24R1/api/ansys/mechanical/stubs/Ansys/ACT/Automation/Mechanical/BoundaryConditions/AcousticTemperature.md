# AcousticTemperature

<a id="AcousticTemperature"></a>

### *class* AcousticTemperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AcousticTemperature.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#AcousticTemperature.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#AcousticTemperature.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#AcousticTemperature.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#AcousticTemperature.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#AcousticTemperature.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AcousticTemperature.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticTemperature.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticTemperature.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticTemperature.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#AcousticTemperature.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#AcousticTemperature.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticTemperature.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticTemperature.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticTemperature.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticTemperature.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticTemperature.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticTemperature.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticTemperature.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticTemperature.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`NumberOfSegments`](#AcousticTemperature.NumberOfSegments)                                                            | Gets or sets the NumberOfSegments.                            |
| [`LoadVectorNumber`](#AcousticTemperature.LoadVectorNumber)                                                            | Gets or sets the LoadVectorNumber.                            |
| [`Magnitude`](#AcousticTemperature.Magnitude)                                                                          | Gets or sets the Magnitude.                                   |
| [`RangeMaximum`](#AcousticTemperature.RangeMaximum)                                                                    | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#AcousticTemperature.RangeMinimum)                                                                    | Gets or sets the RangeMinimum.                                |
| [`DefineBy`](#AcousticTemperature.DefineBy)                                                                            | Gets the DefineBy.                                            |
| [`GraphControlsXAxis`](./../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`LoadVectorAssignment`](./../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment)          | Gets or sets the LoadVectorAssignment.                        |
| [`ShellFace`](#AcousticTemperature.ShellFace)                                                                          | Gets or sets the ShellFace.                                   |
| [`IndependentVariable`](#AcousticTemperature.IndependentVariable)                                                      | Gets or sets the IndependentVariable.                         |
| [`XYZFunctionCoordinateSystem`](#AcousticTemperature.XYZFunctionCoordinateSystem)                                      | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`TableAssignment`](#AcousticTemperature.TableAssignment)                                                              | Gets or sets the TableAssignment.                             |
| [`Location`](#AcousticTemperature.Location)                                                                            | Gets or sets the Location.                                    |
| [`Suppressed`](#AcousticTemperature.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticTemperature.SharedRefBody)                                                                  | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticTemperature.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#AcousticTemperature.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#AcousticTemperature.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#AcousticTemperature.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticTemperature.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticTemperature.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticTemperature.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import AcousticTemperature
```

<a id="property-detail"></a>

## Property detail

<a id="AcousticTemperature.InternalObject"></a>

### *property* AcousticTemperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.DataModelObjectCategory"></a>

### *property* AcousticTemperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.NumberOfSegments"></a>

### *property* AcousticTemperature.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.LoadVectorNumber"></a>

### *property* AcousticTemperature.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Magnitude"></a>

### *property* AcousticTemperature.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](./../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.RangeMaximum"></a>

### *property* AcousticTemperature.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.RangeMinimum"></a>

### *property* AcousticTemperature.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.DefineBy"></a>

### *property* AcousticTemperature.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](./../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GraphControlsXAxis"></a>

### *property* AcousticTemperature.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](./../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.LoadVectorAssignment"></a>

### *property* AcousticTemperature.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](./../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.ShellFace"></a>

### *property* AcousticTemperature.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](./../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.IndependentVariable"></a>

### *property* AcousticTemperature.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](./../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.XYZFunctionCoordinateSystem"></a>

### *property* AcousticTemperature.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](./../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.TableAssignment"></a>

### *property* AcousticTemperature.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](./../Table.md#Table) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Location"></a>

### *property* AcousticTemperature.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Suppressed"></a>

### *property* AcousticTemperature.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.SharedRefBody"></a>

### *property* AcousticTemperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](./../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Children"></a>

### *property* AcousticTemperature.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Comments"></a>

### *property* AcousticTemperature.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Figures"></a>

### *property* AcousticTemperature.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Images"></a>

### *property* AcousticTemperature.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.ReadOnly"></a>

### *property* AcousticTemperature.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticTemperature.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Properties"></a>

### *property* AcousticTemperature.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.VisibleProperties"></a>

### *property* AcousticTemperature.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticTemperature.GetActivateAtLoadStep"></a>

### AcousticTemperature.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.SetActivateAtLoadStep"></a>

### AcousticTemperature.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetComponentActivateAtLoadStep"></a>

### AcousticTemperature.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.SetComponentActivateAtLoadStep"></a>

### AcousticTemperature.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.PromoteToNamedSelection"></a>

### AcousticTemperature.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Delete"></a>

### AcousticTemperature.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetChildren"></a>

### AcousticTemperature.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticTemperature.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.AddComment"></a>

### AcousticTemperature.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.AddFigure"></a>

### AcousticTemperature.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.AddImage"></a>

### AcousticTemperature.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Activate"></a>

### AcousticTemperature.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.CopyTo"></a>

### AcousticTemperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.Duplicate"></a>

### AcousticTemperature.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GroupAllSimilarChildren"></a>

### AcousticTemperature.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GroupSimilarObjects"></a>

### AcousticTemperature.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.PropertyByName"></a>

### AcousticTemperature.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.PropertyByAPIName"></a>

### AcousticTemperature.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.CreateParameter"></a>

### AcousticTemperature.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.GetParameter"></a>

### AcousticTemperature.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticTemperature.RemoveParameter"></a>

### AcousticTemperature.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
