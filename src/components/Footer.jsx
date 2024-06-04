export default function Footer({ items }) {
    // ngga perlu disimpan dalam state (const) karena tidak menerima inputan dari user, hanya statis saja untuk ditampilin saja.
  
    if (items.length === 0) {
      return <footer className="stats">
        Daftar belanjaan masih kosong!
      </footer>;
    }
    else {
      const totalItems = items.length;
      const checkedItems = items.filter((item) => item.checked === true).length;
      const percentageItems = Math.round((checkedItems / totalItems) * 100);
      // round untuk membulatkan biar ngga ada koma
  
      return <footer className="stats">
        Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentageItems}%)
      </footer>;
    }
  }