import { useState } from "react";

export default function Form({ onAddItem }) {
    // ini buat memunculkan option sebanyak 20 kali, dimana array dgn panjang 20 akan dilakukan spread/copy sehingga berisi undefined di setiap indeks kemudian bisa dimapping. 
    // kalau ngga diberis spread operators, maka ngga bisa dimapping
    const quantityNum = [...Array(20)].map((_, index) => (
        <option key={index + 1} value={index + 1}>{index + 1}</option>
    ));
    // console.log(quantityNum);
    // dibungkus jadi satu variable const biar tinggal dipanggil di dalam form

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [id, generateNewId] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        // ini digunakan untuk mematikkan fungsi defult ketika submit data untuk dikirimkan (biasanya ada simbol '?' setelah alamat web kita))
        // alert(name);
        // alert(quantity);
        // ini buat ngecek apa name dan quantity sudah berhasil terganti atau belum

        if (name === "") {
            return;
        }

        generateNewId(id + 1);
        // kurung kurawal menandakan pembuatan objek, kalau nama variabel const dan properties 
        const newItem = { name, quantity, checked: false, id: id };
        console.log(newItem);

        onAddItem(newItem);
        setQuantity(1);
        setName("");
    }

    // onSubmit dipakai agar ketika tekan enter di keyboard maka data bisa dikirimkan tanpa harus tekan button Tambah terlebih dahulu
    // kalau value nya diberi const name langsung, maka field input nya tidak bisa diisi/diketik jadi harus pakai onChange=""
    // e.target.value itu artinya mengambil nilai yang baru diinput user kemudian dimasukkan ke dalam const name
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {quantityNum}
                </select>
                <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button>Tambah</button>
        </form>
    );
}