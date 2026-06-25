<a id="ModelCenterHelpProvider_8cs"></a>
# File ModelCenterHelpProvider.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterHelpProvider.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::ModelCenterHelpProvider](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
using ModelCenter;
using Phoenix.ModelCenter.Common;
using System;

namespace Phoenix.ModelCenter.PlugIn
{
   public class ModelCenterHelpProvider : IHelpProvider
   {
      private IModelCenter _modelCenter;

      public ModelCenterHelpProvider(IModelCenter modelCenter)
      {
         _modelCenter = modelCenter;
      }

      public void InvokeHelp(string key)
      {
         int result;
         if (int.TryParse(key, out result))
         {
            _modelCenter.invokeHelp(result);
         }
         else
         {
            throw new ArgumentException($"{key} is not a valid help page ID.");
         }
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