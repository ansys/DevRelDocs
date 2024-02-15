# Convection

### *class* Convection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Convection.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#Convection.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#Convection.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#Convection.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#Convection.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#Convection.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#Convection.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Convection.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Convection.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Convection.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#Convection.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#Convection.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Convection.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Convection.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Convection.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Convection.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Convection.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#Convection.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Convection.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Convection.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`FluidFlowEdge`](#Convection.FluidFlowEdge)                                                                           | Gets or sets the FluidFlowEdge.                               |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#Convection.NumberOfSegments)                                                                     | Gets or sets the NumberOfSegments.                            |
| [`FilmCoefficient`](#Convection.FilmCoefficient)                                                                       | Gets the FilmCoefficient.                                     |
| [`AmbientTemperature`](#Convection.AmbientTemperature)                                                                 | Gets the AmbientTemperature.                                  |
| [`RangeMaximum`](#Convection.RangeMaximum)                                                                             | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Convection.RangeMinimum)                                                                             | Gets or sets the RangeMinimum.                                |
| [`CoefficientType`](#Convection.CoefficientType)                                                                       | Gets or sets the CoefficientType.                             |
| [`ConvectionMatrix`](#Convection.ConvectionMatrix)                                                                     | Gets or sets the ConvectionMatrix.                            |
| [`EditDataFor`](#Convection.EditDataFor)                                                                               | Gets or sets the EditDataFor.                                 |
| [`GraphControlsXAxis`](../../../../Mechanical/DataModel/Enums/GraphControlsXAxis.md#GraphControlsXAxis)                | Gets or sets the GraphControlsXAxis.                          |
| [`IndependentVariable`](#Convection.IndependentVariable)                                                               | Gets or sets the IndependentVariable.                         |
| [`DisplayConnectionLines`](#Convection.DisplayConnectionLines)                                                         | Gets or sets the DisplayConnectionLines.                      |
| [`HasFluidFlow`](#Convection.HasFluidFlow)                                                                             | Gets or sets the HasFluidFlow.                                |
| [`XYZFunctionCoordinateSystem`](#Convection.XYZFunctionCoordinateSystem)                                               | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`FluidFlowSelection`](#Convection.FluidFlowSelection)                                                                 | Gets or sets the FluidFlowSelection.                          |
| [`Location`](#Convection.Location)                                                                                     | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#Convection.Suppressed)                                                                                 | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#Convection.SharedRefBody)                                                                           | Gets or sets the SharedRefBody.                               |
| [`Children`](#Convection.Children)                                                                                     | Gets the list of children.                                    |
| [`Comments`](#Convection.Comments)                                                                                     | Gets the list of associated comments.                         |
| [`Figures`](#Convection.Figures)                                                                                       | Gets the list of associated figures.                          |
| [`Images`](#Convection.Images)                                                                                         | Gets the list of associated images.                           |
| [`ReadOnly`](#Convection.ReadOnly)                                                                                     | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Convection.Properties)                                                                                 | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Convection.VisibleProperties)                                                                   | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import Convection
```

## Property detail

### *property* Convection.FluidFlowEdge *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidFlowEdge.

<!-- !! processed by numpydoc !! -->

### *property* Convection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Convection.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* Convection.FilmCoefficient *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the FilmCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* Convection.AmbientTemperature *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AmbientTemperature.

<!-- !! processed by numpydoc !! -->

### *property* Convection.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

### *property* Convection.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

### *property* Convection.CoefficientType *: [Ansys.Mechanical.DataModel.Enums.LoadVariationSubOption](../../../../Mechanical/DataModel/Enums/LoadVariationSubOption.md#LoadVariationSubOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoefficientType.

<!-- !! processed by numpydoc !! -->

### *property* Convection.ConvectionMatrix *: [Ansys.Mechanical.DataModel.Enums.DiagonalOrConsistent](../../../../Mechanical/DataModel/Enums/DiagonalOrConsistent.md#DiagonalOrConsistent) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConvectionMatrix.

<!-- !! processed by numpydoc !! -->

### *property* Convection.EditDataFor *: [Ansys.Mechanical.DataModel.Enums.ConvectionTableSelection](../../../../Mechanical/DataModel/Enums/ConvectionTableSelection.md#ConvectionTableSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EditDataFor.

<!-- !! processed by numpydoc !! -->

### *property* Convection.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

### *property* Convection.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* Convection.DisplayConnectionLines *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayConnectionLines.

<!-- !! processed by numpydoc !! -->

### *property* Convection.HasFluidFlow *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HasFluidFlow.

<!-- !! processed by numpydoc !! -->

### *property* Convection.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Convection.FluidFlowSelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidFlowSelection.

<!-- !! processed by numpydoc !! -->

### *property* Convection.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Convection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Convection.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Convection.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* Convection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Convection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Convection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Convection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Convection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Convection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Convection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Convection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Convection.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Convection.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Convection.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Convection.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Convection.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Convection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Convection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Convection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Convection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Convection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Convection.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Convection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Convection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Convection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Convection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Convection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Convection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Convection.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Convection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Convection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Convection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
