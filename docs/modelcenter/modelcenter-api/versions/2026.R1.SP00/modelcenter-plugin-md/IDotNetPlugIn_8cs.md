<a id="IDotNetPlugIn_8cs"></a>
# File IDotNetPlugIn.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/IDotNetPlugIn.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::IDotNetPlugIn](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IDotNetPlugIn)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using ComponentPlugIn;

namespace Phoenix.ModelCenter.PlugIn
{
   public interface IDotNetPlugIn : IDisposable
   {
      IComponentPlugIn ComObject { get; }

      SModelCenterHost Host { get; }

      object Configuration { get; }
      void Run();

      bool IsClosing { get; }
      string Name { get; }
      string Author { get; }
      string Description { get; }
      string HelpUrl { get; }
      string HelpPath { get; }
      string Keywords { get; }
      string Version { get; }
      string ToolName { get; }
      string ToolProvider { get; }
      Icon Icon { get; }
      Image IconImage { get; }
   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)