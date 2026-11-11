# `IMechanicalUserResult`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalUserResult"></a>

#### *class* Ansys.ACT.Interfaces.Mechanical.IMechanicalUserResult

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Mechanical user result.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-------------------------------------------|
| [`NotifyChange`](#IMechanicalUserResult.NotifyChange)               | NotifyChange method.                      |
| [`SetDefaultSelection`](#IMechanicalUserResult.SetDefaultSelection) | Sets the default selection of the entity. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|--------------------------------|
| [`AllProperties`](#IMechanicalUserResult.AllProperties)               | AllProperties property.        |
| [`Analysis`](#Analysis)        | Gets the associated analysis.  |
| [`Attributes`](#IMechanicalUserResult.Attributes)                     | Attributes property.           |
| [`CalculateTimeHistory`](#IMechanicalUserResult.CalculateTimeHistory) | CalculateTimeHistory property. |
| [`Caption`](#IMechanicalUserResult.Caption)                           | Caption property.              |
| [`Children`](#IMechanicalUserResult.Children)                         | Children property.             |
| [`Controller`](#IMechanicalUserResult.Controller)                     | Controller property.           |
| [`Extension`](#IMechanicalUserResult.Extension)                       | Extension property.            |
| [`HasImaginary`](#IMechanicalUserResult.HasImaginary)                 | HasImaginary property.         |
| [`Icon`](#IMechanicalUserResult.Icon)                                 | Icon property.                 |
| [`Id`](#IMechanicalUserResult.Id)                                     | Id property.                   |
| [`InternalCaption`](#IMechanicalUserResult.InternalCaption)           | InternalCaption property.      |
| [`Name`](#IMechanicalUserResult.Name)                                 | Name property.                 |
| [`ObjectLocation`](#IMechanicalUserResult.ObjectLocation)             | ObjectLocation property.       |
| [`ObjectType`](#IMechanicalUserResult.ObjectType)                     | ObjectType property.           |
| [`Parent`](#IMechanicalUserResult.Parent)                             | Parent property.               |
| [`Properties`](#IMechanicalUserResult.Properties)                     | Properties property.           |
| [`ResultAveraging`](#IMechanicalUserResult.ResultAveraging)           | ResultAveraging property.      |
| [`ResultLocation`](#IMechanicalUserResult.ResultLocation)             | ResultLocation property.       |
| [`ResultType`](#IMechanicalUserResult.ResultType)                     | ResultType property.           |
| [`State`](#IMechanicalUserResult.State)                               | State property.                |
| [`SupportedLocations`](#IMechanicalUserResult.SupportedLocations)     | SupportedLocations property.   |
| [`Suppressed`](#IMechanicalUserResult.Suppressed)                     | Suppressed property.           |
| [`Unit`](#IMechanicalUserResult.Unit)                                 | Unit property.                 |
| [`Version`](#IMechanicalUserResult.Version)                           | Version property.              |

<a id="property-detail"></a>

## Property detail

<a id="IMechanicalUserResult.AllProperties"></a>

### *property* IMechanicalUserResult.AllProperties *: Iterable[Ansys.ACT.Interfaces.UserObject.ISimProperty] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AllProperties property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Analysis"></a>

### *property* IMechanicalUserResult.Analysis *: Ansys.ACT.Interfaces.Analysis.IAnalysis | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the associated analysis.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Attributes"></a>

### *property* IMechanicalUserResult.Attributes *: [Ansys.ACT.Interfaces.Common.IAttributeCollection](../Common/IAttributeCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IAttributeCollection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Attributes property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.CalculateTimeHistory"></a>

### *property* IMechanicalUserResult.CalculateTimeHistory *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CalculateTimeHistory property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Caption"></a>

### *property* IMechanicalUserResult.Caption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Caption property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Children"></a>

### *property* IMechanicalUserResult.Children *: Iterable[Ansys.ACT.Interfaces.UserObject.IUserObject] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Children property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Controller"></a>

### *property* IMechanicalUserResult.Controller *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controller property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Extension"></a>

### *property* IMechanicalUserResult.Extension *: [Ansys.ACT.Interfaces.Common.IExtension](../Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Extension property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.HasImaginary"></a>

### *property* IMechanicalUserResult.HasImaginary *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

HasImaginary property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Icon"></a>

### *property* IMechanicalUserResult.Icon *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Icon property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Id"></a>

### *property* IMechanicalUserResult.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.InternalCaption"></a>

### *property* IMechanicalUserResult.InternalCaption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalCaption property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Name"></a>

### *property* IMechanicalUserResult.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.ObjectLocation"></a>

### *property* IMechanicalUserResult.ObjectLocation *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectLocation property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.ObjectType"></a>

### *property* IMechanicalUserResult.ObjectType *: Ansys.ACT.Interfaces.UserObject.ObjectTypeEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectType property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Parent"></a>

### *property* IMechanicalUserResult.Parent *: Ansys.ACT.Interfaces.DataModel.IDataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Properties"></a>

### *property* IMechanicalUserResult.Properties *: Ansys.ACT.Interfaces.UserObject.IPropertyCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Properties property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.ResultAveraging"></a>

### *property* IMechanicalUserResult.ResultAveraging *: Ansys.ACT.Interfaces.Post.ResultAveragingEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ResultAveraging property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.ResultLocation"></a>

### *property* IMechanicalUserResult.ResultLocation *: Ansys.ACT.Interfaces.Post.ResultLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ResultLocation property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.ResultType"></a>

### *property* IMechanicalUserResult.ResultType *: Ansys.ACT.Interfaces.Post.ResultTypeEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ResultType property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.State"></a>

### *property* IMechanicalUserResult.State *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.SupportedLocations"></a>

### *property* IMechanicalUserResult.SupportedLocations *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupportedLocations property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Suppressed"></a>

### *property* IMechanicalUserResult.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Suppressed property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Unit"></a>

### *property* IMechanicalUserResult.Unit *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Unit property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.Version"></a>

### *property* IMechanicalUserResult.Version *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Version property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalUserResult.NotifyChange"></a>

### IMechanicalUserResult.NotifyChange() → [None](https://docs.python.org/3/builtins/constants.html#None)

NotifyChange method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserResult.SetDefaultSelection"></a>

### IMechanicalUserResult.SetDefaultSelection(selection: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo), notifyChange: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the default selection of the entity.

<!-- !! processed by numpydoc !! -->

