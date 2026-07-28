<a id="ArrayIndexer_8cs"></a>
# File ArrayIndexer.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ArrayIndexer.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::ArrayIndexer](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ArrayIndexer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ArrayIndexer)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
//
// This file is a copy of trunk\solutions\applications\PHXSolver\PHXSolverPlugIn\ArrayIndexer.cs
// At some point we should probably get rid of one, but right now we need to get this release out.
//
using System;
using System.Collections.Generic;
using System.Text;
using ModelCenter;
using System.Runtime.InteropServices;
using Phoenix.DotNetUtils;

namespace Phoenix.ModelCenter.PlugIn
{
   //LTTODO: Why do we have IArrayIndexer and ArrayIndexer?

   internal class ArrayIndexer 
   {
      private IArray mcArray;
      private IObjectVariable mcObj;
      private string mIndex;
      private int numElements;
      private int numDimensions;
      private int currentElement;
      private int elementCount;
      private int[] arrayIndices;
      private bool getValueCalled;

      #region Constructors
      public ArrayIndexer(IArray array)
      {
         mcArray = array;
         mcObj = null;
         mIndex = null;
         getValueCalled = false;
         reset();
      }

      public ArrayIndexer(IObjectVariable objVar, string mIndex)
      {
         mcArray = null;
         mcObj = objVar;
         this.mIndex = mIndex;
         getValueCalled = false;
         reset();
      }
      #endregion

      #region Methods
      public object getElementValue(int elementNumber)
      {
         currentElement = elementNumber;

         reset();

         while (true)
         {
            elementCount++;

            if (elementCount == elementNumber)
            {
               // array indices have been found
               break;
            }
            else
            {
               for (int i = (numDimensions - 1); i > -1; i--)
               {
                  if (arrayIndices[i] == (getLength(i) - 1))
                     arrayIndices[i] = 0; // then move to the preceeding dimension to increment by one
                  else
                  {
                     arrayIndices[i]++;
                     break; // exit for loop
                  }
               }
            }
         }

         return Value;
      }

      public object getValue(string variableName)
      {
         List<string> tokens = new List<string>();
         int start = variableName.LastIndexOf("[");
         int end = variableName.LastIndexOf("]");

         string[] st = variableName.Substring(start + 1, end).Split(',');

         foreach (string s in st)
            tokens.Add(s);
         int numDimensions = tokens.Count;

         arrayIndices = new int[numDimensions];

         int index;
         for (int i = 0; i < numDimensions; i++)
         {
            try
            {
               index = Convert.ToInt32(tokens[i]);
            }
            catch (FormatException e)
            {
               throw new PHXException(string.Format("Error: Cannot add variable {0}\nReason: Cannot parse array indices.", variableName), e);
            }

            arrayIndices[i] = index;
         }

         return Value;
      }

      private int getLength(int dim)
      {
         int len = 0;
         if (mcArray != null)
         {
            len = mcArray.getLength(dim);
         }
         else if (mcObj != null)
         {
            len = mcObj.getMemberLength(mIndex, dim);
         }
         return len;
      }

      private void reset()
      {
         elementCount = -1;
         numElements = 1;

         // calculate total number of elements in the array
         if (mcArray != null)
         {
            numDimensions = mcArray.numDimensions;
         }
         else if (mcObj != null)
         {
            numDimensions = mcObj.getMemberNumDimensions(mIndex);
         }

         for (int i = 0; i < numDimensions; i++)
         {
            numElements *= getLength(i);
         }
         arrayIndices = new int[numDimensions];
         // reset indices
         for (int i = 0; i < numDimensions; i++)
            arrayIndices[i] = 0;
      }
      #endregion

      #region Properties
      public int CurrentElement
      {
         get { return currentElement; }
      }

      public string CurrentElementString
      {
         get
         {
            StringBuilder s = new StringBuilder();
            s.Append("[");
            for (int i = 0; i < numDimensions; i++)
            {
               s.Append(arrayIndices[i]);
               if (i < (numDimensions - 1))
                  s.Append(",");
            }
            s.Append("]");
            return s.ToString();
         }
      }

      public object ElementValue
      {
         get
         {
            if (!getValueCalled)
            {
               getValueCalled = true;
               return Value;
            }

            for (int i = (numDimensions - 1); i > -1; i--)
            {
               if (arrayIndices[i] == (getLength(i) - 1))
               {
                  arrayIndices[i] = 0; // then move to the preceeding dimension to increment by one
               }
               else
               {
                  arrayIndices[i]++;
                  break; // exit for loop
               }
            }

            return Value;
         }
      }

