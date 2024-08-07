# `NamedSelections`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportNamedSelectionToCDBFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.ExportNamedSelectionToCDBFile)                   | Export Named Selections to CDB file                                               |
| [`GenerateAllNamedSelections`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.GenerateAllNamedSelections)                         | Generate all named selections specified with the Worksheet                        |
| [`GoToNamedSelectionsCommonToSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.GoToNamedSelectionsCommonToSelection)     | GoToNamedSelectionsCommonToSelection method.                                      |
| [`GoToNamedSelectionsContainingSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.GoToNamedSelectionsContainingSelection) | GoToNamedSelectionsContainingSelection method.                                    |
| [`AddNamedSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.AddNamedSelection)                                           | Creates a new NamedSelection                                                      |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.Delete)                                                                 | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.AddComment)                                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.AddFigure)                                                           | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.AddImage)                                                             | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.Activate)                                                             | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.CopyTo)                                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.Duplicate)                                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.GroupAllSimilarChildren)                               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.GroupSimilarObjects)                                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.PropertyByName)                                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.PropertyByAPIName)                                           | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.CreateParameter)                                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.GetParameter)                                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.RemoveParameter)                                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`GenerateOnRefresh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.GenerateOnRefresh)             | Gets or sets the GenerateOnRefresh.                           |
| [`GenerateOnRemesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.GenerateOnRemesh)               | Gets or sets the GenerateOnRemesh.                            |
| [`RandomColors`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.RandomColors)                       | Gets the RandomColors.                                        |
| [`ShowAnnotations`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.ShowAnnotations)                 | Gets or sets the ShowAnnotations.                             |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#id0)                                              | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/NamedSelections.md#NamedSelections.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NamedSelections.InternalObject"></a>

### *property* NamedSelections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSComponentGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GenerateOnRefresh"></a>

### *property* NamedSelections.GenerateOnRefresh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRefresh.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GenerateOnRemesh"></a>

### *property* NamedSelections.GenerateOnRemesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.RandomColors"></a>

### *property* NamedSelections.RandomColors *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RandomColors.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.ShowAnnotations"></a>

### *property* NamedSelections.ShowAnnotations *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAnnotations.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.DataModelObjectCategory"></a>

### *property* NamedSelections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Children"></a>

### *property* NamedSelections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Comments"></a>

### *property* NamedSelections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Figures"></a>

### *property* NamedSelections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Images"></a>

### *property* NamedSelections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NamedSelections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Properties"></a>

### *property* NamedSelections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.VisibleProperties"></a>

### *property* NamedSelections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NamedSelections.ExportNamedSelectionToCDBFile"></a>

### NamedSelections.ExportNamedSelectionToCDBFile(filepath: System.String)

Export Named Selections to CDB file

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GenerateAllNamedSelections"></a>

### NamedSelections.GenerateAllNamedSelections()

Generate all named selections specified with the Worksheet

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GoToNamedSelectionsCommonToSelection"></a>

### NamedSelections.GoToNamedSelectionsCommonToSelection()

GoToNamedSelectionsCommonToSelection method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GoToNamedSelectionsContainingSelection"></a>

### NamedSelections.GoToNamedSelectionsContainingSelection()

GoToNamedSelectionsContainingSelection method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddNamedSelection"></a>

### NamedSelections.AddNamedSelection()

Creates a new NamedSelection

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Delete"></a>

### NamedSelections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetChildren"></a>

### NamedSelections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NamedSelections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddComment"></a>

### NamedSelections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddFigure"></a>

### NamedSelections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.AddImage"></a>

### NamedSelections.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Activate"></a>

### NamedSelections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.CopyTo"></a>

### NamedSelections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.Duplicate"></a>

### NamedSelections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GroupAllSimilarChildren"></a>

### NamedSelections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GroupSimilarObjects"></a>

### NamedSelections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.PropertyByName"></a>

### NamedSelections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.PropertyByAPIName"></a>

### NamedSelections.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.CreateParameter"></a>

### NamedSelections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.GetParameter"></a>

### NamedSelections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelections.RemoveParameter"></a>

### NamedSelections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

