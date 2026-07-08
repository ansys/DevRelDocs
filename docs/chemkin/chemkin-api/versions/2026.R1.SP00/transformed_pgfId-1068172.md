# Utilities

Table 4.14: Utility Subroutines

Subroutine |  Description  
---|---  
`SUBROUTINE CKAVG (NN, S1, S2, SAVG)` |  For arrays of length nn, SAVG(n) is the average value of S1(n) and S2(n).   
`REAL FUNCTION CKBSEC (NPTS, X, XX, TT)` |  Interpolate f(X) using bisection, given X and other pairs of X and f(X).   
`CHARACTER FUNCTION CKCHUP (ISTR, ILEN)` |  Convert characters of a character string to upper case.  
`CHARACTER FUNCTION CKCHLO (ISTR, ILEN)` |  Convert ILEN characters in a character string to lower-case.  
`SUBROUTINE CKCOMP (IST, IRAY, II, I)` |  Returns the index of an element of a reference character string array which corresponds to a character string; leading and trailing blanks are ignored.   
`SUBROUTINE CKCOPY (NN, X1, X2)` |  Copy X1(*) array members into X2(*) array.  
`SUBROUTINE CKCRAY (LINE, NN, KRAY, LOUT, NDIM, NRAY, NF, KERR)` |  Searches a character string, LINE, and compares the space-delimited substrings in LINE, to an array of character strings, KRAY; if a substring in LINE is located in KRAY, the index of its location in KRAY is stored in the integer array NRAY. For example, the subroutine might be called to assign Gas-phase Kinetics species indices to a given list of species names.  
`SUBROUTINE CKDLIM (STRING, DELIM, I1, I2)` |  Returns pointers into a character string of the first and second occurrences of a particular character.  
`SUBROUTINE CKDTAB (STRING)` |  Replaces any tab character in a character string with one space.  
`INTEGER FUNCTION CKFRCH (STR)` |  Returns the index of the first non-blank, non-tab character in a string.  
`INTEGER FUNCTION CKLSCH (STR)` |  Returns the index of the final non-blank, non-tab character in a string.  
`SUBROUTINE CKI2CH (NUM, STR, I, KERR)` |  Returns a character string representation of an integer and the character count of the string.  
`INTEGER FUNCTION CKLKUP (ITEM, LIST, NLIST)` |  Looks up an item in an integer list. If an item is found, it returns the first position of the item in the list. If an item is not found, this routine returns the value 0.  
`SUBROUTINE CKNCMP (STR, IRAY, II, I, NF)` |  Returns the first index of the character string STR if it occurs in the character string IRAY, and returns the total number of times STR occurs in IRAY.   
`SUBROUTINE CKNORM (ARRAY, NN)` |  Utility to normalize the real members of an array.  
`SUBROUTINE CKNPAR (LINE, NPAR, LOUT, IPAR, ISTART, KERR)` |  Searches a character string LINE from last to first character, to create a substring IPAR containing NPAR blank-delimited numbers; ISTART is the column of LINE containing IPAR. This allows format- free input of combined alpha-numeric data.   
`SUBROUTINE CKR2CH (RNUM, STR, I, KERR)` |  Returns a character string representation of a real number and the effective length of the string.  
`SUBROUTINE CKSCAL (ARRAY, NN, SCAL)` |  Utility to scale the real members of an array.  
`INTEGER FUNCTION CKSLEN (LINE)` |  Returns the effective length of a character string, that is, the index of the last character before an exclamation mark (!) indicating a comment.  
`SUBROUTINE CKSNUM (LINE, NEXP, LOUT, KRAY, NN, KNUM, NVAL, RVAL, KERR)` |  Search a character string, LINE, for (1) a character substring which may also appear in an array of character substrings KRAY, and (2) some number of character substrings representing numbers. In the case of (1), if the character substring appears in KRAY, KNUM is its index position. In the case of (2), the character substrings are converted to NVAL real numbers and stored in RVAL, until NEXP are converted. This allows format-free input of combined alpha-numeric data. For example, the subroutine might be called to find a Gas-phase Kinetics species index and convert the other substrings to real values.  
`SUBROUTINE CKSUBS (LINE, LOUT, NDIM, SUB, NFOUND, KERR)` |  Returns an array of substrings in a character string with blanks or tabs as deli miters.   
`REAL FUNCTION CKSUM (ARRAY, NN)` |  Return the sum of entries in a real array.  
`SUBROUTINE CKXMIN (X, NN, XMIN, IMIN)` |  Returns the minimum value in an array and its location in the array.  
`SUBROUTINE CKXMAX (X, NN, XMAX, IMAX)` |  Returns the maximum value in an array and its location in the array.  
`SUBROUTINE CKXNUM (LINE, NEXP, LOUT, NVAL, RVAL, KERR)` |  Searches a character string, LINE, for NEXP space-delimited substrings representing numbers, until NVAL real values are converted and stored in the array, RVAL. This allows format-free input of numerical data. For example:  
`SUBROUTINE CKXTND (NDIM, NPTS, XSTR, XEND, X, F, IFLAG)` |  Ensure that XSTR ![image](./graphics/eq13794111-5613-0060-1806-796358613253.svg) X(N) ![image](./graphics/eq93886591-3571-1452-0627-613334995233.svg) XEND. NPTS may be increased to add XSTR < X(1) or XEND > X(NPTS). NPTS may be decreased to drop X(N) < XSTR or X(N) > XEND. If NDIM does not allow adding a new endpoint, CKXTND replaces the endpoint and sets IFLAG=1 if new XSTR, IFLAG=2 if new XEND.  
  
  

[ « 4.14. Equilibrium Constants and Rate of Progress
Variables](pgfId-1068000.md)

 [Chapter 5: Quick Reference Guide to the Surface Kinetics Subroutine Library
» ](i13005api_refsurfkineticslib.md)

Contains proprietary and confidential information of ANSYS, Inc. and its
subsidiaries and affiliates.

Release 2026 R1 - (C) ANSYS, Inc. All rights reserved.

Draft Published: 2024-07-05T13:14:40-04:00

