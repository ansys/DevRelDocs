# `ThermalCondition`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ThermalCondition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ThermalCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ThermalCondition.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ThermalCondition.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#ThermalCondition.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#ThermalCondition.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#ThermalCondition.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#ThermalCondition.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ThermalCondition.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#ThermalCondition.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#ThermalCondition.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#ThermalCondition.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`GetChildren`](#ThermalCondition.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#ThermalCondition.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#ThermalCondition.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ThermalCondition.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ThermalCondition.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ThermalCondition.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ThermalCondition.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#ThermalCondition.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ThermalCondition.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#ThermalCondition.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`SetComponentActivateAtLoadStep`](#ThermalCondition.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ThermalCondition.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#ThermalCondition.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ThermalCondition.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#ThermalCondition.DefineBy)                                       | Gets the DefineBy.                                            |
| [`Figures`](#ThermalCondition.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#ThermalCondition.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`Images`](#ThermalCondition.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#ThermalCondition.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#ThermalCondition.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`LoadVectorAssignment`](#ThermalCondition.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                        |
| [`LoadVectorNumber`](#ThermalCondition.LoadVectorNumber)                       | Gets or sets the LoadVectorNumber.                            |
| [`Location`](#ThermalCondition.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#ThermalCondition.Magnitude)                                     | Gets or sets the Magnitude.                                   |
| [`NumberOfSegments`](#ThermalCondition.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#ThermalCondition.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#ThermalCondition.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#ThermalCondition.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#ThermalCondition.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#ThermalCondition.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`ShellFace`](#ThermalCondition.ShellFace)                                     | Gets or sets the ShellFace.                                   |
| [`Suppressed`](#ThermalCondition.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TableAssignment`](#ThermalCondition.TableAssignment)                                                                                                                      | Gets or sets the TableAssignment.                             |
| [`VisibleProperties`](#ThermalCondition.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XYZFunctionCoordinateSystem`](#ThermalCondition.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |

<a id="property-detail"></a>

## Property detail

<a id="ThermalCondition.Children"></a>

### *property* ThermalCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Comments"></a>

### *property* ThermalCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.DataModelObjectCategory"></a>

### *property* ThermalCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.DefineBy"></a>

### *property* ThermalCondition.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Figures"></a>

### *property* ThermalCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GraphControlsXAxis"></a>

### *property* ThermalCondition.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Images"></a>

### *property* ThermalCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.IndependentVariable"></a>

### *property* ThermalCondition.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.InternalObject"></a>

### *property* ThermalCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.LoadVectorAssignment"></a>

### *property* ThermalCondition.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.LoadVectorNumber"></a>

### *property* ThermalCondition.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Location"></a>

### *property* ThermalCondition.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Magnitude"></a>

### *property* ThermalCondition.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.NumberOfSegments"></a>

### *property* ThermalCondition.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Properties"></a>

### *property* ThermalCondition.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.RangeMaximum"></a>

### *property* ThermalCondition.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.RangeMinimum"></a>

### *property* ThermalCondition.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.ReadOnly"></a>

### *property* ThermalCondition.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.SharedRefBody"></a>

### *property* ThermalCondition.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.ShellFace"></a>

### *property* ThermalCondition.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Suppressed"></a>

### *property* ThermalCondition.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.TableAssignment"></a>

### *property* ThermalCondition.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Table.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Table) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.VisibleProperties"></a>

### *property* ThermalCondition.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.XYZFunctionCoordinateSystem"></a>

### *property* ThermalCondition.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ThermalCondition.Activate"></a>

### ThermalCondition.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.AddComment"></a>

### ThermalCondition.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.AddFigure"></a>

### ThermalCondition.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.AddImage"></a>

### ThermalCondition.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.CopyTo"></a>

### ThermalCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.CreateParameter"></a>

### ThermalCondition.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Delete"></a>

### ThermalCondition.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.Duplicate"></a>

### ThermalCondition.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetActivateAtLoadStep"></a>

### ThermalCondition.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetChildren"></a>

### ThermalCondition.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetComponentActivateAtLoadStep"></a>

### ThermalCondition.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GetParameter"></a>

### ThermalCondition.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GroupAllSimilarChildren"></a>

### ThermalCondition.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.GroupSimilarObjects"></a>

### ThermalCondition.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.PromoteToNamedSelection"></a>

### ThermalCondition.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.PropertyByAPIName"></a>

### ThermalCondition.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.PropertyByName"></a>

### ThermalCondition.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.RemoveParameter"></a>

### ThermalCondition.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.SetActivateAtLoadStep"></a>

### ThermalCondition.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="ThermalCondition.SetComponentActivateAtLoadStep"></a>

### ThermalCondition.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

