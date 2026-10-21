# `GlobalObjectStatus`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.GlobalObjectStatus"></a>

#### *class* Ansys.Mechanical.DataModel.MechanicalEnums.GlobalObjectStatus(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

Global objects have three forms of global association: ObjectActive, ObjectInactive, and ObjectNotApplicable.
: ObjectActive and ObjectInactive are applied in situations where the use is relevant, like applying a Joint or Contact to a Static Structural Analysis.
  ObjectNotApplicable is applied in situations where the use is not relevant, such as trying to use a Bolt Pretension in a Thermal Analysis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| ------------------------------------------------------------------ |
| [`ObjectActive`](#GlobalObjectStatus.ObjectActive) |
| [`ObjectInactive`](#GlobalObjectStatus.ObjectInactive) |
| [`ObjectNotApplicable`](#GlobalObjectStatus.ObjectNotApplicable) |
| [`Unspecified`](#GlobalObjectStatus.Unspecified) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="GlobalObjectStatus.ObjectActive"></a>

### GlobalObjectStatus.ObjectActive *= 1*

<a id="GlobalObjectStatus.ObjectInactive"></a>

### GlobalObjectStatus.ObjectInactive *= 2*

<a id="GlobalObjectStatus.ObjectNotApplicable"></a>

### GlobalObjectStatus.ObjectNotApplicable *= 3*

<a id="GlobalObjectStatus.Unspecified"></a>

### GlobalObjectStatus.Unspecified *= 0*


