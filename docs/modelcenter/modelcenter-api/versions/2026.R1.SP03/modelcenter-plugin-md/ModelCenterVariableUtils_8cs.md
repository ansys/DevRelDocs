<a id="ModelCenterVariableUtils_8cs"></a>
# File ModelCenterVariableUtils.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterVariableUtils.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::ModelCenterVariableUtils](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)
* [System::Diagnostics](namespaceSystem_1_1Diagnostics.md#namespaceSystem_1_1Diagnostics)
* [PHXDATAHISTORYLib](namespacePHXDATAHISTORYLib.md#namespacePHXDATAHISTORYLib)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using ModelCenter;
using Phoenix.DotNetUtils;
using Phoenix.ModelCenter.Common;
using Phoenix.SModelCenter;
using PHXDATAHISTORYLib;

namespace Phoenix.ModelCenter.PlugIn
{
   public static class ModelCenterVariableUtils
   {
      public static void ReadFromIVariable(IVariable ivar, PHXVariable dest)
      {
         ReadFromIVariable(ivar, dest, true);
      }

      public static void ReadFromDHVariable(IDHVariable dhvar, PHXVariable dest)
      {
         ReadFromDHVariable(dhvar, dest, true);
      }

      public static void ReadFromIVariable(IVariable ivar, PHXVariable dest, bool compVar)
      {
         string prefix = "";

         // IVariable full names use the pattern "Model.Component.variable"
         // Parse out the prefix "Model.Component."
         string fullName = ivar.getFullName();
         int dot = fullName.LastIndexOf('.');
         if (dot >= 0 && dot < fullName.Length - 1)
         {
            prefix = fullName.Substring(0, dot + 1);
         }

         ReadFromIVariable(prefix, ivar, dest, compVar);
      }

      public static void ReadFromDHVariable(IDHVariable dhvar, PHXVariable dest, bool compVar)
      {
         dest.VarType = dhvar.isInput ? PHXVarType.Input : PHXVarType.Output;
         dest.DataTypeAsString = dhvar.type;
         dest.UserData = dhvar.getMetaData("UserData") ?? String.Empty;

         // TODO: handle all variable types
         dest.Description = dhvar.name;
         dest.Name = dhvar.equation;

         switch (dest.DataType)
         {
         case PHXDataType.Double:
         case PHXDataType.Integer:
         case PHXDataType.DoubleArray:
         case PHXDataType.IntegerArray:
            dest.Units = dhvar.units;
            if (dhvar.upperBound != null)
            {
               dest.UpperBound = Convert.ToString(dhvar.upperBound, CultureInfo.InvariantCulture);
            }
            if (dhvar.lowerBound != null)
            {
               dest.LowerBound = Convert.ToString(dhvar.lowerBound, CultureInfo.InvariantCulture);
            }
            dest.EnumValues = dhvar.enumValues;
            dest.EnumAliases = dhvar.enumAliases;
            dest.Format = dhvar.format;
            break;
         case PHXDataType.String:
         case PHXDataType.StringArray:
            dest.EnumValues = dhvar.enumValues;
            dest.EnumAliases = dhvar.enumAliases;
            break;
         case PHXDataType.File:
         case PHXDataType.FileArray:
            dest.IsBinary = dhvar.isBinary;
            if (!String.IsNullOrEmpty(dhvar.fileName))
            {
               dest.FileExtension = Path.GetExtension(dhvar.fileName);
            }
            break;
         case PHXDataType.Boolean:
         case PHXDataType.BooleanArray:
            break;
         default:
            Debug.Fail("Unrecognized data type");
            break;
         }
      }

      public static void WriteToDHVariable(PHXVariable source, IDHVariable dhVar)
      {
         dhVar.equation = source.Name;
         dhVar.name = source.Description;
         dhVar.type = source.DataTypeAsString;
         dhVar.format = source.Format;
         dhVar.units = source.Units;
         dhVar.isInput = source.IsInput;
         if (!String.IsNullOrEmpty(source.EnumAliases))
         {
            dhVar.enumAliases = source.EnumAliases;
         }
         if (!String.IsNullOrEmpty(source.EnumValues))
         {
            dhVar.enumValues = source.EnumValues;
         }
         dhVar.isNumeric = source.IsNumeric;
         if (!String.IsNullOrEmpty(source.LowerBound))
         {
            dhVar.lowerBound = source.LowerBound;
         }
         if (!String.IsNullOrEmpty(source.UpperBound))
         {
            dhVar.upperBound = source.UpperBound;
         }
      }

      public static void ReadFromIVariable(string prefix, IVariable ivar, PHXVariable dest)
      {
         ReadFromIVariable(prefix, ivar, dest, true);
      }

      public static void ReadFromIVariable(string prefix, IVariable ivar, PHXVariable dest, bool compVar)
      {
         dest.Name = prefix + ivar.getName();
         if ((ivar.isInputToComponent() && compVar) || ivar.isInputToModel())
         {
            dest.VarType = PHXVarType.Input;
         }
         else
         {
            dest.VarType = PHXVarType.Output;
         }

         dest.DataTypeAsString = ivar.getType();

         // Fetch user data, if it exists.
         dest.UserData = 
            (ivar.getMetadata("UserData") ?? string.Empty).ToString();

         // TODO: handle all variable types
         switch (dest.DataType)  
         {
         case PHXDataType.Double:
            {
               IDoubleVariable var = (IDoubleVariable)ivar;
               dest.Units = var.units;
               dest.Description = var.description;
               if (var.hasUpperBound())
               {
                  dest.UpperBound = 
                     var.upperBound.ToString(CultureInfo.InvariantCulture);
               }

               if (var.hasLowerBound())
               {
                  dest.LowerBound =
                     var.lowerBound.ToString(CultureInfo.InvariantCulture);
               }

               dest.EnumValues = var.enumValues;
               dest.EnumAliases = var.enumAliases;
               dest.Format = var.format;
               dest.DefaultValue = var.toStringAbsolute();
            }

            break;
         case PHXDataType.Integer:
            {
               IIntegerVariable var = (IIntegerVariable)ivar;
               dest.Units = var.units;
               dest.Description = var.description;
               if (var.hasUpperBound())
               {
                  dest.UpperBound =
                     var.upperBound.ToString(CultureInfo.InvariantCulture);
               }

               if (var.hasLowerBound())
               {
                  dest.LowerBound = 
                     var.lowerBound.ToString(CultureInfo.InvariantCulture);
               }

               dest.EnumValues = var.enumValues;
               dest.EnumAliases = var.enumAliases;
               dest.Format = var.format;
               dest.DefaultValue = var.toStringAbsolute();
            }

            break;
         case PHXDataType.String:
            {
               IStringVariable var = (IStringVariable)ivar;
               dest.Description = var.description;
               dest.EnumValues = var.enumValues;
               dest.EnumAliases = var.enumAliases;
               dest.DefaultValue = var.toStringAbsolute();
            }

            break;
         case PHXDataType.Boolean:
            {
               IBooleanVariable var = (IBooleanVariable)ivar;
               dest.Description = var.description;
               dest.DefaultValue = var.toStringAbsolute();
            }

            break;
         case PHXDataType.File:
            {
               IFileVariable var = (IFileVariable)ivar;
               dest.Description = var.description;
               dest.IsBinary = var.isBinary;
               dest.FileExtension = var.fileExtension;
            }

            break;
         case PHXDataType.Double | PHXDataType.Array:
            {
               IDoubleArray v = (IDoubleArray)ivar;
               dest.Units = v.units;
               dest.Description = v.description;
               dest.NumDimensions = v.numDimensions;
               for (int i = 0; i < dest.NumDimensions; i++)
               {
                  dest.Length[i] = v.getLength(i);
               }

               dest.UpperBound = 
                  v.hasUpperBound() ? 
                  v.upperBound.ToString(CultureInfo.InvariantCulture) : 
                  string.Empty;
               dest.LowerBound = 
                  v.hasLowerBound() ? 
                  v.lowerBound.ToString(CultureInfo.InvariantCulture) : 
                  string.Empty;
               dest.Format = v.format;
               dest.EnumValues = v.enumValues;
               dest.EnumAliases = v.enumAliases;
               dest.DefaultValue = v.toStringAbsolute();
            }

            break;
         case PHXDataType.Integer | PHXDataType.Array:
            {
               IIntegerArray v = (IIntegerArray)ivar;
               dest.Units = v.units;
               dest.Description = v.description;
               dest.NumDimensions = v.numDimensions;
               for (int i = 0; i < dest.NumDimensions; i++)
               {
                  dest.Length[i] = v.getLength(i);
               }

               dest.UpperBound = 
                  v.hasUpperBound() ? 
                  v.upperBound.ToString(CultureInfo.InvariantCulture) : 
                  string.Empty;
               dest.LowerBound = 
                  v.hasLowerBound() ? 
                  v.lowerBound.ToString(CultureInfo.InvariantCulture) : 
                  string.Empty;
               dest.Format = v.format;
               dest.EnumValues = v.enumValues;
               dest.EnumAliases = v.enumAliases;
               dest.DefaultValue = v.toStringAbsolute();
            }

            break;
         case PHXDataType.Boolean | PHXDataType.Array:
            {
               IBooleanArray v = (IBooleanArray)ivar;
               dest.Description = v.description;
               dest.NumDimensions = v.numDimensions;
               for (int i = 0; i < dest.NumDimensions; i++)
               {
                  dest.Length[i] = v.getLength(i);
               }

               dest.DefaultValue = v.toStringAbsolute();
            }

            break;
         case PHXDataType.String | PHXDataType.Array:
            {
               IStringArray v = (IStringArray)ivar;
               dest.Description = v.description;
               dest.NumDimensions = v.numDimensions;
               for (int i = 0; i < dest.NumDimensions; i++)
               {
                  dest.Length[i] = v.getLength(i);
               }

               dest.EnumValues = v.enumValues;
               dest.EnumAliases = v.enumAliases;
               dest.DefaultValue = v.toStringAbsolute();
            }

            break;
         case PHXDataType.File | PHXDataType.Array:
            {
               IFileArray v = (IFileArray)ivar;
               dest.Description = v.description;
               dest.NumDimensions = v.numDimensions;
               for (int i = 0; i < dest.NumDimensions; i++)
               {
                  dest.Length[i] = v.getLength(i);
               }

               dest.IsBinary = v.isBinary;
            }

            break;
         default:
            Debug.Fail("Unrecognized data type");
            break;
         }
      }
      
      public static void ReadFromModelCenter(string name, IModelCenter modelCenter, PHXVariable dest, bool compVar)
      {
         IVariable variable = null;
         try
         {
            variable = modelCenter.getVariable(name) as IVariable;
            ReadFromIVariable(variable, dest, compVar);
         }
         finally
         {
            if (variable != null)
            {               
               ((IDisposable)variable).Dispose();
               variable = null;
            }
         }
      }

      public static void WriteToIVariable(PHXVariable src, IVariable ivar)
      {
         // do some sanity checking
         // PHXVarType expectedType = 
         //   ivar.isInputToComponent() ? PHXVarType.Input : PHXVarType.Output;
         // Debug.Assert(expectedType == src.VarType);
         if (src.VarType == PHXVarType.Group)
         {
            return;
         }

         // Set the user data as metadata on the object.
         ivar.setMetadata(
            "UserData", 
            MetadataType.METADATA_TYPE_STRING, 
            src.UserData, 
            MetadataAccess.METADATA_ACCESS_PUBLIC, 
            true);

         // if (mc.get_version(0) < 10 &&
         //   (vi.format.Equals(DATE_EPOCH_SECONDS) ||
         //    vi.format.Equals(DATE_YEAR_MONTH_DAY) ||
         //    vi.format.Equals(DATE_UTCG)))
         // {
         //   if (vi.type == PHXType.DOUBLE || vi.type == PHXType.INT)
         //      vi.type = PHXType.STRING;
         //   else if (vi.type == PHXType.DOUBLE_ARRAY || vi.type == PHXType.INT_ARRAY)
         //      vi.type = PHXType.STRING_ARRAY;
         // }

         // TODO: handle all variable types
         switch (src.DataType)
         {
         case PHXDataType.Double:
            {
               IDoubleVariable v = (IDoubleVariable)ivar;
               v.units = src.Units;
               v.description = src.Description;
               if (PHXUtils.IsNullOrWhiteSpace(src.UpperBound))
               {
                  v.clearUpperBound();
               }
               else
               {
                  v.upperBound = double.Parse(src.UpperBound);
               }

               if (PHXUtils.IsNullOrWhiteSpace(src.LowerBound))
               {
                  v.clearLowerBound();
               }
               else
               {
                  v.lowerBound = double.Parse(src.LowerBound);
               }

               v.format = src.Format;
               v.enumValues = src.EnumValues;
               v.enumAliases = src.EnumAliases;

               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromFormattedString(src.DefaultValue);
               }
            }
            
            break;
         case PHXDataType.Integer:
            {
               IIntegerVariable v = (IIntegerVariable)ivar;
               v.units = src.Units;
               v.description = src.Description;
               if (PHXUtils.IsNullOrWhiteSpace(src.UpperBound))
               {
                  v.clearUpperBound();
               }
               else
               {
                  v.upperBound = int.Parse(src.UpperBound);
               }

               if (PHXUtils.IsNullOrWhiteSpace(src.LowerBound))
               {
                  v.clearLowerBound();
               }
               else
               {
                  v.lowerBound = int.Parse(src.LowerBound);
               }

               v.format = src.Format;
               v.enumValues = src.EnumValues;
               v.enumAliases = src.EnumAliases;

               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromFormattedString(src.DefaultValue);
               }
            }

            break;
         case PHXDataType.Boolean:
            {
               IBooleanVariable v = (IBooleanVariable)ivar;
               v.description = src.Description;

               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromString(src.DefaultValue);
               }
            }

            break;
         case PHXDataType.String:
            {
               IStringVariable v = (IStringVariable)ivar;
               v.description = src.Description;
               v.enumValues = src.EnumValues;
               v.enumAliases = src.EnumAliases;

               // call set value after creation.force set default value to var.
               // In case it is missed during creating var (It happens when the 
               // var with same name exist)
               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromString(src.DefaultValue);
               }
            }

            break;
         case PHXDataType.File:
            {
               IFileVariable v = (IFileVariable)ivar;
               v.description = src.Description;
               v.fileExtension = src.FileExtension;
               v.isBinary = src.IsBinary;

               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromString(src.DefaultValue);
               }                  
            }

            break;
         case PHXDataType.Double | PHXDataType.Array:
            {
               // IDoubleVariable v = (IDoubleVariable)var;
               IDoubleArray v = (IDoubleArray)ivar;
               v.numDimensions = src.NumDimensions;
               for (int i = 0; i < src.NumDimensions; i++)
               {
                  v.setLength(src.Length[i], i);
               }

               v.units = src.Units;
               v.description = src.Description;
               if (PHXUtils.IsNullOrWhiteSpace(src.UpperBound))
               {
                  v.clearUpperBound();
               }
               else
               {
                  v.upperBound = double.Parse(src.UpperBound);
               }

               if (PHXUtils.IsNullOrWhiteSpace(src.LowerBound))
               {
                  v.clearLowerBound();
               }
               else
               {
                  v.lowerBound = double.Parse(src.LowerBound);
               }

               v.format = src.Format;
               v.enumValues = src.EnumValues;
               v.enumAliases = src.EnumAliases;

               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromString(src.DefaultValue);
               }
            }

            break;
         case PHXDataType.Integer | PHXDataType.Array:
            {
               IIntegerArray v = (IIntegerArray)ivar;
               v.numDimensions = src.NumDimensions;
               for (int i = 0; i < src.NumDimensions; i++)
               {
                  v.setLength(src.Length[i], i);
               }

               v.units = src.Units;
               v.description = src.Description;
               if (PHXUtils.IsNullOrWhiteSpace(src.UpperBound))
               {
                  v.clearUpperBound();
               }
               else
               {
                  v.upperBound = int.Parse(src.UpperBound);
               }

               if (PHXUtils.IsNullOrWhiteSpace(src.LowerBound))
               {
                  v.clearLowerBound();
               }
               else
               {
                  v.lowerBound = int.Parse(src.LowerBound);
               }

               v.format = src.Format;
               v.enumValues = src.EnumValues;
               v.enumAliases = src.EnumAliases;

               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromString(src.DefaultValue);
               }
            }

            break;
         case PHXDataType.Boolean | PHXDataType.Array:
            {
               IBooleanArray v = (IBooleanArray)ivar;
               v.numDimensions = src.NumDimensions;
               for (int i = 0; i < src.NumDimensions; i++)
               {
                  v.setLength(src.Length[i], i);
               }

               v.description = src.Description;

               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromString(src.DefaultValue);
               }
            }

            break;
         case PHXDataType.String | PHXDataType.Array:
            {
               IStringArray v = (IStringArray)ivar;
               v.numDimensions = src.NumDimensions;
               for (int i = 0; i < src.NumDimensions; i++)
               {
                  v.setLength(src.Length[i], i);
               }

               v.description = src.Description;
               v.enumValues = src.EnumValues;
               v.enumAliases = src.EnumAliases;

               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromString(src.DefaultValue);
               }
            }

            break;
         case PHXDataType.File | PHXDataType.Array:
            {
               IFileArray v = (IFileArray)ivar;
               v.numDimensions = src.NumDimensions;
               for (int i = 0; i < src.NumDimensions; i++)
               {
                  v.setLength(src.Length[i], i);
               }

               v.description = src.Description;
               v.isBinary = src.IsBinary;

               if (!PHXUtils.IsNullOrWhiteSpace(src.DefaultValue) &&
                   v.isInputToModel())
               {
                  v.fromString(src.DefaultValue);
               }
            }

            break;
         default:
            Debug.Fail("Unrecognized data type");
            break;
         }
      }

      public static IGroups GetGroups(object obj)
      {
         if (obj is IGroup)
         {
            return (IGroups)((IGroup)obj).Groups;
         }
         if (obj is IComponent)
         {
            return (IGroups)((IComponent)obj).Groups;
         }
         throw new InvalidOperationException();
      }

      public static IVariables GetVariables(object obj)
      {
         if (obj is IGroup)
         {
            return (IVariables)((IGroup)obj).Variables;
         }
         if (obj is IComponent)
         {
            return (IVariables)((IComponent)obj).Variables;
         }
         throw new InvalidOperationException();
      }

      public static object Find(object mcObject, string name)
      {
         //LTTODO: MC almost certainly has an API for this?
         int pos = name.IndexOf('.');
         string curName = pos < 0 ? name : name.Substring(0, pos);
         string rest = pos < 0 ? null : name.Substring(pos + 1);

         using (SVariables vars = (SVariables)GetVariables(mcObject))
         {
            for (int i = 0; i < (int)vars.Count; ++i)
            {
               IVariable v = (IVariable)vars.Item(i);
               if (rest == null && v.getName() == curName)
               {
                  return v;
               }
               ((IDisposable)v).Dispose();
            }
         }

         using (SGroups groups = (SGroups)GetGroups(mcObject))
         {
            for (int i = 0; i < (int)groups.Count; ++i)
            {
               IGroup g = (IGroup)groups.Item(i);
               if (g.getName() == curName)
               {
                  if (rest == null)
                  {
                     return g;
                  }
                  else
                  {
                     try
                     {
                        Find(g, rest);
                     }
                     finally
                     {
                        ((SGroup)g).Dispose();
                     }
                  }
               }
            }
         }

         return null;
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