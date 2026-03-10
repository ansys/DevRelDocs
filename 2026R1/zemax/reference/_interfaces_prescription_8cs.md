# File InterfacesPrescription.cs

<a id="_interfaces_prescription_8cs"></a>

![][C#]


## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

//namespace ZOSAPI.PrescriptionData
//{
//    [ComVisible(true)]
//    [Guid("E7A7531F-4317-4552-A2FA-C8C094868AFF")]
//    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
//    public interface IPrescriptionData
//    {
//        int NumberOfSurfaces { get; }
//        int SurfaceStop { get; }
//        string SystemAperture { get; }
//        double TemperatureC { get; }
//        double PressureATM { get; }
//        double EFLSystem { get; }
//        double EFLImage { get; }
//        string[] UsedFiles { get; }

//        int ReferenceSurface { get; }
//        ISurfaceMatrixData[] SurfaceMatrixData { get; }

//        // Do we want to enumerate all surfaces with specific fields for each type? 
//        // Would probably be very nice in the long run, but short term is LDE interface good enough?


//        // etc.
//    }

//    [ComVisible(true)]
//    [Guid("72F54C00-1C4B-40EF-885C-BA25773575AB")]
//    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
//    public interface ISurfaceMatrixData
//    {
//        double R11 { get; }
//        double R12 { get; }
//        double R13 { get; }
//        double R21 { get; }
//        double R22 { get; }
//        double R23 { get; }
//        double R31 { get; }
//        double R32 { get; }
//        double R33 { get; }

//        double X { get; }
//        double Y { get; }
//        double Z { get; }

//        double TiltX { get; }
//        double TiltY { get; }
//        double TiltZ { get; }
//    }


//}
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)