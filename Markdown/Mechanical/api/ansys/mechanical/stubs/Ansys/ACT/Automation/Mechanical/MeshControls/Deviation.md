# Deviation

### *class* Deviation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Deviation.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GenerateMesh`](#Deviation.GenerateMesh)                       | Generate the Mesh.                                                                |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#Deviation.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Deviation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Deviation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Deviation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Deviation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Deviation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Deviation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Deviation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Deviation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Deviation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Deviation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Deviation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Deviation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Deviation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Deviation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Tolerance`](#Deviation.Tolerance)                                                                                    | Tolerance property.                                           |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MeshSize`](#Deviation.MeshSize)                                                                                      | MeshSize property.                                            |
| [`NumberOfDivisions`](#Deviation.NumberOfDivisions)                                                                    | NumberOfDivisions property.                                   |
| [`ControlType`](../../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/ControlType.md#ControlType)              | Gets or sets the SagControlType.                              |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#Deviation.Location)                                                                                      | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#Deviation.ScopingMethod)                                                                            | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Deviation.Suppressed)                                                                                  | Gets or sets the Suppressed.                                  |
| [`Children`](#Deviation.Children)                                                                                      | Gets the list of children.                                    |
| [`Comments`](#Deviation.Comments)                                                                                      | Gets the list of associated comments.                         |
| [`Figures`](#Deviation.Figures)                                                                                        | Gets the list of associated figures.                          |
| [`Images`](#Deviation.Images)                                                                                          | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Deviation.Properties)                                                                                  | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Deviation.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Deviation
```

## Property detail

### *property* Deviation.Tolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Tolerance property.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.MeshSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

MeshSize property.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.NumberOfDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfDivisions property.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.ControlType *: Ansys.Mechanical.DataModel.Enums.DeviationControlType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SagControlType.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Deviation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Deviation.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### Deviation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Deviation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Deviation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Deviation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Deviation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Deviation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Deviation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Deviation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Deviation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Deviation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Deviation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Deviation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Deviation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Deviation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Deviation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Deviation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Deviation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
