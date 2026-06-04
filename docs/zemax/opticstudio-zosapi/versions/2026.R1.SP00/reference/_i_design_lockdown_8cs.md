# File IDesignLockdown.cs

<a id="_i_design_lockdown_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::IDesignLockdown](interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_design_lockdown)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ZOSAPI.Tools
{
    [Guid("422DDC8A-D2F6-408C-AB1B-8126CA30A8C1")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IDesignLockdown : ISystemTool
    {
        int DecimalPrecision { get; set; }

        bool ExcludePickups { get; set; }
        bool UsePrecisionRounding { get; set; }
        bool FixModelGlasses { get; set; }
        bool ConvertSDToMaxApertures { get; set; }

    }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
