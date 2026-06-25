<a id="ModelCenterLogger_8cs"></a>
# File ModelCenterLogger.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterLogger.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::ModelCenterLogger](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterLogger)

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
using System.Runtime.InteropServices;
using System.Text;

using ModelCenter;
using Phoenix.SModelCenter;
using Phoenix.DotNetUtils;
using Phoenix.ModelCenter.Common;

namespace Phoenix.ModelCenter.PlugIn
{
   public class ModelCenterLogger : AbstractPHXLogger
   {
      private ILogger logger = null;

      //private ILogger getLogger(IModelCenter mc)
      //{
      //   return (ILogger)mc.getLogger();
      //}

      public ModelCenterLogger(IModelCenter mc)
      {
         //try
         //{
         if (mc != null)
         {
            this.logger = (ILogger)mc.getLogger();
         }
         //}
         //catch
         //{
         //}
      }

      protected override void Dispose(bool disposing)
      {
         if (disposing)
         {
            if (logger != null)
            {
               if (logger is IDisposable)
               {
                  ((IDisposable)logger).Dispose();
               }
               else
               {
                  try
                  {
                     Marshal.ReleaseComObject(logger);
                  }
                  catch (Exception)
                  {
                     // we'd log it but.. we are destructing the logger
                  }
               }
               logger = null;
            }
         }
      }

      public override void Debug(string message)
      {
#if DEBUG
         System.Diagnostics.Debug.WriteLine(message);
#endif
         if (logger != null) logger.debug(message);
      }

      public override void Info(string message)
      {
#if DEBUG
         System.Diagnostics.Debug.WriteLine(message);
#endif
         if (logger != null) logger.info(message);
      }

      public override void Trace(string message)
      {
#if DEBUG
         System.Diagnostics.Debug.WriteLine(message);
#endif
         if (logger != null) logger.trace(message);
      }

      public override void Warn(string message)
      {
#if DEBUG
         System.Diagnostics.Debug.WriteLine(message);
#endif
         if (logger != null) logger.warn(message);
      }

      public override void Error(string message)
      {
#if DEBUG
         System.Diagnostics.Debug.WriteLine(message);
#endif
         if (logger != null) logger.error(message);
      }

      public override bool IsDebugEnabled
      {
         get { return logger != null && logger.isDebugEnabled(); }
      }

      public override bool IsInfoEnabled
      {
         get { return logger != null && logger.isInfoEnabled(); }
      }

      public override bool IsErrorEnabled
      {
         get { return logger != null && logger.isErrorEnabled(); }
      }

      public override bool IsTraceEnabled
      {
         get { return logger != null && logger.isTraceEnabled(); }
      }

      public override bool IsWarnEnabled
      {
         get { return logger != null && logger.isWarnEnabled(); }
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