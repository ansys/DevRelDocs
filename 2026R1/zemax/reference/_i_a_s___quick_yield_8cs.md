# File IAS_QuickYield.cs

<a id="_i_a_s___quick_yield_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Tolerancing::QuickYield::IAS\_QYField](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield_1_1_i_a_s___q_y_field)
* [ZOSAPI::Analysis::Tolerancing::IAS\_QuickYield](interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___quick_yield.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_i_a_s___quick_yield)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Tolerancing](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing)
* [ZOSAPI::Analysis::Tolerancing::QuickYield](namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_tolerancing_1_1_quick_yield)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings;
using ZOSAPI.Tools.Tolerancing;

namespace ZOSAPI.Analysis.Tolerancing
{
    namespace QuickYield
    {
        [ComVisible(true)]
        [Guid("77F22EA9-A63C-4F2B-96F9-3026B30ACCF0")]
        public enum XYSymmetricField
        {
            All = 0,

            Zero = 1,

            YPositive70Percent = 2,

            YNegative70Percent = 3,

            YPositive100Percent = 4,

            YNegative100Percent = 5,

            XPositive70Percent = 6,

            XNegative70Percent = 7,

            XPositive100Percent = 8,

            XNegative100Percent = 9,
        }

        [ComVisible(true)]
        [Guid("9C5C4B42-FB33-4CDD-BA08-DF1787F936F2")]
        public enum YSymmetricField
        {
            All = 0,

            Zero = 1,

            Positive70Percent = 2,

            Negative70Percent = 3,

            Positive100Percent = 4,

            Negative100Percent = 5,
        }

        [ComVisible(true)]
        [Guid("EF4CB0A1-FF0E-4047-A647-FFDEE648B012")]
        public interface IAS_QYField
        {
            int GetFieldUser();

            XYSymmetricField GetFieldSymmetricXY();

            YSymmetricField GetFieldSymmetricY();

            bool IsFieldUser { get; }

            bool IsFieldSymmetricXY { get; }

            bool IsFieldSymmetricY { get; }

            IMessage SetFieldUser(int fieldNumber);

            IMessage SetFieldSymmetricXY(XYSymmetricField field);

            IMessage SetFieldSymmetricY(YSymmetricField field);
        }
    }

    [ComVisible(true)]
    [Guid("F906AE13-DFB8-4AAD-B3FC-FAA48ED27FFA")]
    public enum QYPrecisions
    {
        Standard = 0,
        High,
        VeryHigh,
    }

    [ComVisible(true)]
    [Guid("BD26914C-D348-42D9-8702-BF4D5832E670")]
    public enum QYCompensations
    {
        Standard = 0,
        High,
        VeryHigh,
    }

    [ComVisible(true)]
    [Guid("7F32AF63-FD50-449B-A138-85826F47047F")]
    public enum QYCompensatorStrategy
    {
        OptimizeAllDampedLeastSquares = 0,

        ParaxialFocus = 1,

        Ignore = 2,

        OptimizeAllOrthogonalDescent = 3,
    }

    [ComVisible(true)]
    [Guid("FB569F34-8CCE-4D4E-B97F-24580FFE42A9")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_QuickYield : IAS_
    {
        [Obsolete("Use " + nameof(QYField) + " instead")]
        IAS_Field      Field { get; }
        IAS_Wavelength Wavelength { get; }
        int Configuration { get; set; }
        int NumMonteCarlo { get; set; }
        int PupilSampling { get; set; }
        MonteCarloStatistics Statistic { get; set; }
        QYPrecisions Precision { get; set; }
        QYCompensations Compensation { get; set; }
        QuickYield.IAS_QYField QYField { get; }
        QYCompensatorStrategy CompensatorStrategy { get; set; }
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