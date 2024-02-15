# Pinch

### *class* Pinch

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Pinch.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GenerateMesh`](#Pinch.GenerateMesh)                       | Generate the Mesh.                                                                |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#Pinch.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Pinch.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Pinch.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Pinch.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Pinch.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Pinch.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Pinch.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Pinch.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Pinch.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Pinch.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Pinch.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Pinch.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Pinch.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Pinch.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Pinch.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AutoManualMode`](#Pinch.AutoManualMode)                                                                              | Gets the AutoManualMode.                                      |
| [`Tolerance`](#Pinch.Tolerance)                                                                                        | Gets or sets the Tolerance.                                   |
| [`MasterGeometry`](#Pinch.MasterGeometry)                                                                              | Gets or sets the MasterGeometry.                              |
| [`SlaveGeometry`](#Pinch.SlaveGeometry)                                                                                | Gets or sets the SlaveGeometry.                               |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#Pinch.ScopingMethod)                                                                                | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Pinch.Suppressed)                                                                                      | Gets or sets the Suppressed.                                  |
| [`Children`](#Pinch.Children)                                                                                          | Gets the list of children.                                    |
| [`Comments`](#Pinch.Comments)                                                                                          | Gets the list of associated comments.                         |
| [`Figures`](#Pinch.Figures)                                                                                            | Gets the list of associated figures.                          |
| [`Images`](#Pinch.Images)                                                                                              | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Pinch.Properties)                                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Pinch.VisibleProperties)                                                                        | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Pinch
```

## Property detail

### *property* Pinch.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.AutoManualMode *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AutoManualMode.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.Tolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Tolerance.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.MasterGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterGeometry.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.SlaveGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveGeometry.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Pinch.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Pinch.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### Pinch.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Pinch.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Pinch.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Pinch.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Pinch.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Pinch.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Pinch.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Pinch.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Pinch.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Pinch.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Pinch.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Pinch.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Pinch.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Pinch.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Pinch.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Pinch.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Pinch.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
