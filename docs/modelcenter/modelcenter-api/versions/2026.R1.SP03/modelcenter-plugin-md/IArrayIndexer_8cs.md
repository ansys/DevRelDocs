<a id="IArrayIndexer_8cs"></a>
# File IArrayIndexer.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/IArrayIndexer.cs`





## Classes

* [Phoenix::ModelCenter::Common::IArrayIndexer](classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer.md#classPhoenix_1_1ModelCenter_1_1Common_1_1IArrayIndexer)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::Common](namespacePhoenix_1_1ModelCenter_1_1Common.md#namespacePhoenix_1_1ModelCenter_1_1Common)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Linq;
using System.Text;

using ModelCenter;

namespace Phoenix.ModelCenter.Common
{
   //LTTODO: Why do we have IArrayIndexer and ArrayIndexer?

   public class IArrayIndexer
   {
      #region ----- Private Data ----------------------------------------------
      private IArray array = null;
      #endregion

      #region ----- Constructor -----------------------------------------------
      public IArrayIndexer(IArray array)
      {
         this.array = array;
      }
      #endregion

      #region ----- Properties ------------------------------------------------
      public int ElementCount
      {
         get
         {
            int count = 1;
            bool zero = true;
            // multiply up all the dimension lengths
            for (int i = 1; i <= array.numDimensions; i++)
            {
               int length = array.getLength(i - 1);
               if (length > 0)
               {
                  zero = false;
                  count *= length;
               }
            }
            //LTTODO: Bad data: If any dimension is length 0, the total length of the
            //array is 0. This code seems to think you can just drop out dimensions.

            // if no dimension had a length greater than 0
            if (zero)
            {
               return 0;
            }

            return count;
         }
      }

      public List<string> GetIndexStrings(string format)
      {
         int elementCount = ElementCount;
         int lastDim = array.numDimensions - 1;
         List<string> indices = new List<string>(elementCount);
         int[] currentIndices = new int[lastDim + 1];
         for (int i = 0; i < currentIndices.Length; i++)
         {
            currentIndices[i] = 0;
         }

         int currentDim = lastDim;
         int currentI = lastDim;
         for (int count = 0; count < elementCount; count++)
         {
            StringBuilder s = new StringBuilder();
            s.Append("[");
            for (int c = 0; c < currentIndices.Length; c++)
            {
               s.Append(currentIndices[c]);
               if (c < currentIndices.Length - 1)
               {
                  s.Append(",");
               }
            }
            s.Append("]");
            indices.Add(s.ToString());

            // if this wasn't the last item
            if (count < elementCount - 1)
            {
               // if the current index is less than the current dimensions
               // length
               if (currentIndices[currentI] < array.getLength(currentI) - 1)
               {
                  currentIndices[currentI]++;
                  if (currentI < lastDim)
                  {
                     currentI++;
                  }
               }
               else
               {
                  while (currentIndices[currentI] >= array.getLength(currentI) - 1)
                  {
                     currentIndices[currentI] = 0;
                     currentI--;

                     if (currentI < currentDim)
                     {
                        currentDim--;
                        break;
                     }
                  }
                  currentIndices[currentI]++;
                  currentI = lastDim;
               }
            }
         }

         int open = format.IndexOf('[');
         if (open < 0)
         {
            return indices;
         }

         string indexFormat = format.Substring(open);
         // if its a pattern such as x[0,*], return all instances that match
         if (indexFormat.Contains('*'))
         {
            indexFormat = indexFormat.Replace("[", "\\[");
            indexFormat = indexFormat.Replace("]", "\\]");
            Regex regexFormat = new Regex("^" + indexFormat.Replace("*", "([1-9]*[0-9]+)") + "$");
            for (int i = 0; i < indices.Count; i++)
            {
               if (!regexFormat.IsMatch(indices[i]))
               {
                  indices.RemoveAt(i);
                  i--;
               }
            }
            return indices;
         }
         // otherwise return just the instance that matches, if it exists
         else if (indices.Contains(indexFormat))
         {
            return new List<string>(1) { indexFormat };
         }

         // return all the index strings
         return indices;
      }
      #endregion
   }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)