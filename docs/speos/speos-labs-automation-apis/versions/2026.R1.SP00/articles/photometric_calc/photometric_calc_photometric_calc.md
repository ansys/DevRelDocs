# Photometric Calc 

Automation in Photometric Calc allows you to access to the data inside XMP maps.

The installation directory includes the TLB file that describes the Automation interface of the Photometric Calc.

## How to call the Photometric Calc 

Before any call to Photometric Calc methods you should use the following instruction :

```
Set PhotometricCalc = CreateObject("VPLab.Application")

```

This instruction automatically runs Photometric Calc \(creates an instance of the application\). The other uses of Photometric Calc should refer to the variable *PhotometricCalc* which has been initialized with this instance.

You could notice that there is no reference to the path where Photometric Calc is on the disk. As it is an Automation application it has been registered in the Windows registry and Windows understand which application you want to instantiate, with *VPLab.Application*.

## How to call a method 

To call a method, write *PhotometricCalc* followed by a **.** then by the name of the method and parameters between **"** and **"**, each separated by **,**. For example for displaying the Photometric Calc window, write the following instructions:

```
Dim MyVar MyVar = PhotometricCalc.Show(True)

```

The *Show* method takes a short as parameter. The variable MyVar olds the result of the method \(success or failure in this case\).

All the available methods match something existing in the graphic user interface of Photometric Calc.

All the available methods will be described below using the following syntax:

```
[number] return_type Method_Name(parameter 1, parameter 2,...) ;
```

with:

- \[number\]: ordinal number of the method \(not to be used in most cases\).
- return\_type: type of the return value \(BOOL for Boolean value, short for integer value, double for floating point value, BSTR for string...\).
- Method\_Name: name of the method.
- Parameter n: A keyword for the type of the parameter followed by the parameter name.
