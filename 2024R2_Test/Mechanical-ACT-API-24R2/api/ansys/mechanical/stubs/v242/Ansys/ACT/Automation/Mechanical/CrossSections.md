# `CrossSections`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.CrossSections

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CrossSections.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------|-----------------------------------------------------------------------------------|
| `NameCrossSectionsUniquely`        | programmatically give each of the Cross Section objects a unique name .           |
| `AddChannelCrossSection`           | Creates a new ChannelCrossSection                                                 |
| `AddCircularCrossSection`          | Creates a new CircularCrossSection                                                |
| `AddCircularTubeCrossSection`      | Creates a new CircularTubeCrossSection                                            |
| `AddHatCrossSection`               | Creates a new HatCrossSection                                                     |
| `AddHollowRectangularCrossSection` | Creates a new HollowRectangularCrossSection                                       |
| `AddICrossSection`                 | Creates a new ICrossSection                                                       |
| `AddLCrossSection`                 | Creates a new LCrossSection                                                       |
| `AddRectangularCrossSection`       | Creates a new RectangularCrossSection                                             |
| `AddTCrossSection`                 | Creates a new TCrossSection                                                       |
| `AddUserDefinedCrossSection`       | Creates a new UserDefinedCrossSection                                             |
| `AddZCrossSection`                 | Creates a new ZCrossSection                                                       |
| `Delete`                           | Run the Delete action.                                                            |
| `GetChildren`                      | Gets the list of children, filtered by type.                                      |
| `GetChildren`                      | Gets the list of children, filtered by type.                                      |
| `AddComment`                       | Creates a new child Comment.                                                      |
| `AddFigure`                        | Creates a new child Figure.                                                       |
| `AddImage`                         | Creates a new child Image.                                                        |
| `Activate`                         | Activate the current object.                                                      |
| `CopyTo`                           | Copies all visible properties from this object to another.                        |
| `Duplicate`                        | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`          | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`              | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`                   | Get a property by its unique name.                                                |
| `PropertyByAPIName`                | Get a property by its API name.                                                   |
| `CreateParameter`                  | Creates a new parameter for a Property.                                           |
| `GetParameter`                     | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`                  | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
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

### *property* CrossSections.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrossSectionGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* CrossSections.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### CrossSections.NameCrossSectionsUniquely()

programmatically give each of the Cross Section objects a unique name .

<!-- !! processed by numpydoc !! -->

### CrossSections.AddChannelCrossSection()

Creates a new ChannelCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddCircularCrossSection()

Creates a new CircularCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddCircularTubeCrossSection()

Creates a new CircularTubeCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddHatCrossSection()

Creates a new HatCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddHollowRectangularCrossSection()

Creates a new HollowRectangularCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddICrossSection()

Creates a new ICrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddLCrossSection()

Creates a new LCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddRectangularCrossSection()

Creates a new RectangularCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddTCrossSection()

Creates a new TCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddUserDefinedCrossSection()

Creates a new UserDefinedCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.AddZCrossSection()

Creates a new ZCrossSection

<!-- !! processed by numpydoc !! -->

### CrossSections.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### CrossSections.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CrossSections.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### CrossSections.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### CrossSections.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### CrossSections.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### CrossSections.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### CrossSections.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### CrossSections.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### CrossSections.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### CrossSections.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### CrossSections.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### CrossSections.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### CrossSections.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### CrossSections.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### CrossSections.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

