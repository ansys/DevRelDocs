# getThumbnail


abstract fun [getThumbnail](get-thumbnail.md)(hints: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

Called by the Data Explorer to get the name of a file that contains the thumbnail image. The image can be EMF (preferred), BMP, JPG, or GIF.

#### Return

The name of the file containing the thumbnail image

#### Parameters



| | |
|---|---|
| hints | Hints to the page as to how to export. For now, this is not used, although in the future it can be used to express size format and &quot;thumbnail&quot; characteristics. |
