<a id="nodemerge"></a>

# NodeMerge

<a id="NodeMerge"></a>

### *class* NodeMerge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a NodeMerge.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Generate`](#NodeMerge.Generate)                               | Run the Generate action.                                                          |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#NodeMerge.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#NodeMerge.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodeMerge.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodeMerge.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NodeMerge.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#NodeMerge.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#NodeMerge.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodeMerge.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodeMerge.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodeMerge.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodeMerge.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodeMerge.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#NodeMerge.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NodeMerge.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodeMerge.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ToleranceValue`](#NodeMerge.ToleranceValue)                                                                       | Gets/ Sets the ToleranceValue.                                |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ScopingMethod`](#NodeMerge.ScopingMethod)                                                                         | ScopingMethod property.                                       |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`MasterBodies`](#NodeMerge.MasterBodies)                                                                           | Gets the MasterBodies.                                        |
| [`SlaveBodies`](#NodeMerge.SlaveBodies)                                                                             | Gets the SlaveBodies.                                         |
| [`ToleranceType`](../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                               |
| [`Suppressed`](#NodeMerge.Suppressed)                                                                               | Gets or sets the Suppressed.                                  |
| [`MasterLocation`](#NodeMerge.MasterLocation)                                                                       | Gets or sets the MasterLocation.                              |
| [`SlaveLocation`](#NodeMerge.SlaveLocation)                                                                         | Gets or sets the SlaveLocation.                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#NodeMerge.Children)                                                                                   | Gets the list of children.                                    |
| [`Comments`](#NodeMerge.Comments)                                                                                   | Gets the list of associated comments.                         |
| [`Figures`](#NodeMerge.Figures)                                                                                     | Gets the list of associated figures.                          |
| [`Images`](#NodeMerge.Images)                                                                                       | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodeMerge.Properties)                                                                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodeMerge.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import NodeMerge
```

<a id="property-detail"></a>

## Property detail

<a id="NodeMerge.ToleranceValue"></a>

### *property* NodeMerge.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets/ Sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ScopingMethod"></a>

### *property* NodeMerge.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.InternalObject"></a>

### *property* NodeMerge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.MasterBodies"></a>

### *property* NodeMerge.MasterBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.SlaveBodies"></a>

### *property* NodeMerge.SlaveBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ToleranceType"></a>

### *property* NodeMerge.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Suppressed"></a>

### *property* NodeMerge.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.MasterLocation"></a>

### *property* NodeMerge.MasterLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.SlaveLocation"></a>

### *property* NodeMerge.SlaveLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.DataModelObjectCategory"></a>

### *property* NodeMerge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Children"></a>

### *property* NodeMerge.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Comments"></a>

### *property* NodeMerge.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Figures"></a>

### *property* NodeMerge.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Images"></a>

### *property* NodeMerge.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodeMerge.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Properties"></a>

### *property* NodeMerge.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.VisibleProperties"></a>

### *property* NodeMerge.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodeMerge.Generate"></a>

### NodeMerge.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.RenameBasedOnDefinition"></a>

### NodeMerge.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Delete"></a>

### NodeMerge.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetChildren"></a>

### NodeMerge.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodeMerge.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.AddComment"></a>

### NodeMerge.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.AddFigure"></a>

### NodeMerge.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.AddImage"></a>

### NodeMerge.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Activate"></a>

### NodeMerge.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.CopyTo"></a>

### NodeMerge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Duplicate"></a>

### NodeMerge.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GroupAllSimilarChildren"></a>

### NodeMerge.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GroupSimilarObjects"></a>

### NodeMerge.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.PropertyByName"></a>

### NodeMerge.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.PropertyByAPIName"></a>

### NodeMerge.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.CreateParameter"></a>

### NodeMerge.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetParameter"></a>

### NodeMerge.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.RemoveParameter"></a>

### NodeMerge.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
