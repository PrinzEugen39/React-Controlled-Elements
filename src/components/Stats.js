export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Everything is packed and ready to go ✈️"
          : `You have ${numItems === 0 ? `no` : numItems} items on your list${numPacked === 0
            ? ". 💼"
            : `, and you already packed ${numPacked} (${percentage}%) 💼`} `}
      </em>
    </footer>
  );
}
