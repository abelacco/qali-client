import Navbar from "../Navbar/Navbar";
import { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { RadioButton } from "primereact/radiobutton";
import { Avatar } from "primereact/avatar";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { InputNumber } from 'primereact/inputnumber';
import instragram from "../../assets/instagram.png";
import linkedin from "../../assets/logotipo-de-linkedin (1).png";
import tiktok from "../../assets/tik-tok.png";
import { Button } from "primereact/button";
import "./filecss.css";

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
  const [selectedSeguro, setSelectedSeguro] = useState(null);
  const Seguro = [
    { name: "Si", code: "SI" },
    { name: "No", code: "NO" },
  ];

  const categories = [
    { name: "A Domicilio", key: "A" },
    { name: "Prescencial", key: "M" },
    { name: "Online", key: "P" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[1]);
  const numAfiliado = [
    { name: "Rimac", key: "RI" },
    { name: "Maphre", key: "MA" },
    { name: "Pacifico", key: "PA" },
    { name: "Otros", key: "OT" },
  ];
  const [selectedNumAfiliado, setSelectedNumAfiliado] = useState(
    numAfiliado[1]
  );
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
      <Navbar />
      <body className="flex">
        <div className="flex flex-col min-h-screen">
          <aside className="bg-blue-950 flex-grow  w-[132px] rounded">
            <h2 className="text-white">Side Bar</h2>
          </aside>
        </div>
        <div className="flex flex-grow justify-center">
          <form className="grid grid-cols-2 gap-40 ">
            <div className="flex flex-col mt-6 ml-11 gap-2 font-bold w-[30rem] ">
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
              <label htmlFor="profesion">Profesion</label>
              <MultiSelect
                value={selectedProfesion}
                onChange={(e) => setSelectedProfesion(e.value)}
                options={profesion}
                optionLabel="name"
                placeholder="Profesion"
                maxSelectedLabels={1}
                className="w-full md:w-20rem bg-green-200 border-none font-bold"
              />
              <label htmlFor="nombreDePerfil">Nombre de Perfil</label>
              <InputText
                id="nombreDePerfil"
                placeholder="LUCIADR85"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-green-200 border-none font-bold"
              />
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
              <label htmlFor="colegiatura">Codigo de Colegiatura</label>
              <MultiSelect
                value={selectedProfesion}
                onChange={(e) => setSelectedProfesion(e.value)}
                options={profesion}
                optionLabel="name"
                placeholder="Codigo de Colegiatura"
                maxSelectedLabels={1}
                className="w-full md:w-20rem bg-green-200 border-none font-bold"
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
              <div className="flex justify-center gap-6 mt-2">
                <div className="flex flex-col flex-grow">
                  <label htmlFor="Ciudad">Ciudad</label>
                  <MultiSelect
                    value={selectedProfesion}
                    onChange={(e) => setSelectedProfesion(e.value)}
                    options={profesion}
                    optionLabel="name"
                    placeholder="Ciudad"
                    maxSelectedLabels={1}
                    className="w-full md:w-20rem bg-green-200 border-none font-bold "
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <label htmlFor="Distrito">Distrito</label>
                  <MultiSelect
                    value={selectedProfesion}
                    onChange={(e) => setSelectedProfesion(e.value)}
                    options={profesion}
                    optionLabel="name"
                    placeholder="Distrito"
                    maxSelectedLabels={1}
                    className="w-full md:w-20rem bg-green-200 border-none font-bold "
                  />
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-2">
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
              </div>
            </div>
            <div className="flex flex-col mt-6 gap-2 font-bold w-[30rem]">
              <div className="flex justify-center mb-3">
                <Avatar
                  className="w-52 h-48"
                  image="https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7807.jpg?w=740&t=st=1685559315~exp=1685559915~hmac=2656fe85619448e1303afe4495e6839d7879a463f98228faf3a5dcf57c1fcaf7"
                />
              </div>

              <div className="flex flex-col gap-2 w-80">
                <Toast ref={toast}></Toast>
                <label htmlFor="curriculum">Curriculum Vitae</label>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="*/*"
                  maxFileSize={1000000}
                  onUpload={Upload}
                  chooseLabel="Seleccionar Archivo"
                />
                <label htmlFor="Titulo">Titulo de Especialidad</label>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="*/*"
                  maxFileSize={1000000}
                  onUpload={Upload}
                  chooseLabel="Seleccionar Archivo"
                />
                <label htmlFor="certificados">Otros Certificados</label>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="*/*"
                  maxFileSize={1000000}
                  onUpload={Upload}
                  chooseLabel="Seleccionar Archivo"
                />
                <label htmlFor="TituloCol">Titulo de Colegiatura</label>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="*/*"
                  maxFileSize={1000000}
                  onUpload={Upload}
                  chooseLabel="Seleccionar Archivo"
                />
                <label htmlFor="CertLic">Certificado de Licencia</label>
                <FileUpload
                  mode="basic"
                  name="demo[]"
                  url="/api/upload"
                  accept="*/*"
                  maxFileSize={1000000}
                  onUpload={Upload}
                  chooseLabel="Seleccionar Archivo"
                />
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
    </>
  );
};

export default PerfilDoctores;
