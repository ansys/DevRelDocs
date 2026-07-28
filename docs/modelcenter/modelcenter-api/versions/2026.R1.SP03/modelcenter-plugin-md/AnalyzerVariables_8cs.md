<a id="AnalyzerVariables_8cs"></a>
# File AnalyzerVariables.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerVariables.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::AnalyzerVariableAddedEventArgs](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerVariableAddedEventArgs.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerVariableAddedEventArgs)
* [Phoenix::ModelCenter::PlugIn::IAnalyzerVariableInfo](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IAnalyzerVariableInfo)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)
* [System::Collections::Generic](namespaceSystem_1_1Collections_1_1Generic.md#namespaceSystem_1_1Collections_1_1Generic)
* [System::Runtime::InteropServices](namespaceSystem_1_1Runtime_1_1InteropServices.md#namespaceSystem_1_1Runtime_1_1InteropServices)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Phoenix.ModelCenter.Common;

namespace Phoenix.ModelCenter.PlugIn
{
   public class AnalyzerVariableAddedEventArgs : EventArgs
   {
      public string AnalyzerName { get; private set; }
      public string Formula { get; private set; }

      internal AnalyzerVariableAddedEventArgs(string analyzerName, string formula)
      {
         AnalyzerName = analyzerName;
         Formula = formula;
      }
   }

   public delegate void AnalyzerVariableAddedEventHandler(
      object sender, AnalyzerVariableAddedEventArgs e);

   public interface IAnalyzerVariableInfo
   {
      bool HasAnalyzerVariables { get; }

      bool SaveAllAnalyzerVariables { get; }

      event EventHandler AnalyzerVariablesCleared;
      event AnalyzerVariableAddedEventHandler AnalyzerVariableAdded;

      ICollection<string> AnalyzerVariableNames { get; }

      ICollection<string> AnalyzerVariableFormulas { get; }

      bool TryGetFormulaForAnalyzerVariable(string analyzerName, out string formula);

      bool TryGetNameForAnalyzerVariable(string formula, out string analyzerName);
   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)