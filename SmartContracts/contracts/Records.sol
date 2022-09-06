// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import {EntitiesStructs as es} from "./EntitiesStructs.sol";

contract Records {
    // Mappings entities
    mapping(address => es.Doctor) Doctors;
    mapping(address => es.Patient) Patients;
    mapping(address => es.Hospital) Hospitals;

    // Mapping Patient Records
    mapping(uint256 => mapping(address => es.PatientRecord)) PatientRecords;
    mapping(address => uint256) patientToRecord;

    // Mapping Access
    mapping(address => address) patientToDoctorAccess;
    mapping(address => address) hospitalToDoctorAccess;

    // Mapping Roles
    mapping(address => bool) public isPatient;
    mapping(address => bool) public isHospital;
    mapping(address => bool) public isDoctor;

    // Variables
    address private manager;
    uint256 private recordCount = 0;

    constructor() {
        manager = msg.sender;
    }

    // Modifiers

    modifier onlyOwner() {
        require(msg.sender == manager);
        _;
    }

    modifier notNull(address _address) {
        require(address(_address) != address(0));
        _;
    }

    modifier onlyDoctors() {
        require(
            Doctors[msg.sender].isActive == true,
            "only registered doctors"
        );
        _;
    }

    modifier onlyPatients() {
        require(
            Patients[msg.sender].isActive == true,
            "only registered patients"
        );
        _;
    }

    modifier onlyHospitals() {
        require(
            Hospitals[msg.sender].isActive == true,
            "only registered hospitals"
        );
        _;
    }

    modifier hospitalDoesNotExist(address hospital) {
        require(!isHospital[hospital]);
        _;
    }

    modifier hospitalExist(address hospital) {
        require(isHospital[hospital]);
        _;
    }

    modifier patientDoesNotExist(address patient) {
        require(!isPatient[patient]);
        _;
    }

    modifier doctorExist(address doctor) {
        require(isDoctor[doctor]);
        _;
    }

    modifier doctorDoesNotExist(address doctor) {
        require(!isDoctor[doctor]);
        _;
    }

    modifier patientExist(address patient) {
        require(isPatient[patient]);
        _;
    }

    modifier notEmpty(string memory name) {
        bytes memory tempString = bytes(name);
        require(tempString.length != 0);
        _;
    }

    modifier onlyPatient() {
        require(Patients[msg.sender].isActive);
        _;
    }

    modifier onlyHospital() {
        require(Hospitals[msg.sender].isActive);
        _;
    }

    modifier recordExists(uint256 recordId, address _patientAddress) {
        es.PatientRecord memory _record = PatientRecords[recordId][
            _patientAddress
        ];
        require(_record.isActive);
        _;
    }

    // Hospital Functions

    function addHospital(address _hospitalAddress, es.Hospital memory _hospital)
        public
        onlyOwner
        hospitalDoesNotExist(_hospitalAddress)
        notNull(_hospitalAddress)
    {
        isHospital[_hospitalAddress] = true;
        Hospitals[_hospitalAddress] = _hospital;
    }

    function get_hospital(address addr)
        public
        view
        returns (es.Hospital memory)
    {
        return (Hospitals[addr]);
    }

    function removeHospital(address _hospital)
        public
        onlyOwner
        hospitalExist(_hospital)
    {
        isHospital[_hospital] = false;
    }

    // Patient Functions

    function addPatient(address _patientAddress, es.Patient memory _patient)
        public
        onlyOwner
        patientDoesNotExist(_patientAddress)
        hospitalDoesNotExist(_patientAddress)
        notNull(_patientAddress)
    {
        isPatient[_patientAddress] = true;
        Patients[_patientAddress] = _patient;
    }

    function get_patient(address addr) public view returns (es.Patient memory) {
        return (Patients[addr]);
    }

    function removePatient(address _patient)
        public
        onlyOwner
        patientExist(_patient)
    {
        isPatient[_patient] = false;
    }

    // PatientRecord Functions

    function addRecord(
        es.PatientRecord memory _patientRecord,
        address _patientAddress
    )
        public
        onlyOwner
        patientExist(_patientRecord.patientId)
        hospitalExist(_patientRecord.doctorId)
    {
        recordCount += 1;
        PatientRecords[recordCount][_patientRecord.patientId] = _patientRecord;
        //add record patient relationship
        patientToRecord[_patientAddress] = recordCount;
    }

    function getRecord(uint256 _recordID, address _patientAddress)
        public
        view
        recordExists(_recordID, _patientAddress)
        onlyHospital
        returns (es.PatientRecord memory)
    {
        return PatientRecords[_recordID][_patientAddress];
    }

    // Doctors Functions
    function addDoctor(address _doctorAddress, es.Doctor memory _doctor)
        public
        onlyOwner
        doctorDoesNotExist(_doctorAddress)
        notNull(_doctorAddress)
    {
        isDoctor[_doctorAddress] = true;
        Doctors[_doctorAddress] = _doctor;
    }

    function get_doctor(address addr) public view returns (es.Doctor memory) {
        return (Doctors[addr]);
    }

    function removeDoctor(address _doctor)
        public
        onlyOwner
        doctorExist(_doctor)
    {
        isDoctor[_doctor] = false;
    }

    function PatientGrantAccessToDoctor(address doctor_id) public onlyPatient {
        patientToDoctorAccess[msg.sender] = doctor_id;
    }

    function HospitalGrantAccessToDoctor(address doctor_id)
        public
        onlyHospital
    {
        hospitalToDoctorAccess[msg.sender] = doctor_id;
    }
}
