# TireAnalysisRide.ExecuteCore Method 
 

Executes [core].

**Namespace:**&nbsp;<a href="d26f83e4-174a-4821-2ae8-d0c8a6d1a909">VM.Managed.DAFUL.Car.Operation</a><br />**Assembly:**&nbsp;VMOpCar (in VMOpCar.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
protected override void ExecuteCore(
	int nIdex,
	TireTestRigDocument doc,
	ref TireAnalysisConfigurationBase taConfig
)
```

**VB**<br />
``` VB
Protected Overrides Sub ExecuteCore ( 
	nIdex As Integer,
	doc As TireTestRigDocument,
	ByRef taConfig As TireAnalysisConfigurationBase
)
```

**C++**<br />
``` C++
protected:
virtual void ExecuteCore(
	int nIdex, 
	TireTestRigDocument^ doc, 
	TireAnalysisConfigurationBase^% taConfig
) override
```

**F#**<br />
``` F#
abstract ExecuteCore : 
        nIdex : int * 
        doc : TireTestRigDocument * 
        taConfig : TireAnalysisConfigurationBase byref -> unit 
override ExecuteCore : 
        nIdex : int * 
        doc : TireTestRigDocument * 
        taConfig : TireAnalysisConfigurationBase byref -> unit 
```


#### Parameters
&nbsp;<dl><dt>nIdex</dt><dd>Type: System.Int32<br />The index.</dd><dt>doc</dt><dd>Type: <a href="7b55381f-bc29-3f74-be45-862ad06df4c8">VM.Managed.DAFUL.Car.TireTestRigDocument</a><br />The document.</dd><dt>taConfig</dt><dd>Type: <a href="fde8cca5-2e78-c61b-5b0a-ede2652beb5a">VM.Managed.DAFUL.Car.TireAnalysisConfigurationBase</a><br />The configuration.</dd></dl>

## See Also


#### Reference
<a href="92a5d9a8-7e2b-9d2e-8ef8-2b848faaa8e5">TireAnalysisRide Class</a><br /><a href="d26f83e4-174a-4821-2ae8-d0c8a6d1a909">VM.Managed.DAFUL.Car.Operation Namespace</a><br />