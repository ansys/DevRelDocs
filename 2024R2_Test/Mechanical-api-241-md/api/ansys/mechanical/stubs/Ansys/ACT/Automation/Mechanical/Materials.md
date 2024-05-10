<a id="materials"></a>

# Materials

<a id="Materials"></a>

### *class* Materials

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Materials.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`AddMaterialCombination`](#Materials.AddMaterialCombination)             | Creates a new MaterialCombination                                                 |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddImportedTraceExternalData`](#Materials.AddImportedTraceExternalData) | Creates a new Imported Trace (External Data).                                     |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Materials
```

<a id="property-detail"></a>

## Property detail

<a id="Materials.InternalObject"></a>

### *property* Materials.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Materials.MaterialAssignments"></a>

### *property* Materials.MaterialAssignments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialAssignments.

<!-- !! processed by numpydoc !! -->

<a id="Materials.MaterialCount"></a>

### *property* Materials.MaterialCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialCount.

<!-- !! processed by numpydoc !! -->

<a id="Materials.DataModelObjectCategory"></a>

### *property* Materials.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Children"></a>

### *property* Materials.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Comments"></a>

### *property* Materials.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Figures"></a>

### *property* Materials.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Images"></a>

### *property* Materials.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Materials.ReadOnly"></a>

### *property* Materials.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Materials.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Properties"></a>

### *property* Materials.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Materials.VisibleProperties"></a>

### *property* Materials.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Materials.AddMaterialCombination"></a>

### Materials.AddMaterialCombination()

Creates a new MaterialCombination

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddImportedTraceExternalData"></a>

### Materials.AddImportedTraceExternalData()

Creates a new Imported Trace (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Materials.Import"></a>

### Materials.Import(materialURI: System.String, format: [Ansys.Mechanical.DataModel.MechanicalEnums.Materials.ImportFormat](../../../Mechanical/DataModel/MechanicalEnums/Materials/ImportFormat.md#ImportFormat), settings: [Ansys.Mechanical.Materials.ImportSettings](../../../Mechanical/Materials/ImportSettings.md#ImportSettings))

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddMaterialAssignment"></a>

### Materials.AddMaterialAssignment()

Creates a new MaterialAssignment

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddMaterialPlot"></a>

### Materials.AddMaterialPlot()

Creates a new MaterialPlot

<!-- !! processed by numpydoc !! -->

<a id="Materials.RefreshMaterials"></a>

### Materials.RefreshMaterials()

Run the RefreshMaterials action.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetChildren"></a>

### Materials.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Materials.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddComment"></a>

### Materials.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddFigure"></a>

### Materials.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddImage"></a>

### Materials.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Activate"></a>

### Materials.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Materials.CopyTo"></a>

### Materials.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Duplicate"></a>

### Materials.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GroupAllSimilarChildren"></a>

### Materials.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GroupSimilarObjects"></a>

### Materials.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Materials.PropertyByName"></a>

### Materials.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Materials.PropertyByAPIName"></a>

### Materials.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Materials.CreateParameter"></a>

### Materials.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetParameter"></a>

### Materials.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.RemoveParameter"></a>

### Materials.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
