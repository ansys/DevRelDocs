# ContactMatch

<a id="ContactMatch"></a>

### *class* ContactMatch

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactMatch.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Generate`](#ContactMatch.Generate)                               | Run the Generate action.                                                          |
| [`RenameBasedOnDefinition`](#ContactMatch.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ContactMatch.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ContactMatch.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactMatch.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactMatch.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ContactMatch.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactMatch.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactMatch.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactMatch.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactMatch.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactMatch.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactMatch.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactMatch.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactMatch.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactMatch.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`ScopingMethod`](#ContactMatch.ScopingMethod)                                                                      | ScopingMethod property.                                       |
| [`ToleranceSlider`](#ContactMatch.ToleranceSlider)                                                                  | Gets or sets the ToleranceSlider.                             |
| [`MasterBodies`](#ContactMatch.MasterBodies)                                                                        | Gets the MasterBodies.                                        |
| [`SlaveBodies`](#ContactMatch.SlaveBodies)                                                                          | Gets the SlaveBodies.                                         |
| [`SnapTolerance`](#ContactMatch.SnapTolerance)                                                                      | Gets or sets the SnapTolerance.                               |
| [`ScopeMode`](#ContactMatch.ScopeMode)                                                                              | Gets the ScopeMode.                                           |
| [`SnapType`](./../../../Mechanical/DataModel/Enums/SnapType.md#SnapType)                                              | Gets or sets the SnapType.                                    |
| [`ToleranceType`](./../../../Mechanical/DataModel/Enums/ToleranceType.md#ToleranceType)                               | Gets or sets the ToleranceType.                               |
| [`SnapToBoundary`](#ContactMatch.SnapToBoundary)                                                                    | Gets or sets the SnapToBoundary.                              |
| [`Suppressed`](#ContactMatch.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`MasterLocation`](#ContactMatch.MasterLocation)                                                                    | Gets or sets the MasterLocation.                              |
| [`SlaveLocation`](#ContactMatch.SlaveLocation)                                                                      | Gets or sets the SlaveLocation.                               |
| [`Children`](#ContactMatch.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#ContactMatch.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#ContactMatch.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#ContactMatch.Images)                                                                                    | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactMatch.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactMatch.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ContactMatch
```

<a id="property-detail"></a>

## Property detail

<a id="ContactMatch.InternalObject"></a>

### *property* ContactMatch.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.DataModelObjectCategory"></a>

### *property* ContactMatch.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ScopingMethod"></a>

### *property* ContactMatch.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](./../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ToleranceSlider"></a>

### *property* ContactMatch.ToleranceSlider *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.MasterBodies"></a>

### *property* ContactMatch.MasterBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SlaveBodies"></a>

### *property* ContactMatch.SlaveBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SnapTolerance"></a>

### *property* ContactMatch.SnapTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ScopeMode"></a>

### *property* ContactMatch.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](./../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SnapType"></a>

### *property* ContactMatch.SnapType *: [Ansys.Mechanical.DataModel.Enums.SnapType](./../../../Mechanical/DataModel/Enums/SnapType.md#SnapType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ToleranceType"></a>

### *property* ContactMatch.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](./../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SnapToBoundary"></a>

### *property* ContactMatch.SnapToBoundary *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToBoundary.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Suppressed"></a>

### *property* ContactMatch.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.MasterLocation"></a>

### *property* ContactMatch.MasterLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SlaveLocation"></a>

### *property* ContactMatch.SlaveLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Children"></a>

### *property* ContactMatch.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Comments"></a>

### *property* ContactMatch.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Figures"></a>

### *property* ContactMatch.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Images"></a>

### *property* ContactMatch.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactMatch.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Properties"></a>

### *property* ContactMatch.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.VisibleProperties"></a>

### *property* ContactMatch.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMatch.Generate"></a>

### ContactMatch.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.RenameBasedOnDefinition"></a>

### ContactMatch.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Delete"></a>

### ContactMatch.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetChildren"></a>

### ContactMatch.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ContactMatch.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.AddComment"></a>

### ContactMatch.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.AddFigure"></a>

### ContactMatch.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.AddImage"></a>

### ContactMatch.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Activate"></a>

### ContactMatch.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.CopyTo"></a>

### ContactMatch.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Duplicate"></a>

### ContactMatch.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GroupAllSimilarChildren"></a>

### ContactMatch.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GroupSimilarObjects"></a>

### ContactMatch.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.PropertyByName"></a>

### ContactMatch.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.PropertyByAPIName"></a>

### ContactMatch.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.CreateParameter"></a>

### ContactMatch.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetParameter"></a>

### ContactMatch.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.RemoveParameter"></a>

### ContactMatch.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
