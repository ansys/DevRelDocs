<a id="ref-index-contributing"></a>

# Contribute

Overall guidance on contributing to a PyAnsys library appears in the
[Contributing](https://dev.docs.pyansys.com/how-to/contributing.html) topic
in the *PyAnsys Developer’s Guide*. Ensure that you are thoroughly familiar
with this guide before attempting to contribute to PyPrimeMesh.

The following contribution information is specific to PyPrimeMesh.

## Clone the repository

You can clone the PyPrimeMesh repository from GitHub and install the latest version in
development mode with this code:

```pycon
>>> git clone https://github.com/ansys/pyprimemesh
>>> cd pyprimemesh
>>> pip install -e .[graphics]
```

## Post issues

Use the [PyPrimeMesh Issues](https://github.com/ansys/pyprimemesh/issues)
page to submit questions, report bugs, and request new features.

To reach the support team, email [pyansys.core@ansys.com](mailto:pyansys.core@ansys.com).

## View PyPrimeMesh documentation

Documentation for the latest stable release of PyPrimeMesh is hosted at
[PyPrimeMesh Documentation](https://prime.docs.pyansys.com).

In the upper right corner of the documentation’s title bar, there is an option
for switching from viewing the documentation for the latest stable release
to viewing the documentation for the development version or previously
released versions.

## Code structure and contributions

The PyPrimeMesh code base is primarily auto-generated from Ansys Prime Server. For the auto-generated
code, contributions are limited to raising issues and enhancement requests.

You should not modify files marked as auto-generated.

Contributions from pull requests can be included in files in these directories of the
PyPrimeMesh repository:

- [examples](https://github.com/ansys/pyprimemesh/tree/main/examples), which provides examples
  of how you use PyPrimeMesh.
- [graphics](https://github.com/ansys/pyprimemesh/tree/main/src/ansys/meshing/prime/graphics),
  which provides graphics capabilities and image files.
- [lucid](https://github.com/ansys/pyprimemesh/blob/main/src/ansys/meshing/prime/lucid), which
  provides high-level APIs.

If you have an idea on how to enhance PyPrimeMesh, consider first creating an issue as a feature request
The PyPrimeMesh team can then use the request as a discussion thread to work on implementing the contribution.

## Code style

PyPrimeMesh follows PEP8 standard as outlined in the [PyAnsys Development Guide](https://dev.docs.pyansys.com) and implements style checking using
[pre-commit](https://pre-commit.com/).

To ensure your code meets minimum code styling standards, run these commands:

```default
pip install pre-commit
pre-commit run --all-files
```

You can also install this as a pre-commit hook by running this command:

```default
pre-commit install
```

This way, it’s not possible for you to push code that fails the style checks. For example,
call code styling standards must pass:

```default
$ pre-commit install
$ git commit -am "added my cool feature"
black....................................................................Passed
flake8...................................................................Passed
```

## Licensing

All contributed code is licensed under the MIT License found in the repository.
If you did not write the code yourself, it is your responsibility to ensure that the existing license is compatible
and included in the contributed files or you obtain permission from the original author to relicense the code.
