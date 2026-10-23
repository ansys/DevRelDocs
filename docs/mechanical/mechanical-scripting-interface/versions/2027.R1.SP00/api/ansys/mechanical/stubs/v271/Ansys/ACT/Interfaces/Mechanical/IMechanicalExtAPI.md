# `IMechanicalExtAPI`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalExtAPI"></a>

#### *class* Ansys.ACT.Interfaces.Mechanical.IMechanicalExtAPI

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Exposes the main entry point of all ATC APIs.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------|
| [`CloseResultReader`](#IMechanicalExtAPI.CloseResultReader)       | Close the result readers for a given result file    |
| [`ExecuteCommand`](#IMechanicalExtAPI.ExecuteCommand)             | ExecuteCommand method.                              |
| [`LockPrePostLicense`](#IMechanicalExtAPI.LockPrePostLicense)     | Locks the license used by the PRE/POST application. |
| [`UnlockPrePostLicense`](#IMechanicalExtAPI.UnlockPrePostLicense) | R                                                   |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`ActResultReaderUsingMeshDataFromRst`](#IMechanicalExtAPI.ActResultReaderUsingMeshDataFromRst)                 | Gets or sets a value indicating whether the mesh data are read inside the .rst file or not.          |
| [`Application`](#IMechanicalExtAPI.Application)                                                                 | Application property.                                                                                |
| [`Context`](#IMechanicalExtAPI.Context)                                                                         | Context property.                                                                                    |
| [`DataModel`](#IMechanicalExtAPI.DataModel)                                                                     | DataModel property.                                                                                  |
| [`ExtensionManager`](#IMechanicalExtAPI.ExtensionManager)                                                       | ExtensionManager property.                                                                           |
| [`ExtensionMgr`](#IMechanicalExtAPI.ExtensionMgr)                                                               | ExtensionMgr property.                                                                               |
| [`Graphics`](#IMechanicalExtAPI.Graphics)                                                                       | Graphics property.                                                                                   |
| [`GraphicsAddin`](#IMechanicalExtAPI.GraphicsAddin)                                                             | Gets the Mechanical Graphics Addin instance for providing custom graphics                            |
| [`Log`](#IMechanicalExtAPI.Log)                                                                                 | Log property.                                                                                        |
| [`ResultReaderAllowsMultiServers`](#IMechanicalExtAPI.ResultReaderAllowsMultiServers)                           | If true then allow to create many readers by result file else create only one reader by result file. |
| [`ResultReaderConnectionType`](#IMechanicalExtAPI.ResultReaderConnectionType)                                   | Gets or sets the type of connection to use for the ACT Result Reader : “PIPE” or “TCP”               |
| [`ResultReaderPort`](#IMechanicalExtAPI.ResultReaderPort)                                                       | Gets or sets the port used for the connection to the result reader                                   |
| [`SelectionManager`](#IMechanicalExtAPI.SelectionManager)                                                       | SelectionManager property.                                                                           |
| [`Tools`](#IMechanicalExtAPI.Tools)                                                                             | Tools property.                                                                                      |
| [`UserInterface`](#IMechanicalExtAPI.UserInterface)                                                             | UserInterface property.                                                                              |
| [`UsesStandaloneActResultReaderImplementation`](#IMechanicalExtAPI.UsesStandaloneActResultReaderImplementation) | Gets or sets a value indicating which implementation to use when post processing results.            |
| [`UsesStandaloneResultReaderImplementation`](#IMechanicalExtAPI.UsesStandaloneResultReaderImplementation)       | Gets or sets a value indicating which implementation to use when post processing results.            |

<a id="property-detail"></a>

## Property detail

<a id="IMechanicalExtAPI.ActResultReaderUsingMeshDataFromRst"></a>

### *property* IMechanicalExtAPI.ActResultReaderUsingMeshDataFromRst *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets a value indicating whether the mesh data are read inside the .rst file or not.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.Application"></a>

### *property* IMechanicalExtAPI.Application *: Ansys.ACT.Interfaces.Mechanical.IMechanicalApplication | [None](https://docs.python.org/3/builtins/constants.html#None)*

Application property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.Context"></a>

### *property* IMechanicalExtAPI.Context *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Context property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.DataModel"></a>

### *property* IMechanicalExtAPI.DataModel *: [Ansys.ACT.Mechanical.MechanicalDataModel](../../Mechanical/MechanicalDataModel.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.MechanicalDataModel) | [None](https://docs.python.org/3/builtins/constants.html#None)*

DataModel property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.ExtensionManager"></a>

### *property* IMechanicalExtAPI.ExtensionManager *: [Ansys.ACT.Interfaces.Common.IExtensionManager](../Common/IExtensionManager.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtensionManager) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExtensionManager property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.ExtensionMgr"></a>

### *property* IMechanicalExtAPI.ExtensionMgr *: [Ansys.ACT.Interfaces.Common.IExtensionManager](../Common/IExtensionManager.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtensionManager) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ExtensionMgr property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.Graphics"></a>

### *property* IMechanicalExtAPI.Graphics *: [Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper](../../Common/Graphics/MechanicalGraphicsWrapper.md#ansys.mechanical.stubs.v271.Ansys.ACT.Common.Graphics.MechanicalGraphicsWrapper) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Graphics property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.GraphicsAddin"></a>

### *property* IMechanicalExtAPI.GraphicsAddin *: Ansys.Mechanical.Graphics.MechanicalGraphicsAddin | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Mechanical Graphics Addin instance for providing custom graphics

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.Log"></a>

### *property* IMechanicalExtAPI.Log *: [Ansys.ACT.Interfaces.Common.ILog](../Common/ILog.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ILog) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Log property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.ResultReaderAllowsMultiServers"></a>

### *property* IMechanicalExtAPI.ResultReaderAllowsMultiServers *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If true then allow to create many readers by result file else create only one reader by result file.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.ResultReaderConnectionType"></a>

### *property* IMechanicalExtAPI.ResultReaderConnectionType *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of connection to use for the ACT Result Reader : “PIPE” or “TCP”

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.ResultReaderPort"></a>

### *property* IMechanicalExtAPI.ResultReaderPort *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the port used for the connection to the result reader

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.SelectionManager"></a>

### *property* IMechanicalExtAPI.SelectionManager *: [Ansys.ACT.Interfaces.Common.ISelectionManager](../Common/ISelectionManager.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionManager) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SelectionManager property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.Tools"></a>

### *property* IMechanicalExtAPI.Tools *: [Ansys.ACT.Interfaces.Common.ITools](../Common/ITools.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ITools) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Tools property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.UserInterface"></a>

### *property* IMechanicalExtAPI.UserInterface *: Ansys.ACT.Interfaces.UserInterface.IUserInterface | [None](https://docs.python.org/3/builtins/constants.html#None)*

UserInterface property.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.UsesStandaloneActResultReaderImplementation"></a>

### *property* IMechanicalExtAPI.UsesStandaloneActResultReaderImplementation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets a value indicating which implementation to use when post processing results.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.UsesStandaloneResultReaderImplementation"></a>

### *property* IMechanicalExtAPI.UsesStandaloneResultReaderImplementation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets a value indicating which implementation to use when post processing results.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="IMechanicalExtAPI.CloseResultReader"></a>

### IMechanicalExtAPI.CloseResultReader(filename: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Close the result readers for a given result file

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.ExecuteCommand"></a>

### IMechanicalExtAPI.ExecuteCommand(cmd: [str](https://docs.python.org/3/builtins/stdtypes.html#str), args: System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any], vars: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → System.Collections.Generic.Dictionary[[str](https://docs.python.org/3/builtins/stdtypes.html#str), Any]

ExecuteCommand method.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.LockPrePostLicense"></a>

### IMechanicalExtAPI.LockPrePostLicense() → [None](https://docs.python.org/3/builtins/constants.html#None)

Locks the license used by the PRE/POST application.

<!-- !! processed by numpydoc !! -->

<a id="IMechanicalExtAPI.UnlockPrePostLicense"></a>

### IMechanicalExtAPI.UnlockPrePostLicense() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
R
    Unlocks the license used by the PRE/POST application. This is required if you want to manually launch the Ansys solver.
    You must relock the license after its use. If you don't relock the license, the PRE/POST application will be in read-only mode.
```

<!-- !! processed by numpydoc !! -->

