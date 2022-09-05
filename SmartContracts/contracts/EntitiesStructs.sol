// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract EntitiesStructs {
    struct PersonalInformation {
        uint128 id;
        string name;
        uint16 age;
        string gender;
        string email;
        string countryCode;
        string phoneNumber;
    }

    struct Patient {
        PersonalInformation personalInformation;
        bool isActive;
        address[] doctorAccessList;
    }

    struct Doctor {
        string specialization;
        bool isActive;
        PersonalInformation personalInformation;
    }

    struct Hospital {
        uint128 id;
        bool isActive;
        string name;
        string hospitalAddress;
        string phoneNumber;
    }

    struct DoctorRegistration {
        uint128 id;
        string patientRecordId;
    }

    struct File {
        string typeFile;
        string hashFile;
    }

    struct PatientRecord {
        uint128 id;
        bool isActive;
        address doctorId;
        address patientId;
        string date;
        string diagnosis;//👀
        File diagnosisFiles;
    }
}
