// const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
// const { Contract } = require("ethers");
// const { testUtils } = require("hardhat");
const helpers = require("@nomicfoundation/hardhat-network-helpers");

describe("Records", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  // const { network } = testUtils;

  let _recordsContract;
  let _owner;
  let _addr1;
  let _addr2;
  let _addr3;

  beforeEach(async function () {
    await deployRecords();
  });

  async function deployRecords() {
    // Contracts are deployed using the first signer/account by default
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const Records = await ethers.getContractFactory("Records");
    _recordsContract = await Records.deploy();
    await _recordsContract.deployed();

    _owner = owner;
    _addr1 = addr1;
    _addr2 = addr2;
    _addr3 = addr3;
  }

  describe("Deployment", function () {
    /*test para deployment
    agregamos validaciones que se deban hacer al momento de hacer el deploy: valores del constructor etc*/
  });

  describe("Registration", function () {
    it("Should add a hospital", async function () {
      const hospital = [true, "Hospital San Luis", "0991233445"];

      await expect(
        _recordsContract.connect(_owner).addHospital(_addr1.address, hospital)
      ).not.to.be.reverted;
    });

    it("Should add a doctor", async function () {
      const doctor = [
        true,
        ["Juan Carlos", 50, "male", "juan@gmail.com", "EC", "0991022333"],
        "Doctor General",
      ];

      await expect(
        _recordsContract.connect(_addr1).addDoctor(_addr2.address, doctor)
      ).not.to.be.reverted;
    });

    it("Should add a patient", async function () {
      const patient = [
        true,
        ["Gabriel", 20, "male", "gabriel@gmail.com", "EC", "0991034567"],
      ];

      await expect(
        _recordsContract.connect(_addr1).addPatient(_addr3.address, patient)
      ).not.to.be.reverted;
    });

    it("Should add a record", async function () {
      const record = [
        true,
        _addr2,
        _addr3,
        "1662610708",
        ["json", "9c6e0977d6d95e2cdf2586a6371384a472506"],
      ];

      await expect(_recordsContract.connect(_addr2).addRecord(record)).not.to.be
        .reverted;
    });
  });
});
