# `ContactDebonding`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ContactDebonding"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ContactDebonding

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ContactDebonding.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ContactDebonding.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#ContactDebonding.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`CopyTo`](#ContactDebonding.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ContactDebonding.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ContactDebonding.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ContactDebonding.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetParameter`](#ContactDebonding.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ContactDebonding.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactDebonding.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ContactDebonding.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ContactDebonding.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ContactDebonding.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ContactRegion`](#ContactDebonding.ContactRegion)                     | Gets or sets the ContactRegion.                               |
| [`CriticalRate`](#ContactDebonding.CriticalRate)                       | Gets or sets the CriticalRate.                                |
| [`DataModelObjectCategory`](#ContactDebonding.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`GenerationMethod`](#ContactDebonding.GenerationMethod)               | Gets or sets the GenerationMethod.                            |
| [`InitialCrack`](#ContactDebonding.InitialCrack)                       | Gets or sets the InitialCrack.                                |
| [`InitialTimeStep`](#ContactDebonding.InitialTimeStep)                 | Gets or sets the InitialTimeStep.                             |
| [`InternalObject`](#ContactDebonding.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Material`](#ContactDebonding.Material)                               | Gets or sets the Material.                                    |
| [`MaximumTimeStep`](#ContactDebonding.MaximumTimeStep)                 | Gets or sets the MaximumTimeStep.                             |
| [`Method`](#ContactDebonding.Method)                                   | Gets or sets the Method.                                      |
| [`MinimumTimeStep`](#ContactDebonding.MinimumTimeStep)                 | Gets or sets the MinimumTimeStep.                             |
| [`Properties`](#ContactDebonding.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#ContactDebonding.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Type`](#ContactDebonding.Type)                                       | Gets the Type.                                                |
| [`VisibleProperties`](#ContactDebonding.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ContactDebonding.ContactRegion"></a>

### *property* ContactDebonding.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CriticalRate"></a>

### *property* ContactDebonding.CriticalRate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.DataModelObjectCategory"></a>

### *property* ContactDebonding.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GenerationMethod"></a>

### *property* ContactDebonding.GenerationMethod *: [Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod](../../../Mechanical/DataModel/Enums/DelaminationGenerationMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.InitialCrack"></a>

### *property* ContactDebonding.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.InitialTimeStep"></a>

### *property* ContactDebonding.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.InternalObject"></a>

### *property* ContactDebonding.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Material"></a>

### *property* ContactDebonding.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.MaximumTimeStep"></a>

### *property* ContactDebonding.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Method"></a>

### *property* ContactDebonding.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](../../../Mechanical/DataModel/Enums/DelaminationMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DelaminationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.MinimumTimeStep"></a>

### *property* ContactDebonding.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Properties"></a>

### *property* ContactDebonding.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Suppressed"></a>

### *property* ContactDebonding.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Type"></a>

### *property* ContactDebonding.Type *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](../../../Mechanical/DataModel/Enums/DelaminationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DelaminationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.VisibleProperties"></a>

### *property* ContactDebonding.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDebonding.Activate"></a>

### ContactDebonding.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.AddCommandSnippet"></a>

### ContactDebonding.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CopyTo"></a>

### ContactDebonding.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CreateParameter"></a>

### ContactDebonding.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Delete"></a>

### ContactDebonding.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Duplicate"></a>

### ContactDebonding.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetParameter"></a>

### ContactDebonding.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GroupAllSimilarChildren"></a>

### ContactDebonding.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GroupSimilarObjects"></a>

### ContactDebonding.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.PropertyByAPIName"></a>

### ContactDebonding.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.PropertyByName"></a>

### ContactDebonding.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.RemoveParameter"></a>

### ContactDebonding.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

