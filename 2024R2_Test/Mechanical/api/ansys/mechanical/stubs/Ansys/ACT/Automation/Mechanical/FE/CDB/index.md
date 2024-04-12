<a id="module-ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB"></a>

<a id="the-cdb-package"></a>

# The `CDB` package

<a id="summary"></a>

## Summary

### Classes

| [`CDBCommand`](CDBCommand.md#CDBCommand)                                                                | CDBCommand class.                                                     |
|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| [`BeamSecBlockCommand`](BeamSecBlockCommand.md#BeamSecBlockCommand)                                     | Represents a beam SECBLOCK command.                                   |
| [`BFBlockCommand`](BFBlockCommand.md#BFBlockCommand)                                                    | Represents a BFBLOCK command.                                         |
| [`BFCommand`](BFCommand.md#BFCommand)                                                                   | Represents a BF command.                                              |
| [`BFECommand`](BFECommand.md#BFECommand)                                                                | Represents a BFE command.                                             |
| [`BFEBlockCommand`](BFEBlockCommand.md#BFEBlockCommand)                                                 | Represents a BFEBLOCK command.                                        |
| [`CECommand`](CECommand.md#CECommand)                                                                   | Represents a CE command.                                              |
| [`CECMODCommand`](CECMODCommand.md#CECMODCommand)                                                       | Represents a CECMOD command.                                          |
| [`CMBlockCommand`](CMBlockCommand.md#CMBlockCommand)                                                    | Represents a CMBLOCK command.                                         |
| [`CMEDITCommand`](CMEDITCommand.md#CMEDITCommand)                                                       | Represents a CMEDIT command.                                          |
| [`CMGRPCommand`](CMGRPCommand.md#CMGRPCommand)                                                          | Represents a CMGRP command.                                           |
| [`CPCommand`](CPCommand.md#CPCommand)                                                                   | Represents a CP command.                                              |
| [`EBlockCommand`](EBlockCommand.md#EBlockCommand)                                                       | Represents an EBLOCK command.                                         |
| [`ENCommand`](ENCommand.md#ENCommand)                                                                   | Represents an EN command.                                             |
| [`ETCommand`](ETCommand.md#ETCommand)                                                                   | Represents an ET command.                                             |
| [`GenericCommand`](../NASTRAN/GenericCommand.md#GenericCommand)                                         | Represents a generic command.                                         |
| [`LocalCommand`](LocalCommand.md#LocalCommand)                                                          | Represents a LOCAL command.                                           |
| [`MPCommand`](MPCommand.md#MPCommand)                                                                   | Represents a MP command.                                              |
| [`MPDataCommand`](MPDataCommand.md#MPDataCommand)                                                       | Represents a MPDATA command.                                          |
| [`NBlockCommand`](NBlockCommand.md#NBlockCommand)                                                       | Represents a NBLOCK command.                                          |
| [`NCommand`](NCommand.md#NCommand)                                                                      | Represents a N command.                                               |
| [`PreadCommand`](PreadCommand.md#PreadCommand)                                                          | Represents a <br/><br/>```<br/>*<br/>```<br/><br/>PREAD command.      |
| [`RCommand`](RCommand.md#RCommand)                                                                      | Represents a R command.                                               |
| [`RLBlockCommand`](RLBlockCommand.md#RLBlockCommand)                                                    | Represents a RLBLOCK command.                                         |
| [`SecdataCommand`](SecdataCommand.md#SecdataCommand)                                                    | Represents a SECDATA command.                                         |
| [`SecoffsetCommand`](SecoffsetCommand.md#SecoffsetCommand)                                              | Represents a SECOFFSET command.                                       |
| [`SectypeCommand`](SectypeCommand.md#SectypeCommand)                                                    | Represents a SECTYPE command.                                         |
| [`SeccontrolCommand`](SeccontrolCommand.md#SeccontrolCommand)                                           | Represents a SECCONTROL command.                                      |
| [`SFEBlockCommand`](SFEBlockCommand.md#SFEBlockCommand)                                                 | Represents a SFEBLOCK command.                                        |
| [`SFECommand`](SFECommand.md#SFECommand)                                                                | Represents a SFE command.                                             |
| [`ShellSecBlockCommand`](ShellSecBlockCommand.md#ShellSecBlockCommand)                                  | Represents a shell SECBLOCK command.                                  |
| [`CommandCell`](CommandCell.md#CommandCell)                                                             | Represents cell data associated to a beam SECBLOCK command.           |
| [`CommandCETerm`](CommandCETerm.md#CommandCETerm)                                                       | Represents a term associated to a CE command.                         |
| [`CommandElement`](CommandElement.md#CommandElement)                                                    | Represents an element associated to an EBLOCK command.                |
| [`CommandElementType`](CommandElementType.md#CommandElementType)                                        | Represents an element type associated to an ETBLOCK command.          |
| [`CommandElementBodyForce`](CommandElementBodyForce.md#CommandElementBodyForce)                         | Represents element body-force loads associated to BFEBLOCK command.   |
| [`CommandElementSurfaceLoad`](CommandElementSurfaceLoad.md#CommandElementSurfaceLoad)                   | Represents an element surface load associated to a SFEBLOCK command.  |
| [`CommandElementSurfaceLoadValues`](CommandElementSurfaceLoadValues.md#CommandElementSurfaceLoadValues) | Values associated to an element surface load from a SFEBLOCK command. |
| [`CommandKeyOpt`](CommandKeyOpt.md#CommandKeyOpt)                                                       | Represents a KEYOPT command.                                          |
| [`CommandLayer`](CommandLayer.md#CommandLayer)                                                          | Represents a layer associated to a shell SECBLOCK command.            |
| [`CommandNodalBodyForce`](CommandNodalBodyForce.md#CommandNodalBodyForce)                               | Represents a nodal body force associated to a BFBLOCK command.        |
| [`CommandNode`](CommandNode.md#CommandNode)                                                             | Represents a node associated to a NBLOCK command.                     |
| [`CommandReal`](CommandReal.md#CommandReal)                                                             | Represent a real constant set associated to a RLBLOCK command.        |
| [`TBDataValues`](TBDataValues.md#TBDataValues)                                                          | Represents data for a given temperature.                              |
| [`TBDataCommand`](TBDataCommand.md#TBDataCommand)                                                       | Represents a TBDATA command.                                          |
| [`TBPTValues`](TBPTValues.md#TBPTValues)                                                                | Represents a tuple of values for the TBPT commmand.                   |
| [`TBPTData`](TBPTData.md#TBPTData)                                                                      | Represents data for the TBPT command.                                 |
| [`TBPTCommand`](TBPTCommand.md#TBPTCommand)                                                             | Represents a TBPT command.                                            |
| [`ETBlockCommand`](ETBlockCommand.md#ETBlockCommand)                                                    | Represents a ETBLOCK command.                                         |

<a id="description"></a>

## Description

CDB subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="CDB.CDBCommand"></a>

### *class* CDB.CDBCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> CDBCommand class.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Name`](#id238)   | Gets the command name.   |
|--------------------|--------------------------|
| [`Index`](#id239)  | Gets the command index.  |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CDBCommand
```

<a id="property-detail"></a>

## Property detail

<a id="CDB.Name"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Index"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.BeamSecBlockCommand"></a>

### *class* CDB.BeamSecBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a beam SECBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Type`](#id172)      | Gets the section type.         |
|-----------------------|--------------------------------|
| [`Nodes`](#id173)     | Gets the nodes of the section. |
| [`Cells`](#CDB.Cells) | Gets the cells of the section. |
| [`Name`](#id238)      | Gets the command name.         |
| [`Index`](#id239)     | Gets the command index.        |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import BeamSecBlockCommand
```

<a id="id4"></a>

## Property detail

<a id="CDB.Type"></a>

### *property* CDB.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the section type.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Nodes"></a>

### *property* CDB.Nodes *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNode](CommandNode.md#CommandNode)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the nodes of the section.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Cells"></a>

### *property* CDB.Cells *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandCell](CommandCell.md#CommandCell)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the cells of the section.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.BFBlockCommand"></a>

### *class* CDB.BFBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a BFBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Lab`](#id228)                                   | Gets the label.                            |
|---------------------------------------------------|--------------------------------------------|
| [`NodalBodyForceCount`](#CDB.NodalBodyForceCount) | Gets the number of nodal body-force loads. |
| [`NodalBodyForces`](#CDB.NodalBodyForces)         | Gets the nodal body-force loads.           |
| [`Name`](#id238)                                  | Gets the command name.                     |
| [`Index`](#id239)                                 | Gets the command index.                    |

<a id="id6"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import BFBlockCommand
```

<a id="id7"></a>

## Property detail

<a id="CDB.Lab"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="CDB.NodalBodyForceCount"></a>

### *property* CDB.NodalBodyForceCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of nodal body-force loads.

<!-- !! processed by numpydoc !! -->

<a id="CDB.NodalBodyForces"></a>

### *property* CDB.NodalBodyForces *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNodalBodyForce](CommandNodalBodyForce.md#CommandNodalBodyForce)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the nodal body-force loads.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.BFCommand"></a>

### *class* CDB.BFCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a BF command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Node`](#id197)     | Gets the node number.      |
|----------------------|----------------------------|
| [`Lab`](#id228)      | Gets the label.            |
| [`ValCount`](#id198) | Gets the number of values. |
| [`Values`](#id221)   | Gets the values.           |
| [`Name`](#id238)     | Gets the command name.     |
| [`Index`](#id239)    | Gets the command index.    |

<a id="id10"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import BFCommand
```

<a id="id11"></a>

## Property detail

<a id="CDB.Node"></a>

### *property* CDB.Node *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the node number.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ValCount"></a>

### *property* CDB.ValCount *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Values"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.BFECommand"></a>

### *class* CDB.BFECommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a BFE command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Elem`](#id185)     | Gets the element number.    |
|----------------------|-----------------------------|
| [`Lab`](#id228)      | Gets the label.             |
| [`Stloc`](#id116)    | Gets the starting location. |
| [`ValCount`](#id198) | Gets the number of values.  |
| [`Values`](#id221)   | Gets the values.            |
| [`Name`](#id238)     | Gets the command name.      |
| [`Index`](#id239)    | Gets the command index.     |

<a id="id15"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import BFECommand
```

<a id="id16"></a>

## Property detail

<a id="CDB.Elem"></a>

### *property* CDB.Elem *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element number.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Stloc"></a>

### *property* CDB.Stloc *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the starting location.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* CDB.ValCount *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of values.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.BFEBlockCommand"></a>

### *class* CDB.BFEBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a BFEBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Lab`](#id228)                                       | Gets the label.                              |
|-------------------------------------------------------|----------------------------------------------|
| [`ElementBodyForceCount`](#CDB.ElementBodyForceCount) | Gets the number of element body-force loads. |
| [`ElementBodyForces`](#CDB.ElementBodyForces)         | Gets the element body-force loads.           |
| [`Name`](#id238)                                      | Gets the command name.                       |
| [`Index`](#id239)                                     | Gets the command index.                      |

<a id="id22"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import BFEBlockCommand
```

<a id="id23"></a>

## Property detail

<a id="id24"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ElementBodyForceCount"></a>

### *property* CDB.ElementBodyForceCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of element body-force loads.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ElementBodyForces"></a>

### *property* CDB.ElementBodyForces *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandElementBodyForce](CommandElementBodyForce.md#CommandElementBodyForce)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element body-force loads.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CECommand"></a>

### *class* CDB.CECommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a CE command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Nce`](#id33)        | Gets the constraint equation number.    |
|-----------------------|-----------------------------------------|
| [`Constant`](#id34)   | Gets the constant term of the equation. |
| [`Terms`](#CDB.Terms) | Gets the equation terms.                |
| [`Name`](#id238)      | Gets the command name.                  |
| [`Index`](#id239)     | Gets the command index.                 |

<a id="id27"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CECommand
```

<a id="id28"></a>

## Property detail

<a id="CDB.Nce"></a>

### *property* CDB.Nce *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the constraint equation number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Constant"></a>

### *property* CDB.Constant *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the constant term of the equation.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Terms"></a>

### *property* CDB.Terms *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandCETerm](CommandCETerm.md#CommandCETerm)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the equation terms.

<!-- !! processed by numpydoc !! -->

<a id="id29"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id30"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CECMODCommand"></a>

### *class* CDB.CECMODCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a CECMOD command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Nce`](#id33)      | Gets the constraint equation number.    |
|---------------------|-----------------------------------------|
| [`Constant`](#id34) | Gets the constant term of the equation. |
| [`Name`](#id238)    | Gets the command name.                  |
| [`Index`](#id239)   | Gets the command index.                 |

<a id="id31"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CECMODCommand
```

<a id="id32"></a>

## Property detail

<a id="id33"></a>

### *property* CDB.Nce *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the constraint equation number.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* CDB.Constant *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the constant term of the equation.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CMBlockCommand"></a>

### *class* CDB.CMBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a CMBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Cmname`](#CDB.Cmname)   | Gets the component name.                  |
|---------------------------|-------------------------------------------|
| [`Type`](#id172)          | Gets the type of entities (node or elem). |
| [`Elements`](#id59)       | Gets the type of entities.                |
| [`Name`](#id238)          | Gets the command name.                    |
| [`Index`](#id239)         | Gets the command index.                   |

<a id="id37"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CMBlockCommand
```

<a id="id38"></a>

## Property detail

<a id="CDB.Cmname"></a>

### *property* CDB.Cmname *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the component name.

<!-- !! processed by numpydoc !! -->

<a id="id39"></a>

### *property* CDB.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the type of entities (node or elem).

<!-- !! processed by numpydoc !! -->

<a id="CDB.Elements"></a>

### *property* CDB.Elements *: System.Collections.Generic.IReadOnlyList[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the type of entities.

<!-- !! processed by numpydoc !! -->

<a id="id40"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id41"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CMEDITCommand"></a>

### *class* CDB.CMEDITCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a CMEDIT command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Aname`](#id110)   | Gets the assembly name.                 |
|---------------------|-----------------------------------------|
| [`Oper`](#CDB.Oper) | Gets the operation label (add or dele). |
| [`Cnames`](#id49)   | Gets the component names.               |
| [`Name`](#id238)    | Gets the command name.                  |
| [`Index`](#id239)   | Gets the command index.                 |

<a id="id42"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CMEDITCommand
```

<a id="id43"></a>

## Property detail

<a id="CDB.Aname"></a>

### *property* CDB.Aname *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the assembly name.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Oper"></a>

### *property* CDB.Oper *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the operation label (add or dele).

<!-- !! processed by numpydoc !! -->

<a id="CDB.Cnames"></a>

### *property* CDB.Cnames *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the component names.

<!-- !! processed by numpydoc !! -->

<a id="id44"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id45"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CMGRPCommand"></a>

### *class* CDB.CMGRPCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a CMGRP command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Aname`](#id110)   | Gets the assembly name.                   |
|---------------------|-------------------------------------------|
| [`Cnames`](#id49)   | Gets the component and/or assembly names. |
| [`Name`](#id238)    | Gets the command name.                    |
| [`Index`](#id239)   | Gets the command index.                   |

<a id="id46"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CMGRPCommand
```

<a id="id47"></a>

## Property detail

<a id="id48"></a>

### *property* CDB.Aname *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the assembly name.

<!-- !! processed by numpydoc !! -->

<a id="id49"></a>

### *property* CDB.Cnames *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the component and/or assembly names.

<!-- !! processed by numpydoc !! -->

<a id="id50"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CPCommand"></a>

### *class* CDB.CPCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a CP command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Ncp`](#CDB.Ncp)   | Gets the number of coupled nodes.   |
|---------------------|-------------------------------------|
| [`Dof`](#id167)     | Gets the degree of freedom label.   |
| [`Nodes`](#id173)   | Gets the nodes.                     |
| [`Name`](#id238)    | Gets the command name.              |
| [`Index`](#id239)   | Gets the command index.             |

<a id="id52"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CPCommand
```

<a id="id53"></a>

## Property detail

<a id="CDB.Ncp"></a>

### *property* CDB.Ncp *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of coupled nodes.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Dof"></a>

### *property* CDB.Dof *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the degree of freedom label.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* CDB.Nodes *: System.Collections.Generic.IReadOnlyList[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the nodes.

<!-- !! processed by numpydoc !! -->

<a id="id55"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id56"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.EBlockCommand"></a>

### *class* CDB.EBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents an EBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Elements`](#id59)   | Gets the elements.      |
|-----------------------|-------------------------|
| [`Name`](#id238)      | Gets the command name.  |
| [`Index`](#id239)     | Gets the command index. |

<a id="id57"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import EBlockCommand
```

<a id="id58"></a>

## Property detail

<a id="id59"></a>

### *property* CDB.Elements *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandElement](CommandElement.md#CommandElement)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the elements.

<!-- !! processed by numpydoc !! -->

<a id="id60"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id61"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ENCommand"></a>

### *class* CDB.ENCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents an EN command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Type`](#id172)   | Gets the type (attribute or node).   |
|--------------------|--------------------------------------|
| [`Values`](#id221) | Gets the values.                     |
| [`Name`](#id238)   | Gets the command name.               |
| [`Index`](#id239)  | Gets the command index.              |

<a id="id62"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import ENCommand
```

<a id="id63"></a>

## Property detail

<a id="id64"></a>

### *property* CDB.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the type (attribute or node).

<!-- !! processed by numpydoc !! -->

<a id="id65"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id66"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id67"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ETCommand"></a>

### *class* CDB.ETCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents an ET command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Id`](#id206)      | Gets the element number.   |
|---------------------|----------------------------|
| [`Ename`](#id177)   | Gets the element name.     |
| [`Keyopts`](#id178) | Gets the key options.      |
| [`Name`](#id238)    | Gets the command name.     |
| [`Index`](#id239)   | Gets the command index.    |

<a id="id68"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import ETCommand
```

<a id="id69"></a>

## Property detail

<a id="CDB.Id"></a>

### *property* CDB.Id *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Ename"></a>

### *property* CDB.Ename *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element name.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Keyopts"></a>

### *property* CDB.Keyopts *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandKeyOpt](CommandKeyOpt.md#CommandKeyOpt)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the key options.

<!-- !! processed by numpydoc !! -->

<a id="id70"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id71"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.GenericCommand"></a>

### *class* CDB.GenericCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a generic command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Arguments`](#CDB.Arguments)   | Gets the arguments.     |
|---------------------------------|-------------------------|
| [`Name`](#id238)                | Gets the command name.  |
| [`Index`](#id239)               | Gets the command index. |

<a id="id72"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import GenericCommand
```

<a id="id73"></a>

## Property detail

<a id="CDB.Arguments"></a>

### *property* CDB.Arguments *: System.Collections.Generic.IReadOnlyList[System.String] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the arguments.

<!-- !! processed by numpydoc !! -->

<a id="id74"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id75"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.LocalCommand"></a>

### *class* CDB.LocalCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a LOCAL command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Type`](#id172)      | Gets the type of the data to be defined.   |
|-----------------------|--------------------------------------------|
| [`Ncsy`](#CDB.Ncsy)   | Gets the system number.                    |
| [`Cstyp`](#CDB.Cstyp) | Gets the system type.                      |
| [`Values`](#id221)    | Gets the values.                           |
| [`Name`](#id238)      | Gets the command name.                     |
| [`Index`](#id239)     | Gets the command index.                    |

<a id="id76"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import LocalCommand
```

<a id="id77"></a>

## Property detail

<a id="id78"></a>

### *property* CDB.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the type of the data to be defined.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Ncsy"></a>

### *property* CDB.Ncsy *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the system number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Cstyp"></a>

### *property* CDB.Cstyp *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the system type.

<!-- !! processed by numpydoc !! -->

<a id="id79"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id80"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id81"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.MPCommand"></a>

### *class* CDB.MPCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a MP command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Mat`](#id229)   | Gets the material number.                                                                 |
|-------------------|-------------------------------------------------------------------------------------------|
| [`Lab`](#id228)   | Gets the label.                                                                           |
| [`C0`](#CDB.C0)   | Gets the temperature-independent term of the property.                                    |
| [`C1`](#CDB.C1)   | Gets the coefficient of the linear term in the property-versus-temperature polynomial.    |
| [`C2`](#CDB.C2)   | Gets the coefficient of the quadratic term in the property-versus-temperature polynomial. |
| [`C3`](#CDB.C3)   | Gets the coefficient of the cubic term in the property-versus-temperature polynomial.     |
| [`C4`](#CDB.C4)   | Gets the coefficient of the quartic term in the property-versus-temperature polynomial.   |
| [`Name`](#id238)  | Gets the command name.                                                                    |
| [`Index`](#id239) | Gets the command index.                                                                   |

<a id="id82"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import MPCommand
```

<a id="id83"></a>

## Property detail

<a id="CDB.Mat"></a>

### *property* CDB.Mat *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the material number.

<!-- !! processed by numpydoc !! -->

<a id="id84"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="CDB.C0"></a>

### *property* CDB.C0 *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the temperature-independent term of the property.

<!-- !! processed by numpydoc !! -->

<a id="CDB.C1"></a>

### *property* CDB.C1 *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coefficient of the linear term in the property-versus-temperature polynomial.

<!-- !! processed by numpydoc !! -->

<a id="CDB.C2"></a>

### *property* CDB.C2 *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coefficient of the quadratic term in the property-versus-temperature polynomial.

<!-- !! processed by numpydoc !! -->

<a id="CDB.C3"></a>

### *property* CDB.C3 *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coefficient of the cubic term in the property-versus-temperature polynomial.

<!-- !! processed by numpydoc !! -->

<a id="CDB.C4"></a>

### *property* CDB.C4 *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coefficient of the quartic term in the property-versus-temperature polynomial.

<!-- !! processed by numpydoc !! -->

<a id="id85"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id86"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.MPDataCommand"></a>

### *class* CDB.MPDataCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a MPDATA command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Mat`](#id229)       | Gets the material number.   |
|-----------------------|-----------------------------|
| [`Lab`](#id228)       | Gets the label.             |
| [`Temps`](#CDB.Temps) | Gets the temperatures.      |
| [`Values`](#id221)    | Gets the values.            |
| [`Name`](#id238)      | Gets the command name.      |
| [`Index`](#id239)     | Gets the command index.     |

<a id="id87"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import MPDataCommand
```

<a id="id88"></a>

## Property detail

<a id="id89"></a>

### *property* CDB.Mat *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the material number.

<!-- !! processed by numpydoc !! -->

<a id="id90"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Temps"></a>

### *property* CDB.Temps *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the temperatures.

<!-- !! processed by numpydoc !! -->

<a id="id91"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id92"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id93"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.NBlockCommand"></a>

### *class* CDB.NBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a NBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Nodes`](#id173)   | Gets the nodes.         |
|---------------------|-------------------------|
| [`Name`](#id238)    | Gets the command name.  |
| [`Index`](#id239)   | Gets the command index. |

<a id="id94"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import NBlockCommand
```

<a id="id95"></a>

## Property detail

<a id="id96"></a>

### *property* CDB.Nodes *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandNode](CommandNode.md#CommandNode)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the nodes.

<!-- !! processed by numpydoc !! -->

<a id="id97"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id98"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.NCommand"></a>

### *class* CDB.NCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a N command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Node`](#id197)   | Gets the node number.                    |
|--------------------|------------------------------------------|
| [`Type`](#id172)   | Gets the type of the data to be defined. |
| [`Values`](#id221) | Gets the values.                         |
| [`Name`](#id238)   | Gets the command name.                   |
| [`Index`](#id239)  | Gets the command index.                  |

<a id="id99"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import NCommand
```

<a id="id100"></a>

## Property detail

<a id="id101"></a>

### *property* CDB.Node *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the node number.

<!-- !! processed by numpydoc !! -->

<a id="id102"></a>

### *property* CDB.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the type of the data to be defined.

<!-- !! processed by numpydoc !! -->

<a id="id103"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id104"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id105"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.PreadCommand"></a>

### *class* CDB.PreadCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a 

> ```
> *
> ```

> PREAD command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Aname`](#id110)   | Gets the table name.    |
|---------------------|-------------------------|
| [`Values`](#id221)  | Gets the values.        |
| [`Name`](#id238)    | Gets the command name.  |
| [`Index`](#id239)   | Gets the command index. |

<a id="id108"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import PreadCommand
```

<a id="id109"></a>

## Property detail

<a id="id110"></a>

### *property* CDB.Aname *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the table name.

<!-- !! processed by numpydoc !! -->

<a id="id111"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id112"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id113"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.RCommand"></a>

### *class* CDB.RCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a R command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Nset`](#CDB.Nset)   | Gets the set number.        |
|-----------------------|-----------------------------|
| [`Stloc`](#id116)     | Gets the starting location. |
| [`Values`](#id221)    | Gets the values.            |
| [`Name`](#id238)      | Gets the command name.      |
| [`Index`](#id239)     | Gets the command index.     |

<a id="id114"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import RCommand
```

<a id="id115"></a>

## Property detail

<a id="CDB.Nset"></a>

### *property* CDB.Nset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the set number.

<!-- !! processed by numpydoc !! -->

<a id="id116"></a>

### *property* CDB.Stloc *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the starting location.

<!-- !! processed by numpydoc !! -->

<a id="id117"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id118"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id119"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.RLBlockCommand"></a>

### *class* CDB.RLBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a RLBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Reals`](#CDB.Reals)   | Gets the real constant sets.   |
|-------------------------|--------------------------------|
| [`Name`](#id238)        | Gets the command name.         |
| [`Index`](#id239)       | Gets the command index.        |

<a id="id120"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import RLBlockCommand
```

<a id="id121"></a>

## Property detail

<a id="CDB.Reals"></a>

### *property* CDB.Reals *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandReal](CommandReal.md#CommandReal)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the real constant sets.

<!-- !! processed by numpydoc !! -->

<a id="id122"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id123"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.SecdataCommand"></a>

### *class* CDB.SecdataCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a SECDATA command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Values`](#id221)   | Gets the values.        |
|----------------------|-------------------------|
| [`Name`](#id238)     | Gets the command name.  |
| [`Index`](#id239)    | Gets the command index. |

<a id="id124"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import SecdataCommand
```

<a id="id125"></a>

## Property detail

<a id="id126"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id127"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id128"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.SecoffsetCommand"></a>

### *class* CDB.SecoffsetCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a SECOFFSET command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Location`](#id203)   | Gets the location of nodes in the section.   |
|------------------------|----------------------------------------------|
| [`Values`](#id221)     | Gets the values.                             |
| [`Name`](#id238)       | Gets the command name.                       |
| [`Index`](#id239)      | Gets the command index.                      |

<a id="id129"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import SecoffsetCommand
```

<a id="id130"></a>

## Property detail

<a id="CDB.Location"></a>

### *property* CDB.Location *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the location of nodes in the section.

<!-- !! processed by numpydoc !! -->

<a id="id131"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id132"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id133"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.SectypeCommand"></a>

### *class* CDB.SectypeCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a SECTYPE command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Secid`](#CDB.Secid)         | Gets the section type number.                                                                          |
|-------------------------------|--------------------------------------------------------------------------------------------------------|
| [`Type`](#id172)              | Get the type.                                                                                          |
| [`Subtype`](#CDB.Subtype)     | Gets the subtype.                                                                                      |
| [`Secname`](#CDB.Secname)     | Gets the section name.                                                                                 |
| [`RefineKey`](#CDB.RefineKey) | Mesh refinement level for thin-walled beam sections. Default is zero. Meaningless if type is not BEAM. |
| [`Name`](#id238)              | Gets the command name.                                                                                 |
| [`Index`](#id239)             | Gets the command index.                                                                                |

<a id="id134"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import SectypeCommand
```

<a id="id135"></a>

## Property detail

<a id="CDB.Secid"></a>

### *property* CDB.Secid *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the section type number.

<!-- !! processed by numpydoc !! -->

<a id="id136"></a>

### *property* CDB.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the type.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Subtype"></a>

### *property* CDB.Subtype *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the subtype.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Secname"></a>

### *property* CDB.Secname *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the section name.

<!-- !! processed by numpydoc !! -->

<a id="CDB.RefineKey"></a>

### *property* CDB.RefineKey *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Mesh refinement level for thin-walled beam sections. Default is zero. Meaningless if type is not BEAM.

<!-- !! processed by numpydoc !! -->

<a id="id137"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id138"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.SeccontrolCommand"></a>

### *class* CDB.SeccontrolCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a SECCONTROL command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Values`](#id221)   | Gets the values.        |
|----------------------|-------------------------|
| [`Name`](#id238)     | Gets the command name.  |
| [`Index`](#id239)    | Gets the command index. |

<a id="id139"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import SeccontrolCommand
```

<a id="id140"></a>

## Property detail

<a id="id141"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id142"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id143"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.SFEBlockCommand"></a>

### *class* CDB.SFEBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a SFEBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Lab`](#id228)                                           | Gets the surface load label.              |
|-----------------------------------------------------------|-------------------------------------------|
| [`ElementSurfaceLoadCount`](#CDB.ElementSurfaceLoadCount) | Gets the number of element surface loads. |
| [`ElementSurfaceLoads`](#CDB.ElementSurfaceLoads)         | Get the element surface loads.            |
| [`Name`](#id238)                                          | Gets the command name.                    |
| [`Index`](#id239)                                         | Gets the command index.                   |

<a id="id144"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import SFEBlockCommand
```

<a id="id145"></a>

## Property detail

<a id="id146"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the surface load label.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ElementSurfaceLoadCount"></a>

### *property* CDB.ElementSurfaceLoadCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of element surface loads.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ElementSurfaceLoads"></a>

### *property* CDB.ElementSurfaceLoads *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandElementSurfaceLoad](CommandElementSurfaceLoad.md#CommandElementSurfaceLoad)] | [None](https://docs.python.org/3/library/constants.html#None)*

Get the element surface loads.

<!-- !! processed by numpydoc !! -->

<a id="id147"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id148"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.SFECommand"></a>

### *class* CDB.SFECommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a SFE command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Elem`](#id185)    | Gets the element number.   |
|---------------------|----------------------------|
| [`LKey`](#CDB.LKey) | Get the load key.          |
| [`Key`](#CDB.Key)   | Gets the value key.        |
| [`Lab`](#id228)     | Gets the load label.       |
| [`Values`](#id221)  | Gets the values.           |
| [`Name`](#id238)    | Gets the command name.     |
| [`Index`](#id239)   | Gets the command index.    |

<a id="id149"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import SFECommand
```

<a id="id150"></a>

## Property detail

<a id="id151"></a>

### *property* CDB.Elem *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.LKey"></a>

### *property* CDB.LKey *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the load key.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Key"></a>

### *property* CDB.Key *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the value key.

<!-- !! processed by numpydoc !! -->

<a id="id152"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the load label.

<!-- !! processed by numpydoc !! -->

<a id="id153"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="id154"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id155"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ShellSecBlockCommand"></a>

### *class* CDB.ShellSecBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a shell SECBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Type`](#id172)        | Get the section type.   |
|-------------------------|-------------------------|
| [`Layers`](#CDB.Layers) | Gets the layers.        |
| [`Name`](#id238)        | Gets the command name.  |
| [`Index`](#id239)       | Gets the command index. |

<a id="id156"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import ShellSecBlockCommand
```

<a id="id157"></a>

## Property detail

<a id="id158"></a>

### *property* CDB.Type *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the section type.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Layers"></a>

### *property* CDB.Layers *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandLayer](CommandLayer.md#CommandLayer)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the layers.

<!-- !! processed by numpydoc !! -->

<a id="id159"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id160"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandCell"></a>

### *class* CDB.CommandCell

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents cell data associated to a beam SECBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`MatId`](#CDB.MatId)   | Gets the material number.   |
|-------------------------|-----------------------------|
| [`Nodes`](#id173)       | Gets the nodes.             |

<a id="id161"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandCell
```

<a id="id162"></a>

## Property detail

<a id="CDB.MatId"></a>

### *property* CDB.MatId *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the material number.

<!-- !! processed by numpydoc !! -->

<a id="id163"></a>

### *property* CDB.Nodes *: System.Collections.Generic.IReadOnlyList[System.UInt32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the nodes.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandCETerm"></a>

### *class* CDB.CommandCETerm

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a term associated to a CE command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Node`](#id197)                  | Gets the node number.       |
|-----------------------------------|-----------------------------|
| [`Dof`](#id167)                   | Gets the degree of freedom. |
| [`Coefficient`](#CDB.Coefficient) | Gets the coefficient.       |

<a id="id164"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandCETerm
```

<a id="id165"></a>

## Property detail

<a id="id166"></a>

### *property* CDB.Node *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the node number.

<!-- !! processed by numpydoc !! -->

<a id="id167"></a>

### *property* CDB.Dof *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the degree of freedom.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Coefficient"></a>

### *property* CDB.Coefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coefficient.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandElement"></a>

### *class* CDB.CommandElement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents an element associated to an EBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Csys`](#CDB.Csys)                         | Gets the coordinate system number.                          |
|---------------------------------------------|-------------------------------------------------------------|
| [`Id`](#id206)                              | Gets the element number.                                    |
| [`Mat`](#id229)                             | Gets the material number.                                   |
| [`Real`](#CDB.Real)                         | Gets the real constant set number.                          |
| [`Section`](#CDB.Section)                   | Gets the section number.                                    |
| [`Type`](#id172)                            | Gets the element type number.                               |
| [`ElementShapeFlag`](#CDB.ElementShapeFlag) | Gets the element shape flag used for contact element types. |
| [`NodeCount`](#CDB.NodeCount)               | Gets the number of nodes.                                   |
| [`Nodes`](#id173)                           | Gets the nodes.                                             |

<a id="id168"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandElement
```

<a id="id169"></a>

## Property detail

<a id="CDB.Csys"></a>

### *property* CDB.Csys *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coordinate system number.

<!-- !! processed by numpydoc !! -->

<a id="id170"></a>

### *property* CDB.Id *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element number.

<!-- !! processed by numpydoc !! -->

<a id="id171"></a>

### *property* CDB.Mat *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the material number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Real"></a>

### *property* CDB.Real *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the real constant set number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Section"></a>

### *property* CDB.Section *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the section number.

<!-- !! processed by numpydoc !! -->

<a id="id172"></a>

### *property* CDB.Type *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element type number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ElementShapeFlag"></a>

### *property* CDB.ElementShapeFlag *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element shape flag used for contact element types.

<!-- !! processed by numpydoc !! -->

<a id="CDB.NodeCount"></a>

### *property* CDB.NodeCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of nodes.

<!-- !! processed by numpydoc !! -->

<a id="id173"></a>

### *property* CDB.Nodes *: System.Collections.Generic.IReadOnlyList[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the nodes.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandElementType"></a>

### *class* CDB.CommandElementType

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents an element type associated to an ETBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Id`](#id206)      | Gets the element number.   |
|---------------------|----------------------------|
| [`Ename`](#id177)   | Gets the element name.     |
| [`Keyopts`](#id178) | Gets the key options.      |

<a id="id174"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandElementType
```

<a id="id175"></a>

## Property detail

<a id="id176"></a>

### *property* CDB.Id *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element number.

<!-- !! processed by numpydoc !! -->

<a id="id177"></a>

### *property* CDB.Ename *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element name.

<!-- !! processed by numpydoc !! -->

<a id="id178"></a>

### *property* CDB.Keyopts *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandKeyOpt](CommandKeyOpt.md#CommandKeyOpt)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the key options.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandElementBodyForce"></a>

### *class* CDB.CommandElementBodyForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents element body-force loads associated to BFEBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Elem`](#id185)        | Gets the element number.                     |
|-------------------------|----------------------------------------------|
| [`Count`](#id186)       | Gets the number of element body-force loads. |
| [`Stlocs`](#CDB.Stlocs) | Gets the starting locations.                 |
| [`Values`](#id221)      | Gets the values.                             |

<a id="id179"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandElementBodyForce
```

<a id="id180"></a>

## Property detail

<a id="id181"></a>

### *property* CDB.Elem *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Count"></a>

### *property* CDB.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of element body-force loads.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Stlocs"></a>

### *property* CDB.Stlocs *: System.Collections.Generic.IReadOnlyList[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the starting locations.

<!-- !! processed by numpydoc !! -->

<a id="id182"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandElementSurfaceLoad"></a>

### *class* CDB.CommandElementSurfaceLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents an element surface load associated to a SFEBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Elem`](#id185)                                            | Gets the element number.                  |
|-------------------------------------------------------------|-------------------------------------------|
| [`Count`](#id186)                                           | Gets the number of element surface loads. |
| [`LKeys`](#CDB.LKeys)                                       | Gets the load keys.                       |
| [`Keys`](#CDB.Keys)                                         | Gets the keys.                            |
| [`ElementSurfaceLoadValues`](#CDB.ElementSurfaceLoadValues) | Gets the values.                          |

<a id="id183"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandElementSurfaceLoad
```

<a id="id184"></a>

## Property detail

<a id="id185"></a>

### *property* CDB.Elem *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element number.

<!-- !! processed by numpydoc !! -->

<a id="id186"></a>

### *property* CDB.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of element surface loads.

<!-- !! processed by numpydoc !! -->

<a id="CDB.LKeys"></a>

### *property* CDB.LKeys *: System.Collections.Generic.IReadOnlyList[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the load keys.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Keys"></a>

### *property* CDB.Keys *: System.Collections.Generic.IReadOnlyList[System.Int32] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the keys.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ElementSurfaceLoadValues"></a>

### *property* CDB.ElementSurfaceLoadValues *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandElementSurfaceLoadValues](CommandElementSurfaceLoadValues.md#CommandElementSurfaceLoadValues)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandElementSurfaceLoadValues"></a>

### *class* CDB.CommandElementSurfaceLoadValues

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Values associated to an element surface load from a SFEBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ValueCount`](#id220)   | Gets the number of values.   |
|--------------------------|------------------------------|
| [`Values`](#id221)       | Gets the values.             |

<a id="id187"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandElementSurfaceLoadValues
```

<a id="id188"></a>

## Property detail

<a id="CDB.ValueCount"></a>

### *property* CDB.ValueCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of values.

<!-- !! processed by numpydoc !! -->

<a id="id189"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandKeyOpt"></a>

### *class* CDB.CommandKeyOpt

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a KEYOPT command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Knum`](#CDB.Knum)   | Gets the key option number.   |
|-----------------------|-------------------------------|
| [`Value`](#CDB.Value) | Gets the value.               |

<a id="id190"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandKeyOpt
```

<a id="id191"></a>

## Property detail

<a id="CDB.Knum"></a>

### *property* CDB.Knum *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the key option number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Value"></a>

### *property* CDB.Value *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the value.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandLayer"></a>

### *class* CDB.CommandLayer

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a layer associated to a shell SECBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Thick`](#CDB.Thick)   | Gets the thickness.                                 |
|-------------------------|-----------------------------------------------------|
| [`Mat`](#id229)         | Gets the material number.                           |
| [`Theta`](#CDB.Theta)   | Gets the layer orientation angle.                   |
| [`Numpt`](#CDB.Numpt)   | Gets the number of integration points in the layer. |

<a id="id192"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandLayer
```

<a id="id193"></a>

## Property detail

<a id="CDB.Thick"></a>

### *property* CDB.Thick *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the thickness.

<!-- !! processed by numpydoc !! -->

<a id="id194"></a>

### *property* CDB.Mat *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the material number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Theta"></a>

### *property* CDB.Theta *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the layer orientation angle.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Numpt"></a>

### *property* CDB.Numpt *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of integration points in the layer.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandNodalBodyForce"></a>

### *class* CDB.CommandNodalBodyForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a nodal body force associated to a BFBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Node`](#id197)     | Gets the node number.      |
|----------------------|----------------------------|
| [`ValCount`](#id198) | Gets the number of values. |
| [`Values`](#id221)   | Gets the values.           |

<a id="id195"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandNodalBodyForce
```

<a id="id196"></a>

## Property detail

<a id="id197"></a>

### *property* CDB.Node *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the node number.

<!-- !! processed by numpydoc !! -->

<a id="id198"></a>

### *property* CDB.ValCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of values.

<!-- !! processed by numpydoc !! -->

<a id="id199"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandNode"></a>

### *class* CDB.CommandNode

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a node associated to a NBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Id`](#id206)              | Gets the node number.     |
|-----------------------------|---------------------------|
| [`Location`](#id203)        | Gets the coordinates.     |
| [`Rotation`](#CDB.Rotation) | Gets the rotation angles. |

<a id="id200"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandNode
```

<a id="id201"></a>

## Property detail

<a id="id202"></a>

### *property* CDB.Id *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the node number.

<!-- !! processed by numpydoc !! -->

<a id="id203"></a>

### *property* CDB.Location *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the coordinates.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Rotation"></a>

### *property* CDB.Rotation *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the rotation angles.

<!-- !! processed by numpydoc !! -->

<a id="CDB.CommandReal"></a>

### *class* CDB.CommandReal

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represent a real constant set associated to a RLBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Id`](#id206)     | Gets the real constant set number.   |
|--------------------|--------------------------------------|
| [`Values`](#id221) | Gets the values.                     |

<a id="id204"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import CommandReal
```

<a id="id205"></a>

## Property detail

<a id="id206"></a>

### *property* CDB.Id *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the real constant set number.

<!-- !! processed by numpydoc !! -->

<a id="id207"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.TBDataValues"></a>

### *class* CDB.TBDataValues

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents data for a given temperature.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Temp`](#id224)       | Gets the temperature.      |
|------------------------|----------------------------|
| [`ValueCount`](#id220) | Gets the number of values. |
| [`Values`](#id221)     | Gets the values.           |

<a id="id208"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import TBDataValues
```

<a id="id209"></a>

## Property detail

<a id="CDB.Temp"></a>

### *property* CDB.Temp *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the temperature.

<!-- !! processed by numpydoc !! -->

<a id="id210"></a>

### *property* CDB.ValueCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of values.

<!-- !! processed by numpydoc !! -->

<a id="id211"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.TBDataCommand"></a>

### *class* CDB.TBDataCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a TBDATA command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Lab`](#id228)                         | Gets the label.                              |
|-----------------------------------------|----------------------------------------------|
| [`Mat`](#id229)                         | Gets the material number.                    |
| [`Ntemp`](#id230)                       | Gets the number of temperature, if provided. |
| [`Npts`](#id231)                        | Gets the number of points, if provided.      |
| [`Tbopt`](#id232)                       | Gets the option.                             |
| [`DataValueCount`](#CDB.DataValueCount) | Gets the number of data values.              |
| [`DataValues`](#CDB.DataValues)         | Gets the data values.                        |
| [`Name`](#id238)                        | Gets the command name.                       |
| [`Index`](#id239)                       | Gets the command index.                      |

<a id="id212"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import TBDataCommand
```

<a id="id213"></a>

## Property detail

<a id="id214"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="id215"></a>

### *property* CDB.Mat *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the material number.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Ntemp"></a>

### *property* CDB.Ntemp *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of temperature, if provided.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Npts"></a>

### *property* CDB.Npts *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of points, if provided.

<!-- !! processed by numpydoc !! -->

<a id="CDB.Tbopt"></a>

### *property* CDB.Tbopt *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the option.

<!-- !! processed by numpydoc !! -->

<a id="CDB.DataValueCount"></a>

### *property* CDB.DataValueCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of data values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.DataValues"></a>

### *property* CDB.DataValues *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.TBDataValues](TBDataValues.md#TBDataValues)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the data values.

<!-- !! processed by numpydoc !! -->

<a id="id216"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id217"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.TBPTValues"></a>

### *class* CDB.TBPTValues

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a tuple of values for the TBPT commmand.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ValueCount`](#id220)   | Gets the number of values.   |
|--------------------------|------------------------------|
| [`Values`](#id221)       | Gets the values.             |

<a id="id218"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import TBPTValues
```

<a id="id219"></a>

## Property detail

<a id="id220"></a>

### *property* CDB.ValueCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of values.

<!-- !! processed by numpydoc !! -->

<a id="id221"></a>

### *property* CDB.Values *: System.Collections.Generic.IReadOnlyList[System.Double] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.TBPTData"></a>

### *class* CDB.TBPTData

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents data for the TBPT command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Temp`](#id224)                         | Gets the temperature.      |
|------------------------------------------|----------------------------|
| [`TBPTCount`](#CDB.TBPTCount)            | Gets the number of values. |
| [`TBPTValues`](TBPTValues.md#TBPTValues) | Gets the TBPT values.      |

<a id="id222"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import TBPTData
```

<a id="id223"></a>

## Property detail

<a id="id224"></a>

### *property* CDB.Temp *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the temperature.

<!-- !! processed by numpydoc !! -->

<a id="CDB.TBPTCount"></a>

### *property* CDB.TBPTCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of values.

<!-- !! processed by numpydoc !! -->

<a id="id225"></a>

### *property* CDB.TBPTValues *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.TBPTValues](TBPTValues.md#TBPTValues)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TBPT values.

<!-- !! processed by numpydoc !! -->

<a id="CDB.TBPTCommand"></a>

### *class* CDB.TBPTCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a TBPT command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Lab`](#id228)                       | Gets the label.                              |
|---------------------------------------|----------------------------------------------|
| [`Mat`](#id229)                       | Gets the material number.                    |
| [`Ntemp`](#id230)                     | Gets the number of temperature, if provided. |
| [`Npts`](#id231)                      | Gets the number of points, if provided.      |
| [`Tbopt`](#id232)                     | Gets the option.                             |
| [`TBPTDataCount`](#CDB.TBPTDataCount) | Gets the number of TBPT data.                |
| [`TBPTData`](TBPTData.md#TBPTData)    | Gets TBPT data items.                        |
| [`Name`](#id238)                      | Gets the command name.                       |
| [`Index`](#id239)                     | Gets the command index.                      |

<a id="id226"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import TBPTCommand
```

<a id="id227"></a>

## Property detail

<a id="id228"></a>

### *property* CDB.Lab *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the label.

<!-- !! processed by numpydoc !! -->

<a id="id229"></a>

### *property* CDB.Mat *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the material number.

<!-- !! processed by numpydoc !! -->

<a id="id230"></a>

### *property* CDB.Ntemp *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of temperature, if provided.

<!-- !! processed by numpydoc !! -->

<a id="id231"></a>

### *property* CDB.Npts *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of points, if provided.

<!-- !! processed by numpydoc !! -->

<a id="id232"></a>

### *property* CDB.Tbopt *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the option.

<!-- !! processed by numpydoc !! -->

<a id="CDB.TBPTDataCount"></a>

### *property* CDB.TBPTDataCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of TBPT data.

<!-- !! processed by numpydoc !! -->

<a id="id233"></a>

### *property* CDB.TBPTData *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.TBPTData](TBPTData.md#TBPTData)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets TBPT data items.

<!-- !! processed by numpydoc !! -->

<a id="id234"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id235"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ETBlockCommand"></a>

### *class* CDB.ETBlockCommand

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a ETBLOCK command.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`ElementTypeCount`](#CDB.ElementTypeCount)   | Gets the element type count.   |
|-----------------------------------------------|--------------------------------|
| [`ElementTypes`](#CDB.ElementTypes)           | Gets the element types.        |
| [`Name`](#id238)                              | Gets the command name.         |
| [`Index`](#id239)                             | Gets the command index.        |

<a id="id236"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.FE.CDB import ETBlockCommand
```

<a id="id237"></a>

## Property detail

<a id="CDB.ElementTypeCount"></a>

### *property* CDB.ElementTypeCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element type count.

<!-- !! processed by numpydoc !! -->

<a id="CDB.ElementTypes"></a>

### *property* CDB.ElementTypes *: System.Collections.Generic.IReadOnlyList[[Ansys.ACT.Automation.Mechanical.FE.CDB.CommandElementType](CommandElementType.md#CommandElementType)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element types.

<!-- !! processed by numpydoc !! -->

<a id="id238"></a>

### *property* CDB.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command name.

<!-- !! processed by numpydoc !! -->

<a id="id239"></a>

### *property* CDB.Index *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the command index.

<!-- !! processed by numpydoc !! -->
