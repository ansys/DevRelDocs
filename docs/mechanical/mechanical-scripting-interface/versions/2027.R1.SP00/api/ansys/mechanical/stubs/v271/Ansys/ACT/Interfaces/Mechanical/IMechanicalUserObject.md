# `IMechanicalUserObject`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalUserObject"></a>

#### *class* Ansys.ACT.Interfaces.Mechanical.IMechanicalUserObject

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Mechanical user object.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-------------------------------------------|
| [`NotifyChange`](#IMechanicalUserObject.NotifyChange)               | NotifyChange method.                      |
| [`SetDefaultSelection`](#IMechanicalUserObject.SetDefaultSelection) | Sets the default selection of the entity. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|-------------------------------|
| [`AllProperties`](#IMechanicalUserObject.AllProperties)           | AllProperties property.       |
| [`Analysis`](#Analysis)    | Gets the associated analysis. |
| [`Attributes`](#IMechanicalUserObject.Attributes)                 | Attributes property.          |
| [`Caption`](#IMechanicalUserObject.Caption)                       | Caption property.             |
| [`Children`](#IMechanicalUserObject.Children)                     | Children property.            |
| [`Controller`](#IMechanicalUserObject.Controller)                 | Controller property.          |
| [`Extension`](#IMechanicalUserObject.Extension)                   | Extension property.           |
| [`Icon`](#IMechanicalUserObject.Icon)                             | Icon property.                |
| [`Id`](#IMechanicalUserObject.Id)                                 | Id property.                  |
| [`InternalCaption`](#IMechanicalUserObject.InternalCaption)       | InternalCaption property.     |
| [`Name`](#IMechanicalUserObject.Name)                             | Name property.                |
| [`ObjectLocation`](#IMechanicalUserObject.ObjectLocation)         | ObjectLocation property.      |
| [`ObjectType`](#IMechanicalUserObject.ObjectType)                 | ObjectType property.          |
| [`Parent`](#IMechanicalUserObject.Parent)                         | Parent property.              |
| [`Properties`](#IMechanicalUserObject.Properties)                 | Properties property.          |
| [`State`](#IMechanicalUserObject.State)                           | State property.               |
| [`SupportedLocations`](#IMechanicalUserObject.SupportedLocations) | SupportedLocations property.  |
| [`Version`](#IMechanicalUserObject.Version)                       | Version property.             |

<a id="property-detail"></a>

## Property detail

<a id="IMechanicalUserObject.AllProperties"></a>

### *property* IMechanicalUserObject.AllProperties *: Iterable[Ansys.ACT.Interfaces.UserObject.ISimProperty] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AllProperties property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Analysis"></a>

### *property* IMechanicalUserObject.Analysis *: Ansys.ACT.Interfaces.Analysis.IAnalysis | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the associated analysis.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Attributes"></a>

### *property* IMechanicalUserObject.Attributes *: [Ansys.ACT.Interfaces.Common.IAttributeCollection](../Common/IAttributeCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IAttributeCollection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Attributes property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Caption"></a>

### *property* IMechanicalUserObject.Caption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Caption property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Children"></a>

### *property* IMechanicalUserObject.Children *: Iterable[Ansys.ACT.Interfaces.UserObject.IUserObject] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Children property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Controller"></a>

### *property* IMechanicalUserObject.Controller *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controller property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Extension"></a>

### *property* IMechanicalUserObject.Extension *: [Ansys.ACT.Interfaces.Common.IExtension](../Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Extension property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Icon"></a>

### *property* IMechanicalUserObject.Icon *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Icon property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Id"></a>

### *property* IMechanicalUserObject.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.InternalCaption"></a>

### *property* IMechanicalUserObject.InternalCaption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalCaption property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Name"></a>

### *property* IMechanicalUserObject.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.ObjectLocation"></a>

### *property* IMechanicalUserObject.ObjectLocation *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectLocation property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.ObjectType"></a>

### *property* IMechanicalUserObject.ObjectType *: Ansys.ACT.Interfaces.UserObject.ObjectTypeEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectType property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Parent"></a>

### *property* IMechanicalUserObject.Parent *: Ansys.ACT.Interfaces.DataModel.IDataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Properties"></a>

### *property* IMechanicalUserObject.Properties *: Ansys.ACT.Interfaces.UserObject.IPropertyCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Properties property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.State"></a>

### *property* IMechanicalUserObject.State *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.SupportedLocations"></a>

### *property* IMechanicalUserObject.SupportedLocations *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupportedLocations property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.Version"></a>

### *property* IMechanicalUserObject.Version *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Version property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalUserObject.NotifyChange"></a>

### IMechanicalUserObject.NotifyChange() → [None](https://docs.python.org/3/builtins/constants.html#None)

NotifyChange method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserObject.SetDefaultSelection"></a>

### IMechanicalUserObject.SetDefaultSelection(selection: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo), notifyChange: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the default selection of the entity.

<!-- !! processed by numpydoc !! -->

