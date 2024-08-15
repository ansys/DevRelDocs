# `ContactTool`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Connections.ContactTool

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactTool.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------|-----------------------------------------------------------------------------------|
| `ClearGeneratedData`            | Run the ClearGeneratedData action.                                                |
| `EvaluateAllResults`            | Run the EvaluateAllResults action.                                                |
| `GenerateInitialContactResults` | Generate Initial Contact Results and Mesh Parts                                   |
| `Delete`                        | Run the Delete action.                                                            |
| `GetChildren`                   | Gets the list of children, filtered by type.                                      |
| `GetChildren`                   | Gets the list of children, filtered by type.                                      |
| `AddComment`                    | Creates a new child Comment.                                                      |
| `AddFigure`                     | Creates a new child Figure.                                                       |
| `AddImage`                      | Creates a new child Image.                                                        |
| `Activate`                      | Activate the current object.                                                      |
| `CopyTo`                        | Copies all visible properties from this object to another.                        |
| `Duplicate`                     | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`       | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`           | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                | Get a property by its unique name.                                                |
| `PropertyByAPIName`             | Get a property by its API name.                                                   |
| `CreateParameter`               | Creates a new parameter for a Property.                                           |
| `GetParameter`                  | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `ScopingMethod`           | Gets or sets the ScopingMethod.                               |
| `Location`                | Gets or sets the Location.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
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

### *property* ContactTool.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSContactToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ContactTool.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ContactTool.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### ContactTool.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### ContactTool.GenerateInitialContactResults()

Generate Initial Contact Results and Mesh Parts

<!-- !! processed by numpydoc !! -->

### ContactTool.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ContactTool.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactTool.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ContactTool.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ContactTool.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ContactTool.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### ContactTool.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ContactTool.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ContactTool.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ContactTool.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ContactTool.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ContactTool.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ContactTool.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### ContactTool.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ContactTool.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ContactTool.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

