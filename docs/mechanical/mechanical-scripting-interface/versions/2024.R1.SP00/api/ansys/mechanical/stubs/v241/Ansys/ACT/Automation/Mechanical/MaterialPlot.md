# `MaterialPlot`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MaterialPlot"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MaterialPlot

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MaterialPlot.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Clear`](#MaterialPlot.Clear)                                     | Run the Clear action.                                                             |
| [`Generate`](#MaterialPlot.Generate)                               | Run the Generate action.                                                          |
| [`Delete`](#MaterialPlot.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                              | Gets the list of children, filtered by type.                                      |
| [`Activate`](#MaterialPlot.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MaterialPlot.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MaterialPlot.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MaterialPlot.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MaterialPlot.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MaterialPlot.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MaterialPlot.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MaterialPlot.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MaterialPlot.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MaterialPlot.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`MaterialPropertyComponent`](#MaterialPlot.MaterialPropertyComponent) | Gets or sets the MaterialPropertyComponent.                   |
| [`MaterialProperty`](#MaterialPlot.MaterialProperty)                   | Gets or sets the MaterialProperty.                            |
| [`Suppressed`](#MaterialPlot.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`Location`](#MaterialPlot.Location)                                   | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#MaterialPlot.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`Children`](#MaterialPlot.Children)                                   | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MaterialPlot.Properties)                               | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MaterialPlot.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MaterialPlot.InternalObject"></a>

### *property* MaterialPlot.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialPlotAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.MaterialPropertyComponent"></a>

### *property* MaterialPlot.MaterialPropertyComponent *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialPropertyComponent.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.MaterialProperty"></a>

### *property* MaterialPlot.MaterialProperty *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialProperty.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Suppressed"></a>

### *property* MaterialPlot.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Location"></a>

### *property* MaterialPlot.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.DataModelObjectCategory"></a>

### *property* MaterialPlot.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Children"></a>

### *property* MaterialPlot.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MaterialPlot.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Properties"></a>

### *property* MaterialPlot.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.VisibleProperties"></a>

### *property* MaterialPlot.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MaterialPlot.Clear"></a>

### MaterialPlot.Clear()

Run the Clear action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Generate"></a>

### MaterialPlot.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Delete"></a>

### MaterialPlot.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetChildren"></a>

### MaterialPlot.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MaterialPlot.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Activate"></a>

### MaterialPlot.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.CopyTo"></a>

### MaterialPlot.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.Duplicate"></a>

### MaterialPlot.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GroupAllSimilarChildren"></a>

### MaterialPlot.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GroupSimilarObjects"></a>

### MaterialPlot.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.PropertyByName"></a>

### MaterialPlot.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.PropertyByAPIName"></a>

### MaterialPlot.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.CreateParameter"></a>

### MaterialPlot.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.GetParameter"></a>

### MaterialPlot.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MaterialPlot.RemoveParameter"></a>

### MaterialPlot.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

