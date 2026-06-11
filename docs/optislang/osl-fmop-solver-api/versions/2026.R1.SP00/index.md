# Introduction

This C‑API to evaluate a Field Metamodel of Optimal Prognosis (FMOP) provides tools to load and work with a previously generated FMOP database. A FMOP predicts spatially distributed field responses—such as stress, displacement, or temperature— as a function of scalar input parameters. It captures the most influential input parameters per mesh location and assembles them into an efficient model that can be evaluated quickly.

With this API, you can load a previously generated FMOP database, inspect its structure (input parameters, mesh topology, Field Coefficients of Prognosis), and approximate field responses for arbitrary input parameter combinations at a fraction of the cost of a full simulation.