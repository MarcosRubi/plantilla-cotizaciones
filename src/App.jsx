import SelectInput from "./utils/SelectInput";

import { DatePicker, Checkbox, Col, InputNumber, Space } from "antd";

import { useState } from "react";
import moment from "moment";
const { RangePicker } = DatePicker;

function App() {
  const [dates, setDates] = useState([]);
  const [date, setDate] = useState([]);
  const [optionsBag, setOptionsBag] = useState([]);
  const [countBag, setCountBag] = useState(1);
  const [isChecked, setIsChecked] = useState(true);

  console.log(dates);
  console.log(date);

  return (
    <>
      <div className="grid items-center min-h-screen mx-4">
        <div className="w-full max-w-[500px] p-4 border rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
          <form>
            <SelectInput
              title={"Aerolínea"}
              opciones={[
                "Avianca",
                "American Airlines",
                "Delta",
                "Volarís",
                "United",
              ]}
            />

            <label className="relative inline-flex items-center mt-8 cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => setIsChecked(!isChecked)}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Viaje sencillo
              </span>
            </label>

            <div className="relative z-0 w-full mt-2 mb-6 group">
              {isChecked ? (
                <RangePicker
                  className="min-w-full px-5 py-3 "
                  onChange={(dates, datesString) => {
                    setDates(
                      datesString.map((dateString) => {
                        return moment(dateString).format("DD-MMMM-YYYY");
                      })
                    );
                  }}
                />
              ) : (
                <DatePicker
                  className="min-w-[50%] px-5 py-3 "
                  onChange={(date, dateString) => {
                    setDate(moment(dateString).format("DD-MMMM-YYYY"));
                  }}
                />
              )}
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Origen
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Destino
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Hora de salida
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Hora de llegada
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Precio por adulto
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Precio por menor de edad
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                onChange={(options) => setOptionsBag(options)}
              >
                <Space
                  direction="vertical"
                  style={{
                    width: "100%",
                  }}
                >
                  <Col>
                    <Checkbox value="Objeto Personal" className="text-white">
                      Objeto Personal
                    </Checkbox>
                  </Col>
                  <Col>
                    <Checkbox
                      value="Maleta de mano"
                      className="my-2 text-white"
                    >
                      Maleta de mano
                    </Checkbox>
                  </Col>
                  <Space>
                    <Col className="flex items-center min-w-full">
                      <Checkbox value="Maleta de carga" className="text-white">
                        Maleta de carga
                      </Checkbox>
                      {optionsBag.some((option) =>
                        option.includes("Maleta de carga")
                      ) && (
                        <InputNumber
                          size="medium"
                          min={1}
                          max={10}
                          bordered={false}
                          className="bg-white hover:bg-white"
                          defaultValue={countBag}
                          onChange={(countBag) => setCountBag(countBag)}
                        />
                      )}
                    </Col>
                  </Space>
                </Space>
              </Checkbox.Group>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Copiar imagen
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
