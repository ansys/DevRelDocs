# Materials

### *class* Materials

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Materials.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddMaterialCombination`](#Materials.AddMaterialCombination)             | Creates a new MaterialCombination                                                 |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddImportedTraceExternalData`](#Materials.AddImportedTraceExternalData) | For Standalone Mode only. Creates a new Imported Trace (External Data).           |
| [`Import`](#Materials.Import)                                             |                                                                                   |
| [`AddMaterialAssignment`](#Materials.AddMaterialAssignment)               | Creates a new MaterialAssignment                                                  |
| [`AddMaterialPlot`](#Materials.AddMaterialPlot)                           | Creates a new MaterialPlot                                                        |
| [`RefreshMaterials`](#Materials.RefreshMaterials)                         | Run the RefreshMaterials action.                                                  |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Materials.AddComment)                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](#Materials.AddFigure)                                       | Creates a new child Figure.                                                       |
| [`AddImage`](#Materials.AddImage)                                         | Creates a new child Image.                                                        |
| [`Activate`](#Materials.Activate)                                         | Activate the current object.                                                      |
| [`CopyTo`](#Materials.CopyTo)                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Materials.Duplicate)                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Materials.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Materials.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Materials.PropertyByName)                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Materials.PropertyByAPIName)                       | Get a property by its API name.                                                   |
| [`CreateParameter`](#Materials.CreateParameter)                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Materials.GetParameter)                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Materials.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MaterialAssignments`](#Materials.MaterialAssignments)                                                             | Gets the MaterialAssignments.                                 |
| [`MaterialCount`](#Materials.MaterialCount)                                                                         | Gets the MaterialCount.                                       |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Materials.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#Materials.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#Materials.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#Materials.Images)                                                                                       | Gets the list of associated images.                           |
| [`ReadOnly`](#Materials.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Materials.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Materials.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Materials
```

## Property detail

### *property* Materials.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Materials.MaterialAssignments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialAssignments.

<!-- !! processed by numpydoc !! -->

### *property* Materials.MaterialCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialCount.

<!-- !! processed by numpydoc !! -->

### *property* Materials.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Materials.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Materials.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Materials.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Materials.AddMaterialCombination()

Creates a new MaterialCombination

<!-- !! processed by numpydoc !! -->

### Materials.AddImportedTraceExternalData()

For Standalone Mode only. Creates a new Imported Trace (External Data).

<!-- !! processed by numpydoc !! -->

### Materials.Import(materialURI: System.String, format: [Ansys.Mechanical.DataModel.MechanicalEnums.Materials.ImportFormat](../../../Mechanical/DataModel/MechanicalEnums/Materials/ImportFormat.md#ImportFormat), settings: [Ansys.Mechanical.Materials.ImportSettings](../../../Mechanical/Materials/ImportSettings.md#ImportSettings))

<!-- !! processed by numpydoc !! -->

### Materials.AddMaterialAssignment()

Creates a new MaterialAssignment

<!-- !! processed by numpydoc !! -->

### Materials.AddMaterialPlot()

Creates a new MaterialPlot

<!-- !! processed by numpydoc !! -->

### Materials.RefreshMaterials()

Run the RefreshMaterials action.

<!-- !! processed by numpydoc !! -->

### Materials.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Materials.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Materials.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Materials.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Materials.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Materials.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Materials.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Materials.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Materials.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Materials.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Materials.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Materials.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Materials.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Materials.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Materials.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
