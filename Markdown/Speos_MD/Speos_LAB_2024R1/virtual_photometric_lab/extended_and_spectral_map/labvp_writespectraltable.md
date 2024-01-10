# WriteSpectralTable 

## Description 

This function allows you to create a binary file that includes all the data of a spectral irradiance XMP map. Returns True if the binary file has been generated, False otherwise.

## Syntax 

*object*.WriteSpectralTable As Boolean

- *object*: Virtual Photometric Lab

- Boolean return: returns True if the binary file is generated, False otherwise.

## Python example 

```
import numpy as np
import win32com.client # for com with SPEOS API

filename = R"C:\MySpectralIrradianceMap.xmp"

error = ""
# open link to XmpViewer API
try: 
    xmp_viewer = win32com.client.Dispatch("XmpViewer.Application")
except: 
    error = "Impossible to connect to XmpViewer Application"

# load data to XmpViewer and check

if error == "":
    if xmp_viewer.OpenFile(filename) != 1: 
        error = 'Error while opening xmp map: %s' %filename

    else:
        if xmp_viewer.WriteSpectralTable == False:
            error = 'Error while writing spectral table: %s' %filename

        else:
            nb_lambda = xmp_viewer.WNb
            yResolution = xmp_viewer.YNb
            xResolution = xmp_viewer.XNb

            dataList = np.fromfile(f'{filename.split(".xmp")[0]}.bin', dtype =np.float32)
            np.savetxt(f'{filename.split(".xmp")[0]}.txt', dataList)

            data = np.reshape(dataList, (nb_lambda, yResolution, xResolution))
            data = np.flip(data, axis = 1)

            print(data[int(nb_lambda/2)][int(xResolution/2)][int(yResolution/2)])
```


