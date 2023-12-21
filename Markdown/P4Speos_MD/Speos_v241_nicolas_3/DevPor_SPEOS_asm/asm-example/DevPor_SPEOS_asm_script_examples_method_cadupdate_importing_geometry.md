# CADUpdate – Importing a Geometry

The following script sample shows you an example on how to import a geometry.

```
from System.IO import Path

currentFilePath = GetRootPart().Document.Path
currentPath = Path.GetDirectoryName(currentFilePath)

speFile1 = currentPath + "\\" + "lguide.prt"
speFile2 = currentPath + "\\" + "led.prt"

stest1 = SpeosAsm.CADUpdate.Import(speFile1)
test2 = SpeosAsm.CADUpdate.Import(speFile2)
```