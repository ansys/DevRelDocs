# Initialization and Parameters

**Table 6.1: Initialization and Parameter Subroutines**

| Subroutine                                                         | Description |
| ------------------------------------------------------------------ | ----------- |
| `SUBROUTINE MCINIT (LINKMC, LOUT, LENIMC, LENRMC, IMCWRK, RMCWRK)` | This subroutine serves to read the Linking File from the fitting code and to create the internal storage and work arrays, IMCWRK(*) and RMCWRK (*). MCINIT must be called before any other _Transport_ subroutine is called. It must be called after the _Gas-phase Kinetics_ package is initialized. |
| `SUBROUTINE MCPRAM (IMCWRK, RMCWRK EPS, SIG, DIP, POL, ZROT, NLIN)` | This subroutine is called to return the arrays of molecular parameters as read from the Transport database. |
| `SUBROUTINE MCPNT (LSAVE, LOUT, NPOINT, V, P, LI, LR, IERR)` | Reads from a binary file information about a _Transport_ linkfile, pointers for the _Transport_ Library, and returns lengths of work arrays. |
| `SUBROUTINE MCSAVE (LOUT, LSAVE, IMCWRK, RMCWRK)` | Writes to a binary file information about a _Transport_ linkfile, pointers for the _Transport_ library, and _Transport_ work arrays. |
| `SUBROUTINE MCREWR (LINKMC, LOUT, IMCWRK, RMCWRK, IFLAG)` | This subroutine writes a new the _Transport_ linkfile from the data stored in the integer and real work arrays, IMCWRK(*) and RMCWRK(*). |
| `SUBROUTINE MCLEN (LINKMC, LOUT, LI, LR, IFLAG)` | Returns the lengths required for work arrays. |









