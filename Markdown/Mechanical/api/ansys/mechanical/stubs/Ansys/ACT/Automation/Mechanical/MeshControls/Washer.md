# Washer

### *class* Washer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Washer.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GenerateMesh`](#Washer.GenerateMesh)                       | Generate the Mesh.                                                                |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#Washer.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#Washer.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Washer.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Washer.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Washer.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Washer.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Washer.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Washer.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Washer.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Washer.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Washer.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Washer.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Washer.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Washer.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Washer.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`NumberOfWasherLayers`](#Washer.NumberOfWasherLayers)                                                                 | NumberOfWasherLayers property.                                |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`WasherMethod`](#Washer.WasherMethod)                                                                                 | WasherMethod property.                                        |
| [`WasherType`](#Washer.WasherType)                                                                                     | WasherType property.                                          |
| [`NumberOfWasherDivisions`](#Washer.NumberOfWasherDivisions)                                                           | NumberOfWasherDivisions property.                             |
| [`MinimumNumberOfWasherDivisions`](#Washer.MinimumNumberOfWasherDivisions)                                             | MinimumNumberOfWasherDivisions property.                      |
| [`FactorOfDiameter`](#Washer.FactorOfDiameter)                                                                         | FactorOfDiameter property.                                    |
| [`WasherLayerHeight`](#Washer.WasherLayerHeight)                                                                       | WasherLayerHeight property.                                   |
| [`GrowthRate`](#Washer.GrowthRate)                                                                                     | GrowthRate property.                                          |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`NamedSelection`](../NamedSelection.md#NamedSelection)                                                                | Gets or sets the NamedSelection.                              |
| [`Location`](#Washer.Location)                                                                                         | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#Washer.ScopingMethod)                                                                               | Gets or sets the ScopingMethod.                               |
| [`Suppressed`](#Washer.Suppressed)                                                                                     | Gets or sets the Suppressed.                                  |
| [`Children`](#Washer.Children)                                                                                         | Gets the list of children.                                    |
| [`Comments`](#Washer.Comments)                                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#Washer.Figures)                                                                                           | Gets the list of associated figures.                          |
| [`Images`](#Washer.Images)                                                                                             | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Washer.Properties)                                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Washer.VisibleProperties)                                                                       | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.MeshControls import Washer
```

## Property detail

### *property* Washer.NumberOfWasherLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfWasherLayers property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.WasherMethod *: Ansys.Mechanical.DataModel.Enums.WasherMethod | [None](https://docs.python.org/3/library/constants.html#None)*

WasherMethod property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.WasherType *: Ansys.Mechanical.DataModel.Enums.WasherType | [None](https://docs.python.org/3/library/constants.html#None)*

WasherType property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.NumberOfWasherDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.MinimumNumberOfWasherDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

MinimumNumberOfWasherDivisions property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.FactorOfDiameter *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

FactorOfDiameter property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.WasherLayerHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

WasherLayerHeight property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.GrowthRate *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

GrowthRate property.

<!-- !! processed by numpydoc !! -->

### *property* Washer.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Washer.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#NamedSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Washer.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Washer.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Washer.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Washer.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Washer.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Washer.GenerateMesh()

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

### Washer.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### Washer.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Washer.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Washer.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Washer.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Washer.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Washer.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Washer.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Washer.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Washer.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Washer.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Washer.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Washer.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Washer.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Washer.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Washer.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Washer.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
