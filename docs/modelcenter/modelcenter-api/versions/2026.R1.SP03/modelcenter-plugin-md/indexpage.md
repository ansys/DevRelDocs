<a id="indexpage"></a>
# Phoenix.ModelCenter.PlugIn Assembly



The [Phoenix.ModelCenter.PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn) assembly provides a set of utilities for writing ModelCenter desktop based plug-ins in .NET languages.





Main classes of note are: 
* [AbstractModelCenterPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn) - The recommended way to write a plug-in is to extend this abstract base class which helps handle common issues like UI management in a common way. 

* [AbstractTradeStudyPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractTradeStudyPlugIn) - This extension of [AbstractModelCenterPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn) adds common capability for being a trade study plug-in. 

* [SModelCenterHost](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1SModelCenterHost) - This class hides the complexity of the full on IModelCenter API for a Plug-In which helps write consistent, distributable plug-ins. It is used by [AbstractModelCenterPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn) 

* [ModelCenterPlugInForm](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterPlugInForm) - Mostly empty form base class that a plug-in can extend to write their own UI. Allows [AbstractModelCenterPlugIn](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AbstractModelCenterPlugIn) to generically handle the UI in a consistent way.

<!--
**TODO**:

* `location  {"type":"element","name":"location","attributes":{"file":"LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/Phoenix.ModelCenter.PlugIn.dox"},"children":[]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)