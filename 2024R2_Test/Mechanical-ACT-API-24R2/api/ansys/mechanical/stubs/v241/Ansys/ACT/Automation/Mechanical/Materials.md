# `Materials`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Materials

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------|-----------------------------------------------------------------------------------|
| `AddMaterialCombination`       | Creates a new MaterialCombination                                                 |
| `AddImportedTraceExternalData` | Creates a new Imported Trace (External Data).                                     |
| `Import`                       |                                                                                   |
| `AddMaterialAssignment`        | Creates a new MaterialAssignment                                                  |
| `AddMaterialPlot`              | Creates a new MaterialPlot                                                        |
| `RefreshMaterials`             | Run the RefreshMaterials action.                                                  |
| `GetChildren`                  | Gets the list of children, filtered by type.                                      |
| `GetChildren`                  | Gets the list of children, filtered by type.                                      |
| `AddComment`                   | Creates a new child Comment.                                                      |
| `AddFigure`                    | Creates a new child Figure.                                                       |
| `AddImage`                     | Creates a new child Image.                                                        |
| `Activate`                     | Activate the current object.                                                      |
| `CopyTo`                       | Copies all visible properties from this object to another.                        |
| `Duplicate`                    | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`      | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`          | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`               | Get a property by its unique name.                                                |
| `PropertyByAPIName`            | Get a property by its API name.                                                   |
| `CreateParameter`              | Creates a new parameter for a Property.                                           |
| `GetParameter`                 | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`              | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `MaterialAssignments`     | Gets the MaterialAssignments.                                 |
| `MaterialCount`           | Gets the MaterialCount.                                       |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Materials.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Materials.MaterialAssignments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialAssignments.

<!-- !! processed by numpydoc !! -->

### *property* Materials.MaterialCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MaterialCount.

<!-- !! processed by numpydoc !! -->

### *property* Materials.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Materials.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Materials.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Materials.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Materials.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Materials.AddMaterialCombination()

Creates a new MaterialCombination

<!-- !! processed by numpydoc !! -->

### Materials.AddImportedTraceExternalData()

Creates a new Imported Trace (External Data).

<!-- !! processed by numpydoc !! -->

### Materials.Import(materialURI: System.String, format: [Ansys.Mechanical.DataModel.MechanicalEnums.Materials.ImportFormat](../../../Mechanical/DataModel/MechanicalEnums/Materials/ImportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Materials.ImportFormat), settings: [Ansys.Mechanical.Materials.ImportSettings](../../../Mechanical/Materials/ImportSettings.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Materials.ImportSettings))

<!-- !! processed by numpydoc !! -->

### Materials.AddMaterialAssignment()

Creates a new MaterialAssignment

<!-- !! processed by numpydoc !! -->

### Materials.AddMaterialPlot()

Creates a new MaterialPlot

<!-- !! processed by numpydoc !! -->

### Materials.RefreshMaterials()

Run the RefreshMaterials action.

<!-- !! processed by numpydoc !! -->

### Materials.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Materials.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Materials.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Materials.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Materials.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Materials.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Materials.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Materials.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Materials.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Materials.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Materials.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Materials.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Materials.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Materials.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Materials.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

