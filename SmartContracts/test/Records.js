const {
  loadFixture,
} = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');

describe('Records', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployRecords() {
    // Contracts are deployed using the first signer/account by default
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Records = await ethers.getContractFactory('Records');
    const recordsContract = await Records.deploy();

    return { owner, addr1, addr2, recordsContract };
  }

  describe('Deployment', function () {
    /*test para deployment
    agregamos validaciones que se deban hacer al momento de hacer el deploy: valores del constructor etc*/
  });

  describe('Patient Files', function () {
    describe('Add files', function () {
      it('Should add a file', async function () {
        const { recordsContract, addr1 } = await loadFixture(
          deployRecords
        );

        await expect(
          recordsContract.addFile(
            addr1.address,
            'json',
            '9c6e0977d6d95e2cdf2586a6371384a472506'
          )
        ).not.to.be.reverted;
      });

      it('Should revert when address is equal to sender', async function () {
        const { recordsContract, addr1 } = await loadFixture(
          deployRecords
        );

        await expect(
          recordsContract
            .connect(addr1)
            .addFile(
              addr1.address,
              'json',
              '9c6e0977d6d95e2cdf2586a6371384a472506'
            )
        ).to.be.reverted;
      });
    });

    describe('Get files', function () {
      it('Should get files', async function () {
        const { recordsContract, addr1 } = await loadFixture(
          deployRecords
        );

        await recordsContract.addFile(
          addr1.address,
          'json',
          '9c6e0977d6d95e2cdf2586a6371384a472506'
        );

        const files = await recordsContract.getFiles(addr1.address);
        expect(files).to.have.lengthOf(1);
      });

      it('Should fail address do not exists', async function () {
        const { recordsContract, addr1, addr2 } = await loadFixture(
          deployRecords
        );

        await recordsContract.addFile(
          addr1.address,
          'json',
          '9c6e0977d6d95e2cdf2586a6371384a472506'
        );

        await expect( recordsContract.getFiles(addr2.address)).to.be.reverted;
      });
    });
  });
});
