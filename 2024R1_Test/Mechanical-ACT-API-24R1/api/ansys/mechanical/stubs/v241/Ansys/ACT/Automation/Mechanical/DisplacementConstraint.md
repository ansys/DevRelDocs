<!-- vale off -->

<a id="displacementconstraint"></a>

# `DisplacementConstraint`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.DisplacementConstraint"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.DisplacementConstraint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DisplacementConstraint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`RenameBasedOnDefinition`](#DisplacementConstraint.RenameBasedOnDefinition)   | Run the RenameBasedOnDefinition action.                                           |
| [`Delete`](#DisplacementConstraint.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`Activate`](#DisplacementConstraint.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#DisplacementConstraint.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#DisplacementConstraint.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#DisplacementConstraint.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DisplacementConstraint.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#DisplacementConstraint.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#DisplacementConstraint.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#DisplacementConstraint.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#DisplacementConstraint.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#DisplacementConstraint.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                     | Gets the internal object. For advanced usage only.                                       |
| [`XComponentMax`](#DisplacementConstraint.XComponentMax)                     | Gets or sets the XComponentMax.                                                          |
| [`YComponentMax`](#DisplacementConstraint.YComponentMax)                     | Gets or sets the YComponentMax.                                                          |
| [`ZComponentMax`](#DisplacementConstraint.ZComponentMax)                     | Gets or sets the ZComponentMax.                                                          |
| [`ScopingMethod`](#DisplacementConstraint.ScopingMethod)                     | Gets or sets the ScopingMethod.                                                          |
| [`Location`](#DisplacementConstraint.Location)                               | Gets or sets the Location.                                                               |
| [`DataModelObjectCategory`](#DisplacementConstraint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`EnvironmentSelection`](#DisplacementConstraint.EnvironmentSelection)       | Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum. |
| [`Suppressed`](#DisplacementConstraint.Suppressed)                           | Gets or sets the Suppressed.                                                             |
| [`Children`](#DisplacementConstraint.Children)                               | Gets the list of children.                                                               |
| [`InternalObject`](#id0)                                                     | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#DisplacementConstraint.Properties)                           | Gets the list of properties for this object.                                             |
| [`VisibleProperties`](#DisplacementConstraint.VisibleProperties)             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="DisplacementConstraint.InternalObject"></a>

### *property* DisplacementConstraint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTopoConstraintAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.XComponentMax"></a>

### *property* DisplacementConstraint.XComponentMax *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponentMax.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.YComponentMax"></a>

### *property* DisplacementConstraint.YComponentMax *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponentMax.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.ZComponentMax"></a>

### *property* DisplacementConstraint.ZComponentMax *: [Ansys.ACT.Mechanical.Fields.Field](../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponentMax.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.ScopingMethod"></a>

### *property* DisplacementConstraint.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.Location"></a>

### *property* DisplacementConstraint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.DataModelObjectCategory"></a>

### *property* DisplacementConstraint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.EnvironmentSelection"></a>

### *property* DisplacementConstraint.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object or TopoEnvironmentType enum.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.Suppressed"></a>

### *property* DisplacementConstraint.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.Children"></a>

### *property* DisplacementConstraint.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* DisplacementConstraint.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.Properties"></a>

### *property* DisplacementConstraint.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.VisibleProperties"></a>

### *property* DisplacementConstraint.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DisplacementConstraint.RenameBasedOnDefinition"></a>

### DisplacementConstraint.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.Delete"></a>

### DisplacementConstraint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.GetChildren"></a>

### DisplacementConstraint.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### DisplacementConstraint.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.Activate"></a>

### DisplacementConstraint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.CopyTo"></a>

### DisplacementConstraint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.Duplicate"></a>

### DisplacementConstraint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.GroupAllSimilarChildren"></a>

### DisplacementConstraint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.GroupSimilarObjects"></a>

### DisplacementConstraint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.PropertyByName"></a>

### DisplacementConstraint.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.PropertyByAPIName"></a>

### DisplacementConstraint.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.CreateParameter"></a>

### DisplacementConstraint.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.GetParameter"></a>

### DisplacementConstraint.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DisplacementConstraint.RemoveParameter"></a>

### DisplacementConstraint.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
