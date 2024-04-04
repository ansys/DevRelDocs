# MaterialPlot

### *class* MaterialPlot

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a MaterialPlot.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Clear`](#MaterialPlot.Clear)                                     | Run the Clear action.                                                             |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`MaterialPropertyComponent`](#MaterialPlot.MaterialPropertyComponent)                                              | Gets or sets the MaterialPropertyComponent.                   |
| [`MaterialProperty`](#MaterialPlot.MaterialProperty)                                                                | Gets or sets the MaterialProperty.                            |
| [`Suppressed`](#MaterialPlot.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`Location`](#MaterialPlot.Location)                                                                                | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#MaterialPlot.Children)                                                                                | Gets the list of children.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MaterialPlot.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MaterialPlot.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MaterialPlot
```

## Property detail

### *property* MaterialPlot.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialPlotAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MaterialPlot.MaterialPropertyComponent *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialPropertyComponent.

<!-- !! processed by numpydoc !! -->

### *property* MaterialPlot.MaterialProperty *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialProperty.

<!-- !! processed by numpydoc !! -->

### *property* MaterialPlot.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* MaterialPlot.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* MaterialPlot.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MaterialPlot.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MaterialPlot.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MaterialPlot.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MaterialPlot.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MaterialPlot.Clear()

Run the Clear action.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.Generate()

Run the Generate action.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MaterialPlot.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
