# Key takeaways

## How to install DPF
- **Two installation paths**: Use DPF from your Ansys installation (recommended) or install the standalone DPF package
- **PyDPF-Core installation**: Install the Python client with `pip install ansys-dpf-core`
- **Version compatibility**: 2024 R1+ supports latest PyDPF-Core; 2023 R2- requires specific version matching
- **Python prerequisites**: Python 3.10+ required; beginners should have basic Python environment setup

## Licensing
- **Environment variable**: Set `ANSYS_DPF_ACCEPT_LA=Y` to accept the DPF license agreement
- **Permanent setup**: Configure the variable system-wide (not just current session) to avoid repeated setup
- **Verification required**: Must restart your terminal/IDE after setting the environment variable

## Verifying your installation
- **Test with start_local_server()**: The simplest way to verify DPF is working
- **Common errors**:
    - `ValueError: Unable to locate any Ansys installation` - Set `AWP_ROOT{version}` or `ANSYS_DPF_PATH`
    - `RuntimeError: ...ANSYS_DPF_ACCEPT_LA...` - Accept license agreement with environment variable
- **Entry operators**: Use basic operators to confirm licensing is properly configured
- **Centralized troubleshooting**: All verification and error solutions in section 1.3

At this point, you have successfully installed the DPF server and Python client, configured the necessary licensing, and verified your installation is working correctly. Your environment is now ready for working with DPF.

In the next chapter, **Using DPF**, we will explore the practical aspects of interacting with data in DPF. This includes understanding how data is represented, imported, and manipulated within the framework. Let's continue the journey!

## 📝 Checkpoint: Verify your understanding

Before moving to the next chapter:

## Complete the Introduction survey
**Take 5-7 minutes to:**
- ✅ Verify you understood the key concepts
- 💡 Share what worked well
- 🔧 Tell us what could be improved

[📋 Start survey →](https://forms.cloud.microsoft/r/fhef49Zdm5)

Your responses directly improve this content for future learners!
