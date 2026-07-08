<a id="PlugInAttributes_8cs"></a>
# File PlugInAttributes.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/PlugInAttributes.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::PlugInAttribute](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1PlugInAttribute.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1PlugInAttribute)
* [Phoenix::ModelCenter::PlugIn::ComponentPlugInAttribute](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentPlugInAttribute.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentPlugInAttribute)
* [Phoenix::ModelCenter::PlugIn::TradeStudyPlugInAttribute](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyPlugInAttribute.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyPlugInAttribute)
* [Phoenix::ModelCenter::PlugIn::DataCollectorPlugInAttribute](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DataCollectorPlugInAttribute.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DataCollectorPlugInAttribute)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Phoenix.ModelCenter.PlugIn
{
   [AttributeUsage(AttributeTargets.Class)]
   public abstract class PlugInAttribute : Attribute
   {
      //named parameters
      private string _displayName = "";

      public string DisplayName
      {
         get
         {
            return _displayName;
         }
         set
         {
            _displayName = value;
         }
      }
   }

   public class ComponentPlugInAttribute : PlugInAttribute
   {

   }

   public class TradeStudyPlugInAttribute : PlugInAttribute
   {

   }

   public class DataCollectorPlugInAttribute : PlugInAttribute
   {

   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)