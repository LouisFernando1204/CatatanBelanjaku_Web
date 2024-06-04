import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

// ini untuk testing mapping array nya, sekarang sudaah diganti pakai array kosongan mulai index ke-0
// const groceryItems = [
//   {
//     id: 1,
//     name: 'Kopi Bubuk',
//     quantity: 2,
//     checked: true,
//   },
//   {
//     id: 2,
//     name: 'Gula Pasir',
//     quantity: 5,
//     checked: false,
//   },
//   {
//     id: 3,
//     name: 'Air Mineral',
//     quantity: 3,
//     checked: false,
//   },
// ];

export default function App() {
  // untuk melempar isi item yang baru ditambah ke dalam Grocery List harus menggunakan konsep 'Lifting State Up' yang artinya harus menyiapkan variable untuk menyimpan item nya di parent nya baru lah dilempar ke komponen di dalamnya.
  // karena cara kerja props hanya bisa dilempar dr parents ke child tidak bisa siblings component/bersebelahan

  const [items, setItems] = useState([]);
  // console.log(items);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  // pakai filter dari higher order function untuk menghapus salah satu item yang dipilih
  // cara kerjanya yaitu hanya akan menjalankan/mencari kondisi sesuai yang ada di dalam parameter filter
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  // console.log(items);

  // ini menggunakan spread operator pada item (objek) untuk mengganti properti checked pada objek item yang dimapping
  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id) ? { ...item, checked: !item.checked } : item));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  );
}