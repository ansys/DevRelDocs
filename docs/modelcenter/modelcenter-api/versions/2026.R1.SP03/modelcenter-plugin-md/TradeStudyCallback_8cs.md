<a id="TradeStudyCallback_8cs"></a>
# File TradeStudyCallback.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/TradeStudyCallback.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::TradeStudyCallback](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyCallback)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.Runtime.InteropServices;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using ModelCenter;
using TradeStudyPlugIn;

using Phoenix.ModelCenter.PlugIn;

namespace Phoenix.ModelCenter.PlugIn
{
   [ComVisible(true),
   Guid("EB46E31F-1690-4179-65A8-3895DDF2884E"),
   ClassInterface(ClassInterfaceType.None),
   ComSourceInterfaces(typeof(ITradeStudyCallback))]
   public class TradeStudyCallback : ITradeStudyCallback
   {
      public event TradeStudyDataCollectorEventHandler DataCollectorCreated;

      public event TradeStudyRunCompletedEventHandler RunCompleted;

      public event TradeStudyRunStartingEventHandler RunStarting;

      public event TradeStudyClosedEventHandler TradeStudyClosed;

      void ITradeStudyCallback.dataCollectorCreated(object tradeStudy, object dataCollector)
      {
         TradeStudyDataCollectorEventHandler h = DataCollectorCreated;
         if (h != null)
         {
            h(this, new TradeStudyDataCollectorEventArgs(
               tradeStudy as ITradeStudyPlugIn2, dataCollector as IDataCollector));
         }
      }

      void ITradeStudyCallback.runEnded(object tradeStudy)
      {
         TradeStudyRunCompletedEventHandler h = RunCompleted;
         if (h != null)
         {
            h(this, new TradeStudyEventArgs(tradeStudy as ITradeStudyPlugIn2));
         }
      }

      int ITradeStudyCallback.runStarting(object tradeStudy)
      {
         TradeStudyRunStartingEventHandler h = RunStarting;
         TradeStudyCancelableEventArgs args =
            new TradeStudyCancelableEventArgs(tradeStudy as ITradeStudyPlugIn2);

         if (h != null)
         {
            h(this, args);
         }

         return Convert.ToInt32(!args.Cancel);
      }

      void ITradeStudyCallback.tradeStudyClosed(object tradeStudy)
      {
         TradeStudyClosedEventHandler h = TradeStudyClosed;
         if (h != null)
         {
            h(this, new TradeStudyEventArgs(tradeStudy as ITradeStudyPlugIn2));
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
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)