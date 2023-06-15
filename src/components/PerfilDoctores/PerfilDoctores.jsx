import Navbar from "../Navbar/Navbar";
import { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import instragram from "../../assets/instagram.png";
import linkedin from "../../assets/logotipo-de-linkedin (1).png";
import tiktok from "../../assets/tik-tok.png";
import "./filecss.css";
import Layout from "../Layouts/LayoutCliente";
import LayoutDashboard from "../Layouts/LayoutDashboard";

const PerfilDoctores = () => {
  const [value, setValue] = useState("");
  const [selectedCities, setSelectedCities] = useState(null);
  const grado = [
    { name: "Bachiller", code: "BC" },
    { name: "Terciario", code: "TER" },
    { name: "Universitario", code: "UNI" },
    { name: "Doctorado", code: "DOC" },
    { name: "Master", code: "MSR" },
  ];
  const [selectedProfesion, setSelectedProfesion] = useState(null);
  const profesion = [
    { name: "Psicologia", code: "PSIC" },
    { name: "Psiquiatria", code: "PSIQ" },
    { name: "Nutricionista", code: "NUT" },
    { name: "Nefrologio", code: "NEF" },
    { name: "Odontologia", code: "ODO" },
  ];
  const [selectedSubEspecialidad, setSelectedSubEspecialidad] = useState(null);
  const subEspecialidad = [
    { name: "Psicologia", code: "PSIC" },
    { name: "Psiquiatria", code: "PSIQ" },
    { name: "Nutricionista", code: "NUT" },
    { name: "Nefrologio", code: "NEF" },
    { name: "Odontologia", code: "ODO" },
  ];
  const isLarge = selectedSubEspecialidad?.length >= 3;
  const [selectedCiudad, setSelectedCiudad] = useState(null);
  const ciudad = [
    { name: "Lima", code: "PSIC" },
    { name: "Psiquiatria", code: "PSIQ" },
    { name: "Nutricionista", code: "NUT" },
    { name: "Nefrologio", code: "NEF" },
    { name: "Odontologia", code: "ODO" },
  ];
  const [selectedDistrito, setSelectedDistrito] = useState(null);
  const distrito = [
    { name: "Ancon", code: "PSIC" },
    { name: "Psiquiatria", code: "PSIQ" },
    { name: "Nutricionista", code: "NUT" },
    { name: "Nefrologio", code: "NEF" },
    { name: "Odontologia", code: "ODO" },
  ];
  const [selectedSeguro, setSelectedSeguro] = useState(null);
  const Seguro = [
    { name: "Si", code: "SI" },
    { name: "No", code: "NO" },
  ];

  const [selectedModalidad, setSelectedModalidad] = useState(null);
  const Modalidad = [
    { name: "A Domicilio", key: "A" },
    { name: "Prescencial", key: "M" },
    { name: "Online", key: "P" },
  ];
  const [selectedNumAfiliado, setSelectedNumAfiliado] = useState(null);
  const numAfiliado = [
    { name: "Rimac", key: "RI" },
    { name: "Maphre", key: "MA" },
    { name: "Pacifico", key: "PA" },
    { name: "Otros", key: "OT" },
  ];
  const toast = useRef(null);

  const Upload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <LayoutDashboard>
      <body className="flex">
        <div className="flex flex-grow justify-center">
          <form className="grid grid-cols-2 gap-40 ">
            <div className="flex flex-col mt-16 ml-11 gap-2 font-bold w-[30rem] ">
              <label htmlFor="nombres">Nombres</label>
              <InputText
                id="nombres"
                placeholder="LUCIA ISABEL"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-green-200 border-none font-bold "
              />

              <label htmlFor="apellidos">Apellidos</label>
              <InputText
                id="apellidos"
                placeholder="DEVOTO RODRIGUEZ"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-green-200 border-none font-bold"
              />
              <label htmlFor="gradoAcademico">Grado Academico</label>
              <MultiSelect
                value={selectedCities}
                onChange={(e) => setSelectedCities(e.value)}
                options={grado}
                optionLabel="name"
                placeholder="Grado Academico"
                maxSelectedLabels={1}
                className="w-full md:w-20rem bg-green-200 border-none font-bold"
              />
              <label htmlFor="especialidad">Especialidad</label>
              <MultiSelect
                value={selectedProfesion}
                onChange={(e) => setSelectedProfesion(e.value)}
                options={profesion}
                optionLabel="name"
                placeholder="Especialidad"
                maxSelectedLabels={1}
                className="w-full md:w-20rem bg-green-200 border-none font-bold"
              />
              <label htmlFor="subespecialidad">Sub Especialidad</label>
              <MultiSelect
                value={selectedSubEspecialidad}
                onChange={(e) => setSelectedSubEspecialidad(e.value)}
                options={subEspecialidad}
                display="chip"
                optionLabel="name"
                placeholder="Sub Especialidad"
                maxSelectedLabels={5}
                className={
                  isLarge
                    ? "w-full md:w-20rem h-20 bg-green-200 border-none font-bold inline-block"
                    : "w-full md:w-20rem  bg-green-200 border-none font-bold"
                }
              />
              <label htmlFor="colegiatura">Codigo de Colegiatura</label>
              <InputText
                id="colegiatura"
                placeholder="123"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-green-200 border-none font-bold "
              />
              <div className="flex justify-center gap-6 mt-2">
                <div className="flex flex-col flex-grow">
                  <label htmlFor="Ciudad">Ciudad</label>
                  <MultiSelect
                    value={selectedCiudad}
                    onChange={(e) => setSelectedCiudad(e.value)}
                    options={ciudad}
                    optionLabel="name"
                    placeholder="Ciudad"
                    maxSelectedLabels={1}
                    className="w-full md:w-20rem bg-green-200 border-none font-bold "
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label htmlFor="Distrito">Distrito</label>
                  <MultiSelect
                    value={selectedDistrito}
                    onChange={(e) => setSelectedDistrito(e.value)}
                    options={distrito}
                    optionLabel="name"
                    placeholder="Distrito"
                    maxSelectedLabels={1}
                    className="w-full md:w-20rem bg-green-200 border-none font-bold "
                  />
                </div>
              </div>
              <label htmlFor="dni">DNI</label>
              <InputNumber
                id="number-input"
                value={value}
                onValueChange={(e) => setValue(e.value)}
                placeholder="11.111.111"
              />

              <label htmlFor="cel">Celular</label>
              <InputText
                id="celular"
                placeholder="+5111223241"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-green-200 border-none font-bold "
              />

              <label htmlFor="seguro">¿Trabajas con seguro de Salud?</label>
              <MultiSelect
                value={selectedSeguro}
                onChange={(e) => setSelectedSeguro(e.value)}
                options={Seguro}
                optionLabel="name"
                placeholder="¿Trabajas con seguro de Salud?"
                maxSelectedLabels={1}
                className="w-full md:w-20rem bg-green-200 border-none font-bold"
              />
              <label htmlFor="ModAtencion">Modalidad de Atencion</label>
              <MultiSelect
                value={selectedModalidad}
                onChange={(e) => setSelectedModalidad(e.value)}
                options={Modalidad}
                optionLabel="name"
                placeholder="Modalidad de Atencion"
                maxSelectedLabels={3}
                className="w-full md:w-20rem bg-green-200 border-none font-bold"
              />
              <label htmlFor="ModAtencion">Numero de Afiliado</label>
              <MultiSelect
                value={selectedNumAfiliado}
                onChange={(e) => setSelectedNumAfiliado(e.value)}
                options={numAfiliado}
                optionLabel="name"
                placeholder="Numero de Afiliado"
                maxSelectedLabels={3}
                className="w-full md:w-20rem bg-green-200 border-none font-bold"
              />
              {/* <div className="flex justify-center gap-6 mt-2">
                <div className="flex flex-col gap-3 ">
                  <label htmlFor="Modalidad de Atencion">
                    Modalidad de Atencion
                  </label>
                  {categories.map((category) => {
                    return (
                      <div
                        key={category.key}
                        className="flex align-items-center"
                      >
                        <RadioButton
                          inputId={category.key}
                          name="category"
                          value={category}
                          onChange={(e) => setSelectedNumAfiliado(e.value)}
                          checked={selectedNumAfiliado.key === category.key}
                        />
                        <label htmlFor={category.key} className="ml-2">
                          {category.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="Numero de Afiliado">Numero de Afiliado</label>
                  {numAfiliado.map((num) => {
                    return (
                      <div key={num.key} className="flex align-items-center">
                        <RadioButton
                          inputId={num.key}
                          name="category"
                          value={num}
                          onChange={(e) => setSelectedCategory(e.value)}
                          checked={selectedCategory.key === num.key}
                        />
                        <label htmlFor={num.key} className="ml-2">
                          {num.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
            <div className="flex flex-col mt-6 gap-2 font-bold w-[30rem]">
              <div className="flex justify-center mb-3">
                <Avatar
                  className="avatar-container mt-5"
                  image="https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7807.jpg?w=740&t=st=1685559315~exp=1685559915~hmac=2656fe85619448e1303afe4495e6839d7879a463f98228faf3a5dcf57c1fcaf7"
                />
              </div>
              <label htmlFor="descripcion">Descripcion</label>
              <InputTextarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows={3}
                cols={30}
                className="bg-green-200 border-none font-bold "
              />
              {/* <label htmlFor="tarifa">Tarifa</label>
              <InputNumber
                inputId="currency-us"
                value={value}
                onValueChange={(e) => setValue(e.value)}
                mode="currency"
                currency="USD"
                locale="en-US"
                placeholder="$"
              /> */}
              <div className="flex flex-col gap-2 w-80">
                <Toast ref={toast}></Toast>
                  <label htmlFor="curriculum">Curriculum Vitae</label>
                <div className="flex flex-row gap-2">
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="*/*"
                    maxFileSize={1000000}
                    onUpload={Upload}
                    chooseLabel="Seleccionar Archivo"
                   
                  >
                  </FileUpload>
                    <Button className="btnVer" label="ver" />
                </div>
                <label htmlFor="Titulo">Titulo de Especialidad</label>
                <div className="flex flex-row gap-2">
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="*/*"
                  maxFileSize={1000000}
                  onUpload={Upload}
                  chooseLabel="Seleccionar Archivo"
                />
                <Button className="btnVer" label="ver" />
                </div>
                <label htmlFor="certificados">Otros Certificados</label>
                <div className="flex flex-row gap-2">
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="*/*"
                  maxFileSize={1000000}
                  onUpload={Upload}
                  chooseLabel="Seleccionar Archivo"
                />
                <Button className="btnVer" label="ver" />
                </div>
                <label htmlFor="TituloCol">Titulo de Colegiatura</label>
                <div className="flex flex-row gap-2">
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="*/*"
                  maxFileSize={1000000}
                  onUpload={Upload}
                  chooseLabel="Seleccionar Archivo"
                />
                 <Button className="btnVer" label="ver" />
                </div>
                <label htmlFor="CertLic">Certificado de Licencia</label>
                <div className="flex flex-row gap-2">
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="*/*"
                  maxFileSize={1000000}
                  onUpload={Upload}
                  chooseLabel="Seleccionar Archivo"
                />
                 <Button className="btnVer" label="ver" />
                </div>
              </div>
              <div className="flex flex-col items-center mt-4 gap-4 w-[30rem]">
                <div className="flex flex-row items-center gap-4 w-full">
                  <img src={linkedin} alt="linkedin" className="w-11 h-11" />
                  <InputText
                    id="celular"
                    placeholder="Ingrese Link"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-green-200 border-none font-bold w-full"
                  />
                </div>
                <div className="flex flex-row items-center gap-4 w-full">
                  <img src={instragram} alt="instagram" className="w-11 h-11" />
                  <InputText
                    id="celular"
                    placeholder="Ingrese Link"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-green-200 border-none font-bold w-full"
                  />
                </div>
                <div className="flex flex-row items-center gap-4 w-full">
                  <img src={tiktok} alt="tiktok" className="w-11 h-11" />
                  <InputText
                    id="celular"
                    placeholder="Ingrese Link"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="bg-green-200 border-none font-bold w-full"
                  />
                </div>
                <div className="flex flex-wrap justify-content-center  mt-8">
                  <Button
                    label="Submit"
                    icon="pi pi-check"
                    loading={loading}
                    onClick={load}
                    className="btnSubmit"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </body>
      </LayoutDashboard>
    </>
  );
};

export default PerfilDoctores;
