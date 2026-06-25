<a id="TradeStudyCallbackEvents_8cs"></a>
# File TradeStudyCallbackEvents.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/TradeStudyCallbackEvents.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::TradeStudyEventArgs](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyEventArgs.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyEventArgs)
* [Phoenix::ModelCenter::PlugIn::TradeStudyCancelableEventArgs](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCancelableEventArgs.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCancelableEventArgs)
* [Phoenix::ModelCenter::PlugIn::TradeStudyDataCollectorEventArgs](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyDataCollectorEventArgs.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyDataCollectorEventArgs)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using ModelCenter;
using TradeStudyPlugIn;

namespace Phoenix.ModelCenter.PlugIn
{
   public class TradeStudyEventArgs : EventArgs
   {
      public TradeStudyEventArgs(ITradeStudyPlugIn2 tradeStudy)
      {
         TradeStudy = tradeStudy;
      }

      public ITradeStudyPlugIn2 TradeStudy { get; private set; }
   }

   public class TradeStudyCancelableEventArgs : CancelEventArgs
   {
      public TradeStudyCancelableEventArgs(ITradeStudyPlugIn2 tradeStudy)
         : base(false)
      {
         TradeStudy = tradeStudy;
      }

      public ITradeStudyPlugIn2 TradeStudy { get; private set; }
   }

   public class TradeStudyDataCollectorEventArgs : TradeStudyEventArgs
   {
      public TradeStudyDataCollectorEventArgs(
         ITradeStudyPlugIn2 tradeStudy,
         IDataCollector dataCollector)
         : base(tradeStudy)
      {
         DataCollector = dataCollector;
      }

      public IDataCollector DataCollector { get; private set; }
   }

   public delegate void TradeStudyClosedEventHandler(object sender, TradeStudyEventArgs e);

   public delegate void TradeStudyRunStartingEventHandler(object sender, TradeStudyCancelableEventArgs e);

   public delegate void TradeStudyRunCompletedEventHandler(object sender, TradeStudyEventArgs e);

   public delegate void TradeStudyDataCollectorEventHandler(object sender, TradeStudyDataCollectorEventArgs e);
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)