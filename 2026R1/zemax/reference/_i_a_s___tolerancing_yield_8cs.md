# File IAS_TolerancingYield.cs

<a id="_i_a_s___tolerancing_yield_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Tolerancing::IAS\_TolerancingYield](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_yield.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___tolerancing_yield)
* [ZOSAPI::Analysis::Tolerancing::ITolerancingOperands](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operands)
* [ZOSAPI::Analysis::Tolerancing::ITolerancingOperand](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operand.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_tolerancing_operand)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Tolerancing](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings;

namespace ZOSAPI.Analysis.Tolerancing
{
    [ComVisible(true)]
    [Guid("8C8361DE-DEE2-47BE-A78F-AB3728F02C65")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_TolerancingYield : IAS_
    {
        String Filename { get; set; }
        int Operand { get; set; }

        void UseSystemTolerances();
        ITolerancingOperands GetOperands();
        string[] GetToleranceFiles();
    }

    public interface ITolerancingOperands
    {
        int NumberOfOperands { get; }
        ITolerancingOperand[] Operands { get; }
        ITolerancingOperand GetOperand(int operandIndex);
    }

    public interface ITolerancingOperand
    {
        string OperandName { get; }
        string ParameterData { get; }
    }
}
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)