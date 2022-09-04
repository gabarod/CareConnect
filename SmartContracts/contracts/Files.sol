// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Files {
    struct File {
        string typeFile;
        string hashFile;
    }

    mapping(address => File[]) private patientFiles;

    function _addPatientFile(
        address _patientAddress,
        string memory _type,
        string memory _hash
    ) internal {
        require(msg.sender != _patientAddress, "_addPatientFile: La direccion debe ser diferente al sender");
        patientFiles[_patientAddress].push(File(_type, _hash));
    }

    function _getPatientFiles(address _patientAddress)
        internal
        view
        returns (File[] memory)
    {
        require(patientFiles[_patientAddress].length > 0, "_getPatientFiles: address no existe");
        return patientFiles[_patientAddress];
    }
}
