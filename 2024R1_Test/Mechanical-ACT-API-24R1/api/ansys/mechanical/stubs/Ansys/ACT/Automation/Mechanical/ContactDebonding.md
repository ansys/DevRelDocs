# ContactDebonding

<a id="ContactDebonding"></a>

### *class* ContactDebonding

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ContactDebonding.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#ContactDebonding.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#ContactDebonding.Delete)                                   | Run the Delete action.                                                            |
| [`Activate`](#ContactDebonding.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ContactDebonding.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ContactDebonding.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ContactDebonding.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ContactDebonding.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ContactDebonding.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ContactDebonding.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ContactDebonding.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ContactDebonding.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ContactDebonding.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Material`](Material.md#Material)                                                                                  | Gets or sets the Material.                                    |
| [`CriticalRate`](#ContactDebonding.CriticalRate)                                                                    | Gets or sets the CriticalRate.                                |
| [`InitialTimeStep`](#ContactDebonding.InitialTimeStep)                                                              | Gets or sets the InitialTimeStep.                             |
| [`MaximumTimeStep`](#ContactDebonding.MaximumTimeStep)                                                              | Gets or sets the MaximumTimeStep.                             |
| [`MinimumTimeStep`](#ContactDebonding.MinimumTimeStep)                                                              | Gets or sets the MinimumTimeStep.                             |
| [`Method`](#ContactDebonding.Method)                                                                                | Gets or sets the Method.                                      |
| [`Type`](#ContactDebonding.Type)                                                                                    | Gets the Type.                                                |
| [`GenerationMethod`](#ContactDebonding.GenerationMethod)                                                            | Gets or sets the GenerationMethod.                            |
| [`Suppressed`](#ContactDebonding.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`ContactRegion`](Connections/ContactRegion.md#ContactRegion)                                                       | Gets or sets the ContactRegion.                               |
| [`InitialCrack`](#ContactDebonding.InitialCrack)                                                                    | Gets or sets the InitialCrack.                                |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ContactDebonding.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ContactDebonding.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ContactDebonding
```

<a id="property-detail"></a>

## Property detail

<a id="ContactDebonding.InternalObject"></a>

### *property* ContactDebonding.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Material"></a>

### *property* ContactDebonding.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CriticalRate"></a>

### *property* ContactDebonding.CriticalRate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CriticalRate.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.InitialTimeStep"></a>

### *property* ContactDebonding.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.MaximumTimeStep"></a>

### *property* ContactDebonding.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.MinimumTimeStep"></a>

### *property* ContactDebonding.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Method"></a>

### *property* ContactDebonding.Method *: [Ansys.Mechanical.DataModel.Enums.DelaminationMethod](./../../../Mechanical/DataModel/Enums/DelaminationMethod.md#DelaminationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Type"></a>

### *property* ContactDebonding.Type *: [Ansys.Mechanical.DataModel.Enums.DelaminationType](./../../../Mechanical/DataModel/Enums/DelaminationType.md#DelaminationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GenerationMethod"></a>

### *property* ContactDebonding.GenerationMethod *: [Ansys.Mechanical.DataModel.Enums.DelaminationGenerationMethod](./../../../Mechanical/DataModel/Enums/DelaminationGenerationMethod.md#DelaminationGenerationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Suppressed"></a>

### *property* ContactDebonding.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.ContactRegion"></a>

### *property* ContactDebonding.ContactRegion *: [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](Connections/ContactRegion.md#ContactRegion) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactRegion.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.InitialCrack"></a>

### *property* ContactDebonding.InitialCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#GenericCrack) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialCrack.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.DataModelObjectCategory"></a>

### *property* ContactDebonding.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ContactDebonding.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Properties"></a>

### *property* ContactDebonding.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.VisibleProperties"></a>

### *property* ContactDebonding.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ContactDebonding.AddCommandSnippet"></a>

### ContactDebonding.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Delete"></a>

### ContactDebonding.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Activate"></a>

### ContactDebonding.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CopyTo"></a>

### ContactDebonding.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.Duplicate"></a>

### ContactDebonding.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GroupAllSimilarChildren"></a>

### ContactDebonding.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GroupSimilarObjects"></a>

### ContactDebonding.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.PropertyByName"></a>

### ContactDebonding.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.PropertyByAPIName"></a>

### ContactDebonding.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.CreateParameter"></a>

### ContactDebonding.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.GetParameter"></a>

### ContactDebonding.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ContactDebonding.RemoveParameter"></a>

### ContactDebonding.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
