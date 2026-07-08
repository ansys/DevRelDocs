<a id="FormUtils_8cs"></a>
# File FormUtils.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/FormUtils.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::FormUtils](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1FormUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1FormUtils)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using Phoenix.ModelCenter.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Phoenix.ModelCenter.PlugIn
{
   public class FormUtils
   {

      [Obsolete("Use Phoenix.ModelCenter.Common.SimpleNameFilter instead")]
      public static bool NameFilterCheck(string filter, string name, bool caseSensitive = false)
      {
         return SimpleNameFilter.NameFilterCheck(filter, name, caseSensitive);
      }
   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)