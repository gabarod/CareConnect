const PlatziHealthArtifacts = {
  address: {
   4: '0xa074A46DFA048b5104752A7801cAAf44eb62915A'
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
              "internalType": "string",
              "name": "specialization",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "uint128",
                  "name": "id",
                  "type": "uint128"
                },
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
              "internalType": "uint128",
              "name": "id",
              "type": "uint128"
            },
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
              "name": "hospitalAddress",
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
              "components": [
                {
                  "internalType": "uint128",
                  "name": "id",
                  "type": "uint128"
                },
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
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "address[]",
              "name": "doctorAccessList",
              "type": "address[]"
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
              "internalType": "uint128",
              "name": "id",
              "type": "uint128"
            },
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
              "internalType": "string",
              "name": "diagnosis",
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
              "name": "diagnosisFiles",
              "type": "tuple"
            }
          ],
          "internalType": "struct EntitiesStructs.PatientRecord",
          "name": "_patientRecord",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_patientAddress",
          "type": "address"
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
              "internalType": "uint128",
              "name": "id",
              "type": "uint128"
            },
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
              "internalType": "string",
              "name": "diagnosis",
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
              "name": "diagnosisFiles",
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
              "internalType": "string",
              "name": "specialization",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "components": [
                {
                  "internalType": "uint128",
                  "name": "id",
                  "type": "uint128"
                },
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
              "internalType": "uint128",
              "name": "id",
              "type": "uint128"
            },
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
              "name": "hospitalAddress",
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
              "components": [
                {
                  "internalType": "uint128",
                  "name": "id",
                  "type": "uint128"
                },
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
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "address[]",
              "name": "doctorAccessList",
              "type": "address[]"
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