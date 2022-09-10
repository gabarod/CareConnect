import './FormDoctor.css';
import { Button, Form } from 'react-bootstrap';
import usePlatziHealthContract from '../../hooks/usePlatziHealthContract';
import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';
import ErrorMessage from '../messages/ErrorMessage';
import SuccessMessage from '../messages/SuccessMessage';
import InfoMessage from '../messages/InfoMessage';
import Gender from '../Gender';

const specializationList = [
  {
    name: 'Seleccione una opción',
    value: '',
  },
  {
    name: 'Medicina General',
    value: 'General',
  },
  {
    name: 'Cardiología',
    value: 'Cardiologia',
  },
  {
    name: 'Cirugía General',
    value: 'Cirugia General',
  },
  {
    name: 'Fisiatría',
    value: 'Fisiatria',
  },
  {
    name: 'Traumatología',
    value: 'Traumatologia',
  },
];

const FormDoctor = () => {
  const { account } = useWeb3React();
  const platziHealthContract = usePlatziHealthContract();
  const [doctorAccount, setDoctorAccount] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [showToastError, setShowToastError] = useState(false);
  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const [showToastInfo, setShowToastInfo] = useState(false);
  const [toast, setToast] = useState({
    header: '',
    message: '',
  });

  const toastError = (msg) => {
    setToast({
      header: 'Error',
      message: msg,
    });
    setShowToastError(!showToastError);
  };

  const toastSuccess = (msg) => {
    setToast({
      header: 'Success',
      message: msg,
    });
    setShowToastSuccess(!showToastSuccess);
  };

  const toastInfo = (msg) => {
    setToast({
      header: 'Info',
      message: msg,
    });
    setShowToastInfo(!showToastInfo);
  };

  function handleChange(event) {
    setGender(event.target.value);
  }

  const saveDoctor = async (event) => {
    event.preventDefault();
    const personalInformation = {
      name,
      age,
      gender,
      email,
      countryCode,
      phoneNumber,
    };
    const doctorData = {
      personalInformation,
      isActive: true,
      specialization,
    };

    await platziHealthContract.methods
      .addDoctor(doctorAccount, doctorData)
      .send({
        from: account,
      })
      .on('transactionHash', (txHash) => {
        toastInfo(txHash);
      })
      .on('receipt', () => {
        toastSuccess('Transacción éxitosa');
      })
      .on('error', (error) => {
        toastError(`Transacción errónea ${error.message}`);
      });
    setDoctorAccount('');
    setName('');
    setAge('');
    setGender('');
    setEmail('');
    setCountryCode('');
    setPhoneNumber('');
  };
  return (
    <>
      {showToastError && (
        <ErrorMessage header={toast.header} message={toast.message} />
      )}
      {showToastSuccess && (
        <SuccessMessage header={toast.header} message={toast.message} />
      )}
      {showToastInfo && (
        <InfoMessage header={toast.header} message={toast.message} />
      )}
      <div className="d-flex flex-column align-items-center">
        <div className="form-container border border-1 rounded p-3">
          <h2>Datos Doctor(a)</h2>
          <Form onSubmit={saveDoctor}>
            <Form.Group className="mb-3">
              <Form.Label>Cuenta</Form.Label>
              <Form.Control
                type="text"
                value={doctorAccount}
                placeholder="Ingrese Cuenta"
                onChange={(e) => setDoctorAccount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Ingrese Nombre"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="text"
                value={age}
                placeholder="Ingrese Edad"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Género</Form.Label>
              <Gender handleChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Ingrese Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Código País</Form.Label>
              <Form.Control
                type="text"
                value={countryCode}
                placeholder="Ingrese Código"
                onChange={(e) => setCountryCode(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Número Telefónico</Form.Label>
              <Form.Control
                type="text"
                value={phoneNumber}
                placeholder="Ingrese Teléfono"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Especialización</Form.Label>
              <Form.Select aria-label="especializacion">
                {specializationList.map(({ name, value, select }) => (
                  <option
                    value={value}
                    onChange={(e) => setSpecialization(e.target.value)}
                    defaultValue ={value}
                    key={value}
                  >
                    {name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FormDoctor;
