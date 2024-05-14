# Change log

| Version | Before | After | Type |
|---|---|---|---|
|2023R1 || from VM.Models.OutputReader import *																																								  | Added  |
|		| IDictionary<string, IList&lt;Point&gt;> GetCurves(IPlotParameters parameters)   | **IDictionary<string, IList&lt;Point2D&gt;>** GetCurves(IPlotParameters parameters)												  | Modified |
|		| (InterpolationErrorType, double[], double[]) InterpolationAkimaSpline(double[] X, double[] Y, int NoOfPnt, int NoOfDesiredPnt, double StartPnt, double EndPnt) | **(ResultType, double[], double[])** InterpolationAkimaSpline(double[] X, double[] Y, int NoOfPnt, int NoOfDesiredPnt, double StartPnt, double EndPnt)    | Modified |   
|		| IDictionary<string, IList&lt;Point2D&gt;> GetCurves(IPlotParameters parameters) | **IDictionary<string, Point2D[]>** GetCurves(IPlotParameters parameters)																						  | Modified |
|		| IDictionary<string, IVectorDisplayAnimatinoData> GetVector() | **IDictionary<string, IVectorDisplayAnimationData>**	GetVector() 	| Modified |

| Version | Before | After | Type |
|---|---|---|---|
|2023R2 | |from VM.Models.OutputReader import *																			 | Added  |
|		| IDictionary<string, IList&lt;Point&gt;> GetCurves(IPlotParameters parameters)   | **IDictionary<string, IList&lt;Point2D&gt;>** GetCurves(IPlotParameters parameters)   | Modified |
|		| (InterpolationErrorType, double[], double[]) InterpolationAkimaSpline(double[] X, double[] Y, int NoOfPnt,             int NoOfDesiredPnt, double StartPnt, double EndPnt) |**(ResultType, double[], double[])** InterpolationAkimaSpline(double[] X, double[] Y, int NoOfPnt, int NoOfDesiredPnt, double StartPnt, double EndPnt)    | Modified |   
|		| IDictionary<string, IList&lt;Point2D&gt;> GetCurves(IPlotParameters parameters) | **IDictionary<string, Point2D[]>** GetCurves(IPlotParameters parameters) | Modified |
|		| IDictionary<string, IVectorDisplayAnimatinoData> GetVector() | **IDictionary<string, IVectorDisplayAnimationData>** GetVector()| Modified |

| Version | Before | After | Type |
|---|---|---|---|
|2024R1 ||from VM.Models.OutputReader import *									   									| Added  |
|		|IDictionary<string, IList&lt;Point2D&gt;> GetCurves(IPlotParameters parameters) | **IDictionary<string, Point2D[]>** GetCurves(IPlotParameters parameters)		| Modified |
|		|(InterpolationErrorType, double[], double[]) InterpolationAkimaSpline(double[] X, double[] Y, int NoOfPnt, int NoOfDesiredPnt, double StartPnt, double EndPnt) |**(ResultType, double[], double[])** InterpolationAkimaSpline(double[] X, double[] Y, int NoOfPnt, int NoOfDesiredPnt, double StartPnt, double EndPnt)    | Modified |   
|		|IDictionary<string, IVectorDisplayAnimatinoData> GetVector() | **IDictionary<string, IVectorDisplayAnimationData>** GetVector() | Modified |