# `ICrossSection`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ICrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ICrossSection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Area`                    | Gets the Area.                                                |
| `IYY`                     | Gets the IYY.                                                 |
| `IZZ`                     | Gets the IZZ.                                                 |
| `Thick1`                  | Gets or sets the Thick1.                                      |
| `Thick2`                  | Gets or sets the Thick2.                                      |
| `Thick3`                  | Gets or sets the Thick3.                                      |
| `Width1`                  | Gets or sets the Width1.                                      |
| `Width2`                  | Gets or sets the Width2.                                      |
| `Width3`                  | Gets or sets the Width3.                                      |
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

### *property* ICrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Area.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.IYY *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IYY.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.IZZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IZZ.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Thick1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick1.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Thick2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick2.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Thick3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thick3.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Width1 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width1.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Width2 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width2.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Width3 *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Width3.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ICrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ICrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ICrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ICrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ICrossSection.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### ICrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ICrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ICrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ICrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ICrossSection.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### ICrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ICrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ICrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