      public int NumDimensions
      {
         get { return numDimensions; }
      }

      public int NumElements
      {
         get { return numElements; }
      }

      private object Value
      {
         get
         {
            if (mcArray != null)
            {
               if (numDimensions == 1)
               {
                  if (mcArray is IDoubleArray)
                      //return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], null, null, null, null, null, null, null, null, null);
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], null, null, null, null, null, null, null, null, null);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], null, null, null, null, null, null, null, null, null);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], null, null, null, null, null, null, null, null, null);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], null, null, null, null, null, null, null, null, null);
                  else if (mcArray is IReferenceArray)
                      //return (mcArray as IReferenceArray).getValue(arrayIndices[0]);
                      return ((mcArray as IReferenceArray).getValueAbsolute(arrayIndices[0]));
              }
               else if (numDimensions == 2)
               {
                  if (mcArray is IDoubleArray)
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], null, null, null, null, null, null, null, null);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], null, null, null, null, null, null, null, null);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], null, null, null, null, null, null, null, null);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], null, null, null, null, null, null, null, null);
               }
               else if (numDimensions == 3)
               {
                  if (mcArray is IDoubleArray)
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], null, null, null, null, null, null, null);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], null, null, null, null, null, null, null);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], null, null, null, null, null, null, null);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], null, null, null, null, null, null, null);
               }
               else if (numDimensions == 4)
               {
                  if (mcArray is IDoubleArray)
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], null, null, null, null, null, null);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], null, null, null, null, null, null);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], null, null, null, null, null, null);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], null, null, null, null, null, null);
               }
               else if (numDimensions == 5)
               {
                  if (mcArray is IDoubleArray)
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], null, null, null, null, null);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], null, null, null, null, null);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], null, null, null, null, null);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], null, null, null, null, null);
               }
               else if (numDimensions == 6)
               {
                  if (mcArray is IDoubleArray)
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], null, null, null, null);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], null, null, null, null);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], null, null, null, null);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], null, null, null, null);
               }
               else if (numDimensions == 7)
               {
                  if (mcArray is IDoubleArray)
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], null, null, null);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], null, null, null);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], null, null, null);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], null, null, null);
               }
               else if (numDimensions == 8)
               {
                  if (mcArray is IDoubleArray)
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], null, null);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], null, null);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], null, null);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], null, null);
               }
               else if (numDimensions == 9)
               {
                  if (mcArray is IDoubleArray)
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], null);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], null);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], null);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], null);
               }
               else if (numDimensions == 10)
               {
                  if (mcArray is IDoubleArray)
                      return (mcArray as IDoubleArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], arrayIndices[9]);
                  else if (mcArray is IIntegerArray)
                      return (mcArray as IIntegerArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], arrayIndices[9]);
                  else if (mcArray is IStringArray)
                      return (mcArray as IStringArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], arrayIndices[9]);
                  else if (mcArray is IBooleanArray)
                      return (mcArray as IBooleanArray).getValueAbsolute(arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], arrayIndices[9]);
               }
            }
            else if (mcObj != null)
            {
               if (numDimensions == 1)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], null, null, null, null, null, null, null, null, null);
                  // mcObj.setMemberDimensions(mIndex, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                  // return mcObj.getArrayMemberValue(mIndex, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
               }
               else if (numDimensions == 2)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], arrayIndices[1], null, null, null, null, null, null, null, null);
               }
               else if (numDimensions == 3)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], arrayIndices[1], arrayIndices[2], null, null, null, null, null, null, null);
               }
               else if (numDimensions == 4)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], null, null, null, null, null, null);
               }
               else if (numDimensions == 5)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], null, null, null, null, null);
               }
               else if (numDimensions == 6)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], null, null, null, null);
               }
               else if (numDimensions == 7)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], null, null, null);
               }
               else if (numDimensions == 8)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], null, null);
               }
               else if (numDimensions == 9)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], null);
               }
               else if (numDimensions == 10)
               {
                  return mcObj.getArrayMemberValue(mIndex, arrayIndices[0], arrayIndices[1], arrayIndices[2], arrayIndices[3], arrayIndices[4], arrayIndices[5], arrayIndices[6], arrayIndices[7], arrayIndices[8], arrayIndices[9]);
               }
            }
            return "cannot return value";
         }
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