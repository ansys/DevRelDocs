# File I_SampleSizes.cs

<a id="_i___sample_sizes_8cs"></a>

![][C#]


## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ZOSAPI.Analysis
{
    [ComVisible(true)]
    [Guid("D6A5777B-25DA-4DE9-91FC-88A1142DA5EF")]
    public enum SampleSizes
    {
        S_32x32 = 1, 
        S_64x64 = 2,
        S_128x128 = 3, 
        S_256x256 = 4, 
        S_512x512 = 5,
        S_1024x1024 = 6, 
        S_2048x2048 = 7, 
        S_4096x4096 = 8, 
        S_8192x8192 = 9,
        S_16384x16384 = 10
    }

    [ComVisible(true)]
    [Guid("6D91127A-E819-478B-8259-726DEB43FBAB")]
    public enum SampleSizes_Pow2Plus1
    {
        S_33 = 1, 
        S_65 = 2,
        S_129 = 3, 
        S_257 = 4, 
        S_513 = 5,
        S_1025 = 6, 
        S_2049 = 7, 
        S_4097 = 8, 
        S_8193 = 9
    }

    [ComVisible(true)]
    [Guid("47A8D80D-91CB-4766-9B0C-9EA7B0FC7FA0")]
    public enum SampleSizes_Pow2Plus1_X
    {
        S_33x33 = 1, 
        S_65x65 = 2,
        S_129x129 = 3, 
        S_257x257 = 4, 
        S_513x513 = 5,
        S_1025x1025 = 6, 
        S_2049x2049 = 7, 
        S_4097x4097 = 8, 
        S_8193x8193 = 9
    }

    [ComVisible(true)]
    [Guid("936B8108-47E7-4853-A3E0-C195D9322F08")]
    public enum SampleSizes_ContrastLoss
    {
        S_3x3 = 1,
        S_5x5 = 2,
        S_7x7 = 3,
        S_9x9 = 4,
        S_11x11 = 5,
        S_13x13 = 6,
        S_15x15 = 7,
        S_17x17 = 8,
        S_19x19 = 9,
        S_21x21 = 10,
        S_23x23 = 11,
        S_25x25 = 12,
        S_27x27 = 13,
        S_29x29 = 14,
        S_31x31 = 15,
        S_33x33 = 16,
        S_35x35 = 17,
        S_37x37 = 18,
        S_39x39 = 19,
        S_41x41 = 20,
        S_43x43 = 21,
        S_45x45 = 22,
        S_47x47 = 23,
        S_49x49 = 24,
        S_51x51 = 25,
        S_53x53 = 26,
        S_55x55 = 27,
        S_57x57 = 28,
        S_59x59 = 29,
        S_61x61 = 30,
        S_63x63 = 31,
        S_65x65 = 32,
        S_67x67 = 33,
        S_69x69 = 34,
        S_71x71 = 35,
        S_73x73 = 36,
        S_75x75 = 37,
        S_77x77 = 38,
        S_79x79 = 39,
        S_81x81 = 40,
        S_83x83 = 41
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
