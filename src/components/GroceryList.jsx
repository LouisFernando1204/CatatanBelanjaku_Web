import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {

    const [sortBy, setSortBy] = useState("input");
  
    // buat variable untuk array dengan 'let' karena nantinya aarraynya akan ditimpa/diganti sesuai dengan urutan yang dipilih
    let sortedItems;
  
    // ketiga kondisi if ini akan memodifikasi array lama (items)
    if (sortBy === "input") {
      sortedItems = items;
    }
  
    // kalau sort originalnya itu akan mutate/ngubah array aslinya juga jadi pke slice dulu baru di sort.
    if (sortBy === "name") {
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
  
    if (sortBy === "checked") {
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
    }
  
    return (
      // ini dibungkus oleh fragment
      <>
        <div className="list">
          <ul>
            {
              sortedItems.map((item) => (
                <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
              )
              )
            }
          </ul>
        </div>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
      </>
    );
  }