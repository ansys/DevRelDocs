# `CondensedGeometry`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.CondensedGeometry

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CondensedGeometry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------|-----------------------------------------------------------------------------------|
| `CreateAutomaticCondensedParts`   | Run the CreateAutomaticCondensedParts action.                                     |
| `AddCondensedPart`                | Creates a new CondensedPart                                                       |
| `AddCondensedPartInfoTool`        | Creates a new CondensedPartInfoTool                                               |
| `AddImportedCondensedPart`        | Creates a new ImportedCondensedPart                                               |
| `ClearGeneratedData`              | Run the ClearGeneratedData action.                                                |
| `GenerateCondensedParts`          | Run the GenerateCondensedParts action.                                            |
| `Delete`                          | Run the Delete action.                                                            |
| `GetChildren`                     | Gets the list of children, filtered by type.                                      |
| `GetChildren`                     | Gets the list of children, filtered by type.                                      |
| `AddComment`                      | Creates a new child Comment.                                                      |
| `AddFigure`                       | Creates a new child Figure.                                                       |
| `AddImage`                        | Creates a new child Image.                                                        |
| `Activate`                        | Activate the current object.                                                      |
| `CopyTo`                          | Copies all visible properties from this object to another.                        |
| `Duplicate`                       | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`         | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`             | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                  | Get a property by its unique name.                                                |
| `PropertyByAPIName`               | Get a property by its API name.                                                   |
| `CreateParameter`                 | Creates a new parameter for a Property.                                           |
| `GetParameter`                    | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `SolverFilesDirectory`    | Gets the SolverFilesDirectory.                                |
| `TransparencyEnabled`     | Gets or sets the TransparencyEnabled.                         |
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

### *property* CondensedGeometry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedGeometryAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.TransparencyEnabled *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransparencyEnabled.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CondensedGeometry.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CondensedGeometry.CreateAutomaticCondensedParts()

Run the CreateAutomaticCondensedParts action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddCondensedPart()

Creates a new CondensedPart

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddCondensedPartInfoTool()

Creates a new CondensedPartInfoTool

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddImportedCondensedPart()

Creates a new ImportedCondensedPart

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GenerateCondensedParts()

Run the GenerateCondensedParts action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CondensedGeometry.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

