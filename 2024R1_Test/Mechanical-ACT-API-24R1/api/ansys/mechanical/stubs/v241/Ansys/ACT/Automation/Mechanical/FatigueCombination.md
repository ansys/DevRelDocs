<!-- vale off -->

<a id="fatiguecombination"></a>

# `FatigueCombination`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FatigueCombination"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.FatigueCombination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FatigueCombination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddDamage`](#FatigueCombination.AddDamage)                             | Creates a new FatigueDamage                                                       |
| [`EvaluateAllResults`](#FatigueCombination.EvaluateAllResults)           | Run the EvaluateAllResults action.                                                |
| [`Delete`](#FatigueCombination.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FatigueCombination.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#FatigueCombination.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#FatigueCombination.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#FatigueCombination.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FatigueCombination.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FatigueCombination.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FatigueCombination.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FatigueCombination.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FatigueCombination.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#FatigueCombination.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FatigueCombination.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FatigueCombination.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#FatigueCombination.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#FatigueCombination.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FatigueCombination.Comments)                               | Gets the list of associated comments.                         |
| [`Images`](#FatigueCombination.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FatigueCombination.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FatigueCombination.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FatigueCombination.InternalObject"></a>

### *property* FatigueCombination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSFatigueCombinationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.DataModelObjectCategory"></a>

### *property* FatigueCombination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Children"></a>

### *property* FatigueCombination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Comments"></a>

### *property* FatigueCombination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Images"></a>

### *property* FatigueCombination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FatigueCombination.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Properties"></a>

### *property* FatigueCombination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.VisibleProperties"></a>

### *property* FatigueCombination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FatigueCombination.AddDamage"></a>

### FatigueCombination.AddDamage()

Creates a new FatigueDamage

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.EvaluateAllResults"></a>

### FatigueCombination.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Delete"></a>

### FatigueCombination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetChildren"></a>

### FatigueCombination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FatigueCombination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.AddComment"></a>

### FatigueCombination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.AddImage"></a>

### FatigueCombination.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Activate"></a>

### FatigueCombination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.CopyTo"></a>

### FatigueCombination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.Duplicate"></a>

### FatigueCombination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GroupAllSimilarChildren"></a>

### FatigueCombination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GroupSimilarObjects"></a>

### FatigueCombination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.PropertyByName"></a>

### FatigueCombination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.PropertyByAPIName"></a>

### FatigueCombination.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.CreateParameter"></a>

### FatigueCombination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.GetParameter"></a>

### FatigueCombination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FatigueCombination.RemoveParameter"></a>

### FatigueCombination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
