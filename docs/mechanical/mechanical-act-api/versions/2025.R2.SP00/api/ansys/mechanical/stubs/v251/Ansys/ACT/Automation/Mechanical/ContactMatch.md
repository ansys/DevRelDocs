# `ContactMatch`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ContactMatch"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ContactMatch

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactMatch.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactMatch.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ContactMatch.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ContactMatch.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ContactMatch.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ContactMatch.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactMatch.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactMatch.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactMatch.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`Generate`](#ContactMatch.Generate)                               | Run the Generate action.                                                          |
| [`GetChildren`](#ContactMatch.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ContactMatch.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactMatch.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactMatch.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactMatch.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactMatch.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactMatch.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#ContactMatch.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ContactMatch.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ContactMatch.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ContactMatch.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ContactMatch.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ContactMatch.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ContactMatch.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MasterBodies`](#ContactMatch.MasterBodies)                       | Gets the MasterBodies.                                        |
| [`MasterLocation`](#ContactMatch.MasterLocation)                   | Gets or sets the MasterLocation.                              |
| [`Properties`](#ContactMatch.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopeMode`](#ContactMatch.ScopeMode)                             | Gets the ScopeMode.                                           |
| [`ScopingMethod`](#ContactMatch.ScopingMethod)                     | ScopingMethod property.                                       |
| [`SlaveBodies`](#ContactMatch.SlaveBodies)                         | Gets the SlaveBodies.                                         |
| [`SlaveLocation`](#ContactMatch.SlaveLocation)                     | Gets or sets the SlaveLocation.                               |
| [`SnapToBoundary`](#ContactMatch.SnapToBoundary)                   | Gets or sets the SnapToBoundary.                              |
| [`SnapTolerance`](#ContactMatch.SnapTolerance)                     | Gets or sets the SnapTolerance.                               |
| [`SnapType`](#ContactMatch.SnapType)                               | Gets or sets the SnapType.                                    |
| [`Suppressed`](#ContactMatch.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ToleranceSlider`](#ContactMatch.ToleranceSlider)                 | Gets or sets the ToleranceSlider.                             |
| [`ToleranceType`](#ContactMatch.ToleranceType)                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#ContactMatch.ToleranceValue)                   | Gets or sets the ToleranceValue.                              |
| [`VisibleProperties`](#ContactMatch.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactMatch.Children"></a>

### *property* ContactMatch.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Comments"></a>

### *property* ContactMatch.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.DataModelObjectCategory"></a>

### *property* ContactMatch.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Figures"></a>

### *property* ContactMatch.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Images"></a>

### *property* ContactMatch.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.InternalObject"></a>

### *property* ContactMatch.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.MasterBodies"></a>

### *property* ContactMatch.MasterBodies *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.MasterLocation"></a>

### *property* ContactMatch.MasterLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Properties"></a>

### *property* ContactMatch.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ScopeMode"></a>

### *property* ContactMatch.ScopeMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScopeMode.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ScopingMethod"></a>

### *property* ContactMatch.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SlaveBodies"></a>

### *property* ContactMatch.SlaveBodies *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SlaveLocation"></a>

### *property* ContactMatch.SlaveLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SnapToBoundary"></a>

### *property* ContactMatch.SnapToBoundary *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToBoundary.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SnapTolerance"></a>

### *property* ContactMatch.SnapTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.SnapType"></a>

### *property* ContactMatch.SnapType *: [Ansys.Mechanical.DataModel.Enums.SnapType](../../../Mechanical/DataModel/Enums/SnapType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SnapType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Suppressed"></a>

### *property* ContactMatch.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ToleranceSlider"></a>

### *property* ContactMatch.ToleranceSlider *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceSlider.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ToleranceType"></a>

### *property* ContactMatch.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.ToleranceValue"></a>

### *property* ContactMatch.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.VisibleProperties"></a>

### *property* ContactMatch.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactMatch.Activate"></a>

### ContactMatch.Activate()

Activate the current object.

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

### ContactMatch.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.CopyTo"></a>

### ContactMatch.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.CreateParameter"></a>

### ContactMatch.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Delete"></a>

### ContactMatch.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Duplicate"></a>

### ContactMatch.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.Generate"></a>

### ContactMatch.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetChildren"></a>

### ContactMatch.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GetParameter"></a>

### ContactMatch.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GroupAllSimilarChildren"></a>

### ContactMatch.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.GroupSimilarObjects"></a>

### ContactMatch.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.PropertyByAPIName"></a>

### ContactMatch.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.PropertyByName"></a>

### ContactMatch.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.RemoveParameter"></a>

### ContactMatch.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactMatch.RenameBasedOnDefinition"></a>

### ContactMatch.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

