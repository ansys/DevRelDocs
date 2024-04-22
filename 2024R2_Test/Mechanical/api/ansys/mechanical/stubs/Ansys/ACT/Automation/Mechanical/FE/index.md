<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE"></a>

<a id="the-fe-package"></a>

# The `FE` package

<a id="summary"></a>

## Summary

### Subpackages

| Name | Summary |
|--------------------------------------------------------------------------------------------------------|----------------------|
| [`ABAQUS`](ABAQUS/index.md#module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.ABAQUS)    | ABAQUS subpackage.   |
| [`CDB`](CDB/index.md#module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB)             | CDB subpackage.      |
| [`NASTRAN`](NASTRAN/index.md#module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.NASTRAN) | NASTRAN subpackage.  |

### Classes

| Name | Summary |
|---------------------------------------------------------------|------------------------------|
| [`CommandColl`](CommandColl.md#CommandColl)                   | Collection of commands.      |
| [`CommandRepository`](CommandRepository.md#CommandRepository) | Command repository.          |
| [`Command`](Command.md#Command)                               | Base class for all Commands. |
| [`FEParser`](FEParser.md#FEParser)                            | FE parser object.            |

### Enums

| Name | Summary |
|--------------------------------------------------|------------------|
| [`CommandsType`](CommandsType.md#CommandsType)   | Commands type.   |

<a id="description"></a>

## Description

FE subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="FE.CommandColl"></a>

### *class* FE.CommandColl

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Collection of commands.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|------------------------|-------------------------------|
| [`Count`](#FE.Count)   | Gets the count of commands.   |
| [`Item`](#FE.Item)     | Item property.                |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE import CommandColl
```

<a id="property-detail"></a>

## Property detail

<a id="FE.Count"></a>

### *property* FE.Count *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the count of commands.

<!-- !! processed by numpydoc !! -->

<a id="FE.Item"></a>

### *property* FE.Item *: Ansys.Common.Interop.FECommandsModel.ICommand | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="FE.CommandRepository"></a>

### *class* FE.CommandRepository

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Command repository.

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|----------------------------------------------------|----------------------------------------------------------------------------------------------------|
| [`GetCommandsByName`](#FE.GetCommandsByName)       | Gets the commands by name.                                                                         |
| [`GetCommandByIndex`](#FE.GetCommandByIndex)       | Gets the commands by index.                                                                        |
| [`GetCommandNamesCount`](#FE.GetCommandNamesCount) | Gets the number of commands of a type specified by param=eCommandsType in the repository.          |
| [`GetCommandName`](#FE.GetCommandName)             | Gets the name of commands of a type specified by params eCommandsType and index in the repository. |
| [`GetCommandNames`](#FE.GetCommandNames)           | Gets the command names of a type specified by params eCommandsType and index in the repository.    |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE import CommandRepository
```

<a id="method-detail"></a>

## Method detail

<a id="FE.GetCommandsByName"></a>

### FE.GetCommandsByName(name: System.String)

Gets the commands by name.

<!-- !! processed by numpydoc !! -->

<a id="FE.GetCommandByIndex"></a>

### FE.GetCommandByIndex(index: System.Int32)

Gets the commands by index.

<!-- !! processed by numpydoc !! -->

<a id="FE.GetCommandNamesCount"></a>

### FE.GetCommandNamesCount(eCommandsType: [Ansys.ACT.Automation.Mechanical.FE.CommandsType](CommandsType.md#CommandsType))

Gets the number of commands of a type specified by param=eCommandsType in the repository.

<!-- !! processed by numpydoc !! -->

<a id="FE.GetCommandName"></a>

### FE.GetCommandName(eCommandsType: [Ansys.ACT.Automation.Mechanical.FE.CommandsType](CommandsType.md#CommandsType), index: System.Int32)

Gets the name of commands of a type specified by params eCommandsType and index in the repository.

<!-- !! processed by numpydoc !! -->

<a id="FE.GetCommandNames"></a>

### FE.GetCommandNames(eCommandsType: [Ansys.ACT.Automation.Mechanical.FE.CommandsType](CommandsType.md#CommandsType))

Gets the command names of a type specified by params eCommandsType and index in the repository.

<!-- !! processed by numpydoc !! -->

<a id="FE.Command"></a>

### *class* FE.Command

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Base class for all Commands.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|----------------------|--------------------------|
| [`Name`](#FE.Name)   | Gets the command name.   |
| [`Index`](#FE.Index) | Gets the command index.  |

<a id="id2"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE import Command
```

<a id="id3"></a>

## Property detail

<a id="FE.Name"></a>

### *property* FE.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="FE.Index"></a>

### *property* FE.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="FE.FEParser"></a>

### *class* FE.FEParser

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> FE parser object.

> <!-- !! processed by numpydoc !! -->

<a id="id4"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE import FEParser
```

<a id="FE.CommandsType"></a>

### *class* FE.CommandsType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Commands type.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|----------------------------------|----|
| [`Processed`](#FE.Processed)     |    |
| [`UnProcessed`](#FE.UnProcessed) |    |
| [`All`](#FE.All)                 |    |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE import CommandsType
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="FE.Processed"></a>

### FE.Processed *= 1*

<a id="FE.UnProcessed"></a>

### FE.UnProcessed *= 2*

<a id="FE.All"></a>

### FE.All *= 3*
