# DistributedMass

### *class* DistributedMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a DistributedMass.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#DistributedMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#DistributedMass.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#DistributedMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DistributedMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DistributedMass.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#DistributedMass.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#DistributedMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DistributedMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DistributedMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DistributedMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DistributedMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DistributedMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#DistributedMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DistributedMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DistributedMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ElementAPDLName`](#DistributedMass.ElementAPDLName)                                                               | Gets or sets the ElementAPDLName.                             |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`MassPerUnitArea`](#DistributedMass.MassPerUnitArea)                                                               | Gets or sets the MassPerUnitArea.                             |
| [`TotalMass`](#DistributedMass.TotalMass)                                                                           | Gets or sets the TotalMass.                                   |
| [`MassType`](#DistributedMass.MassType)                                                                             | Gets or sets the MassType.                                    |
| [`Suppressed`](#DistributedMass.Suppressed)                                                                         | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`RemotePoint`](RemotePoint.md#RemotePoint)                                                                         | Gets the remote point associated to the point mass.           |
| [`IsDistributedMass`](#DistributedMass.IsDistributedMass)                                                           | Gets the IsDistributedMass.                                   |
| [`Location`](#DistributedMass.Location)                                                                             | Gets or sets the Geometry.                                    |
| [`Children`](#DistributedMass.Children)                                                                             | Gets the list of children.                                    |
| [`Comments`](#DistributedMass.Comments)                                                                             | Gets the list of associated comments.                         |
| [`Figures`](#DistributedMass.Figures)                                                                               | Gets the list of associated figures.                          |
| [`Images`](#DistributedMass.Images)                                                                                 | Gets the list of associated images.                           |
| [`ReadOnly`](#DistributedMass.ReadOnly)                                                                             | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#DistributedMass.Properties)                                                                         | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#DistributedMass.VisibleProperties)                                                           | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import DistributedMass
```

## Property detail

### *property* DistributedMass.ElementAPDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementAPDLName.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.MassPerUnitArea *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassPerUnitArea.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.TotalMass *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TotalMass.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.MassType *: [Ansys.Mechanical.DataModel.Enums.DistributedMassInputType](../../../Mechanical/DataModel/Enums/DistributedMassInputType.md#DistributedMassInputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassType.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.IsDistributedMass *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* DistributedMass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### DistributedMass.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### DistributedMass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### DistributedMass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DistributedMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### DistributedMass.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### DistributedMass.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### DistributedMass.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### DistributedMass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### DistributedMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### DistributedMass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### DistributedMass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### DistributedMass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### DistributedMass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### DistributedMass.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### DistributedMass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### DistributedMass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### DistributedMass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
