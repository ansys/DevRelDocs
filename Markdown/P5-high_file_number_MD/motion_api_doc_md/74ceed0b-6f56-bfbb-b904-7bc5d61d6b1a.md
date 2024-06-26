# MultiBodyCalculation.GetTotalMassInertia Method (List(VectorBase), List(OMatrix), List(Double), List(Unit), List(Unit), Int32, VectorBase, MultiBodyCalculation.BodyInf)
 

Gets the total mass inertia.

**Namespace:**&nbsp;<a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL</a><br />**Assembly:**&nbsp;VMDFBase (in VMDFBase.dll) Version: 24.1.0.0

## Syntax

**C#**<br />
``` C#
public static bool GetTotalMassInertia(
	List<VectorBase> lstGlobalCMPos,
	List<OMatrix> lstGlobalTensor,
	List<double> lstGlobalMass,
	List<Unit> lstSrcUnit,
	List<Unit> lstDstUnit,
	int nNumberOfBody,
	VectorBase vecTargetPos,
	ref MultiBodyCalculation.BodyInf bodyInf
)
```

**VB**<br />
``` VB
Public Shared Function GetTotalMassInertia ( 
	lstGlobalCMPos As List(Of VectorBase),
	lstGlobalTensor As List(Of OMatrix),
	lstGlobalMass As List(Of Double),
	lstSrcUnit As List(Of Unit),
	lstDstUnit As List(Of Unit),
	nNumberOfBody As Integer,
	vecTargetPos As VectorBase,
	ByRef bodyInf As MultiBodyCalculation.BodyInf
) As Boolean
```

**C++**<br />
``` C++
public:
static bool GetTotalMassInertia(
	List<VectorBase^>^ lstGlobalCMPos, 
	List<OMatrix^>^ lstGlobalTensor, 
	List<double>^ lstGlobalMass, 
	List<Unit^>^ lstSrcUnit, 
	List<Unit^>^ lstDstUnit, 
	int nNumberOfBody, 
	VectorBase^ vecTargetPos, 
	MultiBodyCalculation.BodyInf% bodyInf
)
```

**F#**<br />
``` F#
static member GetTotalMassInertia : 
        lstGlobalCMPos : List<VectorBase> * 
        lstGlobalTensor : List<OMatrix> * 
        lstGlobalMass : List<float> * 
        lstSrcUnit : List<Unit> * 
        lstDstUnit : List<Unit> * 
        nNumberOfBody : int * 
        vecTargetPos : VectorBase * 
        bodyInf : MultiBodyCalculation.BodyInf byref -> bool 

```


#### Parameters
&nbsp;<dl><dt>lstGlobalCMPos</dt><dd>Type: System.Collections.Generic.List(<a href="d8618877-ab49-d81c-7742-73c124462921">VectorBase</a>)<br />The global CM pos.</dd><dt>lstGlobalTensor</dt><dd>Type: System.Collections.Generic.List(<a href="f4b80ada-d468-eef1-4b2b-56c94ed391af">OMatrix</a>)<br />The global tensor.</dd><dt>lstGlobalMass</dt><dd>Type: System.Collections.Generic.List(Double)<br />The global mass.</dd><dt>lstSrcUnit</dt><dd>Type: System.Collections.Generic.List(Unit)<br />The unit of source document.</dd><dt>lstDstUnit</dt><dd>Type: System.Collections.Generic.List(Unit)<br />The unit of current document.</dd><dt>nNumberOfBody</dt><dd>Type: System.Int32<br />The number of body.</dd><dt>vecTargetPos</dt><dd>Type: <a href="d8618877-ab49-d81c-7742-73c124462921">VM.Managed.VectorBase</a><br />The target position.</dd><dt>bodyInf</dt><dd>Type: <a href="ee95181f-6992-2960-942e-9ea7b55ce97e">VM.Managed.DAFUL.MultiBodyCalculation.BodyInf</a><br />The body info.</dd></dl>

#### Return Value
Type: Boolean<br />

## See Also


#### Reference
<a href="7942d955-4d89-1314-d47a-c88e47683a03">MultiBodyCalculation Class</a><br /><a href="9b233aa7-e90c-179f-97ed-820b3f24816c">GetTotalMassInertia Overload</a><br /><a href="8790c1b2-b85d-f406-6b72-1668fe47b24f">VM.Managed.DAFUL Namespace</a><br />