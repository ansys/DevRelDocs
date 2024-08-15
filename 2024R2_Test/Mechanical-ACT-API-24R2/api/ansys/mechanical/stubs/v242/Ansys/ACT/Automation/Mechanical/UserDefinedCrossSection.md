# `UserDefinedCrossSection`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.UserDefinedCrossSection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a UserDefinedCrossSection.

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
| `CGy`                     | Gets or sets the CGy.                                         |
| `CGZ`                     | Gets or sets the CGZ.                                         |
| `Area`                    | Gets or sets the Area.                                        |
| `Iyy`                     | Gets or sets the Iyy.                                         |
| `Izz`                     | Gets or sets the Izz.                                         |
| `SHy`                     | Gets or sets the SHy.                                         |
| `SHz`                     | Gets or sets the SHz.                                         |
| `J`                       | Gets or sets the J.                                           |
| `Iw`                      | Gets or sets the Iw.                                          |
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

### *property* UserDefinedCrossSection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.CGy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CGy.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.CGZ *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CGZ.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.Area *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Area.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.Iyy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Iyy.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.Izz *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Izz.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.SHy *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SHy.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.SHz *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SHz.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.J *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the J.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.Iw *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Iw.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* UserDefinedCrossSection.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### UserDefinedCrossSection.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### UserDefinedCrossSection.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

