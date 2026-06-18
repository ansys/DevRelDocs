<a id="DataCollectorCreatedEventArgs_8cs"></a>
# File DataCollectorCreatedEventArgs.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/DataCollectorCreatedEventArgs.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::DataCollectorCreatedEventArgs](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DataCollectorCreatedEventArgs.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DataCollectorCreatedEventArgs)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using ModelCenter;

namespace Phoenix.ModelCenter.PlugIn
{
   public delegate void DataCollectorCreatedEventHandler(
      object sender, DataCollectorCreatedEventArgs e);

   public class DataCollectorCreatedEventArgs : EventArgs
   {
      public DataCollectorCreatedEventArgs(IDataCollector dataCollector)
      {
         this.DataCollector = dataCollector;
      }

      public IDataCollector DataCollector { get; private set; }
   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)