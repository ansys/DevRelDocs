# `MaterialPlot`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MaterialPlot"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MaterialPlot

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MaterialPlot.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MaterialPlot.Activate)                               | Activate the current object.                                                      |
| [`Clear`](#MaterialPlot.Clear)                                     | Run the Clear action.                                                             |
| [`CopyTo`](#MaterialPlot.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MaterialPlot.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MaterialPlot.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MaterialPlot.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`Generate`](#MaterialPlot.Generate)                               | Run the Generate action.                                                          |
| [`GetChildren`](#MaterialPlot.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MaterialPlot.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MaterialPlot.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaterialPlot.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MaterialPlot.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MaterialPlot.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MaterialPlot.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#MaterialPlot.Children)                                   | Gets the list of children.                                    |
| [`DataModelObjectCategory`](#MaterialPlot.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#MaterialPlot.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`Location`](#MaterialPlot.Location)                                   | Gets or sets the Location.                                    |
| [`MaterialProperty`](#MaterialPlot.MaterialProperty)                   | Gets or sets the MaterialProperty.                            |
| [`MaterialPropertyComponent`](#MaterialPlot.MaterialPropertyComponent) | Gets or sets the MaterialPropertyComponent.                   |
| [`Properties`](#MaterialPlot.Properties)                               | Gets the list of properties for this object.                  |
| [`Suppressed`](#MaterialPlot.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#MaterialPlot.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MaterialPlot.Children"></a>

### *property* MaterialPlot.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.DataModelObjectCategory"></a>

### *property* MaterialPlot.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.InternalObject"></a>

### *property* MaterialPlot.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialPlotAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Location"></a>

### *property* MaterialPlot.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.MaterialProperty"></a>

### *property* MaterialPlot.MaterialProperty *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialProperty.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.MaterialPropertyComponent"></a>

### *property* MaterialPlot.MaterialPropertyComponent *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialPropertyComponent.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Properties"></a>

### *property* MaterialPlot.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Suppressed"></a>

### *property* MaterialPlot.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.VisibleProperties"></a>

### *property* MaterialPlot.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaterialPlot.Activate"></a>

### MaterialPlot.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Clear"></a>

### MaterialPlot.Clear()

Run the Clear action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.CopyTo"></a>

### MaterialPlot.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.CreateParameter"></a>

### MaterialPlot.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Delete"></a>

### MaterialPlot.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Duplicate"></a>

### MaterialPlot.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Generate"></a>

### MaterialPlot.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetChildren"></a>

### MaterialPlot.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetParameter"></a>

### MaterialPlot.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GroupAllSimilarChildren"></a>

### MaterialPlot.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GroupSimilarObjects"></a>

### MaterialPlot.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.PropertyByAPIName"></a>

### MaterialPlot.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.PropertyByName"></a>

### MaterialPlot.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.RemoveParameter"></a>

### MaterialPlot.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

