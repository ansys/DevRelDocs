# XMP file export type 

The following section contains 7 export methods.
- [XmpFileExportTypeAnsysByExtent](viewer_iesna_lm63_xmpfileexporttypeansysbyextent.md)
- [XmpFileExportTypeAnsys](viewer_iesna_lm63_xmpfileexporttypeansys.md)
- [XmpFileExportTypeSAEAByExtent](viewer_iesna_lm63_xmpfileexporttypesaeabyextent.md)
- [XmpFileExportTypeSAEA](viewer_iesna_lm63_xmpfileexporttypesaea.md)
- [XmpFileExportTypeSAEBByExtent](viewer_iesna_lm63_xmpfileexporttypesaebbyextent.md)
- [XmpFileExportTypeSAEB](viewer_iesna_lm63_xmpfileexporttypesaeb.md)
- [XmpFileExportTypeConoscopic](viewer_iesna_lm63_xmpfileexporttypeconoscopic.md)

Each of these methods return the following error code:

- 0: Succesful
- -1: Incorrect file name
- -2: Sampling must be greater or equal
- -3: XMax must be strictly higher than Xmin
- -4: YMax must be strictly higher than Ymin
- -5: Width must be strictly higher than 0
- -6: Height must be strictly higher than 0
- -7: Axis Theta0 and Vector Phi 0 must be orthogonal
- -8: Axis Theta0 and Vector Phi 0 must not be collinear
- -9: Unknown error