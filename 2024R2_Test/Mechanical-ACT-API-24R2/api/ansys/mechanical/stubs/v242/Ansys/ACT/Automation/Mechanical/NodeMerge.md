# `NodeMerge`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NodeMerge"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NodeMerge

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodeMerge.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NodeMerge.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#NodeMerge.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodeMerge.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#NodeMerge.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#NodeMerge.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NodeMerge.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#NodeMerge.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#NodeMerge.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`Generate`](#NodeMerge.Generate)                               | Run the Generate action.                                                          |
| [`GetChildren`](#NodeMerge.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#NodeMerge.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NodeMerge.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodeMerge.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#NodeMerge.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#NodeMerge.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NodeMerge.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`RenameBasedOnDefinition`](#NodeMerge.RenameBasedOnDefinition) | Run the RenameBasedOnDefinition action.                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#NodeMerge.Children)                               | Gets the list of children.                                    |
| [`Comments`](#NodeMerge.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#NodeMerge.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#NodeMerge.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#NodeMerge.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#NodeMerge.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MasterBodies`](#NodeMerge.MasterBodies)                       | Gets the MasterBodies.                                        |
| [`MasterLocation`](#NodeMerge.MasterLocation)                   | Gets or sets the MasterLocation.                              |
| [`Properties`](#NodeMerge.Properties)                           | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#NodeMerge.ScopingMethod)                     | ScopingMethod property.                                       |
| [`SlaveBodies`](#NodeMerge.SlaveBodies)                         | Gets the SlaveBodies.                                         |
| [`SlaveLocation`](#NodeMerge.SlaveLocation)                     | Gets or sets the SlaveLocation.                               |
| [`Suppressed`](#NodeMerge.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`ToleranceType`](#NodeMerge.ToleranceType)                     | Gets or sets the ToleranceType.                               |
| [`ToleranceValue`](#NodeMerge.ToleranceValue)                   | Gets/ Sets the ToleranceValue.                                |
| [`VisibleProperties`](#NodeMerge.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodeMerge.Children"></a>

### *property* NodeMerge.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Comments"></a>

### *property* NodeMerge.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.DataModelObjectCategory"></a>

### *property* NodeMerge.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Figures"></a>

### *property* NodeMerge.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Images"></a>

### *property* NodeMerge.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.InternalObject"></a>

### *property* NodeMerge.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshConnectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.MasterBodies"></a>

### *property* NodeMerge.MasterBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MasterBodies.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.MasterLocation"></a>

### *property* NodeMerge.MasterLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MasterLocation.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Properties"></a>

### *property* NodeMerge.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ScopingMethod"></a>

### *property* NodeMerge.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

ScopingMethod property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.SlaveBodies"></a>

### *property* NodeMerge.SlaveBodies *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SlaveBodies.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.SlaveLocation"></a>

### *property* NodeMerge.SlaveLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SlaveLocation.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Suppressed"></a>

### *property* NodeMerge.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ToleranceType"></a>

### *property* NodeMerge.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ContactToleranceType](../../../Mechanical/DataModel/Enums/ContactToleranceType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ContactToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.ToleranceValue"></a>

### *property* NodeMerge.ToleranceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets/ Sets the ToleranceValue.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.VisibleProperties"></a>

### *property* NodeMerge.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodeMerge.Activate"></a>

### NodeMerge.Activate()

Activate the current object.

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

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.CopyTo"></a>

### NodeMerge.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.CreateParameter"></a>

### NodeMerge.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Delete"></a>

### NodeMerge.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Duplicate"></a>

### NodeMerge.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.Generate"></a>

### NodeMerge.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetChildren"></a>

### NodeMerge.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GetParameter"></a>

### NodeMerge.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GroupAllSimilarChildren"></a>

### NodeMerge.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.GroupSimilarObjects"></a>

### NodeMerge.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.PropertyByAPIName"></a>

### NodeMerge.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.PropertyByName"></a>

### NodeMerge.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.RemoveParameter"></a>

### NodeMerge.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodeMerge.RenameBasedOnDefinition"></a>

### NodeMerge.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

