// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import './Files.sol';

contract PlatziHealth is Files {

    /**
     * @dev add report files to a patient
     */
    function addFile(
        address _patientAddress,
        string memory _type,
        string memory _hash
    ) public {
        //require(hasRole(DOCTOR_ROLE, msg.sender), "addPatientFile: solo doctores pueden agregar informes");
        _addPatientFile(_patientAddress, _type, _hash);
    }

    /**
     * @dev get report files to a patient
     */
    function getFiles(address _patientAddress)
        public
        view
        returns (File[] memory)
    {
        //require(hasRole(DOCTOR_PATIENT, msg.sender), "getFiles: solo pacientes pueden ver informes");
        //require(hasRole(DOCTOR_ROLE, msg.sender), "getFiles: solo doctores pueden ver informes");
        return _getPatientFiles(_patientAddress);
    }
}
