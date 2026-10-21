# `IMechanicalUserLoad`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalUserLoad"></a>

#### *class* Ansys.ACT.Interfaces.Mechanical.IMechanicalUserLoad

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Mechanical user load.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-------------------------------------------|
| [`CreateChild`](#IMechanicalUserLoad.CreateChild)                 | CreateChild method.                       |
| [`Import`](#IMechanicalUserLoad.Import)                           | Import method.                            |
| [`NotifyChange`](#IMechanicalUserLoad.NotifyChange)               | NotifyChange method.                      |
| [`SetCoordinateSystem`](#IMechanicalUserLoad.SetCoordinateSystem) | SetCoordinateSystem method.               |
| [`SetDefaultSelection`](#IMechanicalUserLoad.SetDefaultSelection) | Sets the default selection of the entity. |

### Properties

| Name | Description |
|-----------------------------------------------------------------|-------------------------------|
| [`AffectsSolution`](#IMechanicalUserLoad.AffectsSolution)       | AffectsSolution property.     |
| [`AllProperties`](#IMechanicalUserLoad.AllProperties)           | AllProperties property.       |
| [`Analysis`](#Analysis)  | Gets the associated analysis. |
| [`Attributes`](#IMechanicalUserLoad.Attributes)                 | Attributes property.          |
| [`Caption`](#IMechanicalUserLoad.Caption)                       | Caption property.             |
| [`Children`](#IMechanicalUserLoad.Children)                     | Children property.            |
| [`Color`](#Color)                 | Color property.               |
| [`Controller`](#IMechanicalUserLoad.Controller)                 | Controller property.          |
| [`Extension`](#IMechanicalUserLoad.Extension)                   | Extension property.           |
| [`Icon`](#IMechanicalUserLoad.Icon)                             | Icon property.                |
| [`Id`](#IMechanicalUserLoad.Id)                                 | Id property.                  |
| [`InternalCaption`](#IMechanicalUserLoad.InternalCaption)       | InternalCaption property.     |
| [`IsLoad`](#IMechanicalUserLoad.IsLoad)                         | IsLoad property.              |
| [`IsSupport`](#IMechanicalUserLoad.IsSupport)                   | IsSupport property.           |
| [`Name`](#IMechanicalUserLoad.Name)                             | Name property.                |
| [`ObjectLocation`](#IMechanicalUserLoad.ObjectLocation)         | ObjectLocation property.      |
| [`ObjectType`](#IMechanicalUserLoad.ObjectType)                 | ObjectType property.          |
| [`Parent`](#IMechanicalUserLoad.Parent)                         | Parent property.              |
| [`Properties`](#IMechanicalUserLoad.Properties)                 | Properties property.          |
| [`State`](#IMechanicalUserLoad.State)                           | State property.               |
| [`SupportedLocations`](#IMechanicalUserLoad.SupportedLocations) | SupportedLocations property.  |
| [`Suppressed`](#IMechanicalUserLoad.Suppressed)                 | Suppressed property.          |
| [`Version`](#IMechanicalUserLoad.Version)                       | Version property.             |

<a id="property-detail"></a>

## Property detail

<a id="IMechanicalUserLoad.AffectsSolution"></a>

### *property* IMechanicalUserLoad.AffectsSolution *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

AffectsSolution property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.AllProperties"></a>

### *property* IMechanicalUserLoad.AllProperties *: Iterable[Ansys.ACT.Interfaces.UserObject.ISimProperty] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AllProperties property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Analysis"></a>

### *property* IMechanicalUserLoad.Analysis *: Ansys.ACT.Interfaces.Analysis.IAnalysis | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the associated analysis.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Attributes"></a>

### *property* IMechanicalUserLoad.Attributes *: [Ansys.ACT.Interfaces.Common.IAttributeCollection](../Common/IAttributeCollection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IAttributeCollection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Attributes property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Caption"></a>

### *property* IMechanicalUserLoad.Caption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Caption property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Children"></a>

### *property* IMechanicalUserLoad.Children *: Iterable[Ansys.ACT.Interfaces.UserObject.IUserObject] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Children property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Color"></a>

### *property* IMechanicalUserLoad.Color *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Color property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Controller"></a>

### *property* IMechanicalUserLoad.Controller *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controller property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Extension"></a>

### *property* IMechanicalUserLoad.Extension *: [Ansys.ACT.Interfaces.Common.IExtension](../Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Extension property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Icon"></a>

### *property* IMechanicalUserLoad.Icon *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Icon property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Id"></a>

### *property* IMechanicalUserLoad.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.InternalCaption"></a>

### *property* IMechanicalUserLoad.InternalCaption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalCaption property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.IsLoad"></a>

### *property* IMechanicalUserLoad.IsLoad *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsLoad property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.IsSupport"></a>

### *property* IMechanicalUserLoad.IsSupport *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsSupport property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Name"></a>

### *property* IMechanicalUserLoad.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.ObjectLocation"></a>

### *property* IMechanicalUserLoad.ObjectLocation *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectLocation property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.ObjectType"></a>

### *property* IMechanicalUserLoad.ObjectType *: Ansys.ACT.Interfaces.UserObject.ObjectTypeEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectType property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Parent"></a>

### *property* IMechanicalUserLoad.Parent *: Ansys.ACT.Interfaces.DataModel.IDataModelObject | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Properties"></a>

### *property* IMechanicalUserLoad.Properties *: Ansys.ACT.Interfaces.UserObject.IPropertyCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

Properties property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.State"></a>

### *property* IMechanicalUserLoad.State *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.SupportedLocations"></a>

### *property* IMechanicalUserLoad.SupportedLocations *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupportedLocations property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Suppressed"></a>

### *property* IMechanicalUserLoad.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Suppressed property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Version"></a>

### *property* IMechanicalUserLoad.Version *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Version property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalUserLoad.CreateChild"></a>

### IMechanicalUserLoad.CreateChild(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.UserObject.IUserLoad

CreateChild method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.Import"></a>

### IMechanicalUserLoad.Import() → [None](https://docs.python.org/3/builtins/constants.html#None)

Import method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.NotifyChange"></a>

### IMechanicalUserLoad.NotifyChange() → [None](https://docs.python.org/3/builtins/constants.html#None)

NotifyChange method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.SetCoordinateSystem"></a>

### IMechanicalUserLoad.SetCoordinateSystem(system: Ansys.ACT.Interfaces.Analysis.ICoordinateSystem) → [None](https://docs.python.org/3/builtins/constants.html#None)

SetCoordinateSystem method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalUserLoad.SetDefaultSelection"></a>

### IMechanicalUserLoad.SetDefaultSelection(selection: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo), notifyChange: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the default selection of the entity.

<!-- !! processed by numpydoc !! -->

