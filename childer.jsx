function Child({ name, city, age, email, phone }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>City: {city}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}
 
export default Child;
 