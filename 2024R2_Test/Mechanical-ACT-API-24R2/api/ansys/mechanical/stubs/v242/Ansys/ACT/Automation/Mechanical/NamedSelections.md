# `NamedSelections`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.NamedSelections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NamedSelections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------|-----------------------------------------------------------------------------------|
| `ExportNamedSelectionToCDBFile`          | Export Named Selections to CDB file                                               |
| `GenerateAllNamedSelections`             | Generate all named selections specified with the Worksheet                        |
| `GoToNamedSelectionsCommonToSelection`   | GoToNamedSelectionsCommonToSelection method.                                      |
| `GoToNamedSelectionsContainingSelection` | GoToNamedSelectionsContainingSelection method.                                    |
| `AddNamedSelection`                      | Creates a new NamedSelection                                                      |
| `Delete`                                 | Run the Delete action.                                                            |
| `GetChildren`                            | Gets the list of children, filtered by type.                                      |
| `GetChildren`                            | Gets the list of children, filtered by type.                                      |
| `AddComment`                             | Creates a new child Comment.                                                      |
| `AddFigure`                              | Creates a new child Figure.                                                       |
| `AddImage`                               | Creates a new child Image.                                                        |
| `Activate`                               | Activate the current object.                                                      |
| `CopyTo`                                 | Copies all visible properties from this object to another.                        |
| `Duplicate`                              | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`                | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`                    | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                         | Get a property by its unique name.                                                |
| `PropertyByAPIName`                      | Get a property by its API name.                                                   |
| `CreateParameter`                        | Creates a new parameter for a Property.                                           |
| `GetParameter`                           | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                        | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `GenerateOnRefresh`       | Gets or sets the GenerateOnRefresh.                           |
| `GenerateOnRemesh`        | Gets or sets the GenerateOnRemesh.                            |
| `RandomColors`            | Gets the RandomColors.                                        |
| `ShowAnnotations`         | Gets or sets the ShowAnnotations.                             |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* NamedSelections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSComponentGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.GenerateOnRefresh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRefresh.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.GenerateOnRemesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateOnRemesh.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.RandomColors *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RandomColors.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.ShowAnnotations *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowAnnotations.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* NamedSelections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### NamedSelections.ExportNamedSelectionToCDBFile(filepath: System.String)

Export Named Selections to CDB file

<!-- !! processed by numpydoc !! -->

### NamedSelections.GenerateAllNamedSelections()

Generate all named selections specified with the Worksheet

<!-- !! processed by numpydoc !! -->

### NamedSelections.GoToNamedSelectionsCommonToSelection()

GoToNamedSelectionsCommonToSelection method.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GoToNamedSelectionsContainingSelection()

GoToNamedSelectionsContainingSelection method.

<!-- !! processed by numpydoc !! -->

### NamedSelections.AddNamedSelection()

Creates a new NamedSelection

<!-- !! processed by numpydoc !! -->

### NamedSelections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### NamedSelections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### NamedSelections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### NamedSelections.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### NamedSelections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### NamedSelections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### NamedSelections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### NamedSelections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### NamedSelections.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### NamedSelections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### NamedSelections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### NamedSelections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

