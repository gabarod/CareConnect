const {
  loadFixture,
} = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');

describe('PlatziHealth', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployPlatziHealth() {
    // Contracts are deployed using the first signer/account by default
    const [owner, addr1, addr2] = await ethers.getSigners();

    const PlatziHealth = await ethers.getContractFactory('PlatziHealth');
    const platziHealthContract = await PlatziHealth.deploy();

    return { owner, addr1, addr2, platziHealthContract };
  }

  describe('Deployment', function () {
    //test para deployment
  });

  describe('Patient Files', function () {
    describe('Add files', function () {
      it('Should add a file', async function () {
        const { platziHealthContract, addr1 } = await loadFixture(
          deployPlatziHealth
        );

        await expect(
          platziHealthContract.addFile(
            addr1.address,
            'json',
            '9c6e0977d6d95e2cdf2586a6371384a472506'
          )
        ).not.to.be.reverted;
      });

      it('Should revert when address is equal to sender', async function () {
        const { platziHealthContract, addr1 } = await loadFixture(
          deployPlatziHealth
        );

        await expect(
          platziHealthContract
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
        const { platziHealthContract, addr1 } = await loadFixture(
          deployPlatziHealth
        );

        await platziHealthContract.addFile(
          addr1.address,
          'json',
          '9c6e0977d6d95e2cdf2586a6371384a472506'
        );

        const files = await platziHealthContract.getFiles(addr1.address);
        expect(files).to.have.lengthOf(1);
      });

      it('Should fail address do not exists', async function () {
        const { platziHealthContract, addr1, addr2 } = await loadFixture(
          deployPlatziHealth
        );

        await platziHealthContract.addFile(
          addr1.address,
          'json',
          '9c6e0977d6d95e2cdf2586a6371384a472506'
        );

        await expect( platziHealthContract.getFiles(addr2.address)).to.be.reverted;
      });
    });
  });
});
