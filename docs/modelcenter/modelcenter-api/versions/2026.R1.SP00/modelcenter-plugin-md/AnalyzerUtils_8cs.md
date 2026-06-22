<a id="AnalyzerUtils_8cs"></a>
# File AnalyzerUtils.cs

![][C#]

**Location**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/AnalyzerUtils.cs`





## Classes

* [Phoenix::ModelCenter::PlugIn::AnalyzerUtils](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1AnalyzerUtils)

## Namespaces

* [Phoenix](namespacePhoenix.md#namespacePhoenix)
* [Phoenix::ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter)
* [Phoenix::ModelCenter::PlugIn](namespacePhoenix_1_1ModelCenter_1_1PlugIn.md#namespacePhoenix_1_1ModelCenter_1_1PlugIn)
* [System::Globalization](namespaceSystem_1_1Globalization.md#namespaceSystem_1_1Globalization)
* [System::Linq](namespaceSystem_1_1Linq.md#namespaceSystem_1_1Linq)
* [System::Text](namespaceSystem_1_1Text.md#namespaceSystem_1_1Text)
* [System::Text::RegularExpressions](namespaceSystem_1_1Text_1_1RegularExpressions.md#namespaceSystem_1_1Text_1_1RegularExpressions)

## Source


```csharp
// Copyright © 2024 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. 
using System;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

using Phoenix.ModelCenter.Common;

namespace Phoenix.ModelCenter.PlugIn
{
   [Description("Describes the type of expression that can be used.")]
   public enum AnalyzerExpressionType
   {
      [Description("Allow only single variable name, with optional array index.")]
      VariableOnly,
      [Description("Allow only single variable name, with optional array index, or a numeric constant.")]
      VariableOrConstant,
      [Description("Allow an arbitrary expression.")]
      Expression
   }

   public enum AnalyzerExpressionConversion
   {
      DisplayNameToFormula,
      FormulaToDisplayName,
   }

   public static class AnalyzerUtils
   {
      private static bool TryConvertName(
         string input,
         IAnalyzerVariableInfo varInfo,
         AnalyzerExpressionConversion conversion,
         out string output)
      {
         switch (conversion)
         {
         case AnalyzerExpressionConversion.DisplayNameToFormula:
            return varInfo.TryGetFormulaForAnalyzerVariable(input, out output);
         case AnalyzerExpressionConversion.FormulaToDisplayName:
            return varInfo.TryGetNameForAnalyzerVariable(input, out output);
         default:
            throw new ArgumentException("conversion");
         }
      }

      private static bool TryGetActualName(
         string input,
         IAnalyzerVariableInfo varInfo,
         AnalyzerExpressionConversion conversion,
         bool allowConstant,
         out string output)
      {
         output = null;
         decimal temp;
         if (allowConstant && Decimal.TryParse(input, NumberStyles.Float, CultureInfo.InvariantCulture, out temp))
         {
            output = input;
            return true;
         }

         if (varInfo == null || !varInfo.HasAnalyzerVariables)
         {
            if (ModelCenterUtils.IsValidName(input))
            {
               output = input;
               return true;
            }
            return false;
         }

         return TryConvertName(input, varInfo, conversion, out output);
      }

      private static bool TryConvertExpression(
         string input,
         IAnalyzerVariableInfo varInfo,
         AnalyzerExpressionConversion conversion,
         out string output)
      {
         if (varInfo == null || !varInfo.HasAnalyzerVariables)
         {
            output = input;
            return true;
         }

         output = null;
         StringBuilder sb = new StringBuilder();
         int oldPos = 0;
         for (Match m = ModelCenterUtils.FullNameInExpressionRegex.Match(input);
              m.Success;
              m = m.NextMatch())
         {
            int newPos = m.Index;
            sb.Append(input.Substring(oldPos, newPos - oldPos));
            oldPos = newPos + m.Length;
            string var = m.Groups[0].Value;
            string temp;
            if (!var.Contains('.') && newPos < input.Length && input[newPos] == '(')
            {
               temp = var;
            }
            else if (!TryConvertName(var, varInfo, conversion, out temp))
            {
               return false;
            }
            sb.Append(temp);
         }
         sb.Append(input.Substring(oldPos));
         output = sb.ToString();
         return true;
      }

      public static bool IsValidFormula(
         string formula,
         IAnalyzerVariableInfo varInfo,
         AnalyzerExpressionConversion conversion,
         AnalyzerExpressionType expressionType,
         bool allowEmpty)
      {
         string dummy;
         return TryConvertFormula(
            formula, varInfo, conversion,
            expressionType, allowEmpty,
            out dummy);
      }

      public static bool TryConvertFormula(
         string inputFormula,
         IAnalyzerVariableInfo varInfo,
         AnalyzerExpressionConversion conversion,
         AnalyzerExpressionType expressionType,
         bool allowEmpty,
         out string outputFormula)
      {
         outputFormula = null;
         if (String.IsNullOrWhiteSpace(inputFormula))
         {
            if (!allowEmpty)
            {
               return false;
            }
            outputFormula = "";
            return true;
         }
         inputFormula = inputFormula.Trim();
         switch (expressionType)
         {
         case AnalyzerExpressionType.VariableOnly:
            return TryGetActualName(inputFormula, varInfo, conversion, false, out outputFormula);
         case AnalyzerExpressionType.VariableOrConstant:
            return TryGetActualName(inputFormula, varInfo, conversion, true, out outputFormula);
         case AnalyzerExpressionType.Expression:
            return TryConvertExpression(inputFormula, varInfo, conversion, out outputFormula);
         default:
            throw new ArgumentException("expressionType");
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