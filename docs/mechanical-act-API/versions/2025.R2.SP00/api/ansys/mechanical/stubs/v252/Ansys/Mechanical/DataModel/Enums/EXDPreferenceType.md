# `EXDPreferenceType`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.EXDPreferenceType"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.EXDPreferenceType(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

Create a collection of name/value pairs.

Example enumeration:

```pycon
>>> class Color(Enum):
...     RED = 1
...     BLUE = 2
...     GREEN = 3
```

Access them by:

- attribute access:
  ```pycon
  >>> Color.RED
  <Color.RED: 1>
  ```
- value lookup:
  ```pycon
  >>> Color(1)
  <Color.RED: 1>
  ```
- name lookup:
  ```pycon
  >>> Color['RED']
  <Color.RED: 1>
  ```

Enumerations can be iterated over, and know how many members they have:

```pycon
>>> len(Color)
3
```

```pycon
>>> list(Color)
[<Color.RED: 1>, <Color.BLUE: 2>, <Color.GREEN: 3>]
```

Methods can be added to enumerations, and members can have their own
attributes – see the documentation for details.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| ------------------------------------------------------------- |
| [`Custom`](#EXDPreferenceType.Custom) |
| [`DropTest`](#EXDPreferenceType.DropTest) |
| [`Efficiency`](#EXDPreferenceType.Efficiency) |
| [`HighVelocity`](#EXDPreferenceType.HighVelocity) |
| [`LowVelocity`](#EXDPreferenceType.LowVelocity) |
| [`ProgramControlled`](#EXDPreferenceType.ProgramControlled) |
| [`QuasiStatic`](#EXDPreferenceType.QuasiStatic) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="EXDPreferenceType.Custom"></a>

### EXDPreferenceType.Custom *= 6*

<a id="EXDPreferenceType.DropTest"></a>

### EXDPreferenceType.DropTest *= 5*

<a id="EXDPreferenceType.Efficiency"></a>

### EXDPreferenceType.Efficiency *= 3*

<a id="EXDPreferenceType.HighVelocity"></a>

### EXDPreferenceType.HighVelocity *= 2*

<a id="EXDPreferenceType.LowVelocity"></a>

### EXDPreferenceType.LowVelocity *= 1*

<a id="EXDPreferenceType.ProgramControlled"></a>

### EXDPreferenceType.ProgramControlled *= 0*

<a id="EXDPreferenceType.QuasiStatic"></a>

### EXDPreferenceType.QuasiStatic *= 4*


