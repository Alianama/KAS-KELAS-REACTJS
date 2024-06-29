import { useState, useEffect } from "react";
import {
  CFormInput,
  CForm,
  CCol,
  CFormLabel,
  CFormSelect,
  CButton,
} from "@coreui/react";
import fetchData from "./index.js";

function AddTransaction() {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const hh = String(today.getHours()).padStart(2, "0");
    const min = String(today.getMinutes()).padStart(2, "0");
    const ss = String(today.getSeconds()).padStart(2, "0");
    const todayFormatted = `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}`;
    setDate(todayFormatted);
  }, []);

  const handleSubmit = async () => {
    const data = {
      category,
      description,
      date_update: date,
      user,
      add_transaction: parseInt(amount, 10),
      withdraw_transaction: 0,
    };

    await fetchData(data);
    setCategory("");
    setDate(date);
    setUser("");
    setAmount("");
    setDescription("");
  };

  return (
    <CForm
      className="row mx-10 p-2  g-3 transition shadow-xl bg-0 rounded-setup"
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationDefault01"
          label="Nama lengkap"
          placeholder="Ali"
          value={user}
          required
          onChange={(e) => setUser(e.target.value)}
          size="sm"
        />
      </CCol>
      <CCol md={4}>
        <CFormInput
          type="text"
          id="validationDefault03"
          label="Descriptions"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          size="sm"
        />
      </CCol>
      <CCol md={4}>
        <CFormSelect
          id="validationDefault04"
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          size="sm"
        >
          <option value="" disabled>
            Choose...
          </option>
          <option value="Pembayaran KAS">Pembayaran KAS</option>
          <option value="Pembayaran Iuran">Pembayaran Iuran</option>
        </CFormSelect>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationDefaultUsername">Amount RP.</CFormLabel>

        <CFormInput
          type="text"
          id="validationDefaultUsername"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
          aria-describedby="inputGroupPrepend02"
          placeholder="50.000"
          required
          size="sm"
        />
      </CCol>
      <CCol md={3}>
        <CFormInput
          type="datetime-local"
          id="validationDefault05"
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          size="sm"
        />
      </CCol>
      <CCol xs={12}>
        <CButton className="bg-2 hover:bg-1 text-white" type="submit" size="sm">
          Masukan Kas
        </CButton>
      </CCol>
    </CForm>
  );
}

export default AddTransaction;
