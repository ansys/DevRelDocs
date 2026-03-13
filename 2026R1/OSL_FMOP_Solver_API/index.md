# Introduction

C-API to evaluate a Field Meta model of Optimal Prognosis (FMOP)

A Field Metamodel of Optimal Prognosis (FMOP) predicts spatially distributed field responses — such as stress, displacement, or temperature distributions across a finite element mesh — as a function of scalar input parameters. The FMOP captures the most influential input parameters per mesh location and assembles them into an efficient, evaluable model. This API provides the means to load a previously generated FMOP database, inspect its structure (input parameters, mesh topology, Field Coefficients of Prognosis), and approximate field responses for arbitrary input parameter combinations at a fraction of the cost of a full simulation.
