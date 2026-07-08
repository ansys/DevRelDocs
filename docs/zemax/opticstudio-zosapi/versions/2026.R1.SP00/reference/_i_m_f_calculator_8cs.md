# File IMFCalculator.cs

<a id="_i_m_f_calculator_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::IMFCalculator](interface_z_o_s_a_p_i_1_1_tools_1_1_i_m_f_calculator.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_m_f_calculator)

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
    [Guid("579A6C87-F687-4013-BC63-BA3F5AB50563")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IMFCalculator : ISystemTool
    {
        double MeritFunctionCalculation { get; }
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
