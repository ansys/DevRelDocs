# <a id="OpenTD_SindaControlData"></a> Class SindaControlData

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Sinda control constants. Used in Case Set.

```csharp
[DataContract]
public class SindaControlData
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SindaControlData](OpenTD.SindaControlData.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_SindaControlData__ctor"></a> SindaControlData\(\)

```csharp
public SindaControlData()
```

## Properties

### <a id="OpenTD_SindaControlData_AdditionalUserInput"></a> AdditionalUserInput

```csharp
[DataMember]
public string AdditionalUserInput { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_SindaControlData_abszro"></a> abszro

```csharp
[DataMember]
public Dimensional<Temp> abszro { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Temp](OpenTD.Dimension.Temp.md)\>

### <a id="OpenTD_SindaControlData_accelFromPreferences"></a> accelFromPreferences

```csharp
[DataMember]
public bool accelFromPreferences { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SindaControlData_accelx"></a> accelx

```csharp
[DataMember]
public Dimensional<Gravity> accelx { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Gravity](OpenTD.Dimension.Gravity.md)\>

### <a id="OpenTD_SindaControlData_accelxExp"></a> accelxExp

```csharp
[DataMember]
public ExpressionData accelxExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_accely"></a> accely

```csharp
[DataMember]
public Dimensional<Gravity> accely { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Gravity](OpenTD.Dimension.Gravity.md)\>

### <a id="OpenTD_SindaControlData_accelyExp"></a> accelyExp

```csharp
[DataMember]
public ExpressionData accelyExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_accelz"></a> accelz

```csharp
[DataMember]
public Dimensional<Gravity> accelz { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Gravity](OpenTD.Dimension.Gravity.md)\>

### <a id="OpenTD_SindaControlData_accelzExp"></a> accelzExp

```csharp
[DataMember]
public ExpressionData accelzExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_arlxca"></a> arlxca

```csharp
[DataMember]
public double arlxca { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_arlxcaExp"></a> arlxcaExp

```csharp
[DataMember]
public ExpressionData arlxcaExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_atmpca"></a> atmpca

```csharp
[DataMember]
public double atmpca { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_atmpcaExp"></a> atmpcaExp

```csharp
[DataMember]
public ExpressionData atmpcaExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_csgfac"></a> csgfac

```csharp
[DataMember]
public double csgfac { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_csgfacExp"></a> csgfacExp

```csharp
[DataMember]
public ExpressionData csgfacExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_dtimeh"></a> dtimeh

```csharp
[DataMember]
public Dimensional<Time> dtimeh { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_dtimehExp"></a> dtimehExp

```csharp
[DataMember]
public ExpressionData dtimehExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_dtimei"></a> dtimei

```csharp
[DataMember]
public Dimensional<Time> dtimei { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_dtimeiExp"></a> dtimeiExp

```csharp
[DataMember]
public ExpressionData dtimeiExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_dtimel"></a> dtimel

```csharp
[DataMember]
public Dimensional<Time> dtimel { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_dtimelExp"></a> dtimelExp

```csharp
[DataMember]
public ExpressionData dtimelExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_dtimes"></a> dtimes

```csharp
[DataMember]
public Dimensional<Time> dtimes { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_dtimesExp"></a> dtimesExp

```csharp
[DataMember]
public ExpressionData dtimesExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_dtmaxf"></a> dtmaxf

```csharp
[DataMember]
public Dimensional<Time> dtmaxf { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_dtmaxfExp"></a> dtmaxfExp

```csharp
[DataMember]
public ExpressionData dtmaxfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_dtminf"></a> dtminf

```csharp
[DataMember]
public Dimensional<Time> dtminf { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_dtminfExp"></a> dtminfExp

```csharp
[DataMember]
public ExpressionData dtminfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_dtmpca"></a> dtmpca

```csharp
[DataMember]
public double dtmpca { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_dtmpcaExp"></a> dtmpcaExp

```csharp
[DataMember]
public ExpressionData dtmpcaExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_dtsizf"></a> dtsizf

```csharp
[DataMember]
public double dtsizf { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_dtsizfExp"></a> dtsizfExp

```csharp
[DataMember]
public ExpressionData dtsizfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_dttubf"></a> dttubf

```csharp
[DataMember]
public double dttubf { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_dttubfExp"></a> dttubfExp

```csharp
[DataMember]
public ExpressionData dttubfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_ebalna"></a> ebalna

```csharp
[DataMember]
public double ebalna { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_ebalnaExp"></a> ebalnaExp

```csharp
[DataMember]
public ExpressionData ebalnaExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_ebalsa"></a> ebalsa

```csharp
[DataMember]
public double ebalsa { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_ebalsaExp"></a> ebalsaExp

```csharp
[DataMember]
public ExpressionData ebalsaExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_extlim"></a> extlim

```csharp
[DataMember]
public double extlim { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_extlimExp"></a> extlimExp

```csharp
[DataMember]
public ExpressionData extlimExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_fbebala"></a> fbebala

```csharp
[DataMember]
public double fbebala { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_fbebalaExp"></a> fbebalaExp

```csharp
[DataMember]
public ExpressionData fbebalaExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_fraver"></a> fraver

```csharp
[DataMember]
public Dimensional<MassFlowRate> fraver { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[MassFlowRate](OpenTD.Dimension.MassFlowRate.md)\>

### <a id="OpenTD_SindaControlData_fraverExp"></a> fraverExp

```csharp
[DataMember]
public ExpressionData fraverExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_iterot"></a> iterot

```csharp
[DataMember]
public int iterot { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_iterotExp"></a> iterotExp

```csharp
[DataMember]
public ExpressionData iterotExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_iterxt"></a> iterxt

```csharp
[DataMember]
public int iterxt { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_iterxtExp"></a> iterxtExp

```csharp
[DataMember]
public ExpressionData iterxtExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_ithldf"></a> ithldf

```csharp
[DataMember]
public int ithldf { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_ithldfExp"></a> ithldfExp

```csharp
[DataMember]
public ExpressionData ithldfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_ithold"></a> ithold

```csharp
[DataMember]
public int ithold { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_itholdExp"></a> itholdExp

```csharp
[DataMember]
public ExpressionData itholdExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_itrotf"></a> itrotf

```csharp
[DataMember]
public int itrotf { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_itrotfExp"></a> itrotfExp

```csharp
[DataMember]
public ExpressionData itrotfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_nloops"></a> nloops

```csharp
[DataMember]
public int nloops { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_nloopsExp"></a> nloopsExp

```csharp
[DataMember]
public ExpressionData nloopsExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_nloopt"></a> nloopt

```csharp
[DataMember]
public int nloopt { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_nlooptExp"></a> nlooptExp

```csharp
[DataMember]
public ExpressionData nlooptExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_nvarb1"></a> nvarb1

```csharp
[DataMember]
public int nvarb1 { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_opeitr"></a> opeitr

```csharp
[DataMember]
public int opeitr { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_opeitrExp"></a> opeitrExp

```csharp
[DataMember]
public ExpressionData opeitrExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_opitrf"></a> opitrf

```csharp
[DataMember]
public int opitrf { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OpenTD_SindaControlData_opitrfExp"></a> opitrfExp

```csharp
[DataMember]
public ExpressionData opitrfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_outptf"></a> outptf

```csharp
[DataMember]
public Dimensional<Time> outptf { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_outptfExp"></a> outptfExp

```csharp
[DataMember]
public ExpressionData outptfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_output"></a> output

```csharp
[DataMember]
public Dimensional<Time> output { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_outputExp"></a> outputExp

```csharp
[DataMember]
public ExpressionData outputExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_outputOff"></a> outputOff

```csharp
[DataMember]
public string outputOff { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_SindaControlData_outputOffControl"></a> outputOffControl

```csharp
[DataMember]
public bool outputOffControl { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SindaControlData_patmos"></a> patmos

```csharp
[DataMember]
public Dimensional<Pressure> patmos { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Pressure](OpenTD.Dimension.Pressure.md)\>

### <a id="OpenTD_SindaControlData_patmosExp"></a> patmosExp

```csharp
[DataMember]
public ExpressionData patmosExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_rebalf"></a> rebalf

```csharp
[DataMember]
public double rebalf { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_rebalfExp"></a> rebalfExp

```csharp
[DataMember]
public ExpressionData rebalfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_rerrf"></a> rerrf

```csharp
[DataMember]
public double rerrf { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_rerrfExp"></a> rerrfExp

```csharp
[DataMember]
public ExpressionData rerrfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_rmfrac"></a> rmfrac

```csharp
[DataMember]
public double rmfrac { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_rmfracExp"></a> rmfracExp

```csharp
[DataMember]
public ExpressionData rmfracExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_rmrate"></a> rmrate

```csharp
[DataMember]
public Dimensional<Time> rmrate { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_rmrateExp"></a> rmrateExp

```csharp
[DataMember]
public ExpressionData rmrateExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_rmsplt"></a> rmsplt

```csharp
[DataMember]
public double rmsplt { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_rmspltExp"></a> rmspltExp

```csharp
[DataMember]
public ExpressionData rmspltExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_rsmaxf"></a> rsmaxf

```csharp
[DataMember]
public Dimensional<Time> rsmaxf { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_rsmaxfExp"></a> rsmaxfExp

```csharp
[DataMember]
public ExpressionData rsmaxfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_rssizf"></a> rssizf

```csharp
[DataMember]
public double rssizf { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_rssizfExp"></a> rssizfExp

```csharp
[DataMember]
public ExpressionData rssizfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_rstubf"></a> rstubf

```csharp
[DataMember]
public double rstubf { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_rstubfExp"></a> rstubfExp

```csharp
[DataMember]
public ExpressionData rstubfExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_saveOff"></a> saveOff

```csharp
[DataMember]
public string saveOff { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_SindaControlData_saveOffControl"></a> saveOffControl

```csharp
[DataMember]
public bool saveOffControl { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_SindaControlData_sigma"></a> sigma

```csharp
[DataMember]
public Dimensional<StefanBoltzmann> sigma { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[StefanBoltzmann](OpenTD.Dimension.StefanBoltzmann.md)\>

### <a id="OpenTD_SindaControlData_solutionType"></a> solutionType

```csharp
[DataMember]
public SindaControlData.SolutionType solutionType { get; set; }
```

#### Property Value

 [SindaControlData](OpenTD.SindaControlData.md).[SolutionType](OpenTD.SindaControlData.SolutionType.md)

### <a id="OpenTD_SindaControlData_sparseg"></a> sparseg

```csharp
[DataMember]
public double sparseg { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="OpenTD_SindaControlData_sparsegExp"></a> sparsegExp

```csharp
[DataMember]
public ExpressionData sparsegExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_timend"></a> timend

```csharp
[DataMember]
public Dimensional<Time> timend { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_timendExp"></a> timendExp

```csharp
[DataMember]
public ExpressionData timendExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_timeo"></a> timeo

```csharp
[DataMember]
public Dimensional<Time> timeo { get; set; }
```

#### Property Value

 [Dimensional](OpenTD.Dimension.Dimensional\-1.md)<[Time](OpenTD.Dimension.Time.md)\>

### <a id="OpenTD_SindaControlData_timeoExp"></a> timeoExp

```csharp
[DataMember]
public ExpressionData timeoExp { get; set; }
```

#### Property Value

 [ExpressionData](OpenTD.ExpressionData.md)

### <a id="OpenTD_SindaControlData_warnOff"></a> warnOff

```csharp
[DataMember]
public string warnOff { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OpenTD_SindaControlData_warnOffControl"></a> warnOffControl

```csharp
[DataMember]
public bool warnOffControl { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## See Also

[CaseSet](OpenTD.CaseSet.md)

