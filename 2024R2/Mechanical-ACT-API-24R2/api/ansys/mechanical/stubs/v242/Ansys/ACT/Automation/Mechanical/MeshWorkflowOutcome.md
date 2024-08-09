# `MeshWorkflowOutcome`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshWorkflowOutcome

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelOutcome.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#MeshWorkflowOutcome.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddFigure`](#MeshWorkflowOutcome.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshWorkflowOutcome.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshWorkflowOutcome.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshWorkflowOutcome.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshWorkflowOutcome.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshWorkflowOutcome.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshWorkflowOutcome.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshWorkflowOutcome.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshWorkflowOutcome.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshWorkflowOutcome.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshWorkflowOutcome.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshWorkflowOutcome.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`OutcomeType`](#MeshWorkflowOutcome.OutcomeType)                         | Returns the type of the control.                              |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#MeshWorkflowOutcome.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Children`](#MeshWorkflowOutcome.Children)                               | Gets the list of children.                                    |
| [`Figures`](#MeshWorkflowOutcome.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MeshWorkflowOutcome.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MeshWorkflowOutcome.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MeshWorkflowOutcome.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowOutcome.OutcomeType"></a>

### *property* MeshWorkflowOutcome.OutcomeType *: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OutcomeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OutcomeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the type of the control.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.InternalObject"></a>

### *property* MeshWorkflowOutcome.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelOutcomeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.DataModelObjectCategory"></a>

### *property* MeshWorkflowOutcome.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Children"></a>

### *property* MeshWorkflowOutcome.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Figures"></a>

### *property* MeshWorkflowOutcome.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Images"></a>

### *property* MeshWorkflowOutcome.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshWorkflowOutcome.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Properties"></a>

### *property* MeshWorkflowOutcome.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.VisibleProperties"></a>

### *property* MeshWorkflowOutcome.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowOutcome.Delete"></a>

### MeshWorkflowOutcome.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetChildren"></a>

### MeshWorkflowOutcome.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflowOutcome.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.AddFigure"></a>

### MeshWorkflowOutcome.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.AddImage"></a>

### MeshWorkflowOutcome.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Activate"></a>

### MeshWorkflowOutcome.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CopyTo"></a>

### MeshWorkflowOutcome.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.Duplicate"></a>

### MeshWorkflowOutcome.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GroupAllSimilarChildren"></a>

### MeshWorkflowOutcome.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GroupSimilarObjects"></a>

### MeshWorkflowOutcome.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PropertyByName"></a>

### MeshWorkflowOutcome.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.PropertyByAPIName"></a>

### MeshWorkflowOutcome.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.CreateParameter"></a>

### MeshWorkflowOutcome.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.GetParameter"></a>

### MeshWorkflowOutcome.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowOutcome.RemoveParameter"></a>

### MeshWorkflowOutcome.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

