const PlatziHealthArtifacts = {
  address: {
   4: '0x793F294FD5EaE242D3c8B012831048bbc04cA8f4'
  },
  abi: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "doctor_id",
          "type": "address"
        }
      ],
      "name": "HospitalGrantAccessToDoctor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "doctor_id",
          "type": "address"
        }
      ],
      "name": "PatientGrantAccessToDoctor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_doctorAddress",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint16",
                  "name": "age",
                  "type": "uint16"
                },
                {
                  "internalType": "string",
                  "name": "gender",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "email",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "countryCode",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "phoneNumber",
                  "type": "string"
                }
              ],
              "internalType": "struct EntitiesStructs.PersonalInformation",
              "name": "personalInformation",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "specialization",
              "type": "string"
            }
          ],
          "internalType": "struct EntitiesStructs.Doctor",
          "name": "_doctor",
          "type": "tuple"
        }
      ],
      "name": "addDoctor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hospitalAddress",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "phoneNumber",
              "type": "string"
            }
          ],
          "internalType": "struct EntitiesStructs.Hospital",
          "name": "_hospital",
          "type": "tuple"
        }
      ],
      "name": "addHospital",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_patientAddress",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint16",
                  "name": "age",
                  "type": "uint16"
                },
                {
                  "internalType": "string",
                  "name": "gender",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "email",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "countryCode",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "phoneNumber",
                  "type": "string"
                }
              ],
              "internalType": "struct EntitiesStructs.PersonalInformation",
              "name": "personalInformation",
              "type": "tuple"
            }
          ],
          "internalType": "struct EntitiesStructs.Patient",
          "name": "_patient",
          "type": "tuple"
        }
      ],
      "name": "addPatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "doctorId",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "patientId",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "typeFile",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "hashFile",
                  "type": "string"
                }
              ],
              "internalType": "struct EntitiesStructs.File",
              "name": "diagnosisFile",
              "type": "tuple"
            }
          ],
          "internalType": "struct EntitiesStructs.PatientRecord",
          "name": "_patientRecord",
          "type": "tuple"
        }
      ],
      "name": "addRecord",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_patientAddress",
          "type": "address"
        }
      ],
      "name": "getAllRecords",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "doctorId",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "patientId",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "typeFile",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "hashFile",
                  "type": "string"
                }
              ],
              "internalType": "struct EntitiesStructs.File",
              "name": "diagnosisFile",
              "type": "tuple"
            }
          ],
          "internalType": "struct EntitiesStructs.PatientRecord[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_recordID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_patientAddress",
          "type": "address"
        }
      ],
      "name": "getRecord",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "doctorId",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "patientId",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "date",
              "type": "string"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "typeFile",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "hashFile",
                  "type": "string"
                }
              ],
              "internalType": "struct EntitiesStructs.File",
              "name": "diagnosisFile",
              "type": "tuple"
            }
          ],
          "internalType": "struct EntitiesStructs.PatientRecord",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "get_doctor",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint16",
                  "name": "age",
                  "type": "uint16"
                },
                {
                  "internalType": "string",
                  "name": "gender",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "email",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "countryCode",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "phoneNumber",
                  "type": "string"
                }
              ],
              "internalType": "struct EntitiesStructs.PersonalInformation",
              "name": "personalInformation",
              "type": "tuple"
            },
            {
              "internalType": "string",
              "name": "specialization",
              "type": "string"
            }
          ],
          "internalType": "struct EntitiesStructs.Doctor",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "get_hospital",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "phoneNumber",
              "type": "string"
            }
          ],
          "internalType": "struct EntitiesStructs.Hospital",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "get_patient",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint16",
                  "name": "age",
                  "type": "uint16"
                },
                {
                  "internalType": "string",
                  "name": "gender",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "email",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "countryCode",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "phoneNumber",
                  "type": "string"
                }
              ],
              "internalType": "struct EntitiesStructs.PersonalInformation",
              "name": "personalInformation",
              "type": "tuple"
            }
          ],
          "internalType": "struct EntitiesStructs.Patient",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isDoctor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isHospital",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "isManager",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isPatient",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_doctor",
          "type": "address"
        }
      ],
      "name": "removeDoctor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hospital",
          "type": "address"
        }
      ],
      "name": "removeHospital",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_patient",
          "type": "address"
        }
      ],
      "name": "removePatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
}

export default PlatziHealthArtifacts;