# `ResponseConstraint`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ResponseConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ResponseConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#ResponseConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#ResponseConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`Activate`](#ResponseConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#ResponseConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ResponseConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ResponseConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ResponseConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ResponseConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ResponseConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#ResponseConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ResponseConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ResponseConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| [`EnvironmentSelection`](#ResponseConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.   |
| [`InternalObject`](#id0)                                                 | Gets the internal object. For advanced usage only.                                         |
| [`Suppressed`](#ResponseConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                               |
| [`DataModelObjectCategory`](#ResponseConstraint.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                                               |
| [`Children`](#ResponseConstraint.Children)                               | Gets the list of children.                                                                 |
| [`InternalObject`](#id0)                                                 | Gets the internal object. For advanced usage only.                                         |
| [`Properties`](#ResponseConstraint.Properties)                           | Gets the list of properties for this object.                                               |
| [`VisibleProperties`](#ResponseConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                              |

<a id="property-detail"></a>

## Property detail

<a id="ResponseConstraint.EnvironmentSelection"></a>

### *property* ResponseConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.InternalObject"></a>

### *property* ResponseConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.Suppressed"></a>

### *property* ResponseConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.DataModelObjectCategory"></a>

### *property* ResponseConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.Children"></a>

### *property* ResponseConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ResponseConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.Properties"></a>

### *property* ResponseConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.VisibleProperties"></a>

### *property* ResponseConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ResponseConstraint.RenameBasedOnDefinition"></a>

### ResponseConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.Delete"></a>

### ResponseConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.GetChildren"></a>

### ResponseConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ResponseConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.Activate"></a>

### ResponseConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.CopyTo"></a>

### ResponseConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.Duplicate"></a>

### ResponseConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.GroupAllSimilarChildren"></a>

### ResponseConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.GroupSimilarObjects"></a>

### ResponseConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.PropertyByName"></a>

### ResponseConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.PropertyByAPIName"></a>

### ResponseConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.CreateParameter"></a>

### ResponseConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.GetParameter"></a>

### ResponseConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ResponseConstraint.RemoveParameter"></a>

### ResponseConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

