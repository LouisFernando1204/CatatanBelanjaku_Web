export default function Item({ item, index, onDeleteItem, onToggleItem }) {
    // kalau error es-lint, tambahkan rules di file .eslintrc.cjs sehingga setiap ada gangguan dengan es-lint ga muncul merah
    return (
        <li key={index}>
            <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
            <span style={item.checked ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.name}</span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li>
    );
}